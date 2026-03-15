import React from "react";

const MentorCard = ({ mentor }) => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 border border-black/5 hover:-translate-y-1 hover:shadow-lg transition">

      {/* Header */}
      <div className="flex gap-3 sm:gap-4 mb-4">

        <div
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xl sm:text-2xl"
          style={{ background: mentor.bg }}
        >
          {mentor.avatar}
        </div>

        <div>
          <h3 className="font-semibold text-sm sm:text-base">
            {mentor.name}
          </h3>

          <p className="text-xs sm:text-sm opacity-50">
            {mentor.role}
          </p>

          <div className="text-xs sm:text-sm text-(--amber)">
            ⭐ {mentor.rating}
            <span className="opacity-50 text-(--soil)">
              {" "}({mentor.reviews} reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Bio */}
      <p className="text-xs sm:text-sm opacity-70 mb-4 leading-relaxed">
        {mentor.bio}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {mentor.tags.map((tag, i) => (
          <span
            key={i}
            className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full bg-black/5"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 pt-4 border-t border-black/5">

        <span className="text-[10px] sm:text-xs opacity-50">
          Available{" "}
          <span className="text-(--sage) font-medium">
            {mentor.available}
          </span>
        </span>

        <div className="flex gap-2">
          <button className="border px-3 py-1 rounded-full text-[10px] sm:text-xs hover:bg-black/5">
            Message
          </button>

          <button className="bg-(--soil) text-white px-3 py-1 rounded-full text-[10px] sm:text-xs hover:bg-(--amber)">
            Book
          </button>
        </div>
      </div>

    </div>
  );
};

export default MentorCard;