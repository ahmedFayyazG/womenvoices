import type { ReactNode } from "react";

export interface ApproachSectionProps {
  id?: string;
  valuesHeading?: string;
  values?: string[];
  creedHeading?: string;
  creedParagraphs?: ReactNode[];
  hideThematicAreas?: boolean;
  dividerColor?: string;
}

export function ApproachSection({
  id = "approach",
  valuesHeading = "OUR VALUES",
  values = [
    "Women’s Empowerment",
    "Community Voice",
    "Equality & Inclusion",
    "Education & Growth",
    "Health & Wellbeing",
    "Collective Strength",
  ],
  creedHeading = "OUR CREED",
  creedParagraphs = [
    "Women’s Voices was established to strengthen the voice, confidence, and influence of women within their communities. We work alongside Black, Asian, minority ethnic, refugee, asylum-seeking, and migrant women to create safe and accessible spaces for support, learning, and connection.",
    "We are committed to challenging inequality, social isolation, discrimination, and the barriers that prevent women from reaching their full potential through education, wellbeing support, mentoring, and collective action.",
    "Our work encourages resilience, independence, leadership, and community participation by supporting women to develop skills, confidence, and opportunities that positively shape their lives and futures.",
    "We believe empowered women strengthen families, communities, and society. Through collaboration, inclusion, compassion, and advocacy, we continue building spaces where every woman’s voice matters.",
  ],
  hideThematicAreas = false,
  dividerColor = "#E5007E",
}: ApproachSectionProps = {}) {
  return (
    <section id={id} className="approach-section section-reveal">
      <style dangerouslySetInnerHTML={{ __html: `
        .approach-section {
          background-color: #FFFFFF;
          padding: 80px 24px 120px 24px;
          color: #4D4D4D;
          position: relative;
          overflow: hidden;
        }
        .approach-container {
          max-width: 1220px;
          margin: 0 auto;
        }
        .approach-top-row {
          display: flex;
          justify-content: space-between;
          gap: 60px;
        }
        .approach-col {
          width: 48%;
        }
        .approach-heading {
          font-family: "Gutenberg Clean Regular", sans-serif;
          font-size: 45px;
          line-height: 50px;
          letter-spacing: 0px;
          color: #4D4D4D;
          text-transform: uppercase;
          margin: 0 0 30px 0;
        }
        .values-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 20px;
          row-gap: 18px;
          align-items: start;
        }
        .approach-value-card {
          background-color: #E5017E;
          height: 48px;
          min-height: 48px;
          max-height: 48px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          padding: 0 18px;
          border-radius: 0;
          overflow: hidden;
        }
        .value-icon {
          width: 14px;
          height: 14px;
          margin-right: 10px;
          flex-shrink: 0;
        }
        .value-text {
          font-family: "Avenir LT 55 Regular", sans-serif;
          font-size: 14px;
          line-height: 18px;
          letter-spacing: 0px;
          color: #FFFFFF;
          margin: 0;
        }
        .creed-paragraph {
          font-family: "Avenir LT 55 Regular", sans-serif;
          font-size: 15px;
          line-height: 22.5px;
          letter-spacing: 0px;
          color: #4D4D4D;
          margin: 0 0 20px 0;
        }
        .creed-paragraph b {
          font-weight: 700;
        }
        .creed-divider {
          width: 90px;
          height: 5px;
          background-color: #E5007E;
          margin-top: 30px;
        }
        
        .thematic-block {
          margin-top: 80px;
          text-align: center;
        }
        .thematic-mini-heading {
          font-family: "Avenir LT 55 Regular", sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 8px;
          color: #4D4D4D;
          text-transform: uppercase;
          margin: 0 0 10px 0;
        }
        .thematic-main-heading {
          font-family: "AMwA Font Medium", sans-serif;
          font-size: 45px;
          line-height: 50px;
          color: #4D4D4D;
          text-transform: uppercase;
          margin: 0;
        }
        .thematic-cards-row {
          display: flex;
          justify-content: space-between;
          max-width: 1280px;
          margin: 45px auto 0 auto;
          gap: 90px;
        }
        .thematic-card-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .thematic-card {
          width: 350px;
          height: 350px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0;
          box-shadow: none;
          transition: transform 0.4s ease;
        }
        .thematic-card:hover {
          transform: translateY(-8px);
        }
        .thematic-icon {
          width: 200px;
          height: 200px;
        }
        .thematic-card-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }
        .thematic-caption {
          font-family: "Avenir LT 55 Regular", sans-serif;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 6px;
          color: #4D4D4D;
          text-transform: uppercase;
          text-align: center;
          margin-top: 22px;
        }
        .thematic-desc {
          font-family: "Avenir LT 55 Regular", sans-serif;
          font-size: 14px;
          line-height: 22px;
          color: #4D4D4D;
          text-align: center;
          margin-top: 12px;
          max-width: 320px;
        }
        
        .approach-divider-container {
          position: absolute;
          bottom: 0;
          left: -2%;
          width: 104%;
          height: 100px;
          overflow: hidden;
          pointer-events: none;
          z-index: 10;
        }
        .approach-divider-svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        @media (max-width: 1280px) {
          .approach-container {
            max-width: 1080px;
          }
          .approach-top-row {
            gap: 36px;
          }
          .approach-heading,
          .thematic-main-heading {
            font-size: 40px;
            line-height: 44px;
          }
          .thematic-cards-row {
            gap: 34px;
            max-width: 1080px;
          }
          .thematic-card {
            width: clamp(260px, 26vw, 320px);
            height: clamp(260px, 26vw, 320px);
          }
          .thematic-caption {
            letter-spacing: 4px;
          }
        }

        /* Tablet Responsiveness */
        @media (max-width: 1024px) {
          .approach-section {
            padding: 70px 24px 90px 24px;
          }
          .approach-top-row {
            gap: 40px;
          }
          .approach-heading, .thematic-main-heading {
            font-size: 38px;
            line-height: 44px;
          }
          .creed-paragraph {
            font-size: 15px;
            line-height: 22px;
          }
          .thematic-block {
            margin-top: 60px;
          }
          .thematic-cards-row {
            flex-wrap: wrap;
            justify-content: center;
            gap: 60px;
          }
          .thematic-card {
            width: 320px;
            height: 320px;
          }
          .approach-divider-container {
            height: 75px;
          }
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .approach-section {
            padding: 60px 24px 70px 24px;
          }
          .approach-top-row {
            flex-direction: column;
            gap: 50px;
          }
          .approach-col {
            width: 100%;
          }
          .approach-heading, .thematic-main-heading {
            font-size: 32px;
            line-height: 36px;
          }
          .values-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .approach-value-card {
            height: 48px;
            min-height: 48px;
            max-height: 48px;
          }
          .creed-paragraph {
            font-size: 14px;
            line-height: 21px;
            margin-bottom: 24px;
          }
          .thematic-block {
            margin-top: 50px;
          }
          .thematic-mini-heading {
            letter-spacing: 3px;
          }
          .thematic-cards-row {
            flex-direction: column;
            align-items: center;
            gap: 50px;
          }
          .thematic-card {
            width: 82vw;
            height: 82vw;
            max-width: 360px;
            max-height: 360px;
          }
          .thematic-caption {
            font-size: 13px;
            letter-spacing: 3px;
          }
          .thematic-desc {
            font-size: 14px;
            line-height: 21px;
            max-width: 82vw;
          }
          .approach-divider-container {
            height: 50px;
          }
        }
      `}} />

      <div className="approach-container">
        {/* Top Row: Values and Creed */}
        <div className="approach-top-row">
          
          {/* Left Column: Values */}
          <div className="approach-col">
            <h2 className="approach-heading" style={{ textAlign: "right" }}>{valuesHeading}</h2>
            <div className="values-grid">
              {values.map((value, idx) => (
                <div className="approach-value-card" key={idx}>
                  {/* White Asterisk Icon */}
                  <svg className="value-icon" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="square">
                    <path d="M12 3v18M3 12h18M5.636 5.636l12.728 12.728M5.636 18.364L18.364 5.636" />
                  </svg>
                  <p className="value-text">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Creed */}
          <div className="approach-col">
            <h2 className="approach-heading">{creedHeading}</h2>
            {creedParagraphs.map((para, idx) => (
              <p className="creed-paragraph" key={idx}>
                {para}
              </p>
            ))}
            <div className="creed-divider" aria-hidden="true" />
          </div>
        </div>

        {/* Bottom Block: Thematic Areas */}
        {!hideThematicAreas && (
          <div className="thematic-block">
            <p className="thematic-mini-heading">WHAT WE DO</p>
            <h2 className="thematic-main-heading">THEMATIC AREAS</h2>

            <div className="thematic-cards-row">
              <div className="thematic-card-wrapper">
                <div className="thematic-card" style={{ backgroundColor: "#8E2A91" }}>
                  <img
                    className="thematic-card-image"
                    src="/images/womens-leadership-advocacy-card.svg"
                    alt=""
                  />
                </div>
                <p className="thematic-caption">WOMEN’S LEADERSHIP<br/>& ADVOCACY</p>
              </div>
              
              <div className="thematic-card-wrapper">
                <div className="thematic-card" style={{ backgroundColor: "#4E9473" }}>
                  <img
                    className="thematic-card-image"
                    src="/images/education-skills-wellbeing-card.svg"
                    alt=""
                  />
                </div>
                <p className="thematic-caption">EDUCATION, SKILLS<br/>& WELLBEING</p>
              </div>

              <div className="thematic-card-wrapper">
                <div className="thematic-card" style={{ backgroundColor: "#FDBE18" }}>
                  <img
                    className="thematic-card-image"
                    src="/images/health-rights-inclusion-card.png"
                    alt=""
                  />
                </div>
                <p className="thematic-caption">HEALTH, RIGHTS<br/>& INCLUSION</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Curving Divider */}
      <div className="approach-divider-container" aria-hidden="true">
        <svg className="approach-divider-svg" viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,30 C400,120 1000,80 1440,10 L1440,100 L0,100 Z" 
            fill={dividerColor} 
          />
        </svg>
      </div>
    </section>
  );
}
