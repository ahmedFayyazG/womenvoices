"use client";

import { useEffect, useRef, useState } from "react";

export function HowWeWorkSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`how-we-work-section ${isVisible ? "is-visible" : ""}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .how-we-work-section {
          background-color: #8E2A91;
          background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60c-18-18-42-6-42-6s12-24 30-6c18-18 42-6 42-6s-12 24-30 6c-18 18-6 42-6 42s-24-12-6-30c18 18 6 42 6 42s24-12 6-30z' fill='none' stroke='%23ffffff' stroke-width='1' stroke-opacity='0.04'/%3E%3C/svg%3E");
          padding: 120px 0 150px 0;
          position: relative;
          overflow: hidden;
        }
        .hww-top-curve {
          position: absolute;
          top: -1px;
          left: 0;
          width: 100%;
          height: 70px;
          z-index: 10;
          pointer-events: none;
        }
        .hww-top-curve-svg {
          width: 100%;
          height: 100%;
          display: block;
        }
        .hww-bottom-polygon {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 130px;
          background-color: #4E9473;
          background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60c-18-18-42-6-42-6s12-24 30-6c18-18 42-6 42-6s-12 24-30 6c-18 18-6 42-6 42s-24-12-6-30c18 18 6 42 6 42s24-12 6-30z' fill='none' stroke='%23ffffff' stroke-width='1' stroke-opacity='0.04'/%3E%3C/svg%3E");
          clip-path: polygon(0 100%, 0 40%, 50% 0, 100% 40%, 100% 100%);
          z-index: 10;
        }
        .hww-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }
        .hww-main-heading {
          font-family: "Gutenberg Clean Regular", "AMwA Font Medium", sans-serif;
          font-size: 58px;
          line-height: 1;
          color: #FFFFFF;
          text-transform: uppercase;
          margin: 0 0 60px 0;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s;
        }
        .how-we-work-section.is-visible .hww-main-heading {
          opacity: 1;
          transform: translateY(0);
        }
        .hww-text-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 120px;
          margin-bottom: 70px;
        }
        .hww-col {
          max-width: 520px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .how-we-work-section.is-visible .hww-col:nth-child(1) { transition-delay: 0.2s; }
        .how-we-work-section.is-visible .hww-col:nth-child(2) { transition-delay: 0.4s; }
        .how-we-work-section.is-visible .hww-col {
          opacity: 1;
          transform: translateY(0);
        }
        .hww-col-heading {
          font-family: "Avenir LT 55 Regular", sans-serif;
          font-size: 22px;
          letter-spacing: 7px;
          color: #FFFFFF;
          text-transform: uppercase;
          margin: 0 0 24px 0;
          padding-bottom: 16px;
          position: relative;
        }
        .hww-col-heading::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 95px;
          height: 3px;
          background-color: #E5007E;
        }
        .hww-col-text {
          font-family: "Avenir LT 55 Regular", sans-serif;
          font-size: 16px;
          line-height: 1.75;
          color: #FFFFFF;
          margin: 0;
        }
        .hww-pillars-heading {
          font-family: "Gutenberg Clean Regular", "AMwA Font Medium", sans-serif;
          font-size: 46px;
          line-height: 1;
          color: #FFFFFF;
          text-transform: uppercase;
          margin: 0 0 50px 0;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s;
        }
        .how-we-work-section.is-visible .hww-pillars-heading {
          opacity: 1;
          transform: translateY(0);
        }
        .hww-pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 70px;
          margin-bottom: 80px;
        }
        .hww-pillar {
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .how-we-work-section.is-visible .hww-pillar:nth-child(1) { transition-delay: 0.6s; }
        .how-we-work-section.is-visible .hww-pillar:nth-child(2) { transition-delay: 0.7s; }
        .how-we-work-section.is-visible .hww-pillar:nth-child(3) { transition-delay: 0.8s; }
        .how-we-work-section.is-visible .hww-pillar:nth-child(4) { transition-delay: 0.9s; }
        .how-we-work-section.is-visible .hww-pillar {
          opacity: 1;
          transform: translateY(0);
        }
        .hww-pillar-circle {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background-color: #E5007E;
          margin-bottom: 24px;
          transform: scale(0.5);
          opacity: 0;
          transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.6s ease;
        }
        .how-we-work-section.is-visible .hww-pillar:nth-child(1) .hww-pillar-circle { transition-delay: 0.7s; transform: scale(1); opacity: 1; }
        .how-we-work-section.is-visible .hww-pillar:nth-child(2) .hww-pillar-circle { transition-delay: 0.8s; transform: scale(1); opacity: 1; }
        .how-we-work-section.is-visible .hww-pillar:nth-child(3) .hww-pillar-circle { transition-delay: 0.9s; transform: scale(1); opacity: 1; }
        .how-we-work-section.is-visible .hww-pillar:nth-child(4) .hww-pillar-circle { transition-delay: 1.0s; transform: scale(1); opacity: 1; }
        
        .hww-pillar-title {
          font-family: "Avenir LT 55 Regular", sans-serif;
          font-size: 15px;
          letter-spacing: 6px;
          line-height: 1.6;
          color: #FFFFFF;
          text-transform: uppercase;
          margin: 0 0 16px 0;
        }
        .hww-pillar-text {
          font-family: "Avenir LT 55 Regular", sans-serif;
          font-size: 16px;
          line-height: 1.6;
          color: #FFFFFF;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .hww-text-cols {
            gap: 60px;
          }
          .hww-pillars-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 50px;
          }
        }

        @media (max-width: 768px) {
          .how-we-work-section {
            padding: 80px 0 120px 0;
          }
          .hww-container {
            padding: 0 24px;
          }
          .hww-main-heading {
            font-size: 38px;
            margin-bottom: 40px;
          }
          .hww-text-cols {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .hww-col-heading {
            font-size: 18px;
            letter-spacing: 4px;
          }
          .hww-pillars-heading {
            font-size: 34px;
            margin-top: 50px;
          }
          .hww-pillars-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            margin-bottom: 50px;
          }
          .hww-bottom-polygon {
            height: 70px;
            clip-path: polygon(0 100%, 0 40%, 50% 0, 100% 40%, 100% 100%);
          }
        }
      `}} />

      {/* Top White Curved Divider (Matching Guiding Principles background) */}
      <div className="hww-top-curve" aria-hidden="true">
        <svg className="hww-top-curve-svg" viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 Q720,70 1440,0 L1440,0 L0,0 Z" fill="#FAFAF7" />
        </svg>
      </div>

      <div className="hww-container">
        <h2 className="hww-main-heading">HOW WE WORK</h2>
        
        <div className="hww-text-cols">
          <div className="hww-col">
            <h3 className="hww-col-heading">COMMITMENT TO EMPOWERMENT</h3>
            <p className="hww-col-text">
              At Women&apos;s Voices, empowering women from diverse backgrounds is the foundation of our mission. We strive to build confidence, independence, and a sense of belonging by creating safe, inclusive spaces where every woman can thrive and reach her full potential.
            </p>
          </div>
          <div className="hww-col">
            <h3 className="hww-col-heading">STRATEGIC APPROACH</h3>
            <p className="hww-col-text">
              We leverage our community partnerships, educational resources, and wellbeing support networks to drive meaningful change. Our work is rooted in collective action, utilizing our shared experiences to build resilience and foster a more equitable society for all.
            </p>
          </div>
        </div>

        <h2 className="hww-pillars-heading">OUR FOUR PILLARS</h2>

        <div className="hww-pillars-grid">
          <div className="hww-pillar">
            <div className="hww-pillar-circle" />
            <h3 className="hww-pillar-title">COMMUNITY LEADERSHIP & CONFIDENCE BUILDING</h3>
            <p className="hww-pillar-text">Fostering independence and amplifying voices within local communities to ensure women can lead with conviction.</p>
          </div>
          <div className="hww-pillar">
            <div className="hww-pillar-circle" />
            <h3 className="hww-pillar-title">WELLBEING & MENTAL HEALTH SUPPORT</h3>
            <p className="hww-pillar-text">Providing safe spaces for healing, connection, and holistic support to help women navigate life&apos;s challenges.</p>
          </div>
          <div className="hww-pillar">
            <div className="hww-pillar-circle" />
            <h3 className="hww-pillar-title">EDUCATION, SKILLS & MENTORSHIP</h3>
            <p className="hww-pillar-text">Equipping women with the practical tools and language skills needed for personal growth and expanded opportunities.</p>
          </div>
          <div className="hww-pillar">
            <div className="hww-pillar-circle" />
            <h3 className="hww-pillar-title">ADVOCACY, INCLUSION & RIGHTS</h3>
            <p className="hww-pillar-text">Championing equality and actively challenging the barriers of social isolation and systemic discrimination.</p>
          </div>
        </div>
      </div>

      {/* Bottom Green Angular Polygon */}
      <div className="hww-bottom-polygon" aria-hidden="true" />
    </section>
  );
}
