"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    fetch("/api/login")
      .then((response) => response.json())
      .then((data) => {
        if (data.authenticated) setUser(data.user);
      })
      .catch(() => {});
  }, []);

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    setUser(null);
    router.push("/");
    router.refresh();
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Browse Resources", href: "/listings" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav id="main-nav" className={`sf-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="sf-container sf-nav-inner">
        <Link href="/" className="sf-wordmark" id="nav-logo">
          <Image src="/shareforward-mark.svg" alt="" width={32} height={32} priority />
          <span>ShareForward</span>
        </Link>
        <div className="sf-nav-links">
          {navLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </div>
        <div className="sf-nav-actions">
          {user ? (
            <>
              <Link className="sf-button" href="/dashboard">Dashboard</Link>
              <button className="sf-button sf-button--quiet" onClick={handleLogout}>Log out</button>
            </>
          ) : (
            <>
              <Link className="sf-button sf-button--quiet" id="nav-login" href="/login">Log in</Link>
              <Link className="sf-button" id="nav-register" href="/register">Get started</Link>
            </>
          )}
          <button
            id="mobile-menu-toggle"
            className="sf-nav-menu"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      <div className={`sf-container sf-mobile-menu ${mobileOpen ? "is-open" : ""}`}>
        {navLinks.map((link) => <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>{link.label}</Link>)}
        {user ? (
          <>
            <Link href="/dashboard" onClick={() => setMobileOpen(false)}>Dashboard</Link>
            <button className="sf-button sf-button--quiet" onClick={handleLogout}>Log out</button>
          </>
        ) : (
          <>
            <Link href="/login" onClick={() => setMobileOpen(false)}>Log in</Link>
            <Link className="sf-button" href="/register" onClick={() => setMobileOpen(false)}>Get started</Link>
          </>
        )}
      </div>
    </nav>
  );
}
