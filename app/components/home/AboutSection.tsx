import { EditorialAbout, type EditorialAboutProps } from "@/app/components/shared/ReusableSections";

type AboutSectionProps = Partial<EditorialAboutProps>;

const aboutSectionStyles = `
  .about-section {
    overflow: visible !important;
  }
  .about-editorial-grid {
    display: grid;
    grid-template-columns: 1fr 2.6fr 1fr;
    gap: 60px;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 40px;
    position: relative;
    z-index: 5;
  }
  .about-bottom-polygon {
    display: none;
  }
  .about-left-col {
    padding-top: 60px;
  }
  .about-eyebrow {
    font-family: "Gutenberg Clean Regular", sans-serif;
    font-size: 34px;
    line-height: 35px;
    letter-spacing: 0px;
    color: var(--about-eyebrow-color);
    margin: 0 0 20px 0;
  }
  .about-heading {
    font-family: "Gutenberg Clean Regular", sans-serif;
    font-size: 34px;
    line-height: 35px;
    letter-spacing: 0px;
    color: var(--about-heading-color);
    max-width: 480px;
    margin: 0;
  }
  .about-flower {
    width: 220px;
    height: auto;
    display: block;
    margin: 30px 0 0 4px;
    transform: rotate(4deg);
    transform-origin: center bottom;
  }
  .about-center-col {
    position: relative;
  }
  .about-woman-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    transform: translateY(455px);
  }
  .about-image {
    width: 100%;
    height: auto;
    border-radius: 12px;
  }
  .about-right-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 420px;
    padding-top: 40px;
  }
  .about-paragraph {
    font-family: "Avenir LT 55 Regular", sans-serif;
    font-size: 15px;
    line-height: 22.5px;
    letter-spacing: 0px;
    font-weight: 400;
    color: var(--about-body-color);
    margin: 0 0 24px 0;
  }
  .about-cta {
    align-self: flex-start;
    background-color: var(--about-cta-bg);
    color: var(--about-cta-text);
    padding: 10px 24px;
    font-size: 14px;
    letter-spacing: 2px;
    font-weight: 700;
    text-transform: uppercase;
    border: none;
    border-radius: 0;
    text-decoration: none;
    transition: background-color 0.2s;
  }
  .about-cta:hover {
    background-color: #c90077;
  }

  @media (max-width: 1280px) {
    .about-editorial-grid {
      grid-template-columns: 0.9fr 2fr 1fr;
      gap: 34px;
      padding: 0 32px;
    }
    .about-eyebrow,
    .about-heading {
      font-size: 30px;
      line-height: 32px;
    }
    .about-woman-wrapper {
      transform: translateY(380px);
    }
    .about-flower {
      width: 190px;
    }
  }
  
  @media (max-width: 1024px) {
    .about-editorial-grid {
      grid-template-columns: 1fr 1fr;
    }
    .about-center-col {
      grid-column: 1 / -1;
      grid-row: 3;
      height: auto;
    }
    .about-woman-wrapper {
      max-width: 850px;
      margin: 0 auto;
    }
  }
  
  @media (max-width: 768px) {
    /* shrink top+bottom padding so the section doesn't dwarf the illustration */
    .about-section {
      padding-top: 64px !important;
      padding-bottom: 100px !important;
    }
    .about-editorial-grid {
      grid-template-columns: 1fr;
      gap: 24px;
      padding: 0 20px;
    }
    .about-center-col {
      height: auto;
      display: flex;
      justify-content: center;
    }
    /* remove the desktop translateY that pushes illustration out of bounds */
    .about-woman-wrapper {
      width: 96%;
      max-width: 430px;
      margin: 0 auto;
      transform: translateY(120px);
    }
    .about-left-col {
      padding-top: 0;
    }
    /* taller chevron on mobile for a bolder transition */
    .about-bottom-polygon {
      height: 100px;
    }
    .about-flower {
      width: 150px;
      margin-top: 16px;
    }
  }
  @media (max-width: 480px) {
    .about-section {
      padding-top: 52px !important;
      padding-bottom: 88px !important;
    }
    .about-woman-wrapper {
      width: 100%;
      max-width: 380px;
      transform: translateY(130px);
    }
  }
`;

export function AboutSection({
  id = "about",
  eyebrow = "About us",
  heading = "A women-led organisation creating safe spaces for growth, healing, and opportunity",
  decoration = { src: "/images/poppy.png", alt: "" },
  image = { src: "/images/woman.png", alt: "Women's Voices" },
  paragraphs = [
    "Women's Voices works alongside women from diverse ethnic, migrant, refugee, and underserved communities who face isolation, inequality, language barriers, and social exclusion.",
    "Our programmes strengthen confidence, wellbeing, independence, and community belonging through education, mentoring, support services, and creative engagement.",
  ],
  cta = { href: "#approach", label: "Read More" },
  ...props
}: AboutSectionProps = {}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: aboutSectionStyles }} />
      <EditorialAbout
        id={id}
        eyebrow={eyebrow}
        heading={heading}
        decoration={decoration}
        image={image}
        paragraphs={paragraphs}
        cta={cta}
        {...props}
      />
    </>
  );
}
