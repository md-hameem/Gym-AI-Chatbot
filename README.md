# Gym Landing Project

This repository contains the code for the Gym Landing project, a web application for Zhengzhou University Gym. The project includes a frontend built with Next.js and a backend powered by FastAPI.

## Features

- **Frontend**: React.js, Next.js, and SCSS for styling.
- **Backend**: FastAPI with a chatbot powered by the LLaMA3 model.
- **AI Chatbot**: Provides gym-related assistance.
- **Responsive Design**: Optimized for various devices.

## Project Structure

```
LICENSE
backend/
    main.py
frontend/
    components/
    pages/
    public/
    styles/
```

## Getting Started

### Prerequisites

- Node.js and npm
- Python 3.9+

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/gym-landing.git
   cd gym-landing
   ```

2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd ../backend
   pip install -r requirements.txt
   ```

### Running the Application

#### Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

#### Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Start the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```

3. Access the API at [http://localhost:8000](http://localhost:8000).

## Deployment

Follow the Next.js and FastAPI deployment guides to deploy the application.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Contact

For inquiries, contact Ishfar Bin Rashid at ishfar@gmail.com.