import Link from "next/link";

export default function AuthLayout({ children }) {
  return (
    <div className="sf-auth-shell">
      <aside className="sf-auth-aside">
        <Link href="/" className="sf-wordmark">ShareForward</Link>
        <div>
          <h1>Turn surplus into someone&apos;s next good day.</h1>
          <p>Join donors, NGOs, and volunteers making a practical difference in their communities every day.</p>
        </div>
        <p className="sf-label" style={{ color: "var(--hero-rule)" }}>ShareForward</p>
      </aside>
      <main className="sf-auth-form">
        <div className="sf-form-wrap">{children}</div>
      </main>
    </div>
  );
}
