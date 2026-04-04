# 🚀 SkillHub - Full Stack Platform

SkillHub is a full-stack web application that helps users connect with mentors, explore learning resources, book sessions, and track their progress.

--------------------------------------------------

🌐 Live Demo

Frontend: https://skillhub-shrwn.netlify.app/  
Backend API: https://backend-skillhub.onrender.com/  

--------------------------------------------------

🔗 Repositories

Backend: https://github.com/shrwn08/backend-skillhub.git  
Frontend: https://github.com/shrwn08/skill_hub.git  

--------------------------------------------------

🏗️ Tech Stack

Frontend:
- React.js
- Vite
- Redux Toolkit
- React Router
- Axios

Backend:
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

--------------------------------------------------

📁 Project Structure

Backend:

backend-skillhub/
  src/
    DB/
    controllers/
    middlewares/
    models/
    routes/
    index.js

Frontend:

skill_hub/
  src/
    api/
    app/
    components/
    features/
    hooks/
    pages/
    data/
    App.jsx
    main.jsx

--------------------------------------------------

⚙️ Installation & Setup

1. Clone both repositories:

git clone https://github.com/shrwn08/backend-skillhub.git
git clone https://github.com/shrwn08/skill_hub.git

--------------------------------------------------

2. Setup Backend:

cd backend-skillhub
npm install

Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run backend:

npm start

For development:

npm run dev

--------------------------------------------------

3. Setup Frontend:

cd skill_hub
npm install
npm run dev

App runs at:
http://localhost:5173

--------------------------------------------------

🔗 API Configuration

Update API base URL in:

src/api/client.js

Example:

const API = axios.create({
  baseURL: "https://backend-skillhub.onrender.com/",
});

--------------------------------------------------

📡 API Endpoints

Auth:
- POST /api/auth/register
- POST /api/auth/login

User:
- GET /api/user/profile

Mentors:
- GET /api/mentors
- POST /api/mentors

Sessions:
- GET /api/sessions
- POST /api/sessions

Resources:
- GET /api/resources

Ideas:
- GET /api/ideas
- POST /api/ideas

Bookmarks:
- GET /api/bookmarks
- POST /api/bookmarks

Progress:
- GET /api/progress

Contact:
- POST /api/contact

--------------------------------------------------

🔐 Authentication

Use JWT token in headers:

Authorization: Bearer <token>

--------------------------------------------------

✨ Features

- User authentication & authorization
- Mentor browsing & booking
- Learning resources
- Idea sharing system
- Bookmark system
- Progress tracking dashboard
- Responsive UI

--------------------------------------------------

🧠 State Management

Redux Toolkit slices:
- auth
- mentors
- sessions
- bookmarks
- ideas
- progress

--------------------------------------------------

🛠️ Future Improvements

- Payment integration
- Real-time chat
- Notifications
- Dark mode
- Admin dashboard

--------------------------------------------------

🚀 Deployment

Frontend: Netlify  
Backend: Render  
Database: MongoDB Atlas  

--------------------------------------------------

👨‍💻 Author

Shrawan Singh

