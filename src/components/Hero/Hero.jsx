import React from "react";
import "../../App.css"
const Hero = () => {
  return (
    <div className="w-full md:pl-8 min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-4">
      <div>
        <span className="inline-block bg-[rgba(212,128,10,0.1)] w-68  px-4 py-1 text-[#D4800A] rounded-full font-[Fraunces] font-semibold text-normal">
          🌱 For Aspiring Entrepreneurs
        </span>
        <h1 className="font-[Fraunces] text-8xl font-black mb-2">
          Turn Your Skills Into a{" "}
          <em className="font-italic text-[#D4800A] font-bold">Thriving</em>{" "}
          Business
        </h1>

        <p className="inline-block text-lg font-meduim uppercase px-1 py-0.5 border-4xl opacity-[0.7] max-w-120 mb-2">
          Take our quick skills quiz, get matched with personalized
          micro-business ideas, and follow step-by-step roadmaps - all with
          mentor support along the way.
        </p>
        <div className="flex gap-3">
          <button className="bg-[#2C1810] w-52 text-[#FAF3E0] px-6 py-6 rounded-full text-base font-medium inline-flex  gap-1 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Start Free → Take the Quiz
          </button>
          <button className="text-[#2C1810] w-44 py-2 px-3 text-xl font-normal flex items-center gap-2 transition-opacity duration-200 hover:opacity-70">
            See how it works ↓
          </button>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center gap-8">
        <div className="w-96 md:w-108 h-36 bg-white rounded-3xl p-8 flex justify-between items-center gap-2 shadow-[0_4px_32px_rgba(44,24,16,0.08)] hover:shadow-[0_8px_40px_rgba(44,24,16,0.15)] " style={{"animation": "floatA 4s ease-in-out infinite"}}>
          <div className="w-12 h-12 bg-[rgba(212,128,10,0.1)] flex justify-center items-center rounded-full">🧵</div>
          <div>
            <h4 className="text-base mb-2 font-semibold">Custom Embroidery Boutique</h4>
            <p className="text-sm ">Matched to your sewing skills</p>
          </div>
          <span className="bg-[rgba(212,128,10,0.1)] w-28 rounded-2xl px-3 py-1 text-[#D4800A]">98% match</span>
        </div>

        <div className="md:ml-24 w-96 md:w-108 h-36 bg-white rounded-3xl p-8 flex justify-between items-center gap-2 shadow-[0_4px_32px_rgba(44,24,16,0.08)] hover:shadow-[0_8px_40px_rgba(44,24,16,0.15)] " style={{"animation": "floatA 4s ease-in-out infinite"}}>
          <div className="w-12 h-12 bg-[rgba(212,128,10,0.1)] flex justify-center items-center rounded-full">🍳</div>
          <div>
            <h4 className="text-base mb-2 font-semibold">Organic Home Chef Services</h4>
            <p className="text-sm ">Matches cooking + nutrition</p>
          </div>
          <span className="bg-[rgba(212,128,10,0.1)] w-28 rounded-2xl px-3 py-1 text-[#5C7A5C]">94% match</span>
        </div>

        <div  className="w-96 md:w-108 h-36 bg-white rounded-3xl p-8 flex justify-between items-center gap-2 shadow-[0_4px_32px_rgba(44,24,16,0.08)] hover:shadow-[0_8px_40px_rgba(44,24,16,0.15)] " style={{"animation": "floatA 4s ease-in-out infinite"}}>
          <div className="w-12 h-12 bg-[rgba(212,128,10,0.1)] flex justify-center items-center rounded-full">📱</div>
          <div>
            <h4 className="text-base mb-2 font-semibold">Social Media for Local Shops</h4>
            <p className="text-sm ">Uses your tech & creativity</p>
          </div>
          <span className="bg-[rgba(212,128,10,0.1)] w-28 rounded-2xl px-3 py-1 text-[#C44B2B]">89% match</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
