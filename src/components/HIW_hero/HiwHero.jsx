import React from 'react'
import "./hiwhero.css"
const HiwHero = () => {
  return (
      <div className="page-hero pt-20 pb-16 px-16 bg-[linear-gradient(135deg, var(--cream) 0%, var(--light) 60%)] border-b border-b-solid border-b-[rgba(44,24,16,0.06)] relative overflow-hidden">
    <div className="eyebrow inline-block bg-[rgba(212,128,10,0.12)] text-(--amber) text-xs font-medium uppercase py-[0.35rem] px-[0.9rem] rounded-2xl mb-6">🗺 Step-by-step process</div>
    <h1 className='font-[Fraunces] text-[clamp(2.2rem,4vw,3.5rem)] font-black  tracking-[-0.02rem]'>From skill to <em className="text-italic text-(--ameber) font-300">launch</em>,<br/>guided every step</h1>
    <p className='text-base leading-[1.75] opacity-[0.65] max-w-600px'>EntreSkill Hub takes the guesswork out of starting a micro-business. Here's exactly how our platform works — from your very first quiz to your first paying customer.</p>
  </div>
  )
}

export default HiwHero