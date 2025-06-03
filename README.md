# Gym Services - AI Chatbot and many more

This repository contains the code for the Gym Landing project, a web application for Zhengzhou University Gym. The project includes a frontend built with Next.js and a backend powered by FastAPI.

## Features

- **Frontend**: Built with React.js, Next.js, and SCSS for modular styling.
- **Backend**: Developed using FastAPI, featuring a chatbot powered by the LLaMA3 model.
- **AI Chatbot**: Provides gym-related assistance, including membership details and exercise guidance.
- **Booking System**: Book gym classes and manage your schedule.
- **Fitness Dashboard**: Track your daily and weekly fitness progress.
- **AI Workout Plans**: Generate personalized workout routines.
- **Nutrition Plans**: Get meal and nutrition recommendations.
- **Authentication**: Secure login and registration for users.
- **Profile Management**: View and manage your bookings and personal info.
- **Responsive Design**: Optimized for all devices.
- **Dynamic Routing**: User-friendly URLs via Next.js.
- **Component-Based Architecture**: Reusable components for maintainability and scalability.

## Project Structure

```
LICENSE
project_analysis.txt
backend/
    main.py
    requirements.txt
frontend/
    components/
        Menu.jsx
        spinner.jsx
        bton.jsx
        btonTop.jsx
        chevron.js
        logo.js
        logoFull.js
        seccion/
            Inicio.jsx
            Ofertas.jsx
            Planes.jsx
            Instructores.jsx
            Imc.jsx
            Contacto.jsx
            about.jsx
    pages/
        _app.js
        index.jsx
        ai-chatbot.jsx
        ai-workout-plans.jsx
        booking.jsx
        fitness-dashboard.jsx
        nutrition-plans.jsx
        profile.jsx
        login.jsx
        register.jsx
        about.jsx
        api/
            hello.js
    public/
        ico.svg
        hamim.jpg
        ishfar.jpg
        imgGym/
            imc.jpg
            inicio.jpg
            logo.png
            man.png
            woman.png
        imgTeam/
            trainer1.jpg
            trainer2.jpg
            trainer3.jpg
            trainer4.jpg
        videosGym/
            boxeo.mp4
            cardio.mp4
            fuerza.mp4
            yoga.mp4
    styles/
        about.module.scss
        aiWorkoutPlans.module.scss
        booking.module.scss
        btonTop.module.scss
        chatbot.module.scss
        contacto.module.scss
        fitnessDashboard.module.scss
        globals.css
        imc.module.scss
        inicio.module.scss
        Instructores.module.scss
        login.module.scss
        menu.module.scss
        nutritionPlans.module.scss
        ofertas.module.scss
        planes.module.scss
        profile.module.scss
        register.module.scss
        spinner.module.scss
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
  - `index.jsx`: Homepage with gym services, plans, instructors, and contact.
  - `ai-chatbot.jsx`: Chat with the AI-powered gym assistant.
  - `ai-workout-plans.jsx`: Get AI-generated workout plans.
  - `nutrition-plans.jsx`: Personalized meal and nutrition plans.
  - `booking.jsx`: Book gym classes.
  - `fitness-dashboard.jsx`: Track fitness progress and activity.
  - `profile.jsx`: Manage bookings and view user info.
  - `login.jsx` & `register.jsx`: User authentication.
  - `about.jsx`: Info about the gym and founder.
- **Reusable Components**: Navigation menu, spinner, scroll-to-top button, modular homepage sections, and utility components (`bton.jsx`, `chevron.js`, `logo.js`, `logoFull.js`).
- **Media Assets**: Images (`hamim.jpg`, `ishfar.jpg`, `imgGym/`, `imgTeam/`), and videos (`videosGym/`).
- **Styling**: Each page/component has a corresponding SCSS module in `styles/` for modular and maintainable styling.

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

For inquiries, contact Ishfar Bin Rashid at hamimmd555@gmail.com.