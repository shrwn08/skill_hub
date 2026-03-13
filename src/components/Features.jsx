import React from "react"

const Features = () => {
  return (
    <section className="bg-(--cream) px-4 sm:px-8 md:px-16 py-16 sm:py-20 lg:py-24">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left Content */}
        <div>
          <div className="text-(--amber) font-medium uppercase text-xs mb-2">
            Platform Features
          </div>
          <h2 className="font-[Fraunces] text-2xl sm:text-3xl md:text-3xl font-black mb-8">
            Everything you need to launch
          </h2>

          <div className="flex flex-col gap-4 sm:gap-6">

            <div className="flex gap-4 p-4 sm:p-6 rounded-xl shadow bg-white">
              <div className="text-xl bg-(--amber)/10 p-2 rounded-lg">🎯</div>
              <div>
                <h4 className="font-medium text-lg mb-1">Personalized Idea Matching</h4>
                <p className="text-sm opacity-70">
                  Our algorithm matches your skills and interests to the best micro-business opportunities.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 sm:p-6 rounded-xl hover:bg-white hover:shadow cursor-pointer">
              <div className="text-xl bg-(--sage)/10 p-2 rounded-lg">🗺️</div>
              <div>
                <h4 className="font-medium text-lg mb-1">Step-by-Step Roadmaps</h4>
                <p className="text-sm opacity-70">
                  Guided checklists walk you from idea to launch — covering legal, finance, and marketing basics.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 sm:p-6 rounded-xl hover:bg-white hover:shadow cursor-pointer">
              <div className="text-xl bg-(--rust)/10 p-2 rounded-lg">📚</div>
              <div>
                <h4 className="font-medium text-lg mb-1">Learning Resources Library</h4>
                <p className="text-sm opacity-70">
                  Videos, articles, and downloadable guides curated by mentors and industry experts.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 sm:p-6 rounded-xl hover:bg-white hover:shadow cursor-pointer">
              <div className="text-xl bg-(--soil)/10 p-2 rounded-lg">🤝</div>
              <div>
                <h4 className="font-medium text-lg mb-1">Mentor Connections</h4>
                <p className="text-sm opacity-70">
                  Browse verified mentors by expertise and schedule one-on-one Q&A sessions.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-6 shadow-lg mt-8 lg:mt-0">

          <div className="flex items-center gap-2 border-b border-black/10 pb-2 mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            <span className="text-xs opacity-40 ml-2">entreskillhub.com / dashboard</span>
          </div>

          <div className="font-[Fraunces] font-bold mb-3">👋 Welcome back, Amara!</div>

          {/* Progress Bars */}
          <div className="mb-2">
            <div className="flex justify-between text-xs opacity-70 mb-1">
              <span>Custom Embroidery Boutique</span>
              <span className="text-(--amber)">60%</span>
            </div>
            <div className="h-1 rounded-full bg-black/10">
              <div className="h-1 bg-(--amber) rounded-full w-3/5"></div>
            </div>
          </div>

          <div className="mb-2">
            <div className="flex justify-between text-xs opacity-70 mb-1">
              <span>Home Chef Services</span>
              <span className="text-(--sage)">35%</span>
            </div>
            <div className="h-1 rounded-full bg-black/10">
              <div className="h-1 bg-(--sage) rounded-full w-1/3"></div>
            </div>
          </div>

          {/* Tags */}
          <div className="text-xs opacity-50 mt-3 mb-1">SAVED IDEAS</div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-xs bg-(--amber)/10 text-(--amber)">🧵 Embroidery</span>
            <span className="px-3 py-1 rounded-full text-xs bg-(--sage)/10 text-(--sage)">🍳 Home Chef</span>
            <span className="px-3 py-1 rounded-full text-xs bg-(--rust)/10 text-(--rust)">📱 Social Media</span>
          </div>

          <div className="text-xs opacity-50 mt-3 mb-1">SUGGESTED MENTOR</div>
          <div className="flex flex-col sm:flex-row items-center gap-2 bg-(--cream) p-3 rounded-xl">
            <div className="w-9 h-9 rounded-full bg-(--amber) flex items-center justify-center text-sm">👩</div>
            <div className="flex-1 text-center sm:text-left">
              <h5 className="text-xs font-medium">Priya Sharma</h5>
              <p className="text-[0.65rem] opacity-50">Fashion & Retail · 12 yrs exp.</p>
            </div>
            <button className="bg-(--soil) text-(--cream) text-xs px-2 py-1 rounded-full mt-2 sm:mt-0">Book</button>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Features