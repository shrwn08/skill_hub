import { useEffect } from "react";
import IdeaCard from "../../components/IdeaCard";
import FilterBar from "../../components/FilterBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchIdeas, selectCurrentPage, selectFilters, selectIdeas, selectIdeasPages, selectIdeasStatus, setFilter, setPage } from "../../features/ideas/ideasSlice";
import Spinner from "../../components/Spinner";

 const BusinessIdeas = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ideas       = useSelector(selectIdeas);
  const status      = useSelector(selectIdeasStatus);
  const filters     = useSelector(selectFilters);
  const pages       = useSelector(selectIdeasPages);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchIdeas({ category: filters.category, search: filters.search, page: currentPage }));
  }, [dispatch, filters.category, filters.search, currentPage]);

  const handleFilter = (category) => dispatch(setFilter({ category }));

  return (
    <div className="pt-0">
      <section className="pt-32 px-4 sm:px-8 lg:px-12 pb-12 bg-linear-to-br from-(--cream) to-(--light)">
        <p className="text-xs uppercase text-(--amber) mb-4 tracking-widest">60+ curated concepts</p>
        <h1 className="font-[Fraunces] text-4xl sm:text-5xl font-black mb-4">
          Find the idea that <span className="italic text-(--amber)">fits</span> your skills
        </h1>
        <p className="opacity-60 max-w-xl text-sm sm:text-base mb-6">Browse micro-business ideas with roadmaps and startup cost estimates.</p>
        <div className="relative max-w-md">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40">🔍</span>
          <input type="text" placeholder="Search ideas…" value={filters.search}
            onChange={(e) => dispatch(setFilter({ search: e.target.value }))}
            className="w-full pl-10 pr-4 py-3 border border-(--soil)/20 rounded-full text-sm outline-none focus:border-(--amber) bg-white transition" />
        </div>
      </section>

      <FilterBar filter={filters.category} setFilter={handleFilter} />

      {status === "loading" ? (
        <Spinner text="Finding ideas for you…" />
      ) : ideas.length === 0 ? (
        <div className="text-center py-20 opacity-60 px-4">
          <div className="text-5xl mb-4">🤔</div>
          <p>No ideas found. Try a different filter or search term.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-12 py-12">
          {ideas.map((idea) => (
            <IdeaCard key={idea._id || idea.id} idea={idea}
              onClick={() => navigate(`/idea/${idea._id || idea.id}`)} />
          ))}
        </div>
      )}

      {pages > 1 && (
        <div className="flex justify-center gap-2 pb-12">
          {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
            <button key={n} onClick={() => dispatch(setPage(n))}
              className={`w-9 h-9 rounded-full text-sm font-medium transition ${currentPage === n ? "bg-(--soil) text-(--cream)" : "border border-(--soil)/20 hover:border-(--amber)"}`}>
              {n}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default BusinessIdeas;