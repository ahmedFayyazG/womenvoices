"use client";

import { useEffect, useRef, useState } from "react";

export function GuidingPrinciplesSection() {
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

  const principles = [
    {
      title: "EMPOWERMENT & LEADERSHIP",
      text: "We believe every woman has the right to be heard, valued, and equipped to lead. By providing education, skills training, and mentorship, we empower women to take control of their futures and become catalysts for positive change within their families and communities.",
      iconColor: "#FDBE18"
    },
    {
      title: "DIVERSITY & INCLUSION",
      text: "We celebrate the rich cultural tapestry of our diverse ethnic, migrant, and refugee communities. Our safe spaces are built on mutual respect and understanding, ensuring that women facing social isolation or language barriers find a welcoming home where they truly belong.",
      iconColor: "#4E9473"
    },
    {
      title: "COMPASSION & WELLBEING",
      text: "Healing and personal growth are at the heart of what we do. We approach every woman's journey with deep empathy, providing the holistic support and creative outlets needed to build resilience, restore confidence, and foster long-term mental and emotional wellbeing.",
      iconColor: "#E5007E"
    }
  ];

  return (
    <section ref={sectionRef} className={`guiding-principles-section ${isVisible ? "is-visible" : ""}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .guiding-principles-section {
          background-color: #FAFAF7;
          background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60c-18-18-42-6-42-6s12-24 30-6c18-18 42-6 42-6s-12 24-30 6c-18 18-6 42-6 42s-24-12-6-30c18 18 6 42 6 42s24-12 6-30z' fill='none' stroke='%23000000' stroke-width='1' stroke-opacity='0.04'/%3E%3C/svg%3E");
          padding: 90px 0 100px 0;
          position: relative;
          overflow: hidden;
        }
        .gp-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .gp-accent-line {
          width: 95px;
          height: 5px;
          background-color: #E5007E;
          margin: 0 auto 20px auto;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .gp-heading {
          font-family: "Gutenberg Clean Regular", "AMwA Font Medium", sans-serif;
          font-size: 54px;
          line-height: 1;
          color: #E5007E;
          text-transform: uppercase;
          text-align: center;
          margin: 0 0 50px 0;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s;
        }
        .guiding-principles-section.is-visible .gp-accent-line,
        .guiding-principles-section.is-visible .gp-heading {
          opacity: 1;
          transform: translateY(0);
        }
        .gp-carousel-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          gap: 20px;
        }
        .gp-arrow {
          cursor: pointer;
          flex-shrink: 0;
          display: none;
        }
        .gp-carousel {
          display: flex;
          gap: 28px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding-bottom: 20px;
          max-width: 100%;
        }
        .gp-carousel::-webkit-scrollbar {
          display: none;
        }
        .gp-card-wrapper {
          flex: 0 0 calc((100% - 56px) / 3);
          scroll-snap-align: start;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .guiding-principles-section.is-visible .gp-card-wrapper:nth-child(1) { transition-delay: 0.2s; }
        .guiding-principles-section.is-visible .gp-card-wrapper:nth-child(2) { transition-delay: 0.3s; }
        .guiding-principles-section.is-visible .gp-card-wrapper:nth-child(3) { transition-delay: 0.4s; }
        .guiding-principles-section.is-visible .gp-card-wrapper {
          opacity: 1;
          transform: translateY(0);
        }
        .gp-card {
          background-color: #F4EFE3;
          padding: 28px 30px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .gp-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }
        .gp-icon {
          width: 32px;
          height: 32px;
          flex-shrink: 0;
        }
        .gp-title {
          font-family: "Avenir LT 55 Regular", sans-serif;
          font-size: 16px;
          letter-spacing: 6px;
          color: #4D4D4D;
          text-transform: uppercase;
          margin: 0;
          line-height: 1.4;
        }
        .gp-paragraph {
          font-family: "Avenir LT 55 Regular", sans-serif;
          font-size: 16px;
          line-height: 1.65;
          color: #4D4D4D;
          margin: 0;
        }
        .gp-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 20px;
          opacity: 0;
          transition: opacity 0.8s ease 0.5s;
        }
        .guiding-principles-section.is-visible .gp-dots {
          opacity: 1;
        }
        .gp-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #D1B8CB;
        }
        .gp-dot.is-active {
          background-color: #E5007E;
        }

        @media (max-width: 1024px) {
          .gp-card-wrapper {
            flex: 0 0 calc((100% - 28px) / 2);
          }
          .gp-arrow {
            display: block;
          }
        }
        @media (max-width: 768px) {
          .guiding-principles-section {
            padding: 60px 0 70px 0;
          }
          .gp-container {
            padding: 0 24px;
          }
          .gp-heading {
            font-size: 36px;
          }
          .gp-card-wrapper {
            flex: 0 0 85vw;
          }
        }
      `}} />

      <div className="gp-container">
        <div className="gp-accent-line" aria-hidden="true" />
        <h2 className="gp-heading">GUIDING PRINCIPLES</h2>
        
        <div className="gp-carousel-wrapper">
          <svg className="gp-arrow" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4E9473" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" strokeLinecap="square"/>
          </svg>
          
          <div className="gp-carousel">
            {principles.map((principle, index) => (
              <div className="gp-card-wrapper" key={index}>
                <div className="gp-card">
                  <div className="gp-card-header">
                    <svg className="gp-icon" viewBox="0 0 32 32" fill={principle.iconColor} xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 2C23.732 2 30 8.268 30 16C30 23.732 23.732 30 16 30C8.268 30 2 23.732 2 16C2 8.268 8.268 2 16 2Z" opacity="0.2"/>
                      <path d="M16 6L24 20H8L16 6Z" fill={principle.iconColor}/>
                    </svg>
                    <h3 className="gp-title">{principle.title}</h3>
                  </div>
                  <p className="gp-paragraph">{principle.text}</p>
                </div>
              </div>
            ))}
          </div>

          <svg className="gp-arrow" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4E9473" strokeWidth="1.5">
            <path d="M9 18l6-6-6-6" strokeLinecap="square"/>
          </svg>
        </div>
        
        <div className="gp-dots">
          <span className="gp-dot is-active"></span>
          <span className="gp-dot"></span>
          <span className="gp-dot"></span>
        </div>
      </div>
    </section>
  );
}