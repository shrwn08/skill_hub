import React, { useEffect, useState } from "react";
import MentorCard from "../../components/MentorCard";
import MentorCTA from "../../components/MentorCTA";
import { mentors as staticMentors } from "../../data/mentors";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMentors, selectMentorFilters, selectMentors, selectMentorStatus, setMentorFilter } from "../../features/mentors/mentorSlice";
import { selectIsLoggedIn } from "../../features/auth/authSlice";
import BookingModal, {FILTERS } from "../../components/BookingModal"
import Spinner from "../../components/Spinner";



function Mentors() {
  const [searchParams] = useSearchParams();
  const dispatch   = useDispatch();
  const navigate   = useNavigate();
  const mentors    = useSelector(selectMentors);
  const status     = useSelector(selectMentorStatus);
  const filters    = useSelector(selectMentorFilters);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [booking, setBooking] = useState(null);
  const [toast, setToast]     = useState(false);

  useEffect(() => {
    const exp = searchParams.get("expertise") || "";
    dispatch(setMentorFilter({ expertise: exp }));
  }, [dispatch, searchParams]);

  useEffect(() => {
    dispatch(fetchMentors({ expertise: filters.expertise, search: filters.search }));
  }, [dispatch, filters.expertise, filters.search]);

  const handleClose = (booked) => {
    setBooking(null);
    if (booked) { setToast(true); setTimeout(() => setToast(false), 4000); }
  };

  return (
    <div className="pt-24 bg-(--light) text-(--soil)">
      <section className="px-6 md:px-10 lg:px-16 pb-12 pt-8 bg-linear-to-br from-(--cream) to-(--light) border-b border-black/5">
        <div className="inline-block bg-[rgba(212,128,10,0.12)] text-(--amber) text-xs px-4 py-1 rounded-full mb-4 uppercase tracking-wider">🤝 Verified Experts</div>
        <h1 className="font-[Fraunces] text-3xl md:text-5xl font-black leading-tight mb-4 max-w-xl">
          Learn from people who've <em className="italic text-(--amber) font-light">done</em> it
        </h1>
        <p className="max-w-xl opacity-70 text-base md:text-lg">Every mentor is verified with real experience. Book a session in minutes.</p>
      </section>

      <div className="flex flex-wrap gap-6 px-6 md:px-10 lg:px-16 py-5 border-b border-black/5 bg-white text-sm opacity-70">
        {[["180+", "Verified mentors"], ["4.8★", "Average rating"], ["1,200+", "Sessions completed"]].map(([n, l]) => (
          <div key={l}><strong className="text-(--amber) text-base">{n}</strong> {l}</div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2 px-6 md:px-10 lg:px-16 py-5 border-b border-black/5">
        {FILTERS.map((f) => (
          <button key={f.value} onClick={() => dispatch(setMentorFilter({ expertise: f.value }))}
            className={`px-4 py-1.5 rounded-full text-sm transition ${filters.expertise === f.value ? "bg-(--soil) text-(--cream)" : "border hover:border-(--amber)"}`}>
            {f.label}
          </button>
        ))}
        <div className="relative mt-2 sm:mt-0 sm:ml-auto">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40">🔍</span>
          <input type="text" placeholder="Search mentors…" value={filters.search}
            onChange={(e) => dispatch(setMentorFilter({ search: e.target.value }))}
            className="w-full sm:w-64 pl-8 pr-4 py-1.5 border rounded-full text-sm outline-none focus:border-(--amber)" />
        </div>
      </div>

      <div className="px-6 md:px-10 lg:px-16 py-12">
        {status === "loading" ? <Spinner text="Loading mentors…" /> :
        !Array.isArray(mentors) ||  mentors.length === 0 ? (
          <div className="text-center py-20 opacity-60"><div className="text-5xl mb-4">🔍</div><p>No mentors found.</p></div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor) => (
              <div key={mentor._id} className="bg-white rounded-2xl p-6 border border-black/5 hover:-translate-y-1 hover:shadow-lg transition">
                <div className="flex gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-(--amber)/10 flex items-center justify-center text-2xl shrink-0">🧑‍💼</div>
                  <div>
                    <h3 className="font-semibold">{mentor.user?.name || "Mentor"}</h3>
                    <p className="text-sm opacity-50">{mentor.headline || ""}</p>
                    {mentor.avgRating > 0 && <div className="text-sm text-(--amber)">⭐ {mentor.avgRating} <span className="opacity-50 text-(--soil)">({mentor.totalReviews} reviews)</span></div>}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {(mentor.expertise || []).slice(0, 4).map((t, i) => <span key={i} className="text-xs px-3 py-1 rounded-full bg-black/5">{t}</span>)}
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-black/5">
                  <span className="text-xs opacity-50">{mentor.experience > 0 ? `${mentor.experience} yrs` : ""}</span>
                  <button onClick={() => { if (!isLoggedIn) { navigate("/login"); return; } setBooking(mentor); }}
                    className="bg-(--soil) text-white px-4 py-1.5 rounded-full text-xs hover:opacity-80 transition">Book Session</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <MentorCTA />

      {booking && <BookingModal mentor={booking} onClose={handleClose} />}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-(--sage) text-white px-6 py-3 rounded-2xl shadow-xl z-50 text-sm">
          ✅ Session booked! <Link to="/sessions" className="underline font-medium">View in My Sessions</Link>
        </div>
      )}
    </div>
  );
}

export default Mentors;