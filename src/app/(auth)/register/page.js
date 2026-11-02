"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const roles = [
  { value: "donor", label: "Donor", desc: "Share surplus items" },
  { value: "ngo", label: "NGO / Receiver", desc: "Claim & distribute" },
  { value: "volunteer", label: "Volunteer", desc: "Pickup & deliver" },
];

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donor");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.error || "Registration failed");
      router.push("/dashboard");
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sf-fade-in">
      <h1>Create your account</h1>
      <p>Join the movement to reduce waste and spread kindness.</p>
      {error && <div className="sf-form-error" role="alert">{error}</div>}
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "20px" }}>
        <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
          <legend style={{ marginBottom: "8px", fontSize: "0.85rem", fontWeight: 700 }}>I want to join as</legend>
          <div className="sf-role-grid">
            {roles.map((item) => (
              <button key={item.value} type="button" className={`sf-role ${role === item.value ? "is-selected" : ""}`} onClick={() => setRole(item.value)} aria-pressed={role === item.value}>
                <strong>{item.label}</strong>
                <span>{item.desc}</span>
              </button>
            ))}
          </div>
        </fieldset>
        <div className="sf-field">
          <label htmlFor="register-name">Full name</label>
          <input id="register-name" type="text" required value={name} onChange={(event) => setName(event.target.value)} placeholder="Your full name" autoComplete="name" />
        </div>
        <div className="sf-field">
          <label htmlFor="register-email">Email address</label>
          <input id="register-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" autoComplete="email" />
        </div>
        <div className="sf-field">
          <label htmlFor="register-password">Password</label>
          <div style={{ display: "flex", gap: "8px" }}>
            <input id="register-password" style={{ flex: 1 }} type={showPassword ? "text" : "password"} required minLength={6} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="At least 6 characters" autoComplete="new-password" />
            <button type="button" className="sf-button sf-button--quiet" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? "Hide" : "Show"}</button>
          </div>
        </div>
        <button type="submit" id="register-submit" className="sf-button" disabled={loading}>{loading ? "Creating account..." : "Create account"}</button>
      </form>
      <p style={{ marginTop: "24px", fontSize: "0.9rem" }}>Already have an account? <Link className="sf-link" href="/login">Sign in</Link></p>
    </div>
  );
}
