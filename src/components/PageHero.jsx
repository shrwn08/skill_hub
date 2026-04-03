const PageHero =({ badge, title, subtitle, children })=> {
  return (
    <section className="px-4 sm:px-8 lg:px-16 pt-10 pb-12 bg-linear-to-br from-(--cream) to-(--light) border-b border-black/5">
      {badge && (
        <div className="inline-block bg-(--amber)/10 text-(--amber) text-xs px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          {badge}
        </div>
      )}
      <h1 className="font-[Fraunces] text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-3">
        {title}
      </h1>
      {subtitle && <p className="opacity-60 max-w-xl text-sm sm:text-base">{subtitle}</p>}
      {children}
    </section>
  );
}

export default PageHero;