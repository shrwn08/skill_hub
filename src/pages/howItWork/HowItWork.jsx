import React from "react";
import MentorCard from "../../components/MentorCard";
import Step from "../../components/Step";
import IdeaResult from "../../components/IdeaResult";
import RoadmapStep from "../../components/RoadmapStep";

const HowItWorks = () => {
  return (
    <div className="pt-28">
      {/* HERO */}
      <section className="px-4 sm:px-8 lg:px-16 py-20 sm:py-28 bg-linear-to-br from-(--cream) to-(--light) border-b border-(--soil)/10 relative overflow-hidden text-(--soil)">
        <div className="inline-block bg-(--amber)/10 text-(--amber) text-xs font-medium px-3 py-1 rounded-full mb-4">
          🗺 Step-by-step process
        </div>
        <h1 className="font-[Fraunces] text-[clamp(2rem,5vw,3.6rem)] font-black mb-4 leading-snug">
          From skill to <em className="italic text-(--amber) font-light">launch</em>,<br />
          guided every step
        </h1>
        <p className="max-w-xl text-sm sm:text-base opacity-70">
          EntreSkill Hub takes the guesswork out of starting a micro-business. Here's exactly how our platform works — from your very first quiz to your first paying customer.
        </p>
      </section>

      {/* STEPS */}
      <section className="px-4 sm:px-8 lg:px-16 py-12 sm:py-20 space-y-12">
        {/* Step 01 */}
        <Step
          index="01"
          title="Take the Skills Quiz"
          description="Answer a quick 5-minute quiz about your existing skills, hobbies, and what you enjoy doing. No business experience needed — we meet you exactly where you are."
          tags={[
            { text: "⏱ 5 minutes", color: "bg-(--amber)/10 text-(--amber)" },
            { text: "No signup needed", color: "bg-(--soil)/5 text-(--soil)" },
            { text: "25 skill categories", color: "bg-(--sage)/10 text-(--sage)" },
          ]}
          visual={
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-(--soil)/5 space-y-2">
              <div className="flex items-center gap-2 border-b border-(--soil)/10 pb-2 mb-2 text-sm">
                <span>🎯</span>
                <span className="font-medium">Skills Assessment</span>
              </div>
              <div className="text-[0.7rem] sm:text-xs opacity-40 mb-2">
                What skills do you have? (select all that apply)
              </div>
              <div className="flex flex-col gap-1 text-sm sm:text-xs">
                <div className="flex items-center gap-2"><span className="text-(--amber)">✓</span> Sewing & Tailoring</div>
                <div className="flex items-center gap-2"><span className="text-(--amber)">✓</span> Cooking & Baking</div>
                <div className="flex items-center gap-2">Graphic Design</div>
                <div className="flex items-center gap-2">Social Media & Marketing</div>
              </div>
            </div>
          }
        />

        {/* Step 02 */}
        <Step
          index="02"
          title="Get Matched to Ideas"
          description="Our matching engine analyses your skill profile and surfaces the most relevant micro-business ideas ranked by compatibility. You'll get 5–10 tailored suggestions to explore."
          tags={[
            { text: "Instant results", color: "bg-(--amber)/10 text-(--amber)" },
            { text: "60+ business templates", color: "bg-(--soil)/5 text-(--soil)" },
            { text: "Skill-match scoring", color: "bg-(--sage)/10 text-(--sage)" },
          ]}
          visual={
            <div className="space-y-2">
              <IdeaResult icon="🧵" title="Custom Embroidery" subtitle="Tailoring + Craft" percent="96%" />
              <IdeaResult icon="🍳" title="Home Chef Services" subtitle="Cooking + Nutrition" percent="91%" />
              <IdeaResult icon="🎂" title="Artisan Bakery" subtitle="Baking + Packaging" percent="84%" />
            </div>
          }
        />

        {/* Step 03 */}
        <Step
          index="03"
          title="Follow Your Roadmap"
          description="Pick an idea and unlock a structured roadmap broken into simple, actionable steps. Each milestone covers market research, legal setup, cost planning, and marketing basics."
          tags={[
            { text: "Track your progress", color: "bg-(--amber)/10 text-(--amber)" },
            { text: "Legal checklists", color: "bg-(--soil)/5 text-(--soil)" },
            { text: "Cost calculators", color: "bg-(--sage)/10 text-(--sage)" },
            { text: "Marketing guides", color: "bg-(--rust)/10 text-(--rust)" },
          ]}
          visual={
            <div>
              <RoadmapStep done title="Validate Your Idea" subtitle="Talk to 5 potential customers ✅" />
              <RoadmapStep done title="Plan Your Costs" subtitle="Equipment & materials budget ✅" />
              <RoadmapStep current title="Register Your Business" subtitle="In progress…" />
              <RoadmapStep title="Build an Online Presence" subtitle="Set up social media & portfolio" />
              <RoadmapStep title="Get Your First Customer" subtitle="Launch & marketing plan" />
            </div>
          }
        />

        {/* Step 04 */}
        <Step
          index="04"
          title="Connect with a Mentor"
          description="Whenever you get stuck, browse verified mentors who have real experience in your chosen field. Book a Q&A session, ask questions, or get ongoing support — at your pace."
          tags={[
            { text: "180+ mentors", color: "bg-(--amber)/10 text-(--amber)" },
            { text: "Direct messaging", color: "bg-(--soil)/5 text-(--soil)" },
            { text: "Schedule sessions", color: "bg-(--sage)/10 text-(--sage)" },
          ]}
          visual={
            <div>
              <MentorCard avatar={{ icon: '👩', bg: 'rgba(212,128,10,0.12)' }} name="Priya Sharma" field="Fashion & Retail" rating="4.9"  />
              <MentorCard avatar={{ icon: '👨', bg: 'rgba(92,122,92,0.12)' }} name="James Oduya" field="Handcraft Business" rating="4.8" />
            </div>
          }
        />

      </section>
    </div>
  );
};

export default HowItWorks;