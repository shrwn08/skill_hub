const HiwSteps = () => {
  return (
    <div className="py-20 px-16">

      <div className="flex flex-col">

        {/* STEP 1 */}

        <div className="grid grid-cols-[80px_1fr_1fr] gap-12 items-center py-16 border-b border-[rgba(44,24,16,0.07)]">
          <div className="font-[Fraunces] text-[5rem] font-black text-[rgba(212,128,10,0.15)]">
            01
          </div>

          <div>
            <h3 className="font-[Fraunces] text-[1.6rem] font-bold mb-3">
              Take the Skills Quiz
            </h3>

            <p className="text-[0.95rem] opacity-65 mb-6">
              Answer a quick 5-minute quiz about your skills and hobbies.
            </p>

            <div className="flex flex-wrap gap-2">
              <Tag color="amber">⏱ 5 minutes</Tag>
              <Tag color="rust">No signup needed</Tag>
              <Tag color="sage">25 skill categories</Tag>
            </div>
          </div>

          <div className="bg-white rounded-[1.2rem] p-6 shadow-[0_4px_28px_rgba(44,24,16,0.08)]">
            <QuizOption label="Sewing & Tailoring" selected />
            <QuizOption label="Cooking & Baking" selected />
            <QuizOption label="Graphic Design" />
            <QuizOption label="Social Media & Marketing" />
            <QuizOption label="Carpentry & Crafts" />
          </div>
        </div>

        {/* STEP 2 */}

        <div className="grid grid-cols-[80px_1fr_1fr] gap-12 items-center py-16 border-b border-[rgba(44,24,16,0.07)]">

          <div className="font-[Fraunces] text-[5rem] font-black text-[rgba(212,128,10,0.15)]">
            02
          </div>

          <div>
            <h3 className="font-[Fraunces] text-[1.6rem] font-bold mb-3">
              Get Matched to Ideas
            </h3>

            <p className="text-[0.95rem] opacity-65 mb-6">
              Our engine analyzes your skills and recommends ideas.
            </p>

            <div className="flex flex-wrap gap-2">
              <Tag color="amber">Instant results</Tag>
              <Tag color="rust">60+ templates</Tag>
              <Tag color="sage">Skill scoring</Tag>
            </div>
          </div>

          <div className="bg-white rounded-[1.2rem] p-6 shadow-[0_4px_28px_rgba(44,24,16,0.08)]">
            <IdeaMatch emoji="🧵" title="Custom Embroidery" subtitle="Tailoring + Craft" percent={96}/>
            <IdeaMatch emoji="🍳" title="Home Chef Services" subtitle="Cooking + Nutrition" percent={91}/>
            <IdeaMatch emoji="🎂" title="Artisan Bakery" subtitle="Baking + Packaging" percent={84}/>
          </div>
        </div>

        {/* STEP 3 */}

        <div className="grid grid-cols-[80px_1fr_1fr] gap-12 items-center py-16 border-b border-[rgba(44,24,16,0.07)]">

          <div className="font-[Fraunces] text-[5rem] font-black text-[rgba(212,128,10,0.15)]">
            03
          </div>

          <div>
            <h3 className="font-[Fraunces] text-[1.6rem] font-bold mb-3">
              Follow Your Roadmap
            </h3>

            <p className="text-[0.95rem] opacity-65 mb-6">
              Pick an idea and follow a structured roadmap.
            </p>

            <div className="flex flex-wrap gap-2">
              <Tag color="amber">Track progress</Tag>
              <Tag color="neutral">Legal checklists</Tag>
              <Tag color="sage">Cost calculators</Tag>
              <Tag color="rust">Marketing guides</Tag>
            </div>
          </div>

          <div className="bg-white rounded-[1.2rem] p-6 shadow-[0_4px_28px_rgba(44,24,16,0.08)]">

            <RoadmapStep
              title="Validate Your Idea"
              subtitle="Talk to 5 customers"
              done
            />

            <RoadmapStep
              title="Plan Your Costs"
              subtitle="Equipment & materials"
              done
            />

            <RoadmapStep
              title="Register Your Business"
              subtitle="In progress..."
              current
            />

          </div>
        </div>

        {/* STEP 4 */}

        <div className="grid grid-cols-[80px_1fr_1fr] gap-12 items-center py-16">

          <div className="font-[Fraunces] text-[5rem] font-black text-[rgba(212,128,10,0.15)]">
            04
          </div>

          <div>
            <h3 className="font-[Fraunces] text-[1.6rem] font-bold mb-3">
              Connect with a Mentor
            </h3>

            <p className="text-[0.95rem] opacity-65 mb-6">
              Book sessions with experienced mentors.
            </p>

            <div className="flex flex-wrap gap-2">
              <Tag color="amber">180+ mentors</Tag>
              <Tag color="rust">Direct messaging</Tag>
              <Tag color="sage">Schedule sessions</Tag>
            </div>
          </div>

          <div className="bg-white rounded-[1.2rem] p-6 shadow-[0_4px_28px_rgba(44,24,16,0.08)]">
            <MentorMini emoji="👩" name="Priya Sharma" role="Fashion & Retail · ⭐ 4.9"/>
            <MentorMini emoji="👨" name="James Oduya" role="Handcraft Business · ⭐ 4.8"/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HiwSteps;