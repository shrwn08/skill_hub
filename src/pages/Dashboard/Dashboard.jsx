import React, { useEffect } from 'react'
import { useRequireAuth } from '../../hooks/useRequireAuth';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../features/auth/authSlice';
import { fetchAllProgress, selectAllProgress, selectProgressStatus } from '../../features/progress/progressSlice';
import { fetchBookmarks, selectBookmarks } from '../../features/bookmarks/bookmarksSlice';
import { fetchMySessions, selectSessions, selectUpcoming } from '../../features/sessions/sessionsSlice';
import Spinner from '../../components/Spinner';

const Dashboard = () => {
    const {initialized, isLoggedIn} = useRequireAuth();
    const dispatch  = useDispatch();
    const user      = useSelector(selectUser);
    const progress  = useSelector(selectAllProgress);
    const progStatus= useSelector(selectProgressStatus);
    const bookmarks = useSelector(selectBookmarks);
    const upcoming  = useSelector(selectUpcoming);
    const sessions  = useSelector(selectSessions);

     useEffect(() => {
    if (!isLoggedIn) return;
    dispatch(fetchAllProgress());
    dispatch(fetchBookmarks());
    dispatch(fetchMySessions());
  }, [dispatch, isLoggedIn]);

  if (!initialized || progStatus === "loading") return <Spinner text="Loading your dashboard…" />;

    const completed = progress.filter((p) => p.isCompleted).length;

  const stats = [
    { emoji: "🗺️", label: "Ideas in Progress", value: progress.length,  color: "text-(--amber)" },
    { emoji: "✅", label: "Completed Roadmaps", value: completed,         color: "text-(--sage)" },
    { emoji: "🔖", label: "Saved Ideas",         value: bookmarks.length, color: "text-(--rust)" },
    { emoji: "🤝", label: "Sessions Booked",     value: sessions.length,  color: "text-(--soil)" },
  ];

return (
    <div className="min-h-screen bg-(--light) pt-24 pb-20 px-4 sm:px-8 lg:px-16 text-(--soil)">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <div>
          <p className="text-xs uppercase text-(--amber) tracking-widest mb-1">Dashboard</p>
          <h1 className="font-[Fraunces] text-3xl sm:text-4xl font-black">👋 Welcome back, {user?.name?.split(" ")[0]}!</h1>
          <p className="opacity-60 text-sm mt-1">{user?.email}</p>
        </div>
        <div className="flex gap-2">
          <Link to="/profile" className="border border-(--soil)/20 px-4 py-2 rounded-full text-sm hover:border-(--amber) transition">Edit Profile</Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-2xl p-5 border border-black/5 shadow-sm">
            <div className="text-2xl mb-1">{s.emoji}</div>
            <div className={`font-[Fraunces] text-3xl font-black ${s.color}`}>{s.value}</div>
            <p className="text-xs opacity-60 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Roadmaps */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-[Fraunces] text-xl font-bold">Active Roadmaps</h2>
            <Link to="/business-ideas" className="text-sm text-(--amber) hover:underline">Browse ideas →</Link>
          </div>
          {progress.length === 0 ? (
            <div className="bg-white rounded-2xl border border-dashed border-(--soil)/20 p-10 text-center">
              <div className="text-4xl mb-3">🗺️</div>
              <p className="opacity-60 text-sm mb-4">No roadmaps started yet.</p>
              <Link to="/business-ideas" className="bg-(--soil) text-(--cream) px-6 py-2 rounded-full text-sm">Find Your Idea →</Link>
            </div>
          ) : (
            <div className="space-y-3">
              {progress.map((rec) => {
                const done  = rec.steps?.filter((s) => s.completed).length || 0;
                const total = rec.steps?.length || 1;
                const pct   = Math.round((done / total) * 100);
                return (
                  <Link key={rec._id} to={`/idea/${rec.idea?._id || rec.idea}`}
                    className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-black/5 hover:border-(--amber) hover:shadow-md transition">
                    <div className="text-3xl">{rec.idea?.emoji || "💡"}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-medium text-sm truncate">{rec.idea?.title || "Business Idea"}</h4>
                        <span className={`text-xs font-medium ${rec.isCompleted ? "text-(--sage)" : "text-(--amber)"}`}>
                          {rec.isCompleted ? "✅ Done" : `${pct}%`}
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-(--soil)/10">
                        <div className={`h-1.5 rounded-full transition-all ${rec.isCompleted ? "bg-(--sage)" : "bg-(--amber)"}`} style={{ width: `${pct}%` }} />
                      </div>
                      <p className="text-xs opacity-40 mt-1">{done}/{total} steps</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-[Fraunces] text-xl font-bold">Upcoming Sessions</h2>
              <Link to="/sessions" className="text-sm text-(--amber) hover:underline">View all →</Link>
            </div>
            {upcoming.length === 0 ? (
              <div className="bg-white rounded-2xl border border-dashed border-(--soil)/20 p-6 text-center">
                <div className="text-3xl mb-2">🤝</div>
                <p className="text-xs opacity-60 mb-3">No upcoming sessions</p>
                <Link to="/mentors" className="text-(--amber) text-sm hover:underline">Find a mentor →</Link>
              </div>
            ) : (
              <div className="space-y-3">
                {upcoming.slice(0, 3).map((s) => (
                  <div key={s._id} className="bg-white rounded-2xl p-4 border border-black/5">
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-sm font-medium">{s.mentor?.user?.name || "Mentor"}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${s.status === "confirmed" ? "bg-green-50 text-green-600" : "bg-yellow-50 text-yellow-600"}`}>{s.status}</span>
                    </div>
                    <p className="text-xs opacity-50">{new Date(s.date).toLocaleDateString()} · {s.startTime}–{s.endTime}</p>
                    {s.topic && <p className="text-xs mt-1 opacity-70">{s.topic}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-[Fraunces] text-xl font-bold">Saved Ideas</h2>
              <Link to="/bookmarks" className="text-sm text-(--amber) hover:underline">View all →</Link>
            </div>
            {bookmarks.length === 0 ? (
              <div className="bg-white rounded-2xl border border-dashed border-(--soil)/20 p-6 text-center">
                <div className="text-3xl mb-2">🔖</div>
                <p className="text-xs opacity-60">No saved ideas yet</p>
              </div>
            ) : (
              <div className="space-y-2">
                {bookmarks.slice(0, 4).map((b) => (
                  <Link key={b._id} to={`/idea/${b.idea?._id}`}
                    className="flex items-center gap-3 bg-white rounded-xl p-3 border border-black/5 hover:border-(--amber) transition">
                    <span className="text-xl">{b.idea?.emoji || "💡"}</span>
                    <span className="text-sm font-medium truncate">{b.idea?.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;