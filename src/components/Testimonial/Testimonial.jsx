import React from 'react'

const Testimonial = () => {
  return (
    <section className="testimonials py-24 px-16 overflow-hidden">
  <div className="section-header text-center mt-16">
    <div className="section-label text-sm font-medium uppercase text-(--amber) mb-4">Success Stories</div>
    <h2 className='font-[Fraunces] text-[clamp(2rem, 4vw, 3rem)] font-black'>Real people, real launches</h2>
  </div>
 
  <div className="testi-grid grid grid-cols-3 gap-6 mt-12">
    <div className="testi-card p-8 rounded-3xl border border-solid border-[rgba(44,24,16,0.08)] transition-[border-color_0.2s_transform_0.2s] hover:text-(--amber) hover:transform-[translateY(-4px)]">
      <div className="testi-quote font-[Fraunces] text-[2rem] text-(--amber) mb-4">"</div>
      <p className="testi-text text-[0.9rem] opacity-[0.7] mb-6">The roadmap feature literally walked me through every step. I had my tailoring business registered and taking orders within 6 weeks of joining.</p>
      <div className="testi-person flex items-center gap-[0.8]">
        <div className="testi-avatar bg-[rgba(212,128,10,0.12)] w-9 h-9 rounded-full flex items-center justify-center text-[1rem]" >👩🏽</div>
        <div>
          <div className="testi-name text-sm font-medium">Amara D.</div>
          <div className="testi-role text-[0.75rem] opacity-[0.4]">Custom Tailoring, Lagos</div>
        </div>
      </div>
    </div>
    <div className="testi-card p-8 rounded-3xl border border-solid border-[rgba(44,24,16,0.08)] transition-[border-color_0.2s_transform_0.2s] hover:text-(--amber) hover:transform-[translateY(-4px)]">
      <div className="testi-quote font-[Fraunces] text-[2rem] text-(--amber) mb-4">"</div>
      <p className="testi-text text-[0.9rem] opacity-[0.7] mb-6">I had no idea my cooking skills could become a real business. EntreSkill matched me with the perfect idea and a mentor who knew the food industry inside out.</p>
      <div className="testi-person flex items-center gap-[0.8]">
        <div className="testi-avatar bg-[rgba(92,122,92,0.12)] w-9 h-9 rounded-full flex items-center justify-center text-[1rem]">👨🏽</div>
        <div>
          <div className="testi-name text-sm font-medium">Rajan K.</div>
          <div className="testi-role text-[0.75rem] opacity-[0.4]">Home Chef Services, Pune</div>
        </div>
      </div>
    </div>
    <div className="testi-card p-8 rounded-3xl border border-solid border-[rgba(44,24,16,0.08)] transition-[border-color_0.2s_transform_0.2s] hover:text-(--amber) hover:transform-[translateY(-4px)]">
      <div className="testi-quote font-[Fraunces] text-[2rem] text-(--amber) mb-4">"</div>
      <p className="testi-text text-[0.9rem] opacity-[0.7] mb-6">As a mentor, the platform makes it easy to reach people who genuinely need my expertise. The scheduling tools are seamless and the community is incredible.</p>
      <div className="testi-person flex items-center gap-[0.8]">
        <div className="testi-avatar bg-[rgba(196,75,43,0.12)] w-9 h-9 rounded-full flex items-center justify-center text-[1rem]" >👩🏻</div>
        <div>
          <div className="testi-name text-sm font-medium">Priya S.</div>
          <div className="testi-role text-[0.75rem] opacity-[0.4]">Mentor · Fashion & Retail</div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Testimonial