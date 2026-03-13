import React from "react";

const CTA = () => {
  return (
    <div className="bg-(--soil) text-center mx-4 sm:mx-8 md:mx-16 my-12 md:my-20 rounded-3xl py-12 sm:py-16 md:py-20 px-6 sm:px-8 md:px-10">

      <h2 className="font-[Fraunces] text-3xl sm:text-3xl md:text-4xl lg:text-4xl text-(--cream) mb-4">
        Your business idea is
        <em className="italic text-(--gold)"> waiting for you.</em>
      </h2>

      <p className="text-(--cream)/70 text-base sm:text-base md:text-lg mb-8">
        Join 2,400+ entrepreneurs who already started.
      </p>

      <button className="bg-(--gold) text-(--soil) px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-4 rounded-full text-sm sm:text-base md:text-base">
        Take the Free Skills Quiz →
      </button>

    </div>
  )
}

export default CTA;