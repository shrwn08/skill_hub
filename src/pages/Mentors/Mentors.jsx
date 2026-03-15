import React from "react";
import MentorCard from "../components/MentorCard";
import MentorCTA from "../components/MentorCTA";
import { mentors } from "../data/mentors";

const Mentors = () => {
  return (
    <div className="pt-24 bg-(--light) text-(--soil)">

      {/* HERO */}
      <section className="px-6 md:px-10 lg:px-16 pb-12 pt-8 bg-linear-to-br from-(--cream) to-(--light) border-b border-black/5">

        <div className="inline-block bg-[rgba(212,128,10,0.12)] text-(--amber) text-xs px-4 py-1 rounded-full mb-4 uppercase tracking-wider">
          🤝 180+ verified experts
        </div>

        <h1 className="font-[Fraunces] text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 max-w-xl">
          Learn from people who've{" "}
          <em className="italic text-(--amber) font-light">done</em> it
        </h1>

        <p className="max-w-xl opacity-70 text-base md:text-lg">
          Every mentor on EntreSkill Hub is verified with real hands-on experience.
          Browse by expertise, check availability, and book a session in minutes.
        </p>

      </section>

      {/* TRUST BAR */}
      <div className="flex flex-wrap gap-6 md:gap-10 lg:gap-12 px-6 md:px-10 lg:px-16 py-6 border-b border-black/5 bg-white text-sm opacity-70">

        <div>
          <strong className="text-(--amber) text-base">180+</strong> Verified mentors
        </div>

        <div>
          <strong className="text-(--amber) text-base">4.8★</strong> Average rating
        </div>

        <div>
          <strong className="text-(--amber) text-base">1,200+</strong> Sessions completed
        </div>

        <div>
          <strong className="text-(--amber) text-base">100%</strong> Credential-checked
        </div>

      </div>

      {/* FILTER BAR */}
      <div className="flex flex-wrap items-center gap-2 px-6 md:px-10 lg:px-16 py-6 border-b border-black/5">

        <button className="px-4 py-1.5 rounded-full bg-(--soil) text-(--cream) text-sm">
          All Mentors
        </button>

        <button className="px-4 py-1.5 rounded-full border text-sm">
          🧵 Crafts & Fashion
        </button>

        <button className="px-4 py-1.5 rounded-full border text-sm">
          🍳 Food Business
        </button>

        <button className="px-4 py-1.5 rounded-full border text-sm">
          📱 Digital & Tech
        </button>

        <button className="px-4 py-1.5 rounded-full border text-sm">
          📊 Finance & Legal
        </button>

        <button className="px-4 py-1.5 rounded-full border text-sm">
          🌿 Agriculture
        </button>

        {/* SEARCH */}
        <div className="w-full sm:w-auto sm:ml-auto relative mt-3 sm:mt-0">

          <span className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40">
            🔍
          </span>

          <input
            type="text"
            placeholder="Search mentors…"
            className="w-full sm:w-64 pl-8 pr-4 py-1.5 border rounded-full text-sm"
          />

        </div>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-10 lg:px-16 py-12">

        {mentors.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}

      </div>

      <MentorCTA />

    </div>
  );
};

export default Mentors;