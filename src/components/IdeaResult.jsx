const IdeaResult = ({ icon, title, subtitle, percent }) => (
  <div className="flex items-center gap-3 p-2 rounded-md bg-(--soil)/5 mb-1">
    <span className="text-lg">{icon}</span>
    <div className="flex-1">
      <h5 className="text-xs font-medium">{title}</h5>
      <p className="text-[0.7rem] opacity-50">{subtitle}</p>
    </div>
    <div className="w-20">
      <div className="h-1 bg-(--soil)/10 rounded mb-1">
        <div className="h-1 bg-(--amber) rounded" style={{ width: percent }}></div>
      </div>
      <div className="text-[0.65rem] text-(--amber) font-medium text-right">{percent}</div>
    </div>
  </div>
);

export default IdeaResult;