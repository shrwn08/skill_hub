import React from "react";

const CTA = () => {
  return (
    <div class="cta-section bg-(--soil) m-[0_4rem_4rem] rounded-4xl pt-20 px-16 text-center relative overflow-hidden">
      <h2 className="font-[Fraunces] text-[clamp(2rem, 4vw, 3rem)] font-black text-(--cream) mb-4 relative z-10">
        Your business idea is
        <br />
        <em class="font-italic text-(--gold)">waiting for you.</em>
      </h2>
      <p className="text-[rgba(250,243,224,0.6)] text-base mb-10 relative z-10">Join 2,400+ entrepreneurs who have already taken the first step.</p>
      <button href="#" className="btn-gold bg-(--gold) text-(--soil) py-4 px-10 rounded-3xl text-base font-medium inline-block transition-transform-[0.2s] shadow-[0.2s] relative z-10">
        Take the Free Skills Quiz →
      </button>
    </div>
  );
};

export default CTA;
