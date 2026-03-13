import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--light)]/95 backdrop-blur-md border-b border-[var(--soil)]/10">
      <div className="flex justify-between items-center px-4 sm:px-8 lg:px-16 py-4">

        {/* Logo */}
        <NavLink to="/" className="font-[Fraunces] text-xl font-black text-[var(--soil)]">
          Entre<span className="text-[var(--amber)]">Skill</span> Hub
        </NavLink>

        {/* Hamburger for mobile */}
        <button
          className="lg:hidden flex items-center p-2 text-[var(--soil)]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop / Mobile Menu */}
        <ul className={`flex flex-col lg:flex-row gap-2 lg:gap-4 list-none lg:items-center absolute lg:static top-full left-0 w-full lg:w-auto bg-(--light)/95 lg:bg-transparent transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 py-4" : "max-h-0 lg:max-h-full"}`}>
          <li>
            <NavLink
              to="/how-it-works"
              className={({ isActive }) =>
                isActive
                  ? "bg-(--cream) text-(--amber) px-4 py-1 rounded-full border border-(--amber)/25 block text-center lg:inline-block"
                  : "opacity-60 px-4 py-1 rounded-full block text-center lg:inline-block"
              }
              onClick={() => setIsOpen(false)}
            >
              How it works
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/business-ideas"
              className="opacity-60 px-4 py-1 rounded-full block text-center lg:inline-block"
              onClick={() => setIsOpen(false)}
            >
              Business Ideas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mentors"
              className="opacity-60 px-4 py-1 rounded-full block text-center lg:inline-block"
              onClick={() => setIsOpen(false)}
            >
              Mentors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resources"
              className="opacity-60 px-4 py-1 rounded-full block text-center lg:inline-block"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className="bg-(--soil) text-(--cream) px-4 py-1 rounded-full block text-center lg:inline-block"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;