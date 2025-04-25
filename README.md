# Gym Landing Project

This repository contains the code for the Gym Landing project, a web application for Zhengzhou University Gym. The project includes a frontend built with Next.js and a backend powered by FastAPI.

## Features

- **Frontend**: Built with React.js, Next.js, and SCSS for modular styling.
- **Backend**: Developed using FastAPI, featuring a chatbot powered by the LLaMA3 model.
- **AI Chatbot**: Provides gym-related assistance, including membership details and exercise guidance.
- **Responsive Design**: Optimized for various devices, ensuring a seamless user experience.
- **Dynamic Routing**: Utilizes Next.js capabilities for user-friendly URLs.
- **Component-Based Architecture**: Reusable components for maintainability and scalability.

## Project Structure

```
LICENSE
project_analysis.txt
backend/
    main.py
frontend/
    components/
    pages/
    public/
    styles/
```

### Backend
- **API Endpoints**:
  - `/`: Root endpoint for server status.
  - `/chat`: Handles user interactions with the AI chatbot.
- **Technologies**: Python, FastAPI, LLaMA3 model.
- **Middleware**: CORS middleware for cross-origin requests.

### Frontend
- **Technologies**: React.js, Next.js, SCSS.
- **Key Pages**:
  - `index.jsx`: Homepage showcasing gym services and features.
  - `ai-chatbot.jsx`: Dedicated page for interacting with the AI chatbot.
  - `about.jsx`: Information about the gym and its founder.
- **Reusable Components**: Includes navigation menus, spinners, and section-specific components.

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

- **Frontend**: Deployable on platforms like Vercel.
- **Backend**: Can be hosted on any server supporting Python and FastAPI.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Contact

For inquiries, contact Ishfar Bin Rashid at ishfar@gmail.com.