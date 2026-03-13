import React from 'react'
const Step = ({ index, title, description, tags, visual }) => (
  <div className="sm:grid grid-cols-[80px_1fr_1fr] gap-12 items-center py-16 border-b border-(--soil)/10 last:border-none">
    <div className="text-[5rem] font-[Fraunces] font-black text-(--amber)/15 select-none">{index}</div>
    <div className="space-y-4">
      <h3 className="text-2xl font-[Fraunces] font-bold">{title}</h3>
      <p className="text-sm opacity-70">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t, i) => (
          <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium ${t.color}`}>{t.text}</span>
        ))}
      </div>
    </div>
    <div>{visual}</div>
  </div>
);

export default Step;