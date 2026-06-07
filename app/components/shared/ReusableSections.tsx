import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

type LinkConfig = {
  href: string;
  label: string;
};

export type PatternHeroProps = {
  id?: string;
  title: ReactNode;
  eyebrow?: ReactNode;
  cta?: LinkConfig;
  className?: string;
  contentClassName?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

export function PatternHero({
  id,
  title,
  eyebrow,
  cta,
  className = "",
  contentClassName = "",
  style,
  children,
}: PatternHeroProps) {
  return (
    <section id={id} className={`hero section-reveal ${className}`.trim()} style={style}>
      <div className={`hero-copy ${contentClassName}`.trim()}>
        {eyebrow ? <p className="hero-label">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {cta ? (
          <a className="hero-read-button" href={cta.href}>
            {cta.label}
          </a>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export type EditorialAboutProps = {
  id?: string;
  eyebrow: ReactNode;
  heading: ReactNode;
  paragraphs: ReactNode[];
  image: {
    src: string;
    alt: string;
  };
  decoration?: {
    src: string;
    alt?: string;
  };
  cta?: LinkConfig;
  className?: string;
  style?: CSSProperties;
  colors?: {
    eyebrow?: string;
    heading?: string;
    body?: string;
    ctaBackground?: string;
    ctaText?: string;
  };
};

export function EditorialAbout({
  id,
  eyebrow,
  heading,
  paragraphs,
  image,
  decoration,
  cta,
  className = "",
  style,
  colors,
}: EditorialAboutProps) {
  return (
    <section
      id={id}
      className={`about-section ${className}`.trim()}
      style={
        {
          "--about-eyebrow-color": colors?.eyebrow ?? "#4B9A73",
          "--about-heading-color": colors?.heading ?? "#8D2B8C",
          "--about-body-color": colors?.body ?? "#8D2B8C",
          "--about-cta-bg": colors?.ctaBackground ?? "#EC008C",
          "--about-cta-text": colors?.ctaText ?? "#FFFFFF",
          position: "relative",
          padding: "clamp(96px, 10vw, 160px) 0",
          overflow: "hidden",
          ...style,
        } as CSSProperties
      }
    >
      <div className="about-editorial-grid">
        <div className="about-left-col">
          <p className="about-eyebrow">{eyebrow}</p>
          <h2 className="about-heading">{heading}</h2>
          {decoration ? (
            <img src={decoration.src} alt={decoration.alt ?? ""} className="about-flower" />
          ) : null}
        </div>

        <div className="about-center-col">
          <div className="about-woman-wrapper">
            <img src={image.src} alt={image.alt} className="about-image" />
          </div>
        </div>

        <div className="about-right-col">
          {paragraphs.map((paragraph, index) => (
            <p className="about-paragraph" key={index}>
              {paragraph}
            </p>
          ))}
          {cta ? (
            <a className="about-cta" href={cta.href}>
              {cta.label}
            </a>
          ) : null}
        </div>
      </div>

      <div className="about-bottom-polygon" aria-hidden="true" />
    </section>
  );
}

export type SplitImageHeroProps = {
  title: ReactNode;
  body: ReactNode;
  image: {
    src: string;
    alt: string;
  };
  decorations?: Array<{
    src: string;
    className?: string;
  }>;
  className?: string;
  colors?: {
    background?: string;
    overlay?: string;
    text?: string;
  };
};

export function SplitImageHero({
  title,
  body,
  image,
  decorations = [],
  className = "",
  colors,
}: SplitImageHeroProps) {
  return (
    <section
      className={`hero about-hero ${className}`.trim()}
      aria-label={typeof title === "string" ? title : undefined}
      style={
        {
          "--about-hero-bg": colors?.background ?? "#e5017e",
          "--about-hero-overlay": colors?.overlay ?? "rgba(229, 1, 126, 0.78)",
          "--about-hero-text": colors?.text ?? "#ffffff",
        } as CSSProperties
      }
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .about-hero {
              min-height: clamp(680px, 86vh, 880px);
              padding: clamp(150px, 14vw, 185px) 28px clamp(165px, 15vw, 210px);
              background-color: var(--about-hero-bg);
              overflow: hidden;
            }

            .about-hero::before {
              content: "";
              position: absolute;
              inset: 0;
              background: var(--about-hero-overlay);
              z-index: 0;
              pointer-events: none;
            }

            .about-hero-inner {
              position: relative;
              z-index: 2;
              width: min(1240px, 100%);
              display: grid;
              grid-template-columns: minmax(320px, 0.82fr) minmax(520px, 1.18fr);
              align-items: center;
              gap: clamp(48px, 6vw, 96px);
              text-align: left;
            }

            .about-hero-copy {
              max-width: 540px;
            }

            .about-hero-title {
              margin: 0 0 26px;
              color: var(--about-hero-text);
              font-family: "Gutenberg Clean Regular", var(--font-geist-sans), Arial, Helvetica, sans-serif;
              font-size: 55px;
              line-height: 50px;
              font-weight: 400;
              letter-spacing: 0;
              text-transform: none;
            }

            .about-hero-text {
              margin: 0;
              color: var(--about-hero-text);
              font-family: "Avenir LT 55 Regular", "Avenir Medium", "Avenir Next", Avenir, var(--font-geist-sans), Arial, Helvetica, sans-serif;
              font-size: 15px;
              line-height: 22px;
              font-weight: 400;
              letter-spacing: 0;
            }

            .about-hero-visual {
              position: relative;
              min-height: clamp(390px, 42vw, 540px);
              display: grid;
              place-items: center;
            }

            .about-hero-fan {
              position: absolute;
              left: clamp(-62px, -5vw, -28px);
              bottom: clamp(-84px, -7vw, -46px);
              width: clamp(300px, 30vw, 475px);
              aspect-ratio: 2 / 3;
              z-index: 1;
              transform: rotate(-11deg);
              pointer-events: none;
            }

            .about-hero-fan-right {
              left: auto;
              right: clamp(-80px, -7vw, -34px);
              bottom: clamp(-54px, -4vw, -24px);
              width: clamp(220px, 22vw, 340px);
              transform: scaleX(-1) rotate(-8deg);
              opacity: 0.72;
            }

            .about-hero-frame {
              position: relative;
              z-index: 3;
              width: min(700px, 100%);
              aspect-ratio: 1.5;
              border: clamp(6px, 0.72vw, 9px) solid #ffffff;
              background: #ffffff;
              box-shadow: 0 26px 54px rgba(77, 15, 77, 0.3);
              transform: rotate(-2.5deg);
              overflow: hidden;
              animation: aboutHeroFloat 6s ease-in-out infinite;
            }

            .about-hero-img {
              object-fit: cover;
              object-position: center center;
            }

            .about-hero-fan-img {
              object-fit: contain;
            }

            @keyframes aboutHeroFloat {
              0%, 100% { transform: rotate(-2.5deg) translateY(0); }
              50% { transform: rotate(-2.5deg) translateY(-8px); }
            }

            @media (max-width: 1180px) {
              .about-hero-inner {
                grid-template-columns: minmax(300px, 0.9fr) minmax(430px, 1.1fr);
                gap: 42px;
              }

              .about-hero-title {
                font-size: 47px;
                line-height: 44px;
              }
            }

            @media (max-width: 860px) {
              .about-hero {
                min-height: 0;
                padding: 132px 22px 150px;
              }

              .about-hero-inner {
                grid-template-columns: 1fr;
                gap: 44px;
                text-align: center;
              }

              .about-hero-copy {
                max-width: 620px;
                margin: 0 auto;
              }

              .about-hero-title {
                font-size: 40px;
                line-height: 38px;
                margin-bottom: 18px;
              }

              .about-hero-visual {
                min-height: 360px;
              }

              .about-hero-frame {
                width: min(560px, 88vw);
                transform: rotate(-1.5deg);
                animation: aboutHeroFloatMobile 6s ease-in-out infinite;
              }

              .about-hero-fan {
                width: clamp(230px, 48vw, 330px);
                left: -28px;
                bottom: -56px;
              }

              .about-hero-fan-right {
                width: clamp(180px, 36vw, 255px);
                right: -26px;
                bottom: -32px;
              }
            }

            @keyframes aboutHeroFloatMobile {
              0%, 100% { transform: rotate(-1.5deg) translateY(0); }
              50% { transform: rotate(-1.5deg) translateY(-6px); }
            }
          `,
        }}
      />
      <div className="about-hero-inner">
        <div className="about-hero-copy">
          <h1 className="about-hero-title">{title}</h1>
          <p className="about-hero-text">{body}</p>
        </div>

        <div className="about-hero-visual" aria-hidden="true">
          {decorations.map((decoration, index) => (
            <div className={`about-hero-fan ${decoration.className ?? ""}`.trim()} key={index}>
              <Image
                className="about-hero-fan-img"
                src={decoration.src}
                alt=""
                fill
                sizes="(max-width: 860px) 48vw, 475px"
                priority
              />
            </div>
          ))}
          <div className="about-hero-frame">
            <Image
              className="about-hero-img"
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 860px) 88vw, 700px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
