"use client";

import { useEffect, useRef, useState } from "react";

export function ImpactMapSection() {
  const [isImpactVisible, setIsImpactVisible] = useState(false);
  const impactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImpactVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (impactRef.current) {
      observer.observe(impactRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={impactRef} className={`impact-editorial-section ${isImpactVisible ? "is-visible" : ""}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .impact-editorial-section {
          background-color: #4E9473;
          padding: 95px 0 220px 0;
          position: relative;
          overflow: hidden;
        }
        .impact-editorial-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-color: #FFC113;
          clip-path: polygon(0 12%, 50% 0, 100% 12%, 100% 100%, 0 100%);
          z-index: 0;
          pointer-events: none;
        }
        .impact-container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          gap: 44px;
          position: relative;
          z-index: 11;
          min-height: 470px;
        }
        .impact-left {
          width: 50%;
          position: relative;
          opacity: 0;
          transform: scale(0.95);
          transition: opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s;
        }
        .impact-editorial-section.is-visible .impact-left {
          opacity: 1;
          transform: scale(1);
        }
        .impact-map-wrapper {
          position: relative;
          width: 124%;
          margin: 100px 0 -176px -30%;
          z-index: 5;
        }
        .impact-map-img {
          width: 100%;
          height: auto;
          display: block;
        }
        .impact-pin {
          position: absolute;
          width: 12px;
          height: 12px;
          background-color: #E5007E;
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(229, 0, 126, 0.3);
          animation: pinPulse 2s infinite;
        }
        .impact-pin-1 { top: 35%; left: 45%; }
        .impact-pin-2 { top: 55%; left: 65%; background-color: #FFFFFF; box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.3); animation-delay: 0.5s; }
        .impact-pin-3 { top: 75%; left: 52%; animation-delay: 1s; }
        
        @keyframes pinPulse {
          0% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(229, 0, 126, 0.4); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(229, 0, 126, 0); }
          100% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(229, 0, 126, 0); }
        }

        .impact-right {
          width: 50%;
          display: flex;
          flex-direction: column;
        }
        .impact-heading {
          font-family: "Gutenberg Clean Regular", "AMwA Font Medium", sans-serif;
          font-size: 45px;
          line-height: 1;
          color: #E5007E;
          text-transform: uppercase;
          margin: 0 0 40px 0;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
        }
        .impact-editorial-section.is-visible .impact-heading {
          opacity: 1;
          transform: translateY(0);
        }
        .impact-cards-row {
          display: flex;
          gap: 16px;
          margin-bottom: 30px;
        }
        .impact-card {
          background-color: #FFFFFF;
          flex: 1;
          height: 120px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
          border-radius: 0;
        }
        .impact-editorial-section.is-visible .impact-card:nth-child(1) { transition-delay: 0.3s; }
        .impact-editorial-section.is-visible .impact-card:nth-child(2) { transition-delay: 0.4s; }
        .impact-editorial-section.is-visible .impact-card:nth-child(3) { transition-delay: 0.5s; }
        .impact-editorial-section.is-visible .impact-card {
          opacity: 1;
          transform: translateY(0);
        }
        .impact-number {
          font-family: "Gutenberg Clean Regular", "AMwA Font Medium", sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #E5007E;
          margin: 0 0 8px 0;
          line-height: 1;
        }
        .impact-desc {
          font-family: "Avenir LT 55 Regular", sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          line-height: 1.6;
          color: #8E2A91;
          margin: 0;
          text-transform: uppercase;
        }

        .impact-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          opacity: 0;
          transition: opacity 0.8s ease 0.6s;
        }
        .impact-editorial-section.is-visible .impact-controls {
          opacity: 1;
        }
        .impact-dots {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .impact-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #E58C4A;
        }
        .impact-dot.is-active {
          background-color: #E5007E;
          width: 10px;
          height: 10px;
        }
        .impact-arrows {
          display: flex;
          gap: 16px;
        }
        .impact-arrow {
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .impact-arrow:hover {
          opacity: 0.7;
        }

        .impact-bottom-curve {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 180px;
          z-index: 10;
          pointer-events: none;
        }
        .impact-curve-svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        @media (max-width: 1280px) {
          .impact-editorial-section {
            padding: 88px 0 180px 0;
          }
          .impact-container {
            max-width: 1080px;
            padding: 0 32px;
            gap: 32px;
          }
          .impact-map-wrapper {
            width: 106%;
            margin: 80px 0 -136px -16%;
          }
          .impact-heading {
            margin-bottom: 28px;
          }
          .impact-cards-row {
            gap: 10px;
          }
          .impact-card {
            height: 110px;
            padding: 14px;
          }
          .impact-number {
            font-size: 24px;
          }
          .impact-desc {
            font-size: 10px;
            letter-spacing: 1px;
          }
        }

        @media (max-width: 1024px) {
          .impact-editorial-section {
            padding: 90px 0 160px 0;
          }
          .impact-editorial-section::before {
            clip-path: polygon(0 8%, 50% 0, 100% 8%, 100% 100%, 0 100%);
          }
          .impact-container {
            flex-direction: column;
            gap: 50px;
            min-height: 0;
          }
          .impact-left, .impact-right {
            width: 100%;
          }
          .impact-map-wrapper {
            width: min(92%, 520px);
            margin: 40px auto -80px auto;
          }
          .impact-cards-row {
            flex-wrap: wrap;
            justify-content: center;
          }
          .impact-card {
            flex: 0 0 calc(50% - 8px);
          }
          .impact-controls {
            margin-top: 10px;
          }
        }

        @media (max-width: 768px) {
          .impact-editorial-section {
            padding: 60px 0 100px 0;
          }
          .impact-editorial-section::before {
            clip-path: polygon(0 5%, 50% 0, 100% 5%, 100% 100%, 0 100%);
          }
          .impact-container {
            padding: 0 24px;
            gap: 40px;
          }
          .impact-right {
            order: 1;
          }
          .impact-left {
            order: 2;
          }
          .impact-map-wrapper {
            width: 120%;
            max-width: 480px;
            margin: 60px 0 -32px -10%;
          }
          .impact-heading {
            font-size: 32px;
            text-align: center;
            margin-bottom: 24px;
          }
          .impact-cards-row {
            flex-direction: column;
            align-items: center;
            gap: 16px;
          }
          .impact-card {
            width: 100%;
            max-width: 320px;
            height: auto;
            min-height: 90px;
            padding: 12px 16px;
            flex: none;
          }
          .impact-number {
            font-size: 24px;
            margin-bottom: 4px;
          }
          .impact-desc {
            font-size: 10px;
            line-height: 1.6;
          }
          .impact-bottom-curve {
            height: 60px;
          }
        }
      `}} />

      <div className="impact-container">
        <div className="impact-left">
          <div className="impact-map-wrapper">
            <img src="/images/maplongsight.png" alt="Impact Map" className="impact-map-img" />
            <div className="impact-pin impact-pin-1" />
            <div className="impact-pin impact-pin-2" />
            <div className="impact-pin impact-pin-3" />
          </div>
        </div>
        
        <div className="impact-right">
          <h2 className="impact-heading">IMPACT</h2>
          
          <div className="impact-cards-row">
            <div className="impact-card">
              <p className="impact-number">10,134</p>
              <p className="impact-desc">INDIRECT REACH (PERSONS)<br/>THROUGH OUR SUB-GRANTEE<br/>PARTNERS</p>
            </div>
            <div className="impact-card">
              <p className="impact-number">33</p>
              <p className="impact-desc">NEW PARTNERSHIPS<br/>ESTABLISHED</p>
            </div>
            <div className="impact-card">
              <p className="impact-number">1,420,036</p>
              <p className="impact-desc">FUNDS PROVIDED TO PARTNERS<br/>BY AMWA THROUGH SUB-<br/>GRANTING</p>
            </div>
          </div>
          
          <div className="impact-controls">
            <div className="impact-dots">
              <span className="impact-dot is-active"></span>
              <span className="impact-dot"></span>
              <span className="impact-dot"></span>
              <span className="impact-dot"></span>
            </div>
            <div className="impact-arrows">
              <svg className="impact-arrow" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#E5007E" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" strokeLinecap="square"/>
              </svg>
              <svg className="impact-arrow" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#E5007E" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" strokeLinecap="square"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Soft Curve */}
      <div className="impact-bottom-curve" aria-hidden="true">
        <svg className="impact-curve-svg" viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,100 L0,0 Q720,80 1440,0 L1440,100 Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  );
}