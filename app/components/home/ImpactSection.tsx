"use client";

import { useEffect, useRef, useState } from "react";

export function ImpactSection() {
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
    <section ref={sectionRef} className={`strategic-section ${isVisible ? "is-visible" : ""}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .strategic-section {
          background-color: #E5007E;
          background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60c-18-18-42-6-42-6s12-24 30-6c18-18 42-6 42-6s-12 24-30 6c-18 18-6 42-6 42s-24-12-6-30c18 18 6 42 6 42s24-12 6-30z' fill='none' stroke='%23ffffff' stroke-width='1' stroke-opacity='0.04'/%3E%3C/svg%3E");
          position: relative;
          width: 100%;
          padding: 80px 0 220px 0;
          overflow: hidden;
        }
        .strategic-heading {
          font-family: "AMwA Font Medium", "Gutenberg Clean Regular", sans-serif;
          font-size: 52px;
          line-height: 58px;
          letter-spacing: 0px;
          color: #FFFFFF;
          text-transform: uppercase;
          text-align: center;
          margin: 0 0 70px 0;
          padding: 0 24px;
          position: relative;
          z-index: 5;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .strategic-section.is-visible .strategic-heading {
          opacity: 1;
          transform: translateY(0);
        }
        .strategic-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 70px;
          row-gap: 30px;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 5;
        }
        .strategic-card-wrapper {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .strategic-section.is-visible .strategic-card-wrapper {
          opacity: 1;
          transform: translateY(0);
        }
        .strategic-section.is-visible .strategic-card-wrapper:nth-child(1) { transition-delay: 0.1s; }
        .strategic-section.is-visible .strategic-card-wrapper:nth-child(2) { transition-delay: 0.2s; }
        .strategic-section.is-visible .strategic-card-wrapper:nth-child(3) { transition-delay: 0.3s; }
        .strategic-section.is-visible .strategic-card-wrapper:nth-child(4) { transition-delay: 0.4s; }
        
        .strategic-card {
          background-color: transparent;
          border: 2px solid #FFFFFF;
          height: 96px;
          display: flex;
          align-items: center;
          padding-left: 24px;
          padding-right: 24px;
          border-radius: 0;
          transition: background-color 0.3s ease, transform 0.3s ease;
          cursor: default;
        }
        .strategic-card:hover {
          background-color: rgba(255, 255, 255, 0.04);
          transform: translateY(-2px);
        }
        .strategic-icon {
          width: 56px;
          height: 56px;
          flex-shrink: 0;
          margin-right: 32px;
        }
        .strategic-text {
          font-family: "Avenir Medium", "Avenir Next", Avenir, sans-serif;
          font-size: 15px;
          line-height: 15px;
          letter-spacing: 3.2px;
          font-weight: 500;
          color: #FFFFFF;
          text-transform: uppercase;
          margin: 0;
        }
        .strategic-yellow-polygon {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 160px;
          background-color: #FDBE18;
          clip-path: polygon(0% 0%, 50% 80%, 100% 0%, 100% 100%, 0% 100%);
          z-index: -1;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1.2s ease 0.3s, transform 1.2s ease 0.3s;
        }
        .strategic-section.is-visible .strategic-yellow-polygon {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1280px) {
          .strategic-section {
            padding: 72px 0 190px 0;
          }
          .strategic-heading {
            font-size: 44px;
            line-height: 50px;
            margin-bottom: 54px;
          }
          .strategic-grid {
            max-width: 1040px;
            column-gap: 34px;
            padding: 0 32px;
          }
          .strategic-card {
            height: 88px;
            padding-left: 18px;
            padding-right: 18px;
          }
          .strategic-icon {
            width: 46px;
            height: 46px;
            margin-right: 22px;
          }
          .strategic-text {
            font-size: 14px;
            line-height: 15px;
            letter-spacing: 2.4px;
          }
        }

        /* Tablet Responsiveness */
        @media (max-width: 1024px) {
          .strategic-section {
            padding-top: 70px;
          }
          .strategic-heading {
            font-size: 42px;
            line-height: 48px;
            margin-bottom: 60px;
          }
          .strategic-grid {
            column-gap: 40px;
            padding: 0 30px;
          }
          .strategic-text {
            font-size: 15px;
            line-height: 15px;
            letter-spacing: 3.2px;
          }
          .strategic-icon {
            margin-right: 24px;
            width: 48px;
            height: 48px;
          }
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .strategic-section {
            padding: 50px 0 160px 0;
          }
          .strategic-heading {
            font-size: 30px;
            line-height: 38px;
            margin-bottom: 50px;
          }
          .strategic-grid {
            grid-template-columns: 1fr;
            row-gap: 22px;
            padding: 0 24px;
          }
          .strategic-card {
            height: auto;
            min-height: 88px;
            padding: 16px 24px;
          }
          .strategic-text {
            font-size: 15px;
            line-height: 15px;
            letter-spacing: 3.2px;
          }
          .strategic-icon {
            width: 42px;
            height: 42px;
            margin-right: 20px;
          }
          .strategic-yellow-polygon {
            height: 100px;
            clip-path: polygon(0% 0%, 50% 60%, 100% 0%, 100% 100%, 0% 100%);
          }
        }
      `}} />

      <h2 className="strategic-heading">OUR STRATEGIC APPROACHES</h2>
      
      <div className="strategic-grid">
        {/* Card 1 */}
        <div className="strategic-card-wrapper">
          <div className="strategic-card">
            <svg className="strategic-icon" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" />
              <path d="M12 22V12" />
            </svg>
            <p className="strategic-text">FEMINIST & TRANSFORMATIONAL<br/>LEADERSHIP DEVELOPMENT</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="strategic-card-wrapper">
          <div className="strategic-card">
            <svg className="strategic-icon" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" />
              <path d="M14 2V8H20" />
              <path d="M8 13H16" /><path d="M8 17H16" />
            </svg>
            <p className="strategic-text">FEMINIST RESEARCH AND<br/>DOCUMENTATION</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="strategic-card-wrapper">
          <div className="strategic-card">
            <svg className="strategic-icon" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 11V6C18 4.9 17.1 4 16 4C14.9 4 14 4.9 14 6V11" />
              <path d="M14 11V5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5V11" />
              <path d="M10 11V7C10 5.9 9.1 5 8 5C6.9 5 6 5.9 6 7V14.5C6 17 8 19 10.5 19H13.5C16 19 18 17 18 14.5V11Z" />
            </svg>
            <p className="strategic-text">POLICY INFLUENCING AND<br/>MOVEMENT BUILDING</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="strategic-card-wrapper">
          <div className="strategic-card">
            <svg className="strategic-icon" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1V3" /><path d="M12 21V23" />
              <path d="M4.2 4.2L5.6 5.6" /><path d="M18.4 18.4L19.8 19.8" />
              <path d="M1 12H3" /><path d="M21 12H23" />
              <path d="M4.2 19.8L5.6 18.4" /><path d="M18.4 5.6L19.8 4.2" />
            </svg>
            <p className="strategic-text">ARTS AND CREATIVE<br/>EXPRESSIONS</p>
          </div>
        </div>
      </div>
      
      {/* Bottom Angular Yellow Divider */}
      <div className="strategic-yellow-polygon" aria-hidden="true" />
    </section>
  );
}
