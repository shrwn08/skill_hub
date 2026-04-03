import React, { useState } from "react";
import { post } from "../../api/client";
import PageHero from "../../components/PageHero";
import { Link } from "react-router-dom";


const SUBJECTS = [
  { value: "get_started",    label: "🚀 Get Started" },
  { value: "mentor_inquiry", label: "🤝 Mentor Inquiry" },
  { value: "general",        label: "💬 General Question" },
  { value: "feedback",       label: "💡 Feedback" },
  { value: "report",         label: "🚨 Report Issue" },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "get_started",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handle = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));


   const submit = async (e) => {
    e.preventDefault();
    setStatus("loading"); setError("");
    try {
      await post("/contact", form);
      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "get_started", message: "" });
    } catch (err) { setStatus("idle"); setError(err.message); }
  };

  return (
    <div className="min-h-screen bg-(--light) text-(--soil) pt-24 pb-20">
      <PageHero
        badge="💌 Get in Touch"
        title={
          <>
            We'd love to{" "}
            <em className="italic font-light text-(--amber)">hear</em> from you
          </>
        }
        subtitle="Whether you're just getting started, have a question, or want to become a mentor — we're here."
      />

      <div className="px-4 sm:px-8 lg:px-16 py-12 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/5 shadow-sm">
          <h2 className="font-[Fraunces] text-xl font-bold mb-6">
            Send us a message
          </h2>
          {status === "success" ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-[Fraunces] text-xl font-bold mb-2">
                Message Sent!
              </h3>
              <p className="opacity-60 text-sm mb-6">
                We'll get back to you soon.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="bg-(--soil) text-(--cream) px-6 py-2 rounded-full text-sm"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs opacity-60 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handle}
                    required
                    placeholder="Amara Diallo"
                    className="w-full border border-(--soil)/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-(--amber) transition"
                  />
                </div>
                <div>
                  <label className="block text-xs opacity-60 mb-1.5">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handle}
                    required
                    placeholder="you@example.com"
                    className="w-full border border-(--soil)/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-(--amber) transition"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs opacity-60 mb-1.5">
                    Phone (optional)
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handle}
                    placeholder="+91 xxxxx xxxxx"
                    className="w-full border border-(--soil)/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-(--amber) transition"
                  />
                </div>
                <div>
                  <label className="block text-xs opacity-60 mb-1.5">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handle}
                    className="w-full border border-(--soil)/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-(--amber) bg-white"
                  >
                    {SUBJECTS.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs opacity-60 mb-1.5">
                  Message * (min 10 chars)
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handle}
                  required
                  minLength={10}
                  rows={4}
                  placeholder="Tell us how we can help…"
                  className="w-full border border-(--soil)/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-(--amber) resize-none transition"
                />
              </div>
              {error && (
                <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl border border-red-200">
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-(--soil) text-(--cream) py-3 rounded-full font-medium hover:opacity-90 disabled:opacity-50 transition"
              >
                {status === "loading" ? "Sending…" : "Send Message →"}
              </button>
            </form>
          )}
        </div>

        <div className="space-y-5">
          {[
            {
              emoji: "🚀",
              title: "Just Getting Started?",
              desc: "Take our free skills quiz and get matched to your perfect business idea in 5 minutes.",
              link: "/",
              label: "Take the Quiz",
            },
            {
              emoji: "🤝",
              title: "Want to Become a Mentor?",
              desc: "Share your expertise and earn by helping entrepreneurs in your field.",
              link: "/mentor-apply",
              label: "Apply as Mentor",
            },
            {
              emoji: "📚",
              title: "Need Learning Resources?",
              desc: "Browse videos, guides and checklists curated by experts.",
              link: "/resources",
              label: "Browse Resources",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-2xl p-6 border border-black/5"
            >
              <div className="text-3xl mb-3">{c.emoji}</div>
              <h3 className="font-[Fraunces] font-bold mb-1">{c.title}</h3>
              <p className="text-sm opacity-60 mb-3">{c.desc}</p>
              <Link
                to={c.link}
                className="text-(--amber) text-sm font-medium hover:underline"
              >
                {c.label} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
