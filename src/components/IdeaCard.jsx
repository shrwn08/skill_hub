import React from "react";

const IdeaCard = ({ idea, onClick }) => {
  return (
    <div
      onClick={() => onClick(idea)}
      className="bg-white rounded-2xl border border-black/5 hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer"
    >
      <div className="flex justify-between p-6">
        <span className="text-3xl">{idea.emoji}</span>

        <span className="text-xs text-(--amber) flex justify-center items-center bg-amber-100 px-2 py-1 rounded-full">
          {idea.match}% match
        </span>
      </div>

      <h3 className="font-serif text-lg px-6 mb-2">{idea.title}</h3>

      <p className="text-sm opacity-60 px-6 mb-4">{idea.description}</p>

      <div className="flex flex-wrap gap-2 px-6 mb-6">
        {idea.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs bg-black/5 px-2 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center px-6 py-4 border-t text-sm">
        <span className="opacity-50">{idea.cost}</span>

        <span className="text-(--amber) font-medium">View Roadmap →</span>
      </div>
    </div>
  );
};

export default IdeaCard;
