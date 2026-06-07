"use client";

import { useEffect, useRef, useState } from "react";

const PILLARS = [
  {
    num: "01",
    color: "#E5007E",
    darkText: false,
    title: "Community Leadership",
    desc: "Fostering independence and amplifying voices within local communities so women can lead, advocate, and create change with conviction.",
  },
  {
    num: "02",
    color: "#0b7561",
    darkText: false,
    title: "Wellbeing & Mental Health",
    desc: "Providing safe spaces for healing, connection, and holistic support to help women navigate life's challenges and build resilience.",
  },
  {
    num: "03",
    color: "#FDBE18",
    darkText: true,
    title: "Education & Skills",
    desc: "Equipping women with practical tools, language skills, and digital literacy needed for personal growth and expanded opportunities.",
  },
  {
    num: "04",
    color: "#14a28d",
    darkText: false,
    title: "Advocacy & Rights",
    desc: "Championing equality and actively challenging the barriers of social isolation, exclusion, and systemic discrimination.",
  },
];

export function HowWeWorkSection() {
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
    <section ref={sectionRef} className={`hww-section ${isVisible ? "is-visible" : ""}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .hww-section {
          background: #3b0e48;
          padding: 100px 0 220px;
          position: relative;
          overflow: hidden;
        }

        /* ── cream top wave from GuidingPrinciples ── */
        .hww-top-wave {
          position: absolute;
          top: -1px; left: 0;
          width: 100%; height: 80px;
          pointer-events: none;
          z-index: 3;
        }
        .hww-top-wave svg { width: 100%; height: 100%; display: block; }

        /* ── container ── */
        .hww-inner {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }

        /* ── header ── */
        .hww-eyebrow {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #FDBE18;
          margin: 0 0 16px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s;
        }
        .hww-title {
          font-family: "Gutenberg Clean Regular", serif;
          font-size: 62px;
          line-height: 0.95;
          text-transform: uppercase;
          color: #fff;
          margin: 0 0 24px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s;
        }
        .hww-title-bar {
          width: 48px;
          height: 3px;
          background: #FDBE18;
          margin-bottom: 60px;
          opacity: 0;
          transition: opacity 0.8s ease 0.2s;
        }
        .hww-section.is-visible .hww-eyebrow,
        .hww-section.is-visible .hww-title,
        .hww-section.is-visible .hww-title-bar { opacity: 1; transform: translateY(0); }

        /* ── 2-col intro ── */
        .hww-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid rgba(255,255,255,0.12);
          margin-bottom: 80px;
        }
        .hww-intro-col {
          padding: 36px 48px 36px 0;
          border-right: 1px solid rgba(255,255,255,0.12);
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .hww-intro-col:last-child {
          border-right: none;
          padding-left: 48px;
          padding-right: 0;
        }
        .hww-section.is-visible .hww-intro-col:nth-child(1) { opacity:1; transform:translateY(0); transition-delay:0.25s; }
        .hww-section.is-visible .hww-intro-col:nth-child(2) { opacity:1; transform:translateY(0); transition-delay:0.35s; }

        .hww-intro-heading {
          font-family: "Gutenberg Clean Regular", serif;
          font-size: 22px;
          line-height: 1.2;
          text-transform: uppercase;
          color: #fff;
          margin: 0 0 16px;
        }
        .hww-intro-bar {
          width: 36px;
          height: 3px;
          background: #E5007E;
          margin-bottom: 18px;
        }
        .hww-intro-text {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 15px;
          line-height: 1.8;
          color: rgba(255,255,255,0.62);
          margin: 0;
        }

        /* ── pillars label ── */
        .hww-pillars-label {
          font-family: "Gutenberg Clean Regular", serif;
          font-size: 44px;
          line-height: 1;
          text-transform: uppercase;
          color: #fff;
          margin: 0 0 32px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s;
        }
        .hww-section.is-visible .hww-pillars-label { opacity:1; transform:translateY(0); }

        /* ── pillar cards ── */
        .hww-pillars {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 4px;
        }
        .hww-pillar {
          position: relative;
          padding: 32px 24px 28px;
          display: flex;
          flex-direction: column;
          min-height: 260px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.65s ease, transform 0.65s ease, filter 0.2s;
        }
        .hww-pillar:hover { filter: brightness(1.08); }
        .hww-section.is-visible .hww-pillar:nth-child(1) { opacity:1; transform:translateY(0); transition-delay:0.50s; }
        .hww-section.is-visible .hww-pillar:nth-child(2) { opacity:1; transform:translateY(0); transition-delay:0.62s; }
        .hww-section.is-visible .hww-pillar:nth-child(3) { opacity:1; transform:translateY(0); transition-delay:0.74s; }
        .hww-section.is-visible .hww-pillar:nth-child(4) { opacity:1; transform:translateY(0); transition-delay:0.86s; }

        .hww-ghost {
          position: absolute;
          top: -18px; right: 8px;
          font-family: "Gutenberg Clean Regular", serif;
          font-size: 110px;
          line-height: 1;
          color: var(--hww-ghost, rgba(255,255,255,0.07));
          pointer-events: none;
          user-select: none;
        }
        .hww-pillar-num {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--hww-text-dim, rgba(255,255,255,0.55));
          margin: 0 0 auto;
        }
        .hww-pillar-bar {
          width: 32px;
          height: 3px;
          background: var(--hww-bar, rgba(255,255,255,0.35));
          margin: 24px 0 14px;
          flex-shrink: 0;
        }
        .hww-pillar-title {
          font-family: "Gutenberg Clean Regular", serif;
          font-size: 20px;
          line-height: 1.2;
          text-transform: uppercase;
          color: var(--hww-text, #fff);
          margin: 0 0 12px;
          position: relative;
          z-index: 1;
        }
        .hww-pillar-desc {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 13px;
          line-height: 1.75;
          color: var(--hww-text-dim, rgba(255,255,255,0.65));
          margin: 0;
          position: relative;
          z-index: 1;
        }

        /* ── bottom polygon → OurStorySection green ── */
        .hww-polygon {
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 160px;
          background: #4E9473;
          clip-path: polygon(0 0, 50% 80%, 100% 0, 100% 100%, 0 100%);
          z-index: 1;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1.2s ease 0.5s, transform 1.2s ease 0.5s;
        }
        .hww-section.is-visible .hww-polygon { opacity:1; transform:translateY(0); }

        /* ── responsive ── */
        @media (max-width: 1280px) {
          .hww-inner { padding: 0 32px; }
          .hww-title { font-size: 50px; }
          .hww-pillars-label { font-size: 36px; }
          .hww-ghost { font-size: 90px; }
        }
        @media (max-width: 1024px) {
          .hww-section { padding: 80px 0 200px; }
          .hww-pillars { grid-template-columns: 1fr 1fr; }
          .hww-pillar { min-height: 220px; }
        }
        @media (max-width: 768px) {
          .hww-section { padding: 60px 0 170px; }
          .hww-inner { padding: 0 20px; }
          .hww-title { font-size: 38px; }
          .hww-intro-grid { grid-template-columns: 1fr; margin-bottom: 48px; }
          .hww-intro-col { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.12); padding: 28px 0; }
          .hww-intro-col:last-child { border-bottom: none; padding-left: 0; }
          .hww-pillars-label { font-size: 30px; }
          .hww-polygon { height: 100px; clip-path: polygon(0 0, 50% 65%, 100% 0, 100% 100%, 0 100%); }
          .hww-ghost { font-size: 80px; }
        }
        @media (max-width: 480px) {
          .hww-pillars { grid-template-columns: 1fr; }
          .hww-title { font-size: 32px; }
          .hww-pillar { min-height: 180px; }
        }
      `}} />

      {/* Cream top wave — blends from GuidingPrinciples */}
      <div className="hww-top-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 Q720,80 1440,0 L1440,0 L0,0 Z" fill="#FAFAF7" />
        </svg>
      </div>

      <div className="hww-inner">
        {/* Header */}
        <p className="hww-eyebrow">Our approach</p>
        <h2 className="hww-title">How We Work</h2>
        <div className="hww-title-bar" />

        {/* Intro columns */}
        <div className="hww-intro-grid">
          <div className="hww-intro-col">
            <h3 className="hww-intro-heading">Commitment to Empowerment</h3>
            <div className="hww-intro-bar" />
            <p className="hww-intro-text">
              At Women&apos;s Voices, empowering women from diverse backgrounds is the foundation of our mission. We build confidence, independence, and belonging through safe, inclusive spaces where every woman can thrive and reach her full potential.
            </p>
          </div>
          <div className="hww-intro-col">
            <h3 className="hww-intro-heading">Strategic Approach</h3>
            <div className="hww-intro-bar" />
            <p className="hww-intro-text">
              We leverage community partnerships, educational resources, and wellbeing networks to drive meaningful change. Our work is rooted in collective action — using shared experiences to build resilience and foster a more equitable society for all.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <h3 className="hww-pillars-label">Our Four Pillars</h3>
        <div className="hww-pillars">
          {PILLARS.map((p) => (
            <div
              key={p.num}
              className="hww-pillar"
              style={{
                background: p.color,
                ["--hww-text" as string]: p.darkText ? "#251329" : "#fff",
                ["--hww-text-dim" as string]: p.darkText ? "rgba(37,19,41,0.65)" : "rgba(255,255,255,0.65)",
                ["--hww-ghost" as string]: p.darkText ? "rgba(37,19,41,0.07)" : "rgba(255,255,255,0.07)",
                ["--hww-bar" as string]: p.darkText ? "rgba(37,19,41,0.35)" : "rgba(255,255,255,0.35)",
              }}
            >
              <span className="hww-ghost">{p.num}</span>
              <p className="hww-pillar-num">Pillar {p.num}</p>
              <div className="hww-pillar-bar" />
              <h4 className="hww-pillar-title">{p.title}</h4>
              <p className="hww-pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Green polygon → OurStorySection */}
      <div className="hww-polygon" aria-hidden="true" />
    </section>
  );
}
