# SkillHub Frontend

🔗 Repository: https://github.com/shrwn08/skill_hub.git

This is the frontend of the SkillHub platform, built using React and Vite. It provides a modern UI for users to explore mentors, resources, sessions, and ideas.

## 🚀 Tech Stack

- React.js
- Vite
- Redux Toolkit
- React Router
- Axios

## 📁 Project Structure

src/
│── api/               
│── app/               
│── components/        
│── features/          
│── hooks/             
│── pages/             
│── data/              
│── App.jsx            
│── main.jsx           

## ⚙️ Installation

git clone https://github.com/shrwn08/skill_hub.git
cd skill_hub
npm install

## ▶️ Run App

npm run dev

App runs at:
http://localhost:5173

## 🔗 API Configuration

Update base URL in:

src/api/client.js

Example:

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

## 📱 Pages

- Home  
- Dashboard  
- Mentors  
- Sessions  
- Resources  
- Ideas  
- Bookmarks  
- Profile  
- Contact  
- Authentication  

## 🔐 Authentication

- JWT-based login/signup  
- Stored in Redux  
- Protected routes  

## 📦 Features

- Mentor browsing & booking  
- Resource exploration  
- Idea system  
- Bookmark system  
- Progress tracking  
- Responsive UI  

## 🧠 State Management

Redux Toolkit slices:
- auth  
- mentors  
- sessions  
- bookmarks  
- ideas  
- progress  

## 🛠️ Future Improvements

- Dark mode  
- Real-time chat  
- Notifications  

## 👨‍💻 Author

Shrawan Singh