const Hero = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 px-6 md:px-10 lg:px-16 pt-24 lg:pt-32">

      <div>
        <div className="inline-block bg-(--amber)/10 text-(--amber) text-xs px-4 py-1 rounded-full mb-6">
          🌱 For Aspiring Entrepreneurs
        </div>

        <h1 className="font-[Fraunces] text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
          Turn Your Skills Into a
          <em className="italic text-(--amber) font-light"> Thriving </em>
          Business
        </h1>

        <p className="text-base md:text-lg opacity-70 mb-8 max-w-lg">
          Take our quick skills quiz, get matched with personalized
          micro-business ideas and step-by-step roadmaps.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-(--soil) text-(--cream) px-8 py-4 rounded-full">
            Start Free → Take the Quiz
          </button>

          <button className="opacity-60">
            See how it works ↓
          </button>
        </div>
      </div>

      {/* CARDS */}

      <div className="flex flex-col gap-4">

        <div className="float bg-white p-5 md:p-6 rounded-2xl shadow flex items-center gap-4">
          <div className="text-2xl">🧵</div>
          <div>
            <h4>Custom Embroidery Boutique</h4>
            <p className="text-sm opacity-60">Matched to sewing skills</p>
          </div>
          <span className="ml-auto bg-(--amber)/10 text-(--amber) text-xs px-3 py-1 rounded-full">
            98% match
          </span>
        </div>

        <div className="float-delay-1 bg-white p-5 md:p-6 rounded-2xl shadow flex items-center gap-4 lg:ml-12">
          <div className="text-2xl">🍳</div>
          <div>
            <h4>Organic Home Chef Services</h4>
            <p className="text-sm opacity-60">Cooking + nutrition</p>
          </div>
          <span className="ml-auto bg-(--sage)/10 text-(--sage) text-xs px-3 py-1 rounded-full">
            94% match
          </span>
        </div>

        <div className="float-delay-2 bg-white p-5 md:p-6 rounded-2xl shadow flex items-center gap-4 lg:ml-4">
          <div className="text-2xl">📱</div>
          <div>
            <h4>Social Media for Local Shops</h4>
            <p className="text-sm opacity-60">Tech & creativity</p>
          </div>
          <span className="ml-auto bg-(--rust)/10 text-(--rust) text-xs px-3 py-1 rounded-full">
            89% match
          </span>
        </div>

      </div>

    </section>
  )
}

export default Hero