"use client";

import { useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    label: "Community Reach",
    stats: [
      { number: "500+",  desc: "Women supported\nevery year" },
      { number: "12+",   desc: "Years serving\nManchester" },
      { number: "20+",   desc: "Weekly activities\n& programmes" },
    ],
  },
  {
    label: "Partnerships & Growth",
    stats: [
      { number: "30+",   desc: "Partner\norganisations" },
      { number: "10+",   desc: "Languages spoken\nacross our community" },
      { number: "100%",  desc: "Women-led\n& community-driven" },
    ],
  },
  {
    label: "Access & Inclusion",
    stats: [
      { number: "Free",  desc: "All services —\nno cost to participants" },
      { number: "Est.\n2013", desc: "Over a decade\nof impact in Longsight" },
      { number: "1 Hub", desc: "Burhan Centre,\nLongsight Manchester" },
    ],
  },
];

export function ImpactMapSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [slide, setSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const prev = () => setSlide((s) => (s - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setSlide((s) => (s + 1) % SLIDES.length);

  return (
    <section ref={sectionRef} className={`impact-section ${isVisible ? "is-visible" : ""}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .impact-section {
          background: #FFC113;
          padding: 100px 0 220px;
          position: relative;
          overflow: hidden;
        }

        /* ── white arch at top — creates the oval/lens top curve ── */
        .impact-top-wave {
          position: absolute;
          top: -1px; left: 0;
          width: 100%; height: 140px;
          pointer-events: none;
          z-index: 3;
        }
        .impact-top-wave svg { width: 100%; height: 100%; display: block; }
        @media (max-width: 768px) {
          .impact-top-wave { height: 90px; }
        }
        @media (max-width: 480px) {
          .impact-top-wave { height: 60px; }
        }
        /* ── layout ── */
        .impact-inner {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          gap: 56px;
          position: relative;
          z-index: 2;
        }
        .impact-map-col {
          flex: 0 0 46%;
          position: relative;
          opacity: 0;
          transform: scale(0.94);
          transition: opacity 0.85s ease 0.1s, transform 0.85s ease 0.1s;
        }
        .impact-section.is-visible .impact-map-col { opacity: 1; transform: scale(1); }
        .impact-map-wrap {
          width: 130%;
          margin: 80px 0 -180px -28%;
          position: relative;
        }
        .impact-map-wrap img { width: 100%; height: auto; display: block; }
        .impact-pin {
          position: absolute;
          width: 13px; height: 13px;
          border-radius: 50%;
          background: #E5007E;
          box-shadow: 0 0 0 4px rgba(229,0,126,0.28);
          animation: pinPulse 2s infinite;
        }
        .impact-pin-2 { background: #fff; box-shadow: 0 0 0 4px rgba(255,255,255,0.3); animation-delay: 0.5s; }
        .impact-pin-3 { animation-delay: 1s; }
        .impact-pin-1 { top: 34%; left: 46%; }
        .impact-pin-2 { top: 54%; left: 64%; }
        .impact-pin-3 { top: 74%; left: 51%; }
        @keyframes pinPulse {
          0%   { transform: scale(0.9); box-shadow: 0 0 0 0   rgba(229,0,126,0.45); }
          70%  { transform: scale(1);   box-shadow: 0 0 0 10px rgba(229,0,126,0);   }
          100% { transform: scale(0.9); box-shadow: 0 0 0 0   rgba(229,0,126,0);   }
        }

        /* ── right panel ── */
        .impact-content-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.85s ease 0.2s, transform 0.85s ease 0.2s;
        }
        .impact-section.is-visible .impact-content-col { opacity: 1; transform: translateY(0); }

        .impact-eyebrow {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: #3b0e48;
          margin: 0 0 10px;
        }
        .impact-title {
          font-family: "Gutenberg Clean Regular", serif;
          font-size: 64px;
          line-height: 0.92;
          color: #3b0e48;
          text-transform: uppercase;
          margin: 0 0 10px;
        }
        .impact-slide-label {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(59,14,72,0.55);
          margin: 0 0 32px;
          min-height: 18px;
          transition: opacity 0.35s;
        }

        /* ── stat cards ── */
        .impact-stats {
          display: flex;
          flex-direction: column;
          gap: 2px;
          margin-bottom: 36px;
        }
        .impact-stat-card {
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 20px 24px;
          border-left: 4px solid #E5007E;
          opacity: 0;
          transform: translateX(24px);
          transition: opacity 0.55s ease, transform 0.55s ease, background 0.2s;
        }
        .impact-stat-card:hover { background: rgba(255,255,255,0.92); }
        .impact-section.is-visible .impact-stat-card:nth-child(1) { transition-delay: 0.35s; opacity:1; transform:translateX(0); }
        .impact-section.is-visible .impact-stat-card:nth-child(2) { transition-delay: 0.48s; opacity:1; transform:translateX(0); }
        .impact-section.is-visible .impact-stat-card:nth-child(3) { transition-delay: 0.61s; opacity:1; transform:translateX(0); }

        .impact-stat-num {
          font-family: "Gutenberg Clean Regular", serif;
          font-size: 42px;
          line-height: 1;
          color: #E5007E;
          min-width: 110px;
          white-space: pre-line;
        }
        .impact-stat-desc {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 12px;
          letter-spacing: 1.8px;
          line-height: 1.7;
          color: #3b0e48;
          text-transform: uppercase;
          white-space: pre-line;
          margin: 0;
        }

        /* ── controls ── */
        .impact-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          opacity: 0;
          transition: opacity 0.7s ease 0.7s;
        }
        .impact-section.is-visible .impact-controls { opacity: 1; }

        .impact-dots { display: flex; gap: 8px; align-items: center; }
        .impact-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: rgba(59,14,72,0.22);
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .impact-dot.active {
          background: #3b0e48;
          transform: scale(1.45);
        }

        .impact-arrows { display: flex; gap: 12px; }
        .impact-arrow-btn {
          width: 44px; height: 44px;
          border: 2px solid #3b0e48;
          background: transparent;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.18s, color 0.18s;
          color: #3b0e48;
        }
        .impact-arrow-btn:hover { background: #3b0e48; color: #FFC113; }
        .impact-arrow-btn svg { pointer-events: none; }

        /* ── white arch at bottom — creates the oval/lens bottom curve ── */
        .impact-wave {
          position: absolute;
          bottom: -1px; left: 0;
          width: 100%; height: 180px;
          z-index: 10; pointer-events: none;
        }
        .impact-wave svg { width: 100%; height: 100%; display: block; }

        /* ── responsive ── */
        @media (max-width: 1280px) {
          .impact-title { font-size: 52px; }
          .impact-stat-num { font-size: 36px; min-width: 90px; }
          .impact-map-wrap { width: 112%; margin: 60px 0 -140px -16%; }
        }
        @media (max-width: 1024px) {
          .impact-section { padding: 80px 0 80px; }
          .impact-inner {
            flex-direction: column;
            gap: 40px;
            padding: 0 32px 40px;
          }
          .impact-map-col, .impact-content-col { flex: none; width: 100%; }
          /* reset the negative-margin map trick — show it as a normal image */
          .impact-map-wrap {
            width: 100%;
            max-width: 480px;
            margin: 0 auto;
          }
          .impact-title { font-size: 48px; }
          .impact-wave { height: 80px; }
        }
        @media (max-width: 768px) {
          /* allow map to bleed out of section into footer */
          .impact-section { padding: 52px 0 0; overflow: visible; }
          .impact-section::before {
            clip-path: polygon(0 0, 100% 0, 100% 8%, 50% 2%, 0 8%);
          }
          /* hide wave — map overlap handles the visual transition */
          .impact-wave { display: none; }

          .impact-inner {
            flex-direction: column;
            padding: 0 20px 0;
            gap: 28px;
            align-items: center;
          }
          .impact-content-col {
            order: 1;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .impact-map-col {
            order: 2;
            width: 100%;
            flex: none;
            position: relative;
            z-index: 20;
            /* pull map down so it bleeds into the footer */
            margin-bottom: -140px;
          }

          .impact-eyebrow   { font-size: 10px; margin-bottom: 6px; text-align: center; }
          .impact-title     { font-size: 36px; line-height: 1; margin-bottom: 8px; text-align: center; }
          .impact-slide-label { font-size: 10px; letter-spacing: 1.5px; margin-bottom: 18px; text-align: center; }

          .impact-stats { gap: 2px; margin-bottom: 20px; width: 100%; }
          .impact-stat-card { padding: 12px 16px; gap: 14px; }
          .impact-stat-num  { font-size: 28px; min-width: 64px; }
          .impact-stat-desc { font-size: 10px; letter-spacing: 1px; line-height: 1.5; }

          .impact-controls { width: 100%; }
          .impact-arrow-btn { width: 38px; height: 38px; }

          /* map: full width, no shrinking */
          .impact-map-wrap {
            width: 100%;
            max-width: 100%;
            margin: 0;
          }
          .impact-map-wrap img { width: 100%; height: auto; display: block; }
        }
        @media (max-width: 480px) {
          .impact-section { padding: 44px 0 0; }
          .impact-inner { padding: 0 16px 0; gap: 20px; }
          .impact-title { font-size: 30px; }
          .impact-stat-num { font-size: 24px; }
          .impact-map-col { margin-bottom: -120px; }
        }
      `}} />

      {/* White arch at top — gives the oval lens shape */}
      <div className="impact-top-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L1440,0 L1440,72 Q720,150 0,72 Z" fill="#FFFFFF" />
        </svg>
      </div>

      <div className="impact-inner">
        {/* Map */}
        <div className="impact-map-col">
          <div className="impact-map-wrap">
            <img src="/images/maplongsight.png" alt="Longsight, Manchester map" />
            <div className="impact-pin impact-pin-1" />
            <div className="impact-pin impact-pin-2" />
            <div className="impact-pin impact-pin-3" />
          </div>
        </div>

        {/* Content */}
        <div className="impact-content-col">
          <br/>
          <br/>
          <h2 className="impact-title">Our<br/>Impact</h2>
          <p className="impact-slide-label">{SLIDES[slide].label}</p>

          <div className="impact-stats">
            {SLIDES[slide].stats.map((s, i) => (
              <div key={i} className="impact-stat-card">
                <span className="impact-stat-num">{s.number}</span>
                <p className="impact-stat-desc">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="impact-controls">
            <div className="impact-dots">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  className={`impact-dot${i === slide ? " active" : ""}`}
                  onClick={() => setSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="impact-arrows">
              <button className="impact-arrow-btn" onClick={prev} aria-label="Previous">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button className="impact-arrow-btn" onClick={next} aria-label="Next">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="impact-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 180" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 Q720,180 1440,0 L1440,180 L0,180 Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  );
}
