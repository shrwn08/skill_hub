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
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser, selectIsLoggedIn } from "./features/auth/authSlice";
import IdeaDetail from "./pages/idea/IdeaDetail";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sessions from "./pages/Sessions/Sessions";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import Profile from "./pages/Profile.jsx/Profile";
import MentorApply from "./pages/MentorApply/MentorApply";
import Contact from "./pages/Contact/Contact";

function AppBootstrap({ children }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(()=>{
    if(isLoggedIn)
      dispatch(fetchCurrentUser());
  },[dispatch, isLoggedIn ]);

  return children;
}

function App() {
  return (
    <Router>
      <AppBootstrap>
        <Navbar />
        <Routes>
          {/*Public*/}
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/business-ideas" element={<BusinessIdeas />} />
          <Route path="/idea/:id"       element={<IdeaDetail />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact"        element={<Contact />} />

          {/**Auth */}
          <Route path="/login" element={<Auth />} />
          <Route path="/signup" element={<Auth />} />


          {/**Protected */}
          <Route path="/dashboard"    element={<Dashboard />} />
              <Route path="/sessions"     element={<Sessions />} />
              <Route path="/bookmarks"    element={<Bookmarks />} />
              <Route path="/profile"      element={<Profile />} />
              <Route path="/mentor-apply" element={<MentorApply />} />
        </Routes>
        <Footer />
      </AppBootstrap>
    </Router>
  );
}

export default App;
