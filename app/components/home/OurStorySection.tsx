"use client";

import { useEffect, useRef, useState } from "react";

export function OurStorySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

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

  const milestones = [
    {
      title: "CREATING SAFE SPACES",
      text: "Women’s Voices began with a commitment to creating trusted, welcoming spaces where women could connect, share experiences, access support, and feel heard without judgement.",
      year: "2019"
    },
    {
      title: "COMMUNITY ENGAGEMENT",
      text: "Our work grew through workshops, mentoring, wellbeing activities, education sessions, and practical support designed around the needs of women and families in our communities.",
      year: "2022"
    },
    {
      title: "GROWTH AND OPPORTUNITY",
      text: "Today, Women’s Voices continues to strengthen confidence, independence, leadership, and belonging through community programmes, creative engagement, partnerships, and advocacy.",
      year: "2025"
    }
  ];

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className={`our-story-section ${isVisible ? "is-visible" : ""}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .our-story-section {
          background-color: #4E9473;
          background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60c-18-18-42-6-42-6s12-24 30-6c18-18 42-6 42-6s-12 24-30 6c-18 18-6 42-6 42s-24-12-6-30c18 18 6 42 6 42s24-12 6-30z' fill='none' stroke='%23ffffff' stroke-width='1' stroke-opacity='0.04'/%3E%3C/svg%3E");
          padding: 120px 0 140px 0;
          position: relative;
          overflow: hidden;
        }
        .os-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }
        .os-heading {
          font-family: "Gutenberg Clean Regular", "AMwA Font Medium", sans-serif;
          font-size: 56px;
          line-height: 1;
          color: #FFFFFF;
          text-transform: uppercase;
          margin: 0 0 30px 0;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s;
        }
        .os-intro {
          font-family: "Avenir LT 55 Regular", sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: #FFFFFF;
          max-width: 900px;
          margin: 0 0 80px 0;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
        }
        .our-story-section.is-visible .os-heading,
        .our-story-section.is-visible .os-intro {
          opacity: 1;
          transform: translateY(0);
        }
        .os-timeline-container {
          display: flex;
          align-items: center;
          width: 100%;
        }
        .os-arrow {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 2px solid #E5007E;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: background-color 0.3s ease;
          opacity: 0;
        }
        .our-story-section.is-visible .os-arrow {
          opacity: 1;
          transition: opacity 0.8s ease 0.6s, background-color 0.3s ease;
        }
        .os-arrow:hover {
          background-color: rgba(229, 0, 126, 0.1);
        }
        .os-track-wrapper {
          flex-grow: 1;
          margin: 0 40px;
          position: relative;
        }
        .os-track {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          position: relative;
          width: 100%;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .os-track::-webkit-scrollbar {
          display: none;
        }
        .os-line {
          position: absolute;
          bottom: 42px;
          left: 0;
          min-width: 100%;
          width: 200%;
          height: 2px;
          background-color: rgba(255, 255, 255, 0.4);
        }
        .os-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 380px;
          flex-shrink: 0;
          scroll-snap-align: center;
          position: relative;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .our-story-section.is-visible .os-item:nth-child(2) { transition-delay: 0.3s; }
        .our-story-section.is-visible .os-item:nth-child(3) { transition-delay: 0.4s; }
        .our-story-section.is-visible .os-item:nth-child(4) { transition-delay: 0.5s; }
        .our-story-section.is-visible .os-item {
          opacity: 1;
          transform: translateY(0);
        }
        .os-card {
          background-color: #FFFFFF;
          border: 1px solid #E6DFCF;
          padding: 28px;
          width: 100%;
          position: relative;
          margin-bottom: 30px;
        }
        .os-card::after {
          content: '';
          position: absolute;
          bottom: -9px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 16px;
          height: 16px;
          background-color: #FFFFFF;
          border-right: 1px solid #E6DFCF;
          border-bottom: 1px solid #E6DFCF;
        }
        .os-card-title {
          font-family: "Avenir LT 55 Regular", sans-serif;
          font-size: 15px;
          letter-spacing: 6px;
          color: #4D4D4D;
          text-transform: uppercase;
          margin: 0 0 12px 0;
        }
        .os-card-text {
          font-family: "Avenir LT 55 Regular", sans-serif;
          font-size: 15px;
          line-height: 1.6;
          color: #4D4D4D;
          margin: 0;
        }
        .os-marker-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 2;
        }
        .os-marker {
          width: 24px;
          height: 24px;
          background-color: #E5007E;
          border-radius: 50%;
          margin-bottom: 12px;
          transform: scale(0.5);
          transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .our-story-section.is-visible .os-marker {
          transform: scale(1);
        }
        .our-story-section.is-visible .os-item:nth-child(2) .os-marker { transition-delay: 0.5s; }
        .our-story-section.is-visible .os-item:nth-child(3) .os-marker { transition-delay: 0.6s; }
        .our-story-section.is-visible .os-item:nth-child(4) .os-marker { transition-delay: 0.7s; }
        
        .os-year {
          font-family: "Avenir LT 55 Regular", sans-serif;
          font-size: 16px;
          letter-spacing: 6px;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0;
        }

        @media (max-width: 1280px) {
          .os-item { width: 300px; }
        }

        @media (max-width: 1024px) {
          .os-track-wrapper { margin: 0 20px; }
          .os-track {
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 40px;
            padding-bottom: 20px;
            justify-content: flex-start;
            scrollbar-width: none;
          }
          .os-track::-webkit-scrollbar { display: none; }
          .os-item {
            flex: 0 0 calc(50% - 20px);
            scroll-snap-align: start;
          }
          .os-line { width: 200%; }
        }

        @media (max-width: 768px) {
          .our-story-section { padding: 80px 0 100px 0; }
          .os-container { padding: 0 24px; }
          .os-heading { font-size: 36px; }
          .os-intro { margin-bottom: 50px; }
          .os-arrow { display: none; }
          .os-track-wrapper { margin: 0; overflow: visible; }
          .os-track {
            flex-direction: column;
            align-items: flex-start;
            overflow-x: visible;
            gap: 40px;
            padding-bottom: 0;
          }
          .os-line {
            width: 2px;
            height: 100%;
            left: 11px;
            top: 0;
            bottom: auto;
          }
          .os-item {
            width: 100%;
            padding-left: 50px;
            align-items: flex-start;
            flex: none;
          }
          .os-card { margin-bottom: 0; }
          .os-card::after {
            left: -9px;
            top: 24px;
            bottom: auto;
            transform: rotate(135deg);
          }
          .os-marker-group {
            position: absolute;
            left: 0;
            top: 20px;
            width: 24px;
          }
          .os-marker { margin-bottom: 8px; }
          .os-year { font-size: 14px; letter-spacing: 4px; }
        }
      `}} />

      <div className="os-container">
        <h2 className="os-heading">OUR STORY</h2>
        <p className="os-intro">
          Women’s Voices was created to support women from diverse ethnic, migrant, refugee, and underserved communities who face isolation, inequality, language barriers, and social exclusion. Through safe spaces, mentoring, education, creative engagement, and community-led support, we help women build confidence, wellbeing, independence, and opportunity.
        </p>
        
        <div className="os-timeline-container">
          <button className="os-arrow" onClick={scrollLeft} aria-label="Scroll Left">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E5007E" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="square"/>
            </svg>
          </button>
          
          <div className="os-track-wrapper">
            <div className="os-track" ref={trackRef}>
              <div className="os-line" />
              {milestones.map((milestone, idx) => (
                <div className="os-item" key={idx}>
                  <div className="os-card">
                    <h3 className="os-card-title">{milestone.title}</h3>
                    <p className="os-card-text">{milestone.text}</p>
                  </div>
                  <div className="os-marker-group">
                    <div className="os-marker" />
                    <p className="os-year">{milestone.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="os-arrow" onClick={scrollRight} aria-label="Scroll Right">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E5007E" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="square"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}