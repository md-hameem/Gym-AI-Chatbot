from fastapi import FastAPI, Depends, HTTPException, status, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from passlib.context import CryptContext
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, EmailStr, Field, ValidationError
import subprocess
import re
import datetime

# Initialize FastAPI app
app = FastAPI()

# CORS middleware to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (for development)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB setup
MONGO_URI = "mongodb+srv://ai-chatbot:6cD881AT6VSKWKX8@ai-gym.zmvyspj.mongodb.net/?retryWrites=true&w=majority&appName=ai-gym"
client = AsyncIOMotorClient(MONGO_URI)
db = client.gym_ai_chatbot

# Security setup
SECRET_KEY = "your_secret_key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/token")

# Request Model
class ChatRequest(BaseModel):
    message: str

# User model
class User(BaseModel):
    username: str = Field(..., min_length=3, max_length=50, description="Name must be between 3 and 50 characters.")
    email: EmailStr
    date_of_birth: str
    age: int = Field(..., ge=0, le=120, description="Age must be between 0 and 120.")
    height: float = Field(..., gt=0, description="Height must be greater than 0.")
    weight: float = Field(..., gt=0, description="Weight must be greater than 0.")
    interest: str = Field(..., min_length=3, max_length=100, description="Interest must be between 3 and 100 characters.")
    password: str = Field(..., min_length=6, description="Password must be at least 6 characters long.")

# Helper functions
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: datetime.timedelta = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.datetime.utcnow() + expires_delta
    else:
        expire = datetime.datetime.utcnow() + datetime.timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def get_llama3_response(prompt: str) -> str:
    """ Runs the locally hosted LLaMA3 model and gets a response tailored for the Gym Assistant Chatbot """
    try:
        # System prompt instructing the model to act as a Gym Assistant Chatbot
        system_prompt = (
            "You are a Gym Assistant Chatbot designed specifically for our project. "
            "Our project is the Zhengzhou University Gym, which offers a variety of memberships and services. "
            "Membership options include a 1-day free pass, a 1-week pass for $1000, and a 1-month pass for $3000. "
            "We provide services such as yoga, cardio, strength training, and boxing. "
            "You can assist with gym-related queries, provide information about exercises, and answer questions about memberships and services. "
            "If a user asks to talk to a person or wants to open a membership, respond with: 'You can talk with this gym's manager Ishfar.' "
            "If a question is unrelated to gym topics, respond with: 'I'm sorry, but I can only help with gym-related inquiries.'\n\n"
            "User: " + prompt + "\nAI:"
        )

        # Run the LLaMA3 model with the system prompt
        result = subprocess.run(
            ["ollama", "run", "llama3", system_prompt],
            capture_output=True,
            text=True
        )

        # Check if the response is valid
        if result.returncode == 0:
            raw_response = result.stdout.strip()

            # Remove <think> tags and their content
            cleaned_response = re.sub(r"<think>.*?</think>", "", raw_response, flags=re.DOTALL).strip()

            return cleaned_response
        else:
            return f"Error: {result.stderr.strip()}"
    except Exception as e:
        return f"Error: {str(e)}"

@app.get("/")
def read_root():
    return {"message": "Welcome to the Gym Landing Backend!"}

@app.post("/chat")
async def chat(request: ChatRequest):
    user_message = request.message
    bot_response = get_llama3_response(user_message)

    # List of gym-specific keywords
    gym_keywords = ["membership", "pricing", "workout", "gym", "customer service", 
                    "subscription", "classes", "training", "exercise", "fitness"]

    # If response does not contain relevant words, return a default message
    if not any(keyword in bot_response.lower() for keyword in gym_keywords):
        bot_response = "I'm sorry, but I can only help with gym-related inquiries."

    return {"response": bot_response}

@app.post("/register")
async def register(user: User, request: Request):
    try:
        raw_body = await request.body()
        print("Raw request body:", raw_body.decode("utf-8"))  # Debugging log
        # Parse the user dict and ensure correct types
        user_dict = user.dict()
        user_dict["age"] = int(user_dict["age"])
        user_dict["height"] = float(user_dict["height"])
        user_dict["weight"] = float(user_dict["weight"])
        existing_user = await db.users.find_one({"email": user.email})
        if existing_user:
            print("Email already registered:", user.email)  # Debugging log
            raise HTTPException(status_code=400, detail="Email already registered")
        hashed_password = get_password_hash(user.password)
        user_dict["password"] = hashed_password
        await db.users.insert_one(user_dict)
        print("User registered successfully:", user.email)  # Debugging log
        return {"message": "User registered successfully"}
    except ValidationError as ve:
        print("Validation error:", ve.errors())  # Log validation errors
        raise HTTPException(status_code=422, detail=ve.errors())
    except Exception as e:
        print("Error during registration:", str(e))  # Debugging log
        raise HTTPException(status_code=500, detail="An error occurred during registration")

@app.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = await db.users.find_one({"username": form_data.username})
    if not user or not verify_password(form_data.password, user["password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )

    access_token_expires = datetime.timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user["username"]}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/profile")
async def read_profile(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username = payload.get("sub")
        if username is None:
            raise HTTPException(status_code=401, detail="Invalid token")
        user = await db.users.find_one({"username": username})
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        # Remove sensitive fields before returning
        user.pop("_id", None)
        user.pop("password", None)
        return user
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")