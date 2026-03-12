import React from "react";

const Features = () => {
  return (
    <section className="features-bg bg-(--cream) py-24 px-16">
      <div className="features-grid grid justify-center items-center md:grid-cols-[1fr_1.5fr] gap-16 text-center">
        <div>
          <div className="section-label text-sm font-medium uppercase mb-4 text-(--amber)">Platform Features</div>
          <h2 className="mb-8 font-[fraunces] text-[clamp(2rem, 4vw, 3rem)] font-black ">Everything you need to launch</h2>
          <div className="feature-list flex flex-col gap-6">
            <div className="feature-item  flex gap-4 p-6 rounded-2xl cursor-pointer transition-bg-[0.2s] hover:bg-white shadow-[0_4px_20px_rgba(44,24,16,0.06)]">
              <div className="feature-icon amber w-10 h-10 rounded-[0.7rem] flex items-center justify-center text-[1.1rem] shrink-0 bg-[rgba(212,128,10,0.12)]">🎯</div>
              <div className="feature-text">
                <h4 className="text-base font-medium mb-[0.3rem]">Personalized Idea Matching</h4>
                <p className="text-sm opacity-[0.6] ">
                  Our algorithm matches your skills and interests to the best
                  micro-business opportunities available.
                </p>
              </div>
            </div>
            <div className="feature-item flex gap-4 p-6 rounded-2xl cursor-pointer transition-bg-[0.2s] hover:bg-white shadow-[0_4px_20px_rgba(44,24,16,0.06)]">
              <div className="feature-icon sage amber w-10 h-10 rounded-[0.7rem] flex items-center justify-center text-[1.1rem] shrink-0 bg-[rgba(92,122,92,0.12)]">🗺️</div>
              <div className="feature-text">
                <h4 className="text-base font-medium mb-[0.3rem]">Step-by-Step Roadmaps</h4>
                <p className="text-sm opacity-[0.6] ">
                  Guided checklists walk you from idea to launch — covering
                  legal, finance, and marketing basics.
                </p>
              </div>
            </div>
            <div className="feature-item flex gap-4 p-6 rounded-2xl cursor-pointer transition-bg-[0.2s] hover:bg-white shadow-[0_4px_20px_rgba(44,24,16,0.06)]">
              <div className="feature-icon  w-10 h-10 rounded-[0.7rem] flex items-center justify-center text-[1.1rem] shrink-0 bg-[rgba(196,75,43,0.12)]">📚</div>
              <div className="feature-text">
                <h4 className="text-base font-medium mb-[0.3rem]">Learning Resources Library</h4>
                <p className="text-sm opacity-[0.6] ">
                  Videos, articles, and downloadable guides curated by mentors
                  and industry experts.
                </p>
              </div>
            </div>
            <div className="feature-item flex gap-4 p-6 rounded-2xl cursor-pointer transition-bg-[0.2s] hover:bg-white shadow-[0_4px_20px_rgba(44,24,16,0.06)]">
              <div className="feature-icon soil w-10 h-10 rounded-[0.7rem] flex items-center justify-center text-[1.1rem] shrink-0 bg-[rgba(44,24,16,0.08)]">🤝</div>
              <div className="feature-text">
                <h4 className="text-base font-medium mb-[0.3rem]">Mentor Connections</h4>
                <p className="text-sm opacity-[0.6] ">
                  Browse verified mentors by expertise and schedule one-on-one
                  Q&A sessions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* { <!-- Dashboard mockup -->} */}
        <div className="h-full w-full flex justify-center items-center">
        <div className="dashboard-mock md:w-3/5 flex flex-col justify-center  bg-white rounded-3xl p-6 shadow-[0_8px_48px_rgba(44,24,16,0.1)]">
          <div className="dash-header flex items-center gap-2 mb-6 pb-4 bb-[1px_solid_rgba(44,24,16,0.06)]">
            <div className="dot red w-2.5 h-2.5 rounded-full bg-[#ff5f56] "></div>
            <div className="dot yellow w-2.5 h-2.5 rounded-full bg-[#ffbd2e] "></div>
            <div className="dot green w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
            <span className="dash-title ml-2 text-sm opacity-[0.4]">entreskillhub.com / dashboard</span>
          </div>

          <div className="dash-greeting text-[Fraunces] text-[1.1rem] font-bold mb-4 ">👋 Welcome back, Amara!</div>

          <div className="progress-item mb-4">
            <div className="progress-label flex justify-between text-sm mb-[0.4rem] opacity-[0.7]">
              <span>Custom Embroidery Boutique</span>
              <span className="text-(--amber)">60%</span>
            </div>
            <div className="progress-bar h-1.5 w-full bg-[rgba(44,24,16,0.06)] rounded-[3px] overflow-hidden">
              <div className="progress-fill h-full rounded-[3px] w-3/5 bg-(--amber)"></div>
            </div>
          </div>
          <div className="progress-item mb-4">
            <div className="progress-label flex justify-between text-sm mb-[0.4rem] opacity-[0.7]">
              <span>Home Chef Services</span>
              <span className="text-(--amber)">35%</span>
            </div>
            <div className="progress-bar h-1.5 w-full bg-[rgba(44,24,16,0.06)] rounded-[3px] overflow-hidden">
              <div className="progress-fill h-full rounded-[3px] w-[35%] bg-(--sage)"></div>
            </div>
          </div>

          <div className="text-sm opacity-[0.5] mt-[1.2rem] mb-2">
            SAVED IDEAS
          </div>
          <div className="idea-chips flex gap-2 flex-wrap mt-[1.2rem] ">
            <span className="idea-chip py-[0.4rem] px-[0.8rem] rounded-4xl text-sm font-medium bg-[rgba(212,128,10,0.1)] text-(--amber)">🧵 Embroidery</span>
            <span className="idea-chip py-[0.4rem] px-[0.8rem] rounded-4xl text-sm font-medium bg-[rgba(92,122,92,0.1)] text-(--sage)">🍳 Home Chef</span>
            <span className="idea-chip py-[0.4rem] px-[0.8rem] rounded-4xl text-sm font-medium bg-[rgba(196,75,43,0.1)] text-(--rust)">📱 Social Media</span>
            <span className="idea-chip py-[0.4rem] px-[0.8rem] rounded-4xl text-sm font-medium ">🎨 Art classNamees</span>
          </div>

          <div className="text-sm opacity-[0.5] mt-[1.2rem] mb-2">
            SUGGESTED MENTOR
          </div>
          <div className="mini-mentor flex gap-[0.8] text-center p-4 bg-(--cream) rounded-2xl mt-4">
            <div className="mini-avatar w-9 h-9 rounded-full bg-(--amber) flex items-center justify-center text-[1rem] ">👩</div>
            <div className="mini-info flex-1">
              <h5 className="text-sm font-medium">Priya Sharma</h5>
              <p className="text-xs opacity-[0.5]">Fashion & Retail · 12 yrs exp.</p>
            </div>
            <div className="mini-btn bg-(--soil) text-(--cream) text-xs py-[0.4rem] px-[0.8rem] rounded-2xl cursor-pointer flex justify-center items-center">Book</div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
