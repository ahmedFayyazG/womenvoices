"use client";

import { useEffect, useRef, useState } from "react";

const PROGRAMMES = [
  {
    num: "01",
    color: "#3b0e48",
    darkText: false,
    title: "Education\n& ESOL",
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
    darkText: false,
    title: "Wellbeing\n& Mental Health",
    desc: "Safe, supportive sessions where women strengthen emotional resilience, reduce isolation, and improve mental wellbeing through peer connection.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    num: "03",
    color: "#FDBE18",
    darkText: true,
    title: "Employability\n& Skills",
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
    darkText: false,
    title: "Leadership\n& Empowerment",
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
      { threshold: 0.12 }
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
          padding: 100px 0 240px;
          overflow: hidden;
        }

        /* ── header ── */
        .prog-header {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
          margin-bottom: 64px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .prog-section.is-visible .prog-header { opacity: 1; transform: translateY(0); }

        .prog-eyebrow {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #FDBE18;
          margin: 0 0 14px;
        }
        .prog-title {
          font-family: "Gutenberg Clean Regular", serif;
          font-size: 62px;
          line-height: 0.95;
          text-transform: uppercase;
          color: #fff;
          margin: 0 0 18px;
        }
        .prog-subtitle {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 15px;
          line-height: 1.7;
          color: rgba(255,255,255,0.55);
          max-width: 540px;
          margin: 0;
        }

        /* ── grid ── */
        .prog-grid {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 4px;
          position: relative;
          z-index: 5;
        }

        /* ── card ── */
        .prog-card {
          position: relative;
          padding: 32px 24px 28px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease, filter 0.2s;
          min-height: 280px;
        }
        .prog-card:hover { filter: brightness(1.1); }
        .prog-section.is-visible .prog-card:nth-child(1) { opacity:1; transform:translateY(0); transition-delay: 0.15s; }
        .prog-section.is-visible .prog-card:nth-child(2) { opacity:1; transform:translateY(0); transition-delay: 0.25s; }
        .prog-section.is-visible .prog-card:nth-child(3) { opacity:1; transform:translateY(0); transition-delay: 0.35s; }
        .prog-section.is-visible .prog-card:nth-child(4) { opacity:1; transform:translateY(0); transition-delay: 0.45s; }

        .prog-ghost-num {
          position: absolute;
          top: -18px;
          right: 8px;
          font-family: "Gutenberg Clean Regular", serif;
          font-size: 110px;
          line-height: 1;
          color: var(--prog-ghost, rgba(255,255,255,0.07));
          pointer-events: none;
          user-select: none;
        }
        .prog-icon {
          width: 40px;
          height: 40px;
          color: var(--prog-icon, rgba(255,255,255,0.85));
          margin-bottom: 20px;
          flex-shrink: 0;
        }
        .prog-accent {
          width: 32px;
          height: 3px;
          background: var(--prog-bar, rgba(255,255,255,0.4));
          margin-bottom: 14px;
          flex-shrink: 0;
        }
        .prog-card-title {
          font-family: "Gutenberg Clean Regular", serif;
          font-size: 22px;
          line-height: 1.15;
          text-transform: uppercase;
          color: var(--prog-text, #fff);
          margin: 0 0 14px;
          white-space: pre-line;
          position: relative;
          z-index: 1;
        }
        .prog-card-desc {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 12px;
          line-height: 1.75;
          color: var(--prog-text-dim, rgba(255,255,255,0.72));
          margin: 0;
          flex-grow: 1;
          position: relative;
          z-index: 1;
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
          .prog-section { padding: 80px 0 210px; }
          .prog-header { padding: 0 32px; margin-bottom: 48px; }
          .prog-title { font-size: 50px; }
          .prog-grid { padding: 0 32px; }
          .prog-card { min-height: 260px; padding: 28px 20px 24px; }
          .prog-card-title { font-size: 20px; }
          .prog-ghost-num { font-size: 90px; }
        }
        @media (max-width: 1024px) {
          .prog-grid { grid-template-columns: repeat(2, 1fr); }
          .prog-card { min-height: 220px; }
        }
        @media (max-width: 768px) {
          .prog-section { padding: 60px 0 140px; }
          .prog-header { padding: 0 20px; margin-bottom: 32px; }
          .prog-title { font-size: 38px; }
          .prog-subtitle { font-size: 13px; }
          .prog-grid { grid-template-columns: 1fr 1fr; gap: 4px; padding: 0 20px; }
          .prog-card { min-height: 200px; padding: 22px 16px 20px; }
          .prog-card-title { font-size: 17px; }
          .prog-card-desc { font-size: 11px; }
          .prog-ghost-num { font-size: 72px; }
          .prog-polygon { height: 100px; clip-path: polygon(0 0, 50% 65%, 100% 0, 100% 100%, 0 100%); }
        }
        @media (max-width: 480px) {
          .prog-grid { grid-template-columns: 1fr; }
          .prog-card { min-height: 160px; }
          .prog-title { font-size: 32px; }
        }
      `}} />

      {/* Header */}
      <div className="prog-header">
        <p className="prog-eyebrow">What we do</p>
        <h2 className="prog-title">Our<br/>Programmes</h2>
        <p className="prog-subtitle">
          Every programme we run is designed around the real needs of the women we serve — accessible, free, and delivered with care.
        </p>
      </div>

      {/* Programme cards */}
      <div className="prog-grid">
        {PROGRAMMES.map((p) => (
          <div
            key={p.num}
            className="prog-card"
            style={{
              background: p.color,
              ["--prog-text" as string]: p.darkText ? "#251329" : "#fff",
              ["--prog-text-dim" as string]: p.darkText ? "rgba(37,19,41,0.7)" : "rgba(255,255,255,0.72)",
              ["--prog-ghost" as string]: p.darkText ? "rgba(37,19,41,0.07)" : "rgba(255,255,255,0.07)",
              ["--prog-icon" as string]: p.darkText ? "rgba(37,19,41,0.85)" : "rgba(255,255,255,0.85)",
              ["--prog-bar" as string]: p.darkText ? "rgba(37,19,41,0.35)" : "rgba(255,255,255,0.4)",
            }}
          >
            <span className="prog-ghost-num">{p.num}</span>
            <div className="prog-icon">{p.icon}</div>
            <div className="prog-accent" />
            <h3 className="prog-card-title">{p.title}</h3>
            <p className="prog-card-desc">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Yellow polygon transition */}
      <div className="prog-polygon" aria-hidden="true" />
    </section>
  );
}
