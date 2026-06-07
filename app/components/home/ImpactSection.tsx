"use client";

import { useEffect, useRef, useState } from "react";

const PROGRAMMES = [
  {
    num: "01",
    color: "#3b0e48",
    title: "Education & ESOL",
    desc: "Accessible learning that builds language skills, communication confidence, and daily independence for women from diverse linguistic backgrounds.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    num: "02",
    color: "#0b7561",
    title: "Wellbeing & Mental Health",
    desc: "Safe, supportive sessions where women strengthen emotional resilience, reduce isolation, and improve mental wellbeing through peer connection.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    num: "03",
    color: "#c67c00",
    title: "Employability & Skills",
    desc: "Practical digital skills, CV preparation, interview readiness, and pathways into volunteering and employment for sustained independence.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="7" width="20" height="14" rx="0"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    num: "04",
    color: "#14a28d",
    title: "Leadership & Empowerment",
    desc: "Mentoring, confidence-building, and personal development that encourage women to lead in their families, workplaces, and communities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M6 20v-2a6 6 0 0 1 12 0v2"/>
        <path d="M19 8l2-2M5 8L3 6"/>
        <path d="M19 14l2 2M5 14l-2 2"/>
      </svg>
    ),
  },
];

export function ImpactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`prog-section ${isVisible ? "is-visible" : ""}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .prog-section {
          background: #E5017E;
          position: relative;
          width: 100%;
          padding: 64px 0 200px;
          overflow: hidden;
        }

        /* ── two-column inner ── */
        .prog-inner {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 0.85fr 1.4fr;
          gap: 80px;
          align-items: start;
        }

        /* ── left: header ── */
        .prog-header-col {
          position: sticky;
          top: 100px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .prog-section.is-visible .prog-header-col { opacity: 1; transform: translateY(0); }

        .prog-title {
          font-family: "Gutenberg Clean Regular", serif;
          font-size: 52px;
          line-height: 0.95;
          text-transform: uppercase;
          color: #fff;
          margin: 0 0 20px;
        }
        .prog-divider {
          width: 48px;
          height: 3px;
          background: rgba(255,255,255,0.35);
          margin-bottom: 24px;
        }
        .prog-subtitle {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 15px;
          line-height: 1.75;
          color: rgba(255,255,255,0.65);
          margin: 0;
          max-width: 320px;
        }

        /* ── right: card list ── */
        .prog-list-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        /* ── card ── */
        .prog-card {
          background: #fff;
          border-left: 6px solid transparent;
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateX(28px);
          transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.2s;
          box-shadow: 0 4px 24px rgba(0,0,0,0.10);
        }
        .prog-card:hover { box-shadow: 0 8px 36px rgba(0,0,0,0.18); }
        .prog-section.is-visible .prog-card:nth-child(1) { opacity:1; transform:translateX(0); transition-delay:0.10s; }
        .prog-section.is-visible .prog-card:nth-child(2) { opacity:1; transform:translateX(0); transition-delay:0.20s; }
        .prog-section.is-visible .prog-card:nth-child(3) { opacity:1; transform:translateX(0); transition-delay:0.30s; }
        .prog-section.is-visible .prog-card:nth-child(4) { opacity:1; transform:translateX(0); transition-delay:0.40s; }

        .prog-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 28px 0 28px;
          margin-bottom: 14px;
        }
        .prog-num {
          font-family: "Gutenberg Clean Regular", serif;
          font-size: 44px;
          line-height: 1;
          color: var(--prog-accent);
        }
        .prog-icon {
          width: 32px;
          height: 32px;
          color: var(--prog-accent);
        }
        .prog-card-body {
          padding: 0 28px 24px 28px;
        }
        .prog-card-title {
          font-family: "Gutenberg Clean Regular", serif;
          font-size: 21px;
          line-height: 1.2;
          text-transform: uppercase;
          color: #251329;
          margin: 0 0 10px;
        }
        .prog-card-desc {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 13px;
          line-height: 1.8;
          color: #5a5a5a;
          margin: 0;
        }

        /* ── bottom polygon ── */
        .prog-polygon {
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 160px;
          background: #FFC113;
          clip-path: polygon(0 0, 50% 80%, 100% 0, 100% 100%, 0 100%);
          z-index: 1;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1.2s ease 0.3s, transform 1.2s ease 0.3s;
        }
        .prog-section.is-visible .prog-polygon { opacity: 1; transform: translateY(0); }

        /* ── responsive ── */
        @media (max-width: 1280px) {
          .prog-inner { gap: 56px; padding: 0 32px; }
          .prog-title { font-size: 58px; }
        }
        @media (max-width: 1280px) {
          .prog-title { font-size: 44px; }
        }
        @media (max-width: 1024px) {
          .prog-section { padding: 52px 0 180px; }
          .prog-inner { grid-template-columns: 1fr; gap: 32px; }
          .prog-header-col { position: static; }
          .prog-subtitle { max-width: 600px; }
        }
        @media (max-width: 768px) {
          .prog-section { padding: 44px 0 140px; }
          .prog-inner { padding: 0 20px; gap: 28px; }
          .prog-title { font-size: 40px; }
          .prog-polygon { height: 100px; clip-path: polygon(0 0, 50% 65%, 100% 0, 100% 100%, 0 100%); }
          .prog-card-top { padding: 20px 20px 0 20px; margin-bottom: 10px; }
          .prog-card-body { padding: 0 20px 20px 20px; }
          .prog-num { font-size: 36px; }
          .prog-card-title { font-size: 18px; }
        }
        @media (max-width: 480px) {
          .prog-title { font-size: 34px; }
          .prog-icon { width: 26px; height: 26px; }
        }
      `}} />

      <div className="prog-inner">
        {/* Left: header */}
        <div className="prog-header-col">
          <h2 className="prog-title">Our<br/>Programmes</h2>
          <div className="prog-divider" />
          <p className="prog-subtitle">
            Every programme we run is designed around the real needs of the women we serve — accessible, free, and delivered with care.
          </p>
        </div>

        {/* Right: programme cards */}
        <div className="prog-list-col">
          {PROGRAMMES.map((p) => (
            <div
              key={p.num}
              className="prog-card"
              style={{
                borderLeftColor: p.color,
                ["--prog-accent" as string]: p.color,
              }}
            >
              <div className="prog-card-top">
                <span className="prog-num">{p.num}</span>
                <div className="prog-icon">{p.icon}</div>
              </div>
              <div className="prog-card-body">
                <h3 className="prog-card-title">{p.title}</h3>
                <p className="prog-card-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Yellow polygon → FeaturedStorySection */}
      <div className="prog-polygon" aria-hidden="true" />
    </section>
  );
}
