import React from 'react'

const FilterBar = ({ filter, setFilter }) => {
 const categories = [
    "all",
    "crafts",
    "food",
    "digital",
    "education",
    "home"
  ];

  return (

    <div className="flex flex-wrap gap-2 px-12 py-6 border-b">

      {categories.map((cat) => (

        <button
          key={cat}
          onClick={() => setFilter(cat)}
          className={`px-4 py-2 rounded-full border text-sm transition
          ${
            filter === cat
              ? "bg-(--soil) text-white border-(--soil)"
              : "border-black/20 hover:border-(--amber)"
          }`}
        >

          {cat}

        </button>

      ))}

    </div>

  );

}

export default FilterBar