from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import subprocess
import re

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

# Request Model
class ChatRequest(BaseModel):
    message: str

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