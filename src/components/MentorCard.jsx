import React from "react";
const MentorCard = ({ avatar, name, field, rating }) => (
  <div className="flex items-center gap-3 p-3 bg-(--cream) rounded-lg mb-2">
    <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{backgroundColor: avatar.bg}}>
      {avatar.icon}
    </div>
    <div className="flex-1">
      <h5 className="text-xs font-medium">{name}</h5>
      <p className="text-[0.7rem] opacity-50">{field} · ⭐ {rating}</p>
    </div>
    <button className="ml-auto bg-(--soil) text-(--cream) text-xs px-3 py-1 rounded-full hover:bg-(--amber)">Book</button>
  </div>
);

export default MentorCard;