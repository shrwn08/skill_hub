const RoadmapStep = ({ done, current, title, subtitle }) => (
  <div className="flex gap-3 items-start mb-3">
    <div className="flex flex-col items-center">
      <div className={`w-5 h-5 rounded-full border-2 border-(--amber) flex items-center justify-center text-[0.55rem] ${done ? 'bg-(--amber) text-white' : current ? 'bg-(--amber)/10 text-(--amber)' : ''}`}>
        {done ? '✓' : current ? '->' : ''}
      </div>
      <div className="w-px h-5 bg-(--amber)/20"></div>
    </div>
    <div className="text-[0.82rem] pt-0.5">
      <strong className="block font-medium">{title}</strong>
      <span className={`${current ? 'text-(--amber)' : 'opacity-50'}`}>{subtitle}</span>
    </div>
  </div>
);


export default RoadmapStep;