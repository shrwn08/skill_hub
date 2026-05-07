import React from "react";
import { Link } from "react-router-dom";

const MentorCTA = () => {
  return (
    <div className="bg-(--soil) mx-4 sm:mx-8 lg:mx-16 mb-12 sm:mb-16 rounded-3xl p-8 sm:p-12 lg:p-16 grid md:grid-cols-2 items-center gap-6 sm:gap-8">

      {/* Text */}
      <div>
        <h3 className="font-[Fraunces] text-2xl sm:text-3xl font-black text-(--cream) mb-3 leading-tight">
          Are you an expert? Become a mentor.
        </h3>

        <p className="text-[rgba(250,243,224,0.6)] text-sm sm:text-base leading-relaxed max-w-md">
          Share your experience, help aspiring entrepreneurs grow,
          and earn from your expertise — all on your own schedule.
        </p>
      </div>

      {/* Button */}
      <div className="flex md:justify-end ">
        <Link to="/mentor-apply" className="bg-(--gold) text-(--soil) px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:-translate-y-1 transition hover:cursor-pointer">
          Apply to Mentor →
        </Link>
      </div>

    </div>
  );
};

export default MentorCTA;