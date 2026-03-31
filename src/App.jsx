import React, { useEffect } from "react";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HowItWorks from "./pages/howItWork/HowItWork";
import BusinessIdeas from "./pages/idea/BusinessIdea";
import Mentors from "./pages/Mentors/Mentors";
import Resources from "./pages/Resources/Resources";
import Auth from "./pages/Auth/Auth";
// import { useDispatch, useSelector } from 'react-redux';
// import { selectIsLoggedIn } from './features/auth/authSlice';

// function AppBootstrap ({children}){
//   const dispatch = useDispatch();
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   useEffect(()=>{
//     const token = localStorage.getItem("token");

//     if(token)
//       dispatch()
//   },[])
// }

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/*Public*/}
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/business-ideas" element={<BusinessIdeas />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/resources" element={<Resources />} />

        {/**Auth */}
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
