import { useState } from "react";
import IdeaCard from "../components/IdeaCard";
import FilterBar from "../components/FilterBar";
import { ideas } from "../data/ideas";

 const BusinessIdeas = () => {
  const [filter, setFilter] = useState("all");

  const filteredIdeas =
    filter === "all" ? ideas : ideas.filter((i) => i.category === filter);

  return (
    <div>
      <section className="pt-32 px-12 pb-12 bg-linear-to-br from-(--cream) to-(--light)">
        <p className="text-xs uppercase text-(--amber) mb-4">
          60+ curated concepts
        </p>

        <h1 className="text-5xl font-serif font-black mb-4">
          Find the idea that <span className="italic text-(--amber)">fits</span>{" "}
          your skills
        </h1>

        <p className="opacity-60 max-w-xl">
          Browse micro-business ideas with roadmap and startup cost.
        </p>
      </section>

      <FilterBar filter={filter} setFilter={setFilter} />

      <div className="grid grid-cols-3 gap-6 px-12 py-12">
        {filteredIdeas.map((idea) => (
          <IdeaCard key={idea.id} idea={idea} />
        ))}
      </div>
    </div>
  );
}

export default BusinessIdeas;