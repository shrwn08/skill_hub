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
    <div className="py-2 px-1 flex flex-col justify-center items-center relative">
      <div className="step-num w-12 h-12 rounded-full bg-(--cream) border-2 border-(--amber) border-solid flex justify-center items-center font-fraunces font text-xl text-(--amber) relative z-10 ">01</div>
      <h4 className="font-base font-normal mb-1">Take the Skills Quiz</h4>
      <p className="text-sm opacity-[0.6] ">Tell us what you're good at and what you love doing - takes under 5 minutes.</p>
    </div>
    <div className="py-2 px-1 flex flex-col justify-center items-center relative">
      <div className="step-num w-12 h-12 rounded-full bg-(--cream) border-2 border-(--amber) border-solid flex justify-center items-center font-fraunces font text-xl text-(--amber) relative z-10 ">02</div>
      <h4 className="font-base font-normal mb-1">Get Matched to Ideas</h4>
      <p className="text-sm opacity-[0.6] ">We surface personalized micro-business ideas ranked by your skill fit.</p>
    </div>
    <div className="py-2 px-1 flex flex-col justify-center items-center relative">
      <div className="step-num w-12 h-12 rounded-full bg-(--cream) border-2 border-(--amber) border-solid flex justify-center items-center font-fraunces font text-xl text-(--amber) relative z-10 ">03</div>
      <h4 className="font-base font-normal mb-1">Follow Your Roadmap</h4>
      <p className="text-sm opacity-[0.6] ">Step-by-step checklists cover planning, legal setup, costs, and marketing.</p>
    </div>
    <div className="py-2 px-1 flex flex-col justify-center items-center relative">
      <div className="step-num w-12 h-12 rounded-full bg-(--cream) border-2 border-(--amber) border-solid flex justify-center items-center font-fraunces font text-xl text-(--amber) relative z-10 ">04</div>
      <h4 className="font-base font-normal mb-1">Connect with a Mentor</h4>
      <p className="text-sm opacity-[0.6] ">Get unstuck with real expert guidance whenever you need it.</p>
    </div>
  </div>
</section>
  )
}

export default Works