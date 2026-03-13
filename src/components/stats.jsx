import React from "react";

const Stats = () => {
  return (
    <div className="bg-(--soil) text-(--cream) grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-10 lg:px-16 py-12 text-center">

      <div>
        <h3 className="font-[Fraunces] text-3xl md:text-4xl text-(--gold)">2400+</h3>
        <p className="text-sm opacity-60">Entrepreneurs enrolled</p>
      </div>

      <div>
        <h3 className="font-[Fraunces] text-3xl md:text-4xl text-(--gold)">180+</h3>
        <p className="text-sm opacity-60">Verified mentors</p>
      </div>

      <div>
        <h3 className="font-[Fraunces] text-3xl md:text-4xl text-(--gold)">60+</h3>
        <p className="text-sm opacity-60">Business templates</p>
      </div>

      <div>
        <h3 className="font-[Fraunces] text-3xl md:text-4xl text-(--gold)">92%</h3>
        <p className="text-sm opacity-60">Completion rate</p>
      </div>

    </div>
  )
}

export default Stats;