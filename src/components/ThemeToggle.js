"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("sf-theme");
    const isDark = stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", isDark);
    queueMicrotask(() => setDark(isDark));
  }, []);

  if (!mounted) return null;

  return (
    <button
      id="theme-toggle"
      className="sf-button sf-button--quiet"
      onClick={() => {
        const next = !dark;
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("sf-theme", next ? "dark" : "light");
        setDark(next);
      }}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
