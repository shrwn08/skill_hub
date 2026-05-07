import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchCurrentUser,
  logout,
  selectAuthStatus,
  selectUser,
} from "../../features/auth/authSlice";
import { useRequireAuth } from "../../hooks/useRequireAuth";
import { put } from "../../api/client";
import Spinner from "../../components/Spinner";

const SKILL_SUGGESTIONS = [
  "Business Planning",
  "Marketing",
  "Finance",
  "E-commerce",
  "Social Media",
  "Product Design",
  "Sales",
  "Operations",
  "Legal",
  "Agriculture",
  "Manufacturing",
  "Education",
];



const TABS = ["Profile", "Security"];

const Profile = () => {
  const { initialized } = useRequireAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const authStatus = useSelector(selectAuthStatus);

  const [tab, setTab] = useState(0);
  const [saving, setSaving] = useState(false);
  const [pwSaving, setPwSaving] = useState(false);
  const [toast, setToast] = useState(null);

  /*  Profile form state  */
  const [form, setForm] = useState({
    name: "",
    bio: "",
    location: "",
    phone: "",
    skills: [],
    interests: [],
  });
  const [skillInput, setSkillInput] = useState("");
  const [interestInput, setInterestInput] = useState("");
  const [profileErrors, setProfileErrors] = useState({});

  /*  Password form state  */
  const [pwForm, setPwForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [pwErrors, setPwErrors] = useState({});
  const [showPw, setShowPw] = useState({
    cur: false,
    next: false,
    confirm: false,
  });

  /* Populate form from Redux user */
  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        bio: user.bio || "",
        location: user.location || "",
        phone: user.phone || "",
        skills: user.skills || [],
        interests: user.interests || [],
      });
    }
  }, [user]);

  const showToast = (type, msg) => {
    setToast({ type, msg });
    setTimeout(() => setToast(null), 3500);
  };

  if (!initialized || authStatus === "loading")
    return <Spinner text="Loading profile…" />;

  /*  Helpers  */

  const addTag = (field, value, setter) => {
    const v = value.trim();
    if (!v || form[field].includes(v)) return;
    setForm((prev) => ({ ...prev, [field]: [...prev[field], v] }));
    setter("");
  };

  const removeTag = (field, value) =>
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].filter((x) => x !== value),
    }));

  const toggleSuggestion = (value) => {
    setForm((prev) => ({
      ...prev,
      skills: prev.skills.includes(value)
        ? prev.skills.filter((s) => s !== value)
        : [...prev.skills, value],
    }));
  };

  /*  Validate profile  */
  const validateProfile = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (form.name.length > 80) e.name = "Max 80 characters.";
    if (form.bio.length > 500) e.bio = "Max 500 characters.";
    setProfileErrors(e);
    return Object.keys(e).length === 0;
  };

  /*  Save profile */
  const saveProfile = async () => {
    if (!validateProfile()) return;
    setSaving(true);
    try {
      await put("/auth/update-profile", {
        name: form.name.trim(),
        bio: form.bio.trim(),
        location: form.location.trim(),
        phone: form.phone.trim(),
        skills: form.skills,
        interests: form.interests,
      });
      await dispatch(fetchCurrentUser());
      showToast("success", "Profile updated successfully!");
    } catch (err) {
      showToast("error", err.message || "Failed to update profile.");
    } finally {
      setSaving(false);
    }
  };

  /*  Validate password */
  const validatePw = () => {
    const e = {};
    if (!pwForm.currentPassword)
      e.currentPassword = "Current password is required.";
    if (pwForm.newPassword.length < 6) e.newPassword = "Min 6 characters.";
    if (pwForm.newPassword !== pwForm.confirmPassword)
      e.confirmPassword = "Passwords do not match.";
    setPwErrors(e);
    return Object.keys(e).length === 0;
  };

  /*  Change password  */
  const changePassword = async () => {
    if (!validatePw()) return;
    setPwSaving(true);
    try {
      await put("/auth/change-password", {
        currentPassword: pwForm.currentPassword,
        newPassword: pwForm.newPassword,
      });
      showToast("success", "Password changed! Please log in again.");
      setPwForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
      setTimeout(() => {
        dispatch(logout());
        navigate("/login");
      }, 2000);
    } catch (err) {
      showToast("error", err.message || "Failed to change password.");
    } finally {
      setPwSaving(false);
    }
  };

  
  /*  Role badge  */
  const roleBadge = {
    admin: { label: "Admin", bg: "bg-(--rust)/10  text-(--rust)" },
    mentor: { label: "Mentor", bg: "bg-(--sage)/10  text-(--sage)" },
    user: { label: "Member", bg: "bg-(--amber)/10 text-(--amber)" },
  }[user?.role || "user"];


  return (
    <div className="min-h-screen bg-(--light) text-(--soil) pt-24 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/*  Header card  */}
        <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-6 sm:p-8 mb-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
          {/* Avatar */}
          <div className="w-16 h-16 rounded-full bg-(--amber)/15 flex items-center justify-center text-2xl font-bold text-(--amber) shrink-0 select-none">
            {user?.name?.[0]?.toUpperCase() || "?"}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-0.5">
              <h1 className="font-[Fraunces] text-2xl font-black truncate">
                {user?.name}
              </h1>
              <span
                className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${roleBadge.bg}`}
              >
                {roleBadge.label}
              </span>
            </div>
            <p className="text-sm opacity-50">{user?.email}</p>
            {user?.location && (
              <p className="text-xs opacity-40 mt-0.5">📍 {user.location}</p>
            )}
          </div>
          <button
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
            className="shrink-0 text-xs border border-(--rust)/30 text-(--rust) px-4 py-1.5 rounded-full hover:bg-(--rust)/5 transition"
          >
            Sign Out
          </button>
        </div>

        {/*  Tabs  */}
        <div className="flex gap-1 bg-white rounded-2xl border border-black/5 p-1.5 mb-6 w-fit">
          {TABS.map((t, i) => (
            <button
              key={t}
              onClick={() => setTab(i)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition
                ${tab === i ? "bg-(--soil) text-(--cream)" : "hover:bg-black/5 opacity-60"}`}
            >
              {t}
            </button>
          ))}
        </div>

        {/*  TAB 0 : Profile  */}
        {tab === 0 && (
          <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-6 sm:p-8 space-y-6">
            <h2 className="font-[Fraunces] text-xl font-bold">Edit Profile</h2>

            {/* Name */}
            <Field label="Full Name" required error={profileErrors.name}>
              <input
                type="text"
                maxLength={80}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputCls(profileErrors.name)}
                placeholder="Your full name"
              />
            </Field>

            {/* Bio */}
            <Field
              label="Bio"
              error={profileErrors.bio}
              hint={`${form.bio.length}/500`}
            >
              <textarea
                rows={3}
                maxLength={500}
                value={form.bio}
                onChange={(e) => setForm({ ...form, bio: e.target.value })}
                className={`${inputCls(profileErrors.bio)} resize-none`}
                placeholder="A short intro about yourself…"
              />
            </Field>

            {/* Location + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Location">
                <input
                  type="text"
                  maxLength={120}
                  value={form.location}
                  onChange={(e) =>
                    setForm({ ...form, location: e.target.value })
                  }
                  className={inputCls()}
                  placeholder="City, Country"
                />
              </Field>
              <Field label="Phone">
                <input
                  type="tel"
                  maxLength={20}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputCls()}
                  placeholder="+91 98765 43210"
                />
              </Field>
            </div>

            {/* Skills */}
            <div>
              <label className="block text-xs opacity-60 mb-2">Skills</label>
              <div className="flex flex-wrap gap-2 mb-3">
                {SKILL_SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggleSuggestion(s)}
                    className={`px-3 py-1 rounded-full text-xs border transition
                      ${
                        form.skills.includes(s)
                          ? "bg-(--soil) text-(--cream) border-(--soil)"
                          : "border-black/10 hover:border-(--amber)"
                      }`}
                  >
                    {form.skills.includes(s) ? "✓ " : ""}
                    {s}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addTag("skills", skillInput, setSkillInput);
                    }
                  }}
                  className={inputCls()}
                  placeholder="Add custom skill…"
                />
                <button
                  type="button"
                  onClick={() => addTag("skills", skillInput, setSkillInput)}
                  className="px-4 py-2 rounded-xl bg-(--soil) text-(--cream) text-sm hover:opacity-80 transition shrink-0"
                >
                  Add
                </button>
              </div>
              {form.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {form.skills.map((s) => (
                    <span
                      key={s}
                      className="flex items-center gap-1 bg-(--amber)/10 text-(--amber) text-xs px-3 py-1 rounded-full"
                    >
                      {s}
                      <button
                        type="button"
                        onClick={() => removeTag("skills", s)}
                        className="opacity-60 hover:opacity-100 ml-0.5"
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Interests */}
            <div>
              <label className="block text-xs opacity-60 mb-2">Interests</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={interestInput}
                  onChange={(e) => setInterestInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addTag("interests", interestInput, setInterestInput);
                    }
                  }}
                  className={inputCls()}
                  placeholder="e.g. Sustainable Farming…"
                />
                <button
                  type="button"
                  onClick={() =>
                    addTag("interests", interestInput, setInterestInput)
                  }
                  className="px-4 py-2 rounded-xl bg-(--soil) text-(--cream) text-sm hover:opacity-80 transition shrink-0"
                >
                  Add
                </button>
              </div>
              {form.interests.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {form.interests.map((i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 bg-(--sage)/10 text-(--sage) text-xs px-3 py-1 rounded-full"
                    >
                      {i}
                      <button
                        type="button"
                        onClick={() => removeTag("interests", i)}
                        className="opacity-60 hover:opacity-100 ml-0.5"
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={saveProfile}
                disabled={saving}
                className="bg-(--amber) text-white px-8 py-2.5 rounded-full text-sm font-medium hover:opacity-80 transition disabled:opacity-50 flex items-center gap-2"
              >
                {saving && (
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                )}
                {saving ? "Saving…" : "Save Changes"}
              </button>
            </div>
          </div>
        )}

        {/* TAB 1 : Security */}
        {tab === 1 && (
          <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-6 sm:p-8 space-y-6">
            <h2 className="font-[Fraunces] text-xl font-bold">
              Change Password
            </h2>
            <p className="text-sm opacity-60 -mt-3">
              You'll be signed out after a successful password change.
            </p>

            <Field label="Current Password" error={pwErrors.currentPassword}>
              <PasswordInput
                value={pwForm.currentPassword}
                show={showPw.cur}
                onToggle={() => setShowPw((s) => ({ ...s, cur: !s.cur }))}
                onChange={(v) => setPwForm({ ...pwForm, currentPassword: v })}
                placeholder="Your current password"
                error={pwErrors.currentPassword}
              />
            </Field>

            <Field label="New Password" error={pwErrors.newPassword}>
              <PasswordInput
                value={pwForm.newPassword}
                show={showPw.next}
                onToggle={() => setShowPw((s) => ({ ...s, next: !s.next }))}
                onChange={(v) => setPwForm({ ...pwForm, newPassword: v })}
                placeholder="Min 6 characters"
                error={pwErrors.newPassword}
              />
            </Field>

            <Field
              label="Confirm New Password"
              error={pwErrors.confirmPassword}
            >
              <PasswordInput
                value={pwForm.confirmPassword}
                show={showPw.confirm}
                onToggle={() =>
                  setShowPw((s) => ({ ...s, confirm: !s.confirm }))
                }
                onChange={(v) => setPwForm({ ...pwForm, confirmPassword: v })}
                placeholder="Repeat new password"
                error={pwErrors.confirmPassword}
              />
            </Field>

            {pwForm.newPassword.length > 0 && (
              <StrengthMeter password={pwForm.newPassword} />
            )}

            <div className="pt-2 flex justify-end">
              <button
                onClick={changePassword}
                disabled={pwSaving}
                className="bg-(--rust) text-white px-8 py-2.5 rounded-full text-sm font-medium hover:opacity-80 transition disabled:opacity-50 flex items-center gap-2"
              >
                {pwSaving && (
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                )}
                {pwSaving ? "Updating…" : "Update Password"}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ── Toast ── */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 px-5 py-3 rounded-2xl shadow-xl z-50 text-sm text-white transition
            ${toast.type === "success" ? "bg-(--sage)" : "bg-(--rust)"}`}
        >
          {toast.type === "success" ? "✅" : "❌"} {toast.msg}
        </div>
      )}
    </div>
  );
};

/* sub-components */

function Field({ label, required, error, hint, children }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <label className="block text-xs opacity-60">
          {label} {required && <span className="text-(--rust)">*</span>}
        </label>
        {hint && <span className="text-xs opacity-40">{hint}</span>}
      </div>
      {children}
      {error && <p className="text-xs text-(--rust) mt-1">{error}</p>}
    </div>
  );
}

function inputCls(error) {
  return `w-full border rounded-xl px-4 py-3 text-sm outline-none focus:border-(--amber) transition bg-white
    ${error ? "border-(--rust)" : "border-black/10"}`;
}

function PasswordInput({
  value,
  show,
  onToggle,
  onChange,
  placeholder,
  error,
}) {
  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`${inputCls(error)} pr-12`}
      />
      <button
        type="button"
        onClick={onToggle}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-xs opacity-40 hover:opacity-80"
      >
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}

function StrengthMeter({ password }) {
  const score = [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[0-9]/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ].filter(Boolean).length;

  const labels = ["", "Weak", "Fair", "Good", "Strong"];
  const colors = [
    "",
    "bg-(--rust)",
    "bg-(--amber)",
    "bg-(--gold)",
    "bg-(--sage)",
  ];

  return (
    <div>
      <div className="flex gap-1 mb-1">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`flex-1 h-1 rounded-full transition ${i <= score ? colors[score] : "bg-black/10"}`}
          />
        ))}
      </div>
      <p className="text-xs opacity-50">{labels[score]}</p>
    </div>
  );
}
export default Profile;
