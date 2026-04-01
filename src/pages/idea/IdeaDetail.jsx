import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { clearDetail, fetchIdeaById, selectDetailStatus, selectIdeaDetail } from "../../features/ideas/ideasSlice";
import { selectIsLoggedIn } from "../../features/auth/authSlice";
import { useEffect } from "react";
import { fetchProgressForIdea, selectProgressForIdea, toggleProgressStep } from "../../features/progress/progressSlice";
import { addBookmark, removeBookmark, selectIsBookmarked } from "../../features/bookmarks/bookmarksSlice";

const IdeaDetail = ()=> {
  const { id } = useParams();
  const dispatch   = useDispatch();
  const navigate   = useNavigate();
  const idea       = useSelector(selectIdeaDetail);
  const status     = useSelector(selectDetailStatus);
  const progress   = useSelector(selectProgressForIdea(id));
  const isBookmarked = useSelector(selectIsBookmarked(id));
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(fetchIdeaById(id));
    if (isLoggedIn) {
      dispatch(fetchProgressForIdea(id));
    }
    return () => { dispatch(clearDetail()); };
  }, [dispatch, id, isLoggedIn]);

  const toggleBookmark = () => {
    if (!isLoggedIn) return navigate("/login");
    if (isBookmarked) dispatch(removeBookmark(id));
    else              dispatch(addBookmark(id));
  };

  const startRoadmap = () => {
    if (!isLoggedIn) return navigate("/login");
    dispatch(fetchProgressForIdea(id));
  };

  const handleToggleStep = (stepId) => {
    if (!isLoggedIn) return navigate("/login");
    dispatch(toggleProgressStep({ ideaId: id, stepId }));
  };

  if (status === "loading" || status === "idle") return <Spinner text="Loading idea…" />;
  if (status === "failed" || !idea) return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-24 gap-4">
      <div className="text-5xl">🤔</div>
      <p className="opacity-60">Idea not found.</p>
      <Link to="/business-ideas" className="bg-(--soil) text-(--cream) px-6 py-2 rounded-full text-sm">← Back to Ideas</Link>
    </div>
  );

  const completedSteps = progress?.steps?.filter((s) => s.completed) || [];
  const totalSteps     = idea.roadmapSteps?.length || 0;
  const pct            = totalSteps > 0 ? Math.round((completedSteps.length / totalSteps) * 100) : 0;

  return (
    <div className="min-h-screen bg-(--light) text-(--soil) pt-24 pb-20">
      {/* Hero */}
      <section className="px-4 sm:px-8 lg:px-16 py-12 bg-linear-to-br from-(--cream) to-(--light) border-b border-black/5">
        <Link to="/business-ideas" className="text-sm opacity-50 hover:opacity-80 mb-6 inline-block">← All Ideas</Link>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="text-6xl">{idea.emoji || "💡"}</div>
          <div className="flex-1">
            <div className="inline-block bg-(--amber)/10 text-(--amber) text-xs px-3 py-1 rounded-full mb-3 capitalize">{idea.category}</div>
            <h1 className="font-[Fraunces] text-3xl sm:text-5xl font-black mb-3 leading-tight">{idea.title}</h1>
            <p className="opacity-70 max-w-2xl text-sm sm:text-base mb-5">{idea.description}</p>
            <div className="flex flex-wrap gap-3 text-sm mb-6">
              <span className="bg-(--sage)/10 text-(--sage) px-3 py-1 rounded-full">
                💰 {idea.currency || "₹"}{(idea.minCost || 0).toLocaleString()} – {idea.currency || "₹"}{(idea.maxCost || 0).toLocaleString()}
              </span>
              {(idea.skillTags || idea.skilltages || []).map((t) => (
                <span key={t} className="bg-black/5 px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap">
              {!progress ? (
                <button onClick={startRoadmap} className="bg-(--soil) text-(--cream) px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
                  🗺️ Start Roadmap
                </button>
              ) : (
                <div className="bg-(--amber)/10 text-(--amber) px-5 py-2 rounded-full text-sm font-medium">
                  📊 {pct}% complete
                </div>
              )}
              <button onClick={toggleBookmark}
                className={`px-6 py-3 rounded-full border font-medium transition ${isBookmarked ? "bg-(--amber)/10 border-(--amber) text-(--amber)" : "border-(--soil)/20 hover:border-(--amber)"}`}>
                {isBookmarked ? "🔖 Saved" : "🔖 Save Idea"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 sm:px-8 lg:px-16 py-12 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">
        {/* Roadmap */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-[Fraunces] text-2xl font-bold">🗺️ Roadmap</h2>
            {progress && <span className="text-sm text-(--amber) font-medium">{completedSteps.length}/{totalSteps} steps done</span>}
          </div>
          {progress && totalSteps > 0 && (
            <div className="mb-6">
              <div className="h-2 rounded-full bg-(--soil)/10 mb-1">
                <div className={`h-2 rounded-full transition-all ${progress.isCompleted ? "bg-(--sage)" : "bg-(--amber)"}`} style={{ width: `${pct}%` }} />
              </div>
              {progress.isCompleted && <p className="text-(--sage) text-sm font-medium">🎉 Roadmap completed!</p>}
            </div>
          )}
          {idea.roadmapSteps?.length > 0 ? (
            <div className="space-y-4">
              {idea.roadmapSteps.map((step, i) => {
                const ps   = progress?.steps?.find((s) => s.stepId === step._id || s.stepNumber === step.stepNumber);
                const done = ps?.completed || false;
                return (
                  <div key={step._id || i} className={`bg-white rounded-2xl p-6 border transition ${done ? "border-(--sage)/40 bg-(--sage)/5" : "border-black/5 hover:border-(--amber)/30"}`}>
                    <div className="flex gap-4 items-start">
                      <button onClick={() => handleToggleStep(step._id)}
                        className={`mt-0.5 w-6 h-6 rounded-full shrink-0 border-2 flex items-center justify-center text-xs transition ${done ? "bg-(--sage) border-(--sage) text-white" : "border-(--soil)/30 hover:border-(--amber)"}`}>
                        {done ? "✓" : ""}
                      </button>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className={`font-semibold ${done ? "line-through opacity-60" : ""}`}>{step.title}</h4>
                          <span className="text-xs opacity-30 ml-2">Step {step.stepNumber}</span>
                        </div>
                        <p className="text-sm opacity-70 leading-relaxed">{step.description}</p>
                        {step.tips?.map((tip, j) => (
                          <p key={j} className="text-xs opacity-60 mt-2 flex gap-2"><span className="text-(--amber)">→</span>{tip}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-10 border border-dashed border-(--soil)/20 text-center">
              <div className="text-4xl mb-3">🏗️</div>
              <p className="opacity-50 text-sm">Roadmap steps coming soon.</p>
            </div>
          )}
          {!isLoggedIn && (
            <div className="mt-6 bg-(--amber)/10 border border-(--amber)/30 rounded-2xl p-5 text-center">
              <p className="text-sm opacity-80 mb-3">Sign in to track your progress</p>
              <Link to="/login" className="bg-(--soil) text-(--cream) px-6 py-2 rounded-full text-sm">Sign In to Track Progress</Link>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div className="bg-white rounded-2xl p-6 border border-black/5">
            <h3 className="font-[Fraunces] font-bold mb-4">📋 Quick Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="opacity-60">Category</span><span className="capitalize">{idea.category}</span></div>
              <div className="flex justify-between"><span className="opacity-60">Startup Cost</span><span>{idea.currency || "₹"}{(idea.minCost || 0).toLocaleString()} – {idea.currency || "₹"}{(idea.maxCost || 0).toLocaleString()}</span></div>
              <div className="flex justify-between"><span className="opacity-60">Roadmap Steps</span><span>{totalSteps} steps</span></div>
            </div>
          </div>
          <div className="bg-(--soil) text-(--cream) rounded-2xl p-6">
            <h3 className="font-[Fraunces] font-bold mb-2">🤝 Get Expert Help</h3>
            <p className="text-sm opacity-70 mb-4">Book a session with a mentor in this field.</p>
            <Link to={`/mentors?expertise=${idea.category}`} className="block text-center bg-(--gold) text-(--soil) px-4 py-2 rounded-full text-sm font-semibold">Find a Mentor →</Link>
          </div>
          <div className="bg-(--cream) rounded-2xl p-6 border border-black/5">
            <h3 className="font-[Fraunces] font-bold mb-2">📚 Resources</h3>
            <p className="text-sm opacity-70 mb-3">Guides and videos to help you launch faster.</p>
            <Link to="/resources" className="text-(--amber) text-sm font-medium hover:underline">Browse Resources →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}


export default IdeaDetail;