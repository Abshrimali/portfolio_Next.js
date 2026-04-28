"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import ThemeToggle, { type ThemeMode } from "@/components/ThemeToggle";
import { navLinks, siteConfig } from "@/data/portfolio";

const THEME_STORAGE_KEY = "portfolio-theme";
const THEME_CHANGE_EVENT = "portfolio-theme-change";

function applyTheme(nextTheme: ThemeMode) {
  const root = document.documentElement;
  root.dataset.theme = nextTheme;
  root.style.colorScheme = nextTheme;
  window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

function readResolvedTheme(): ThemeMode {
  if (typeof document === "undefined") {
    return "dark";
  }

  if (document.documentElement.dataset.theme === "light") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  return "dark";
}

function subscribeToTheme(onStoreChange: () => void) {
  const handleThemeChange = () => onStoreChange();
  const handleStorage = (event: StorageEvent) => {
    if (event.key === null || event.key === THEME_STORAGE_KEY) {
      onStoreChange();
    }
  };

  window.addEventListener(THEME_CHANGE_EVENT, handleThemeChange);
  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, handleThemeChange);
    window.removeEventListener("storage", handleStorage);
  };
}

function subscribeToHydration() {
  return () => {};
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const theme = useSyncExternalStore<ThemeMode>(
    subscribeToTheme,
    readResolvedTheme,
    () => "dark"
  );
  const themeReady = useSyncExternalStore<boolean>(
    subscribeToHydration,
    () => true,
    () => false
  );
  const scrollResetRef = useRef<number | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    let frame = 0;
    let lastY = window.scrollY;
    let lastTimestamp = performance.now();

    const syncActiveSection = (currentY: number) => {
      const navOffset = 140;
      const probe = currentY + navOffset + window.innerHeight * 0.18;
      let nextActiveSection = sectionIds[0] ?? "home";

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) {
          return;
        }

        if (probe >= element.offsetTop) {
          nextActiveSection = id;
        }
      });

      setActiveSection((current) =>
        current === nextActiveSection ? current : nextActiveSection
      );
    };

    const clearFastScroll = () => {
      root.classList.remove("is-scrolling-fast");
      scrollResetRef.current = null;
    };

    const handleScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const timestamp = performance.now();
        const deltaY = Math.abs(currentY - lastY);
        const elapsed = Math.max(timestamp - lastTimestamp, 16);
        const velocity = deltaY / elapsed;

        setScrolled(currentY > 32);
        syncActiveSection(currentY);

        if (velocity > 1.4 || deltaY > 180) {
          root.classList.add("is-scrolling-fast");
        }

        if (scrollResetRef.current) {
          window.clearTimeout(scrollResetRef.current);
        }

        scrollResetRef.current = window.setTimeout(clearFastScroll, 180);
        lastY = currentY;
        lastTimestamp = timestamp;
        frame = 0;
      });
    };

    handleScroll();
    syncActiveSection(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      if (scrollResetRef.current) {
        window.clearTimeout(scrollResetRef.current);
        scrollResetRef.current = null;
      }

      root.classList.remove("is-scrolling-fast");
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [mobileOpen]);

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const currentTheme = readResolvedTheme();
    const nextTheme: ThemeMode = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  };

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setActiveSection(id);
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`site-nav${scrolled ? " is-scrolled" : ""}`}
        aria-label="Primary"
      >
        <div className="site-nav__inner">
          <a
            href="#home"
            className="brand-mark"
            onClick={(event) => handleNavClick(event, "#home")}
          >
            <span className="brand-mark__monogram">{siteConfig.portrait.initials}</span>
          </a>

          <div className="nav-links">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link${activeSection === id ? " is-active" : ""}`}
                  onClick={(event) => handleNavClick(event, link.href)}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="nav-controls">
            <ThemeToggle mode={theme} onToggle={toggleTheme} ready={themeReady} />

            <a
              className="nav-cta"
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>

          <button
            type="button"
            className={`menu-toggle${mobileOpen ? " open" : ""}`}
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-panel${mobileOpen ? " open" : ""}`}>
        <div className="mobile-panel__content">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-link"
              onClick={(event) => handleNavClick(event, link.href)}
            >
              {link.label}
            </a>
          ))}

          <ThemeToggle
            mode={theme}
            onToggle={toggleTheme}
            expanded
            ready={themeReady}
          />

          <a
            className="button-primary"
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
}
