"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "Overview", href: "/dashboard", mark: "01" },
  { label: "Create listing", href: "/dashboard/create", mark: "+" },
  { label: "My donations", href: "/dashboard/donations", mark: "02" },
  { label: "Browse & claim", href: "/listings", mark: "↗" },
];

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetch("/api/login")
      .then((response) => response.json())
      .then((data) => {
        if (!data.authenticated) router.push("/login");
        else setUser(data.user);
      })
      .catch(() => router.push("/login"))
      .finally(() => setLoading(false));
  }, [router]);

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/");
  };

  if (loading) return <div className="sf-auth-form"><p>Loading dashboard...</p></div>;
  if (!user) return null;

  const currentPage = navItems.find((item) => item.href === pathname)?.label || "Dashboard";

  return (
    <div className="sf-dashboard">
      {sidebarOpen && <button className="sf-dashboard-overlay" onClick={() => setSidebarOpen(false)} aria-label="Close navigation" />}
      <aside className={`sf-dashboard-sidebar ${sidebarOpen ? "is-open" : ""}`}>
        <div className="sf-dashboard-brand-row">
          <Link href="/" className="sf-dashboard-brand" onClick={() => setSidebarOpen(false)}>
            <Image src="/shareforward-mark.svg" alt="" width={42} height={42} priority />
            <span><strong>ShareForward</strong><small>community desk</small></span>
          </Link>
          <button className="sf-dashboard-close" onClick={() => setSidebarOpen(false)} aria-label="Close navigation">×</button>
        </div>
        <div className="sf-dashboard-rail-label">Your workspace</div>
        <nav className="sf-dashboard-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setSidebarOpen(false)} aria-current={pathname === item.href ? "page" : undefined}>
              <span className="sf-dashboard-nav-mark" aria-hidden="true">{item.mark}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="sf-dashboard-user">
          <div className="sf-dashboard-avatar" aria-hidden="true">{user.name?.slice(0, 1).toUpperCase()}</div>
          <strong>{user.name}</strong>
          <div className="sf-label">{user.email}</div>
          <button className="sf-dashboard-signout" onClick={handleLogout}>Sign out</button>
        </div>
      </aside>
      <div className="sf-dashboard-main">
        <header className="sf-dashboard-header">
          <div className="sf-dashboard-header-title">
            <button className="sf-button sf-button--quiet sf-dashboard-menu-button" onClick={() => setSidebarOpen(true)} aria-label="Open navigation">Menu</button>
            <div><span className="sf-label">Workspace</span><strong>{currentPage}</strong></div>
          </div>
          <div className="sf-dashboard-header-actions"><Link href="/" className="sf-dashboard-home-link">View site</Link><ThemeToggle /></div>
        </header>
        <main className="sf-dashboard-content">{children}</main>
      </div>
    </div>
  );
}
