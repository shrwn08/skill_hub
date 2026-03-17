import React from 'react'
import Navbar from './components/Navbar'

import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HowItWorks from "./pages/howItWork/HowItWork";
import BusinessIdeas from './pages/idea/BusinessIdea';
import Mentors from './pages/Mentors/Mentors';
import Resources from './pages/Resources/Resources';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/business-ideas" element={<BusinessIdeas />} />
         <Route path="/mentors" element={<Mentors />} />
           <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;