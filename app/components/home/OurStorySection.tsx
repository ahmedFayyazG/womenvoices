"use client";

import { useEffect, useRef, useState } from "react";

const MILESTONES = [
  {
    year: "2013",
    accent: "#E5007E",
    title: "Founded",
    desc: "Women's Voices was established in Longsight, Manchester — a community hub creating safe, inclusive spaces for women from diverse ethnic, migrant, and refugee backgrounds.",
  },
  {
    year: "2016",
    accent: "#FDBE18",
    title: "Expanding Programmes",
    desc: "We grew our ESOL classes, wellbeing workshops, and employability support — serving over 200 women annually and building strong local partnerships.",
  },
  {
    year: "2020",
    accent: "#3b0e48",
    title: "Adapting Through Challenge",
    desc: "Through the pandemic, we delivered essential food aid, digital support, and online wellbeing sessions — keeping our community connected and cared for.",
  },
  {
    year: "2025",
    accent: "#14a28d",
    title: "A Decade of Impact",
    desc: "Today we serve 500+ women each year through 20+ weekly programmes, 30+ partner organisations, and our hub at the Burhan Centre, Longsight.",
  },
];

export function OurStorySection() {
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
    <section ref={sectionRef} className={`os-section ${isVisible ? "is-visible" : ""}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .os-section {
          background: #4E9473;
          background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60c-18-18-42-6-42-6s12-24 30-6c18-18 42-6 42-6s-12 24-30 6c-18 18-6 42-6 42s-24-12-6-30c18 18 6 42 6 42s24-12 6-30z' fill='none' stroke='%23ffffff' stroke-width='1' stroke-opacity='0.04'/%3E%3C/svg%3E");
          padding: 100px 0 280px;
          position: relative;
          overflow: hidden;
        }

        /* ── container ── */
        .os-inner {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }

        /* ── header ── */
        .os-heading {
          font-family: "Gutenberg Clean Regular", serif;
          font-size: 62px;
          line-height: 0.95;
          text-transform: uppercase;
          color: #fff;
          margin: 0 0 24px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s;
        }
        .os-intro {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 16px;
          line-height: 1.75;
          color: rgba(255,255,255,0.75);
          max-width: 780px;
          margin: 0 0 72px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
        }
        .os-section.is-visible .os-heading,
        .os-section.is-visible .os-intro { opacity: 1; transform: translateY(0); }

        /* ── timeline grid ── */
        .os-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          position: relative;
        }

        /* horizontal connector line */
        .os-grid::before {
          content: "";
          position: absolute;
          top: 12px;
          left: calc(12px);
          right: calc(12px);
          height: 2px;
          background: rgba(255,255,255,0.25);
          z-index: 0;
        }

        /* ── single milestone ── */
        .os-milestone {
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .os-section.is-visible .os-milestone:nth-child(1) { opacity:1; transform:translateY(0); transition-delay:0.20s; }
        .os-section.is-visible .os-milestone:nth-child(2) { opacity:1; transform:translateY(0); transition-delay:0.32s; }
        .os-section.is-visible .os-milestone:nth-child(3) { opacity:1; transform:translateY(0); transition-delay:0.44s; }
        .os-section.is-visible .os-milestone:nth-child(4) { opacity:1; transform:translateY(0); transition-delay:0.56s; }

        /* dot + year row */
        .os-dot-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          position: relative;
          z-index: 2;
        }
        .os-dot {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          flex-shrink: 0;
          box-shadow: 0 0 0 4px rgba(255,255,255,0.15);
          transform: scale(0.5);
          transition: transform 0.5s cubic-bezier(0.175,0.885,0.32,1.275);
        }
        .os-section.is-visible .os-milestone:nth-child(1) .os-dot { transform:scale(1); transition-delay:0.40s; }
        .os-section.is-visible .os-milestone:nth-child(2) .os-dot { transform:scale(1); transition-delay:0.52s; }
        .os-section.is-visible .os-milestone:nth-child(3) .os-dot { transform:scale(1); transition-delay:0.64s; }
        .os-section.is-visible .os-milestone:nth-child(4) .os-dot { transform:scale(1); transition-delay:0.76s; }

        .os-year-label {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          margin: 0;
        }

        /* card */
        .os-card {
          background: #fff;
          border-left: 5px solid transparent;
          padding: 22px 20px 22px 18px;
          flex-grow: 1;
        }
        .os-card-year {
          font-family: "Gutenberg Clean Regular", serif;
          font-size: 40px;
          line-height: 1;
          margin: 0 0 6px;
        }
        .os-card-title {
          font-family: "Gutenberg Clean Regular", serif;
          font-size: 16px;
          line-height: 1.25;
          text-transform: uppercase;
          color: #251329;
          margin: 0 0 10px;
        }
        .os-card-desc {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 13px;
          line-height: 1.75;
          color: #5a5a5a;
          margin: 0;
        }

        /* ── bottom polygon → yellow ── */
        .os-polygon {
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 180px;
          background: #FFC113;
          clip-path: polygon(0 0, 50% 80%, 100% 0, 100% 100%, 0 100%);
          z-index: 1;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1.2s ease 0.4s, transform 1.2s ease 0.4s;
        }
        .os-section.is-visible .os-polygon { opacity: 1; transform: translateY(0); }

        /* ── responsive ── */
        @media (max-width: 1280px) {
          .os-inner { padding: 0 32px; }
          .os-heading { font-size: 50px; }
          .os-grid { gap: 16px; }
        }
        @media (max-width: 1024px) {
          .os-section { padding: 80px 0 250px; }
          .os-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
          .os-grid::before { display: none; }
        }
        @media (max-width: 768px) {
          .os-section { padding: 60px 0 220px; }
          .os-inner { padding: 0 20px; }
          .os-heading { font-size: 38px; }
          .os-intro { font-size: 14px; margin-bottom: 48px; }
          .os-grid { grid-template-columns: 1fr; gap: 16px; }
          .os-card-year { font-size: 32px; }
          .os-polygon { height: 120px; clip-path: polygon(0 0, 50% 65%, 100% 0, 100% 100%, 0 100%); }
        }
        @media (max-width: 480px) {
          .os-heading { font-size: 32px; }
        }
      `}} />

      <div className="os-inner">
        <h2 className="os-heading">Our Story</h2>
        <p className="os-intro">
          Women's Voices was created to support women from diverse ethnic, migrant, refugee, and underserved communities who face isolation, inequality, language barriers, and social exclusion. Through safe spaces, mentoring, education, and community-led support, we help women build confidence, independence, and opportunity.
        </p>

        <div className="os-grid">
          {MILESTONES.map((m) => (
            <div className="os-milestone" key={m.year}>
              <div className="os-dot-row">
                <span className="os-dot" style={{ background: m.accent }} />
                <p className="os-year-label">{m.year}</p>
              </div>
              <div className="os-card" style={{ borderLeftColor: m.accent }}>
                <p className="os-card-year" style={{ color: m.accent }}>{m.year}</p>
                <h3 className="os-card-title">{m.title}</h3>
                <p className="os-card-desc">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Yellow chevron → ImpactMapSection */}
      <div className="os-polygon" aria-hidden="true" />
    </section>
  );
}
