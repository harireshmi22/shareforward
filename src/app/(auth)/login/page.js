"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.error || "Login failed");
      router.push("/dashboard");
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sf-fade-in">
      <h1>Welcome back</h1>
      <p>Sign in to continue your impact journey.</p>
      {error && <div className="sf-form-error" role="alert">{error}</div>}
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "20px" }}>
        <div className="sf-field">
          <label htmlFor="login-email">Email address</label>
          <input id="login-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" autoComplete="email" />
        </div>
        <div className="sf-field">
          <label htmlFor="login-password">Password</label>
          <div style={{ display: "flex", gap: "8px" }}>
            <input id="login-password" style={{ flex: 1 }} type={showPassword ? "text" : "password"} required value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password" autoComplete="current-password" />
            <button type="button" className="sf-button sf-button--quiet" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? "Hide" : "Show"}</button>
          </div>
        </div>
        <button type="submit" id="login-submit" className="sf-button" disabled={loading}>{loading ? "Signing in..." : "Sign in"}</button>
      </form>
      <p style={{ marginTop: "24px", fontSize: "0.9rem" }}>Don&apos;t have an account? <Link className="sf-link" href="/register">Create one</Link></p>
    </div>
  );
}
