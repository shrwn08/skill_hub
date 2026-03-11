import React from 'react'

const Stats = () => {
  return (
    <div class="stats-bar bg-(--soil) text-(--cream) min-h-36 py-3 px-4 grid justify-center items-center md:grid-cols-4 gap-2 text-center">
  <div class="stat">
    <h3 className="font-[Fraunces] text-4xl font-black text-(--gold)">2,400+</h3>
    <p className="font-sm opacity-[0.6] mt-[0.3rem]">Entrepreneurs enrolled</p>
  </div>
  <div class="stat">
    <h3 className="font-[Fraunces] text-4xl font-black text-(--gold)">180+</h3>
    <p className="font-sm opacity-[0.6] mt-[0.3rem]">Verified mentors</p>
  </div>
  <div class="stat">
    <h3 className="font-[Fraunces] text-4xl font-black text-(--gold)">60+</h3>
    <p className="font-sm opacity-[0.6] mt-[0.3rem]">Business idea templates</p>
  </div>
  <div class="stat">
    <h3 className="font-[Fraunces] text-4xl font-black text-(--gold)">92%</h3>
    <p className="font-sm opacity-[0.6] mt-[0.3rem]">Completion rate on roadmaps</p>
  </div>
</div>
  )
}

export default Stats