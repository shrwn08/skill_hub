import React from "react";

const Testimonials = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 py-16 sm:py-20 lg:py-24">

      {/* Heading */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="text-(--amber) text-xs font-medium uppercase mb-1">Success Stories</div>
        <h2 className="font-[Fraunces] text-2xl sm:text-3xl font-black">Real people, real launches</h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="p-4 sm:p-6 rounded-2xl border border-black/10 hover:border-(--amber) hover:-translate-y-1 transition-all">
          <div className="font-[Fraunces] text-2xl text-(--amber) mb-2">"</div>
          <p className="text-sm sm:text-base opacity-70 mb-4">
            The roadmap feature literally walked me through every step. I had my tailoring business registered and taking orders within 6 weeks.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-(--amber)/10 flex items-center justify-center">👩🏽</div>
            <div>
              <div className="text-xs font-medium">Amara D.</div>
              <div className="text-[0.65rem] opacity-50">Custom Tailoring, Lagos</div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-4 sm:p-6 rounded-2xl border border-black/10 hover:border-(--amber) hover:-translate-y-1 transition-all">
          <div className="font-[Fraunces] text-2xl text-(--amber) mb-2">"</div>
          <p className="text-sm sm:text-base opacity-70 mb-4">
            I had no idea my cooking skills could become a real business. EntreSkill matched me with the perfect idea and a mentor who knew the food industry inside out.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-(--sage)/10 flex items-center justify-center">👨🏽</div>
            <div>
              <div className="text-xs font-medium">Rajan K.</div>
              <div className="text-[0.65rem] opacity-50">Home Chef Services, Pune</div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-4 sm:p-6 rounded-2xl border border-black/10 hover:border-(--amber) hover:-translate-y-1 transition-all">
          <div className="font-[Fraunces] text-2xl text-(--amber) mb-2">"</div>
          <p className="text-sm sm:text-base opacity-70 mb-4">
            As a mentor, the platform makes it easy to reach people who genuinely need my expertise. The scheduling tools are seamless and the community is incredible.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-(--rust)/10 flex items-center justify-center">👩🏻</div>
            <div>
              <div className="text-xs font-medium">Priya S.</div>
              <div className="text-[0.65rem] opacity-50">Mentor · Fashion & Retail</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;