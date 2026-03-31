import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function Auth() {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  const { login, register, status, error, isLoggedIn, clearError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate("/dashboard", { replace: true });
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    clearError();
  }, [mode, clearError]);

  const handle = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const loading = status === "loading";

  const submit = async (e) => {
    e.preventDefault();

    if (mode === "login") await login(form.email, form.password);
    else await register(form);
    navigate("/dashboard");
  };

  const inputCls = "w-full border border-(--soil)/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-(--amber) transition";

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle,rgba(212,128,10,0.1)_0%,transparent_70%)] px-4 pt-24">
      <div className="w-full max-w-md">
        <Link
          to="/"
          className="block text-center font-[Fraunces] text-2xl font-black text-(--soil) mb-8"
        >
          Entre<span className="text-(--amber)">Skill</span> Hub
        </Link>

        <div className="bg-white rounded-3xl shadow-lg p-8 border border-black/5">
          {/* Tab toggle */}
          <div className="flex rounded-full bg-(--cream) p-1 mb-8">
            {["login", "register"].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 py-2 rounded-full text-sm font-medium transition capitalize ${mode === m ? "bg-(--soil) text-(--cream)" : "opacity-50"}`}
              >
                {m === "login" ? "Sign In" : "Create Account"}
              </button>
            ))}
          </div>

          <form onSubmit={submit} className="space-y-4">
            {mode === "register" && (
              <div>
                <label className="block text-xs font-medium opacity-60 mb-1">
                  Full Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handle}
                  required
                  placeholder="Amara Diallo"
                  className={inputCls}
                />
              </div>
            )}
            <div>
              <label className="block text-xs font-medium opacity-60 mb-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handle}
                required
                placeholder="you@example.com"
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-xs font-medium opacity-60 mb-1">
                Password
              </label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handle}
                required
                placeholder="Min. 6 characters"
                className={inputCls}
              />
            </div>
            {mode === "register" && (
              <div>
                <label className="block text-xs font-medium opacity-60 mb-1">
                  Join as
                </label>
                <div className="flex gap-3">
                  {[
                    { v: "user", label: "🚀 Entrepreneur" },
                    { v: "mentor", label: "🤝 Mentor" },
                  ].map(({ v, label }) => (
                    <label
                      key={v}
                      className={`flex-1 flex items-center gap-2 border rounded-xl px-4 py-3 cursor-pointer text-sm transition ${form.role === v ? "border-(--amber) bg-(--amber)/5" : "border-(--soil)/20"}`}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={v}
                        checked={form.role === v}
                        onChange={handle}
                        className="accent-amber-600"
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </div>
            )}
            {error && (
              <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl border border-red-200">
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-(--soil) text-(--cream) py-3 rounded-full font-medium hover:opacity-90 disabled:opacity-50 transition"
            >
              {loading
                ? "Please wait…"
                : mode === "login"
                  ? "Sign In →"
                  : "Create Account →"}
            </button>
          </form>

          <p className="text-center text-xs opacity-50 mt-6">
            {mode === "login" ? "No account? " : "Already have one? "}
            <button
              onClick={() => setMode(mode === "login" ? "register" : "login")}
              className="text-(--amber) font-medium underline"
            >
              {mode === "login" ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Auth;
