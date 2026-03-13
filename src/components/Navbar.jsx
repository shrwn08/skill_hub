const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-6 bg-white/90 backdrop-blur border-b border-black/10">

      <div className="font-[Fraunces] font-black text-xl">
        Entre<span className="text-(--amber)">Skill</span> Hub
      </div>

      <ul className="flex gap-10 text-sm font-medium opacity-70">
        <li><a href="#">How it works</a></li>
        <li><a href="#">Business Ideas</a></li>
        <li><a href="#">Mentors</a></li>
        <li><a href="#">Resources</a></li>
        <li>
          <a className="bg-(--soil) text-(--cream) px-5 py-2 rounded-full">
            Get Started
          </a>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar