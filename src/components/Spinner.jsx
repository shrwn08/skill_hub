function Spinner({ text = "Loading…" }) {
  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <p className="text-(--amber) animate-pulse text-lg">{text}</p>
    </div>
  );
}

export default Spinner;