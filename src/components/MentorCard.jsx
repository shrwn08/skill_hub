import React from "react";

const MentorCard = ({ mentor }) => {
  return (
    <div className="bg-white rounded-2xl p-8 border border-black/5 hover:-translate-y-1 hover:shadow-lg transition">

      <div className="flex gap-4 mb-4">
        <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
          style={{ background: mentor.bg }}>
          {mentor.avatar}
        </div>

        <div>
          <h3 className="font-semibold">{mentor.name}</h3>
          <p className="text-sm opacity-50">{mentor.role}</p>
          <div className="text-sm text-(--amber)">
            ⭐ {mentor.rating}
            <span className="opacity-50 text-(--soil)">
              {" "}({mentor.reviews} reviews)
            </span>
          </div>
        </div>
      </div>

      <p className="text-sm opacity-70 mb-4 leading-relaxed">
        {mentor.bio}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {mentor.tags.map((tag, i) => (
          <span key={i} className="text-xs px-3 py-1 rounded-full bg-black/5">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-black/5">
        <span className="text-xs opacity-50">
          Available <span className="text-(--sage) font-medium">{mentor.available}</span>
        </span>

        <div className="flex gap-2">
          <button className="border px-3 py-1 rounded-full text-xs">
            Message
          </button>
          <button className="bg-(--soil) text-white px-3 py-1 rounded-full text-xs">
            Book
          </button>
        </div>
      </div>

    </div>
  );
};

export default MentorCard;