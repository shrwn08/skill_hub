import { NavLink} from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const { user, signOut } = useAuth();
  const dispatch = useDispatch();



  
  const close = () => setOpen(false)

  const lnk = ({ isActive }) =>
    `px-4 py-1 rounded-full block text-center lg:inline-block transition ${
      isActive
        ? "bg-(--cream) text-(--amber) border border-(--amber)/25"
        : "opacity-60 hover:opacity-100"
    }`;

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-(--light)/95 backdrop-blur-md border-b border-(--soil)/10">
      <div className="flex justify-between items-center px-4 sm:px-8 lg:px-16 py-4">
        <NavLink
          to="/"
          className="font-[Fraunces] text-xl font-black text-(--soil)"
        >
          Entre<span className="text-(--amber)">Skill</span> Hub
        </NavLink>

        {/* hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {!open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <ul
          className={`flex flex-col lg:flex-row gap-2 lg:gap-1 list-none lg:items-center
          absolute lg:static top-full inset-x-0 bg-(--light)/95 lg:bg-transparent
          px-4 lg:px-0 transition-all duration-300 overflow-hidden
          ${!open ? "max-h-screen py-4 border-b border-black/5" : "max-h-0 lg:max-h-full"}`}
        >
          <li>
            <NavLink to="/how-it-works" className={lnk} onClick={close}>
              How it works
            </NavLink>
          </li>
          <li>
            <NavLink to="/business-ideas" className={lnk} onClick={close}>
              Business Ideas
            </NavLink>
          </li>
          <li>
            <NavLink to="/mentors" className={lnk} onClick={close}>
              Mentors
            </NavLink>
          </li>
          <li>
            <NavLink to="/resources" className={lnk} onClick={close}>
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={lnk} onClick={close}>
              Contact
            </NavLink>
          </li>

          {user ? (
            <>
              <li>
                <NavLink to="/dashboard" className={lnk} onClick={close}>
                  👋 {user.name?.split(" ")[0]}
                </NavLink>
              </li>
              <li>
                <button
                  onClick={() => {
                    dispatch(logout());
                    close();
                  }}
                  className="bg-(--soil) text-(--cream) px-4 py-1 rounded-full text-sm hover:opacity-80 transition block w-full lg:w-auto text-center"
                >
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            <li>
              <NavLink
                to="/signup"
                className="bg-(--soil) text-(--cream) px-4 py-1 rounded-full block text-center lg:inline-block hover:opacity-80 transition"
                onClick={close}
              >
                Get Started
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
