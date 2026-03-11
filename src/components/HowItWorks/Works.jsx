import React from "react";
import "../../index.css";

const Works = () => {
  return (
    <section className="py-6 px-4">
      <div className="text-center">
        <div className="text-sm font-medium uppercase text-[var(--amber)] mb-2">
          Simple Process
        </div>

        <h2 className="font-[Fraunces] text-[clamp(2rem,4vw,3rem)] font-black">
          From skill to launch in 4 steps
        </h2>
      </div>

      {/* Steps Container */}
      <div
        className="
        grid grid-cols-1 md:grid-cols-4 gap-6 relative mt-10
        
        before:content-['']
        before:absolute
        
        before:left-1/2
        before:-translate-x-1/2
        before:top-0
        before:bottom-0
        before:w-0.5
        
        before:bg-[repeating-linear-gradient(180deg,var(--amber)_0,var(--amber)_6px,transparent_6px,transparent_14px)]
        
        md:before:top-8
        md:before:left-[10%]
        md:before:right-[10%]
        md:before:h-px
        md:before:w-auto
        md:before:translate-x-0
        md:before:bg-[repeating-linear-gradient(90deg,var(--amber)_0,var(--amber)_6px,transparent_6px,transparent_14px)]
      "
      >
        {/* Step 1 */}
        <div className="h-60 w-full max-w-60 mx-auto py-2 px-1 flex flex-col justify-center items-center relative">
          <div className="w-12 h-12 rounded-full bg-(--cream) border-2 border-(--amber) flex justify-center items-center font-[Fraunces] text-xl text-(--amber) relative z-10">
            01
          </div>
            <div className="text-center bg-(--cream)">
          <h4 className="text-base font-normal mb-1">Take the Skills Quiz</h4>

          <p className="text-sm text-center opacity-60">
            Tell us what you're good at and what you love doing — takes under 5
            minutes.
          </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="h-60 w-full max-w-60 mx-auto py-2 px-1 flex flex-col justify-center items-center relative">
          <div className="w-12 h-12 rounded-full bg-(--cream) border-2 border-(--amber) flex justify-center items-center font-[Fraunces] text-xl text-(--amber) relative z-10">
            02
          </div>
            <div className="text-center bg-(--cream)">
          <h4 className="text-base font-normal mb-1">Get Matched to Ideas</h4>

          <p className="text-sm text-center opacity-60">
            We surface personalized micro-business ideas ranked by your skill
            fit.
          </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="h-60 w-full max-w-60 mx-auto py-2 px-1 flex flex-col justify-center items-center relative">
          <div className="w-12 h-12 rounded-full bg-(--cream) border-2 border-(--amber) flex justify-center items-center font-[Fraunces] text-xl text-(--amber) relative z-10">
            03
          </div>
<div className="text-center bg-(--cream)">
          <h4 className="text-base font-normal mb-1">Follow Your Roadmap</h4>

          <p className="text-sm text-center opacity-60">
            Step-by-step checklists cover planning, legal setup, costs, and
            marketing.
          </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="h-60 w-full max-w-60 mx-auto py-2 px-1 flex flex-col justify-center items-center relative  ">
          <div className="w-12 h-12 rounded-full bg-(--cream) border-2 border-(--amber) flex justify-center items-center font-[Fraunces] text-xl text-(--amber) relative z-10">
            04
          </div>
            <div className="text-center bg-(--cream)">
          <h4 className="text-base font-normal mb-1">Connect with a Mentor</h4>

          <p className="text-sm text-center opacity-60">
            Get unstuck with real expert guidance whenever you need it.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;