import React from 'react'
import "../../index.css"

const Works = () => {
  return (
   
<section className="py-6 px-4">
  <div className="text-center">
    <div className="text-sm font-medium uppercase text-(--amber) mb-2">Simple Process</div>
    <h2 className='font-[Fraunces] text-[clamp(2rem,4vw,3rem)] font-black '>From skill to launch in 4 steps</h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-2 relative before:content-[''] before:absolute before:top-8 before:left-[10%] before:right-[10%] before:h-px before:bg-[repeating-linear-gradient(90deg, var(--amber)_0,var(--amber)_6px,transparent_14px)] ">
    <div className="text-center py-2 px-1 relative">
      <div className="step-num w-12 h-12 rounded-full bg-(--cream) border-2 border-(--amber) border-solid flex justify-center items-center font-fraunces font text-xl text-(--amber) relative z-10 ">01</div>
      <h4>Take the Skills Quiz</h4>
      <p>Tell us what you're good at and what you love doing - takes under 5 minutes.</p>
    </div>
    <div class="step">
      <div className="step-num w-12 h-12 rounded-full bg-(--cream) border-2 border-(--amber) border-solid flex justify-center items-center font-fraunces font text-xl text-(--amber) relative z-10 ">02</div>
      <h4>Get Matched to Ideas</h4>
      <p>We surface personalized micro-business ideas ranked by your skill fit.</p>
    </div>
    <div class="step">
      <div className="step-num w-12 h-12 rounded-full bg-(--cream) border-2 border-(--amber) border-solid flex justify-center items-center font-fraunces font text-xl text-(--amber) relative z-10 ">03</div>
      <h4>Follow Your Roadmap</h4>
      <p>Step-by-step checklists cover planning, legal setup, costs, and marketing.</p>
    </div>
    <div class="step">
      <div className="step-num w-12 h-12 rounded-full bg-(--cream) border-2 border-(--amber) border-solid flex justify-center items-center font-fraunces font text-xl text-(--amber) relative z-10 ">04</div>
      <h4>Connect with a Mentor</h4>
      <p>Get unstuck with real expert guidance whenever you need it.</p>
    </div>
  </div>
</section>
  )
}

export default Works