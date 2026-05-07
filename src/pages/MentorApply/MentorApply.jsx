import React, { useEffect, useState } from "react";
import { useRequireAuth } from "../../hooks/useRequireAuth";
import { useDispatch, useSelector } from "react-redux";
import {
  applyAsMentor,
  resetApplyStatus,
  selectApplyStatus,
  selectMentorError,
} from "../../features/mentors/mentorSlice";
import { useNavigate } from "react-router-dom";

const EXPERTISE_OPTIONS = [
  "Crafts & Fashion",
  "Food Business",
  "Digital & Tech",
  "Finance & Legal",
  "Agriculture",
  "E-commerce",
  "Health & Wellness",
  "Education",
  "Marketing",
  "Manufacturing",
];

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const LANGUAGE_OPTIONS = [
  "English",
  "Hindi",
  "Bengali",
  "Tamil",
  "Telugu",
  "Marathi",
  "Gujarati",
  "Urdu",
];

const STEPS = ["Personal Info", "Expertise", "Availability", "Review"];

const MentorApply = () => {
  const { initialized } = useRequireAuth();
  const dispatch = useDispatch();
  const applyStatus = useSelector(selectApplyStatus);
  const applyError = useSelector(selectMentorError);
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    headline: "",
    experience: "",
    languages: [],
    expertise: [],
    availability: [],
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (applyStatus === "succeeded") {
      const timer = setTimeout(() => {
        dispatch(resetApplyStatus());
        navigate("/mentors");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [applyStatus, dispatch, navigate]);

  // Cleanup on unmount
  useEffect(
    () => () => {
      dispatch(resetApplyStatus());
    },
    [dispatch],
  );

  if (!initialized) return <Spinner text="Loading…" />;
  /*  helpers  */

  const toggle = (field, value) =>
    setForm((prev) => {
      const arr = prev[field];
      return {
        ...prev,
        [field]: arr.includes(value)
          ? arr.filter((v) => v !== value)
          : [...arr, value],
      };
    });

  const toggleDay = (day) =>
    setForm((prev) => {
      const exists = prev.availability.find((a) => a.day === day);
      return {
        ...prev,
        availability: exists
          ? prev.availability.filter((a) => a.day !== day)
          : [...prev.availability, { day }],
      };
    });

  const isDaySelected = (day) => form.availability.some((a) => a.day === day);

  /*  validation  */
  const validate = () => {
    const e = {};
    if (step === 0) {
      if (!form.headline.trim()) e.headline = "Headline is required.";
      else if (form.headline.length > 120) e.headline = "Max 120 characters.";
      if (form.experience === "" || Number(form.experience) < 0)
        e.experience = "Enter valid years of experience.";
      if (form.languages.length === 0)
        e.languages = "Select at least one language.";
    }
    if (step === 1 && form.expertise.length === 0)
      e.expertise = "Select at least one area.";
    if (step === 2 && form.availability.length === 0)
      e.availability = "Select at least one day.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validate()) setStep((s) => s + 1); };
  const back = () => { setErrors({}); setStep((s) => s - 1); };

  const submit = () => {
    dispatch(
      applyAsMentor({
        headline:     form.headline.trim(),
        experience:   Number(form.experience),
        languages:    form.languages,
        expertise:    form.expertise,
        availability: form.availability,
      })
    );
  };

   /* success screen  */

  if (applyStatus === "succeeded") {
    return (
      <div className="min-h-screen bg-(--light) flex items-center justify-center px-4 pt-24">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="font-[Fraunces] text-3xl font-black mb-2">Application Submitted!</h2>
          <p className="opacity-60 text-sm">
            Our team will review your profile and get back to you soon. Redirecting…
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-(--light) text-(--soil) pt-24 pb-20 px-4">
      {/* Page header */}
      <div className="max-w-2xl mx-auto mb-10 text-center">
        <div className="inline-block bg-[rgba(212,128,10,0.12)] text-(--amber) text-xs px-4 py-1 rounded-full mb-3 uppercase tracking-wider">
          🧑‍🏫 Become a Mentor
        </div>
        <h1 className="font-[Fraunces] text-3xl sm:text-4xl font-black mb-2">
          Share your expertise,{" "}
          <em className="italic text-(--amber) font-light">
            earn with purpose
          </em>
        </h1>
        <p className="opacity-60 text-sm max-w-md mx-auto">
          Join 180+ verified mentors helping entrepreneurs turn ideas into
          reality.
        </p>
      </div>

      {/* Step indicator */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="flex items-center">
          {STEPS.map((label, i) => (
            <React.Fragment key={label}>
              <div className="flex flex-col items-center shrink-0">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition
                    ${
                      i < step
                        ? "bg-(--sage) text-white"
                        : i === step
                          ? "bg-(--soil) text-(--cream)"
                          : "bg-black/10 text-black/40"
                    }`}
                >
                  {i < step ? "✓" : i + 1}
                </div>
                <span
                  className={`text-xs mt-1 hidden sm:block whitespace-nowrap
                    ${i === step ? "text-(--amber) font-medium" : "opacity-40"}`}
                >
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-1 transition ${
                    i < step ? "bg-(--sage)" : "bg-black/10"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Form card */}
      <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-black/5 shadow-sm p-6 sm:p-10">
        {/*  Step 0: Personal Info  */}
        {step === 0 && (
          <div className="space-y-6">
            <h2 className="font-[Fraunces] text-xl font-bold">
              Tell us about yourself
            </h2>

            {/* Headline */}
            <div>
              <label className="block text-xs opacity-60 mb-1">
                Professional Headline <span className="text-(--rust)">*</span>
              </label>
              <input
                type="text"
                maxLength={120}
                placeholder="e.g. Serial entrepreneur with 10+ yrs in food business"
                value={form.headline}
                onChange={(e) => setForm({ ...form, headline: e.target.value })}
                className={`w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-(--amber) transition
                  ${errors.headline ? "border-(--rust)" : "border-black/10"}`}
              />
              <div className="flex justify-between mt-1">
                {errors.headline ? (
                  <span className="text-xs text-(--rust)">
                    {errors.headline}
                  </span>
                ) : (
                  <span />
                )}
                <span className="text-xs opacity-40">
                  {form.headline.length}/120
                </span>
              </div>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-xs opacity-60 mb-1">
                Years of Experience <span className="text-(--rust)">*</span>
              </label>
              <input
                type="number"
                min="0"
                max="60"
                placeholder="e.g. 8"
                value={form.experience}
                onChange={(e) =>
                  setForm({ ...form, experience: e.target.value })
                }
                className={`w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-(--amber) transition
                  ${errors.experience ? "border-(--rust)" : "border-black/10"}`}
              />
              {errors.experience && (
                <p className="text-xs text-(--rust) mt-1">
                  {errors.experience}
                </p>
              )}
            </div>

            {/* Languages */}
            <div>
              <label className="block text-xs opacity-60 mb-2">
                Languages you can mentor in{" "}
                <span className="text-(--rust)">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {LANGUAGE_OPTIONS.map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => toggle("languages", lang)}
                    className={`px-4 py-1.5 rounded-full border text-sm transition
                      ${
                        form.languages.includes(lang)
                          ? "bg-(--soil) text-(--cream) border-(--soil)"
                          : "border-black/15 hover:border-(--amber)"
                      }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              {errors.languages && (
                <p className="text-xs text-(--rust) mt-2">{errors.languages}</p>
              )}
            </div>
          </div>
        )}

        {/*  Step 1: Expertise  */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-[Fraunces] text-xl font-bold">
                Your areas of expertise
              </h2>
              <p className="text-sm opacity-60 mt-1">Select all that apply.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {EXPERTISE_OPTIONS.map((opt) => {
                const selected = form.expertise.includes(opt);
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => toggle("expertise", opt)}
                    className={`px-4 py-3 rounded-xl border text-sm text-left transition
                      ${
                        selected
                          ? "bg-(--soil) text-(--cream) border-(--soil)"
                          : "border-black/10 hover:border-(--amber) bg-white"
                      }`}
                  >
                    {selected && <span className="mr-1">✓</span>}
                    {opt}
                  </button>
                );
              })}
            </div>

            {errors.expertise && (
              <p className="text-xs text-(--rust)">{errors.expertise}</p>
            )}
            {form.expertise.length > 0 && (
              <p className="text-xs text-(--sage)">
                ✓ {form.expertise.length} area
                {form.expertise.length > 1 ? "s" : ""} selected
              </p>
            )}
          </div>
        )}

        {/*  Step 2: Availability  */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-[Fraunces] text-xl font-bold">
                When are you available?
              </h2>
              <p className="text-sm opacity-60 mt-1">
                Select the days you're typically free for sessions.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {DAYS.map((day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => toggleDay(day)}
                  className={`w-16 h-16 rounded-2xl border text-sm font-semibold transition
                    ${
                      isDaySelected(day)
                        ? "bg-(--amber) text-white border-(--amber) shadow-md"
                        : "border-black/10 hover:border-(--amber) bg-white"
                    }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {errors.availability && (
              <p className="text-xs text-(--rust)">{errors.availability}</p>
            )}
            {form.availability.length > 0 && (
              <p className="text-xs text-(--sage)">
                ✓ Available on: {form.availability.map((a) => a.day).join(", ")}
              </p>
            )}
          </div>
        )}

        {/*  Step 3: Review */}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="font-[Fraunces] text-xl font-bold">
              Review your application
            </h2>

            <div className="rounded-2xl bg-(--light) border border-black/5 p-6 space-y-4 text-sm">
              <div>
                <p className="text-xs opacity-50 mb-0.5">Headline</p>
                <p className="font-medium">{form.headline}</p>
              </div>
              <div>
                <p className="text-xs opacity-50 mb-0.5">Experience</p>
                <p className="font-medium">
                  {form.experience} year{form.experience !== "1" ? "s" : ""}
                </p>
              </div>
              <div>
                <p className="text-xs opacity-50 mb-1">Languages</p>
                <div className="flex flex-wrap gap-2">
                  {form.languages.map((l) => (
                    <span
                      key={l}
                      className="px-3 py-1 rounded-full bg-black/5 text-xs"
                    >
                      {l}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs opacity-50 mb-1">Expertise</p>
                <div className="flex flex-wrap gap-2">
                  {form.expertise.map((e) => (
                    <span
                      key={e}
                      className="px-3 py-1 rounded-full bg-(--amber)/10 text-(--amber) text-xs"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs opacity-50 mb-1">Available Days</p>
                <div className="flex flex-wrap gap-2">
                  {form.availability.map((a) => (
                    <span
                      key={a.day}
                      className="px-3 py-1 rounded-full bg-(--soil)/10 text-(--soil) text-xs font-medium"
                    >
                      {a.day}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {applyError && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
                {applyError}
              </div>
            )}

            <p className="text-xs opacity-50">
              By submitting, you agree to be listed on SkillHub after admin
              approval. Your profile will be reviewed within 2–3 business days.
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-black/5">
          {step > 0 ? (
            <button
              onClick={back}
              disabled={applyStatus === "loading"}
              className="px-6 py-2.5 rounded-full border border-black/15 text-sm hover:border-(--amber) transition"
            >
              ← Back
            </button>
          ) : (
            <div />
          )}

          {step < STEPS.length - 1 ? (
            <button
              onClick={next}
              className="bg-(--soil) text-(--cream) px-7 py-2.5 rounded-full text-sm hover:opacity-80 transition font-medium"
            >
              Continue →
            </button>
          ) : (
            <button
              onClick={submit}
              disabled={applyStatus === "loading"}
              className="bg-(--amber) text-white px-8 py-2.5 rounded-full text-sm hover:opacity-80 transition font-medium disabled:opacity-50 flex items-center gap-2"
            >
              {applyStatus === "loading" ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Submitting…
                </>
              ) : (
                "Submit Application 🚀"
              )}
            </button>
          )}
        </div>
      </div>

      {/* Trust signals */}
      <div className="max-w-2xl mx-auto mt-8 flex flex-wrap justify-center gap-6 text-xs opacity-50 text-center">
        {[
          "✅ Free to apply",
          "🔒 Reviewed within 2–3 business days",
          "🤝 180+ mentors already onboard",
        ].map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </div>
  );
};
export default MentorApply;
