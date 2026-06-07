"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const updateNavbar = () => setIsScrolled(window.scrollY > 24);

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });

    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  return (
    <nav
      className={`navbar ${isScrolled ? "navbar-scrolled" : ""} ${
        isMenuOpen ? "navbar-open" : ""
      }`}
    >
      <Link className="brand" href="/" aria-label="Women's Voices home">
        <Image
          className="brand-logo"
          src="/images/womens-voices-logo.png"
          alt="Women's Voices"
          width={516}
          height={204}
          priority
        />
      </Link>
      <button
        className="nav-toggle"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>
      <div className="nav-links" aria-label="Primary navigation">
        <Link href="/about" onClick={closeMenu}>
          About
        </Link>
        <Link href="/reports-publications" onClick={closeMenu}>
          Reports and Publications
        </Link>
        <Link href="/blogs" onClick={closeMenu}>
          Blogs
        </Link>
        <Link href="/events" onClick={closeMenu}>
          Upcoming Events
        </Link>
        <Link href="/contact" onClick={closeMenu}>
          Contact
        </Link>
        <Link className="donate-link" href="/donate" onClick={closeMenu}>
          <span>Donate</span>
          <strong>WV</strong>
        </Link>
      </div>
    </nav>
  );
}
