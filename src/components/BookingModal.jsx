import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../features/auth/authSlice";
import { fetchMentorSlots, selectMentorSlots } from "../features/mentors/mentorSlice";
import { useEffect, useState } from "react";
import { bookSession, resetBookStatus, selectBookStatus, selectSessionError } from "../features/sessions/sessionsSlice";

export const FILTERS = [
  { label: "All Mentors", value: "" },
  { label: "🧵 Crafts & Fashion", value: "Crafts" },
  { label: "🍳 Food Business",    value: "Food" },
  { label: "📱 Digital & Tech",   value: "Digital" },
  { label: "📊 Finance & Legal",  value: "Finance" },
  { label: "🌿 Agriculture",      value: "Agriculture" },
];

function BookingModal({ mentor, onClose }) {
  const dispatch   = useDispatch();
  const navigate   = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const slots      = useSelector(selectMentorSlots(mentor._id));
  const bookStatus = useSelector(selectBookStatus);
  const bookError  = useSelector(selectSessionError);
  const [sel, setSel]     = useState(null);
  const [date, setDate]   = useState("");
  const [topic, setTopic] = useState("");

  useEffect(() => { dispatch(fetchMentorSlots(mentor._id)); }, [dispatch, mentor._id]);
  useEffect(() => {
    if (bookStatus === "succeeded") { dispatch(resetBookStatus()); onClose(true); }
  }, [bookStatus, dispatch, mentor._id, onClose]);

  const book = () => {
    if (!isLoggedIn) { navigate("/login"); return; }
    if (!sel || !date) return;
    dispatch(bookSession({ mentorId: mentor._id, slotId: sel._id, date, topic }));
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center px-4 z-50" onClick={() => onClose(false)}>
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-5">
          <div>
            <h3 className="font-[Fraunces] text-xl font-bold">Book a Session</h3>
            <p className="text-sm opacity-60">with {mentor.user?.name || "Mentor"}</p>
          </div>
          <button onClick={() => onClose(false)} className="opacity-40 hover:opacity-80 text-lg">✕</button>
        </div>
        {slots.length === 0 ? (
          <p className="text-center py-8 opacity-60 text-sm">No available slots right now.</p>
        ) : (
          <>
            <div className="mb-5">
              <label className="block text-xs opacity-60 mb-2">Select Slot</label>
              <div className="flex flex-wrap gap-2">
                {slots.map((s) => (
                  <button key={s._id} onClick={() => setSel(s)}
                    className={`px-3 py-1.5 rounded-full border text-sm transition ${sel?._id === s._id ? "bg-(--soil) text-(--cream) border-(--soil)" : "border-(--soil)/20 hover:border-(--amber)"}`}>
                    {s.day}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-xs opacity-60 mb-1.5">Session Date *</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full border border-(--soil)/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-(--amber)" />
            </div>
            <div className="mb-5">
              <label className="block text-xs opacity-60 mb-1.5">Topic (optional)</label>
              <input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="e.g. Help me price my products"
                className="w-full border border-(--soil)/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-(--amber)" />
            </div>
            {bookError && <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl border border-red-200 mb-4">{bookError}</div>}
            <button onClick={book} disabled={!sel || !date || bookStatus === "loading"}
              className="w-full bg-(--soil) text-(--cream) py-3 rounded-full font-medium hover:opacity-90 disabled:opacity-50 transition">
              {bookStatus === "loading" ? "Booking…" : "Confirm Booking →"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default BookingModal;