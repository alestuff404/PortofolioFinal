"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/data/content";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setTheme((document.documentElement.getAttribute("data-theme") as "light" | "dark") || "light");

    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    nav.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? "bg-bg/85 backdrop-blur-md border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center" aria-label="Back to top">
          <img src="/images/logo.png" alt={profile.name} className="h-8 w-auto" />
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`tick transition-colors hover:text-ink ${active === n.id ? "text-ink" : "text-muted"}`}
            >
              {n.label}
            </a>
          ))}
          <span className="h-4 w-px bg-line" />
          <ThemeButton theme={theme} onClick={toggleTheme} />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeButton theme={theme} onClick={toggleTheme} />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="tick -m-2 p-2 text-ink"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-bg px-5 pb-5 pt-2 md:hidden" aria-label="Mobile navigation">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className="tick block border-b border-line py-3 text-ink"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function ThemeButton({ theme, onClick }: { theme: "light" | "dark"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className="grid h-8 w-8 place-items-center rounded-full text-ink transition-colors hover:bg-surface"
    >
      {theme === "light" ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
        </svg>
      )}
    </button>
  );
}
