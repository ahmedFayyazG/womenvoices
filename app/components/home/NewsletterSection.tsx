"use client";

import { useEffect, useRef, useState } from "react";

export function FooterSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }

        // Toggle global body class to hide/show the navbar logo
        if (entry.isIntersecting) {
          document.body.classList.add("newsletter-in-view");
        } else {
          document.body.classList.remove("newsletter-in-view");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      document.body.classList.remove("newsletter-in-view");
    };
  }, []);

  return (
    <footer id="newsletter" ref={sectionRef} className={`editorial-footer ${isVisible ? "is-visible" : ""}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .editorial-footer {
          background-color: #FFFFFF;
          position: relative;
          z-index: 1;
          padding: 90px 0 0;
          overflow: hidden;
        }
        .editorial-footer *, .editorial-footer *::before, .editorial-footer *::after {
          box-sizing: border-box;
        }

        body.newsletter-in-view header img,
        body.newsletter-in-view nav img,
        body.newsletter-in-view [class*="navbar-logo"],
        body.newsletter-in-view [class*="nav-logo"] {
          opacity: 0 !important;
          pointer-events: none !important;
          transition: opacity 0.3s ease !important;
        }

        .footer-top-curve {
          position: absolute;
          top: -1px;
          left: 0;
          width: 100%;
          height: 70px;
          z-index: 10;
          pointer-events: none;
        }
        .footer-curve-svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* ── Logo bar ── */
        .footer-logo-bar {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          position: relative;
          z-index: 2;
          opacity: 0;
          transition: opacity 0.7s ease 0.05s;
        }
        .editorial-footer.is-visible .footer-logo-bar { opacity: 1; }

        .footer-logo-wrapper {
          width: min(420px, 100%);
          height: 168px;
          overflow: hidden;
          flex-shrink: 0;
          position: relative;
          margin-left: -40px;
        }
        .footer-logo-img {
          width: 300%;
          height: auto;
          position: absolute;
          top: 50%;
          left: -4%;
          transform: translateY(-50%);
        }
        .footer-logo-tagline {
          font-family: "Avenir LT 55 Regular","Avenir Medium","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(78,148,115,0.7);
          margin: 0;
          text-align: right;
        }

        /* ── Divider ── */
        .footer-divider {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .footer-divider-line {
          border: none;
          height: 1px;
          background: linear-gradient(90deg, #E5007E 0%, #4E9473 40%, #FDBE18 100%);
          opacity: 0.35;
          margin: 0;
        }

        /* ── 3-col grid ── */
        .footer-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 48px 40px 52px;
          display: grid;
          grid-template-columns: 1.1fr 0.7fr 1.2fr;
          gap: 56px;
          align-items: start;
          position: relative;
          z-index: 2;
        }
        .footer-left {
          opacity: 0;
          transition: opacity 0.8s ease 0.1s;
        }
        .footer-mid {
          opacity: 0;
          transition: opacity 0.8s ease 0.22s;
        }
        .footer-right {
          opacity: 0;
          transition: opacity 0.8s ease 0.34s;
        }
        .editorial-footer.is-visible .footer-left,
        .editorial-footer.is-visible .footer-mid,
        .editorial-footer.is-visible .footer-right { opacity: 1; }

        /* ── Brand col ── */
        .footer-col-label {
          font-family: "Avenir Medium","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #E5007E;
          margin: 0 0 18px;
        }
        .footer-brand-desc {
          font-family: "Avenir LT 55 Regular","Avenir Medium","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 14px;
          line-height: 1.65;
          color: rgba(0,0,0,0.62);
          margin: 0 0 28px;
        }
        .footer-contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-family: "Avenir LT 55 Regular","Avenir Medium","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 13.5px;
          line-height: 1.5;
          color: rgba(0,0,0,0.72);
        }
        .contact-icon {
          width: 15px;
          height: 15px;
          fill: #4E9473;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* ── Links col ── */
        .footer-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .footer-links-list a {
          display: block;
          font-family: "Avenir LT 55 Regular","Avenir Medium","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 14px;
          line-height: 1;
          color: rgba(0,0,0,0.7);
          text-decoration: none;
          padding: 8px 0;
          border-bottom: 1px solid rgba(78,148,115,0.12);
          transition: color 0.15s, padding-left 0.15s;
        }
        .footer-links-list a:last-child { border-bottom: none; }
        .footer-links-list a:hover {
          color: #4E9473;
          padding-left: 6px;
        }

        /* ── Newsletter col ── */
        .newsletter-kicker {
          font-family: "Avenir Medium","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #E5007E;
          margin: 0 0 10px;
          font-weight: 700;
        }
        .newsletter-heading {
          font-family: "Gutenberg Clean Regular",Georgia,serif;
          font-size: 46px;
          line-height: 0.95;
          color: #4E9473;
          text-transform: uppercase;
          margin: 0 0 14px;
          letter-spacing: 0;
        }
        .newsletter-desc {
          font-family: "Avenir LT 55 Regular","Avenir Medium","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 13.5px;
          line-height: 1.6;
          color: rgba(0,0,0,0.58);
          margin: 0 0 20px;
        }
        .newsletter-form-wrapper {
          display: flex;
          width: 100%;
          margin-bottom: 28px;
        }
        .newsletter-input {
          flex-grow: 1;
          height: 52px;
          background-color: #8E2A91;
          border: none;
          padding: 0 16px;
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 13px;
          letter-spacing: 2px;
          color: #FFFFFF;
          outline: none;
        }
        .newsletter-input::placeholder { color: rgba(255,255,255,0.55); }
        .newsletter-submit {
          width: 130px;
          height: 52px;
          background-color: #E5007E;
          border: none;
          font-family: "Avenir Medium","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 11px;
          letter-spacing: 2.5px;
          color: #FFFFFF;
          text-transform: uppercase;
          font-weight: 700;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .newsletter-submit:hover { background-color: #c9006e; }

        /* Social */
        .footer-social-wrapper {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .social-title {
          font-family: "Avenir Medium","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(0,0,0,0.4);
          margin: 0;
          font-weight: 700;
        }
        .footer-social-row {
          display: flex;
          gap: 14px;
          align-items: center;
        }
        .footer-social-icon {
          width: 22px;
          height: 22px;
          fill: #4E9473;
          transition: fill 0.15s, transform 0.15s;
        }
        .footer-social-icon:hover {
          fill: #E5007E;
          transform: translateY(-2px);
        }

        /* ── Bottom bar ── */
        .footer-bottom {
          background: #3b0e48;
          position: relative;
          z-index: 2;
        }
        .footer-bottom-inner {
          max-width: 1320px;
          margin: 0 auto;
          padding: 22px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .footer-copyright {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.48);
          margin: 0;
          letter-spacing: 0.5px;
        }
        .footer-copyright strong {
          color: rgba(255,255,255,0.78);
          font-weight: 600;
        }
        .footer-madeby {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.65);
          margin: 4px 0 0;
          letter-spacing: 0.5px;
        }
        .footer-madeby a {
          color: #FDBE18;
          font-weight: 700;
          text-decoration: none;
          border-bottom: 1px solid rgba(253,190,24,0.35);
          padding-bottom: 1px;
          transition: color 0.2s, border-color 0.2s;
        }
        .footer-madeby a:hover { color: #fff; border-color: #fff; }
        .footer-donate-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #E5007E;
          color: #fff;
          font-family: "Avenir Medium","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-weight: 700;
          padding: 12px 28px;
          text-decoration: none;
          border: none;
          box-shadow: 4px 4px 0 #FDBE18;
          transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .footer-donate-btn:hover {
          background-color: #b8006a;
          box-shadow: 2px 2px 0 #FDBE18;
          transform: translate(2px, 2px);
        }

        /* Donate wrapper (no longer needed as separate) */
        .footer-donate-wrapper { display: none; }

        @media (max-width: 1100px) {
          .footer-container {
            grid-template-columns: 1fr 0.6fr;
            gap: 40px;
          }
          .footer-mid { display: none; }
          .newsletter-heading { font-size: 38px; }
        }

        @media (max-width: 768px) {
          .editorial-footer { padding-top: 160px; }
          .footer-logo-bar { padding: 0 24px 24px; }
          .footer-logo-wrapper { width: min(100%, 280px); height: 112px; margin-left: -24px; }
          .footer-logo-img { width: 300%; left: -4%; }
          .footer-logo-tagline { display: none; }
          .footer-divider { padding: 0 24px; }
          .footer-container {
            grid-template-columns: 1fr;
            padding: 36px 24px 44px;
            gap: 40px;
          }
          .footer-mid { display: block; }
          .newsletter-heading { font-size: 36px; }
          .newsletter-form-wrapper { flex-direction: column; }
          .newsletter-input { height: 52px; width: 100%; }
          .newsletter-submit { width: 100%; height: 48px; }
          .footer-bottom-inner {
            flex-direction: column-reverse;
            text-align: center;
            padding: 20px 24px 28px;
            gap: 16px;
          }
          .footer-top-curve { height: 40px; }
        }
      `}} />

      {/* Top curve */}
      <div className="footer-top-curve" aria-hidden="true">
        <svg className="footer-curve-svg" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,0 Q720,80 1440,0 L1440,80 L0,80 Z" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Logo bar */}
      <div className="footer-logo-bar">
        <div className="footer-logo-wrapper">
          <img
            src="/images/womens-voices-logo.png"
            alt="Women’s Voices"
            className="footer-logo-img"
          />
        </div>
        <p className="footer-logo-tagline">
          Empowering women · Manchester · Est. 2013
        </p>
      </div>

      {/* Gradient rule */}
      <div className="footer-divider">
        <hr className="footer-divider-line" />
      </div>

      {/* 3-column body */}
      <div className="footer-container">

        {/* Col 1 — Brand & Contact */}
        <div className="footer-left">
          <p className="footer-col-label">About us</p>
          <p className="footer-brand-desc">
            Women&apos;s Voices empowers women from refugee, asylum-seeking, migrant, and minoritised communities through wellbeing support, education, advocacy, and leadership development.
          </p>
          <ul className="footer-contact-list">
            <li className="footer-contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/></svg>
              Burhan Centre, 81 Beresford Road, Longsight, Manchester M13 0GX
            </li>
            <li className="footer-contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24"><path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              admin@womensvoices.org.uk
            </li>
            <li className="footer-contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.03 21c.73 0 .97-.67.97-1.21v-3.41c0-.55-.45-1-.99-1z"/></svg>
              0161 225 6908
            </li>
          </ul>
        </div>

        {/* Col 2 — Quick links */}
        <div className="footer-mid">
          <p className="footer-col-label">Quick links</p>
          <ul className="footer-links-list">
            <li><a href="/about">About us</a></li>
            <li><a href="/reports-publications">Reports &amp; Publications</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/events">Upcoming Events</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Col 3 — Newsletter */}
        <div className="footer-right">
          <p className="newsletter-kicker">Stay connected</p>
          <h3 className="newsletter-heading">Newsletter</h3>
          <p className="newsletter-desc">
            Community updates, events, workshops, and opportunities — direct to your inbox.
          </p>
          <form className="newsletter-form-wrapper" onSubmit={(e) => e.preventDefault()}>
            <label className="sr-only" htmlFor="footer-email">Email address</label>
            <input
              id="footer-email"
              type="email"
              placeholder="Your email address"
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-submit">Subscribe</button>
          </form>
          <div className="footer-social-wrapper">
            <p className="social-title">Follow our journey</p>
            <div className="footer-social-row">
              <a href="https://www.facebook.com/womensvoicesmcr" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg className="footer-social-icon" viewBox="0 0 24 24"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.791-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
              </a>
              <a href="https://twitter.com/WomensVoicesMCR" aria-label="Twitter / X" target="_blank" rel="noopener noreferrer">
                <svg className="footer-social-icon" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
              </a>
              <a href="#instagram" aria-label="Instagram">
                <svg className="footer-social-icon" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <div>
            <p className="footer-copyright">
              <strong>Women&apos;s Voices</strong> &nbsp;© 2026 &nbsp;·&nbsp; Company No. 08652552 &nbsp;·&nbsp; Longsight, Manchester
            </p>
            <p className="footer-madeby">Made by <a href="https://www.ahmedfayyaz.com" target="_blank" rel="noopener noreferrer">Ahmed</a></p>
          </div>
          <a href="#donate" className="footer-donate-btn">
            Support Women&apos;s Voices
          </a>
        </div>
      </div>
    </footer>
  );
}
