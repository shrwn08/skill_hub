import React, { useState } from "react";

const Resources = () => {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null);

  const modals = {
    pricing: {
      title: "How to Price Your Products & Services",
      desc: "Learn the 3 pricing formulas every micro-business owner needs to know from day one.",
    },
    instagram: {
      title: "Instagram Marketing for Artisans & Makers",
      desc: "Grow your customer base using free Instagram tools — Reels, Stories, and local hashtags.",
    },
    bookkeeping: {
      title: "Basic Bookkeeping for Small Businesses",
      desc: "Track income, expenses, and profit without an accountant.",
    },
    validate: {
      title: "How to Validate Your Business Idea Fast",
      desc: "Five low-cost methods to test if people will actually pay.",
    },
  };

  const resources = [
    { id: "pricing", title: "How to Price Your Products & Services", desc: "Learn the 3 pricing formulas every micro-business owner needs.", type: "video", icon: "🎬" },
    { id: "instagram", title: "Instagram Marketing for Artisans & Makers", desc: "Grow customers using Reels, Stories, and hashtags.", type: "video", icon: "🎬" },
    { id: "bookkeeping", title: "Basic Bookkeeping for Small Businesses", desc: "Track income and expenses with simple spreadsheets.", type: "video", icon: "🎬" },
    { id: "validate", title: "How to Validate Your Business Idea Fast", desc: "Test if customers will actually pay.", type: "video", icon: "🎬" },
  ];

  const filtered = resources.filter(
    (r) =>
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-28 bg-(--light) text-(--soil)">

      {/* HERO */}
      <section className="px-4 sm:px-8 lg:px-16 pb-14 bg-linear-to-br from-(--cream) to-(--light)">
        <div className="inline-block text-(--amber) bg-(--amber)/10 px-3 py-1 rounded-full text-xs uppercase tracking-widest mb-5">
          📚 100+ curated resources
        </div>

        <h1 className="font-[Fraunces] text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
          Everything you need to <em className="text-(--amber) font-light">learn</em>
          <br /> and launch
        </h1>

        <p className="max-w-xl opacity-70 text-sm sm:text-base lg:text-lg">
          Videos, articles, checklists, and guides curated by mentors and approved by our team.
        </p>
      </section>

      {/* LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr]">

        {/* SIDEBAR */}
        <aside className="lg:border-r border-(--soil)/10 p-4 sm:p-6 lg:p-8 bg-white lg:sticky lg:top-24 lg:h-[calc(100vh-96px)]">

          <h4 className="text-xs uppercase tracking-widest opacity-40 mb-4">
            Browse by Topic
          </h4>

          <ul className="flex lg:block gap-4 overflow-x-auto lg:space-y-2 text-sm mb-6">
            <li className="text-(--amber) font-medium whitespace-nowrap">📚 All</li>
            <li className="opacity-60 hover:opacity-100 cursor-pointer whitespace-nowrap">🎬 Videos</li>
            <li className="opacity-60 hover:opacity-100 cursor-pointer whitespace-nowrap">📄 Guides</li>
            <li className="opacity-60 hover:opacity-100 cursor-pointer whitespace-nowrap">✅ Checklists</li>
          </ul>

          {/* Progress */}
          <div className="hidden lg:block">
            <h4 className="text-xs uppercase tracking-widest opacity-40 mb-4">
              Your Progress
            </h4>

            <div className="space-y-4 text-xs">
              <div>
                <div className="flex justify-between mb-1 opacity-60">
                  <span>Marketing</span>
                  <span>3/5</span>
                </div>
                <div className="h-1 bg-(--soil)/10 rounded">
                  <div className="h-1 bg-(--amber) w-[60%] rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <main className="p-4 sm:p-8 lg:p-12">

          {/* SEARCH */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10 border-b pb-6 border-(--soil)/10">
            <input
              className="flex-1 border border-(--soil)/20 rounded-full px-5 py-3 outline-none focus:border-(--amber)"
              placeholder="Search resources..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button className="border border-(--soil)/20 px-6 py-2 rounded-full hover:border-(--amber)">
              Filter
            </button>
          </div>

          {/* FEATURED */}
          <div className="bg-(--soil) text-(--cream) rounded-3xl p-6 sm:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-[1fr_160px] gap-6 mb-14">
            <div>
              <div className="text-(--gold) uppercase text-xs tracking-widest mb-2">
                ⭐ Featured Course
              </div>

              <h3 className="font-[Fraunces] text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
                Starting a Micro-Business from Zero
              </h3>

              <p className="opacity-70 mb-6 text-sm sm:text-base">
                A complete beginner course covering idea validation, pricing and first customers.
              </p>

              <button className="bg-(--gold) text-(--soil) px-6 py-2 rounded-full font-semibold">
                Start Watching →
              </button>
            </div>

            <div
              onClick={() => setModal("pricing")}
              className="flex items-center justify-center text-4xl bg-white/10 rounded-xl cursor-pointer hover:bg-white/20 min-h-30"
            >
              ▶
            </div>
          </div>

          {/* VIDEO SECTION */}
          <div className="flex justify-between mb-5">
            <h2 className="font-[Fraunces] text-lg sm:text-xl lg:text-2xl font-bold">
              🎬 Video Lessons
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filtered.map((r) => (
              <div
                key={r.id}
                onClick={() => setModal(r.id)}
                className="bg-white border border-(--soil)/10 rounded-2xl p-5 flex gap-4 cursor-pointer hover:border-(--amber) hover:shadow-md transition"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-(--rust)/10">
                  {r.icon}
                </div>

                <div>
                  <h4 className="font-medium text-sm sm:text-base mb-1">{r.title}</h4>
                  <p className="text-xs sm:text-sm opacity-60">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* NEWSLETTER */}
          <div className="bg-(--cream) border border-(--soil)/10 rounded-3xl p-6 sm:p-8 lg:p-10 mt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="font-[Fraunces] text-lg sm:text-xl font-bold">
                Get new resources every week
              </h3>
              <p className="text-sm opacity-60">
                Fresh videos and guides from mentors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <input
                className="border border-(--soil)/20 rounded-full px-5 py-2 w-full sm:w-auto"
                placeholder="Enter your email"
              />

              <button className="bg-(--soil) text-(--cream) px-6 py-2 rounded-full">
                Subscribe
              </button>
            </div>
          </div>

        </main>
      </div>

      {/* MODAL */}
      {modal && (
        <div
          onClick={() => setModal(null)}
          className="fixed inset-0 bg-black/60 flex items-center justify-center px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 sm:p-8 rounded-3xl max-w-lg w-full"
          >
            <div className="text-4xl mb-6 text-center">▶</div>

            <h3 className="font-[Fraunces] text-lg sm:text-xl font-bold mb-2">
              {modals[modal]?.title}
            </h3>

            <p className="opacity-60 text-sm sm:text-base">
              {modals[modal]?.desc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resources;