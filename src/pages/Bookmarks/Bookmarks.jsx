import React, { useEffect } from "react";
import { useRequireAuth } from "../../hooks/useRequireAuth";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBookmarks,
  removeBookmark,
  selectBookmarks,
  selectBookmarkStatus,
} from "../../features/bookmarks/bookmarksSlice";
import Spinner from "../../components/Spinner";

const Bookmarks = () => {
  const { initialized } = useRequireAuth();
  const dispatch = useDispatch();
  const bookmarks = useSelector(selectBookmarks);
  const status = useSelector(selectBookmarkStatus);

  useEffect(() => {
    dispatch(fetchBookmarks());
  }, [dispatch]);

  if (!initialized || status === "loading") return <Spinner text="Loading bookmarks…" />;

  return (
    <div className="min-h-screen bg-(--light) text-(--soil) pt-24 pb-20 px-4 sm:px-8 lg:px-16">
      <div className="mb-8">
        <p className="text-xs uppercase text-(--amber) tracking-widest mb-1">
          Saved
        </p>
        <h1 className="font-[Fraunces] text-3xl font-black">🔖 Saved Ideas</h1>
        <p className="opacity-60 text-sm mt-1">
          {bookmarks.length} idea{bookmarks.length !== 1 ? "s" : ""} saved
        </p>
      </div>

      {bookmarks.length === 0 ? (
        <div className="bg-white rounded-3xl border border-dashed border-(--soil)/20 p-16 text-center">
          <div className="text-5xl mb-4">🔖</div>
          <p className="opacity-60 mb-4">No saved ideas yet.</p>
          <Link
            to="/business-ideas"
            className="bg-(--soil) text-(--cream) px-6 py-2 rounded-full text-sm"
          >
            Browse Ideas →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {bookmarks.map((bm) => {
            const idea = bm.idea;
            if (!idea) return null;
            return (
              <div
                key={bm._id}
                className="bg-white rounded-2xl border border-black/5 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-4xl">{idea.emoji || "💡"}</span>
                    <button
                      onClick={() => dispatch(removeBookmark(idea._id))}
                      className="text-xs opacity-40 hover:text-red-500 hover:opacity-100 transition"
                      title="Remove"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="inline-block bg-(--amber)/10 text-(--amber) text-xs px-2 py-0.5 rounded-full mb-2 capitalize">
                    {idea.category}
                  </div>
                  <h3 className="font-[Fraunces] font-bold text-lg mb-2">
                    {idea.title}
                  </h3>
                  <p className="text-sm opacity-60 mb-4 leading-relaxed line-clamp-2">
                    {idea.description}
                  </p>
                  <Link
                    to={`/idea/${idea._id}`}
                    className="block text-center bg-(--soil) text-(--cream) py-2 rounded-full text-sm font-medium hover:opacity-80 transition"
                  >
                    View Roadmap →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
