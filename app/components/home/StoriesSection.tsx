"use client";

import { useEffect, useRef, useState } from "react";
import { stories } from "@/app/data/home";
import { communityStories } from "@/app/data/stories";
import { ImpactMapSection } from "@/app/components/home/ImpactMapSection";

export function FeaturedStorySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentImg, setCurrentImg] = useState(0);

  // Replace these paths with actual carousel images if you have others
  const carouselImages = [
    "/images/11.jpg",   // group session at Burhan Centre
    "/images/10.jpg",   // wellbeing circle meeting
    "/images/7.jpg",    // creative plant workshop
  ];

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % carouselImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <section ref={sectionRef} className={`awli-editorial-section ${isVisible ? "is-visible" : ""}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .awli-editorial-section {
          background-color: #FFC113;
          background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60c-18-18-42-6-42-6s12-24 30-6c18-18 42-6 42-6s-12 24-30 6c-18 18-6 42-6 42s-24-12-6-30c18 18 6 42 6 42s24-12 6-30z' fill='none' stroke='%23FFC523' stroke-width='1'/%3E%3C/svg%3E");
          position: relative;
          width: 100%;
          padding: 80px 0 200px 0;
          overflow: hidden;
        }

        /* Bottom Cream Divider */
        .awli-bottom-polygon {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 140px;
          background-color: #FFFFFF;
          clip-path: polygon(0 100%, 0 70%, 50% 0%, 100% 60%, 100% 100%);
          z-index: 10;
        }

        /* Layout Grid */
        .awli-grid {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 5;
        }
        .awli-left-col {
          width: 48%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .awli-right-col {
          width: 40%;
        }

        .awli-leaf-decoration {
          position: absolute;
          width: 340px;
          height: 360px;
          z-index: 1;
          top: 50%;
          pointer-events: none;
          background-image: url("/images/leaves.png");
          background-repeat: no-repeat;
          background-size: 470px auto;
          background-position: right 72%;
        }
        .awli-leaf-left {
          left: 50%;
          transform: translate(-142%, -34%) rotate(-8deg);
        }
        .awli-leaf-right {
          right: 50%;
          transform: translate(142%, -36%) scaleX(-1) rotate(-10deg);
        }

        /* Image Carousel Frame */
        .awli-image-frame {
          width: 480px;
          height: 520px;
          border: 7px solid #FFFFFF;
          transform: rotate(4deg);
          position: relative;
          z-index: 2;
          overflow: hidden;
          background-color: #FFFFFF;
          animation: awliFloat 6s ease-in-out infinite;
          opacity: 0;
          transition: opacity 1s ease 0.2s;
        }
        .awli-editorial-section.is-visible .awli-image-frame {
          opacity: 1;
        }
        @keyframes awliFloat {
          0%, 100% { transform: rotate(4deg) translateY(0px); }
          50% { transform: rotate(4deg) translateY(-6px); }
        }

        /* Carousel Images */
        .awli-carousel-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1.5s ease-in-out;
        }
        .awli-carousel-img.is-active {
          opacity: 1;
        }

        /* Typography & Content */
        .awli-heading {
          font-family: "AMwA Font Medium", "Gutenberg Clean Regular", sans-serif;
          font-size: 52px;
          line-height: 58px;
          letter-spacing: 0px;
          color: #E5017E;
          text-transform: uppercase;
          margin: 0 0 28px 0;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
        }
        .awli-editorial-section.is-visible .awli-heading {
          opacity: 1;
          transform: translateY(0);
        }
        .awli-paragraph {
          font-family: "Avenir LT 55 Regular", sans-serif;
          font-size: 15px;
          line-height: 22.5px;
          letter-spacing: 0px;
          color: #8D2B8C;
          max-width: 520px;
          margin: 0 0 36px 0;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s;
        }
        .awli-editorial-section.is-visible .awli-paragraph {
          opacity: 1;
          transform: translateY(0);
        }

        /* CTA Button */
        .awli-cta {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 0 26px;
          background-color: #14a28d;
          border: 2px solid #14a28d;
          color: #ffffff;
          font-family: "Avenir Medium", "Avenir Next", Avenir, var(--font-geist-sans), Arial, Helvetica, sans-serif;
          font-size: 15px;
          font-weight: 500;
          line-height: 15px;
          letter-spacing: 3.2px;
          text-transform: uppercase;
          box-shadow: 8px 8px 0 var(--mustard);
        }
        .awli-editorial-section.is-visible .awli-cta {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1280px) {
          .awli-editorial-section {
            padding: 135px 0 170px 0;
          }
          .awli-grid {
            max-width: 1080px;
            padding: 0 32px;
          }
          .awli-left-col {
            width: 46%;
          }
          .awli-right-col {
            width: 46%;
          }
          .awli-image-frame {
            width: min(39vw, 420px);
            height: min(43vw, 470px);
          }
          .awli-leaf-decoration {
            width: 260px;
            height: 300px;
            background-size: 390px auto;
          }
          .awli-heading {
            font-size: 42px;
            line-height: 48px;
          }
        }

        /* Tablet Responsiveness */
        @media (max-width: 1024px) {
          .awli-editorial-section {
            padding: 140px 0 160px 0;
          }
          .awli-grid {
            padding: 0 30px;
          }
          .awli-left-col { width: 45%; }
          .awli-right-col { width: 48%; }
          .awli-image-frame {
            width: 100%;
            height: 460px;
          }
          .awli-heading {
            font-size: 42px;
            line-height: 48px;
          }
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .awli-editorial-section {
            padding: 100px 0 140px 0;
          }
          .awli-grid {
            flex-direction: column;
            padding: 0 28px;
            gap: 60px;
          }
          .awli-left-col { width: 100%; }
          .awli-right-col { width: 100%; }
          .awli-image-frame {
            width: 84vw;
            max-width: 420px;
            height: 100vw;
            max-height: 480px;
            transform: rotate(2deg);
            animation: awliFloatMobile 6s ease-in-out infinite;
          }
          @keyframes awliFloatMobile {
            0%, 100% { transform: rotate(2deg) translateY(0px); }
            50% { transform: rotate(2deg) translateY(-6px); }
          }
          .awli-leaf-decoration {
            width: 230px;
            height: 260px;
            background-size: 350px auto;
          }
          .awli-leaf-left {
            left: 50%;
            transform: translate(-138%, -30%) rotate(-8deg);
          }
          .awli-leaf-right {
            right: 50%;
            transform: translate(138%, -34%) scaleX(-1) rotate(-10deg);
          }
          .awli-heading {
            font-size: 30px;
            line-height: 38px;
            margin-bottom: 20px;
          }
          .awli-paragraph {
            margin-bottom: 30px;
          }
          .awli-top-polygon {
            height: 80px;
            clip-path: polygon(0 0, 100% 0, 100% 20%, 50% 100%, 0 20%);
          }
          .awli-bottom-polygon {
            height: 80px;
            clip-path: polygon(0 100%, 0 70%, 50% 0%, 100% 60%, 100% 100%);
          }
        }
      `}} />

      <div className="awli-grid">
        {/* Left Side: Carousel */}
        <div className="awli-left-col">
          <span className="awli-leaf-decoration awli-leaf-left" aria-hidden="true" />
          <span className="awli-leaf-decoration awli-leaf-right" aria-hidden="true" />

          <div className="awli-image-frame">
            {carouselImages.map((src, idx) => (
              <img 
                key={idx}
                src={src} 
                alt={`AWLI Highlight ${idx + 1}`}
                className={`awli-carousel-img ${idx === currentImg ? "is-active" : ""}`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="awli-right-col">
          <h2 className="awli-heading">
            EMPOWERING WOMEN’S<br />VOICES & LEADERSHIP
          </h2>
          <p className="awli-paragraph">
            Women’s Voices supports women from diverse communities by creating safe spaces for learning, wellbeing, confidence-building, and leadership development. Through mentoring, advocacy, education, and community engagement, we empower women to strengthen their voices, overcome barriers, and create positive change within their families and communities.
          </p>
        <a className="awli-cta hero-read-button" href="#read-more">
            LEARN MORE
          </a>
        </div>
      </div>

      {/* Bottom Cream Angular Divider */}
      <div className="awli-bottom-polygon" aria-hidden="true" />
    </section>
  );
}

export function StoriesSection() {
  const [isStoriesVisible, setIsStoriesVisible] = useState(false);
  const [isJoinVisible, setIsJoinVisible] = useState(false);
  const storiesRef = useRef<HTMLDivElement>(null);
  const joinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === storiesRef.current) setIsStoriesVisible(true);
            if (entry.target === joinRef.current) setIsJoinVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (storiesRef.current) observer.observe(storiesRef.current);
    if (joinRef.current) observer.observe(joinRef.current);

    return () => observer.disconnect();
  }, []);


  const mediaThumbnails = [
    {
      title: "Community cooking — sharing food, culture & friendship",
      img: "/images/14.jpeg",   // food prep
      accent: "#53155f",
    },
    {
      title: "Women’s leadership programme — building confidence & skills",
      img: "/images/488680090_1135727991930374_8458782300465608855_n.jpg",   // award winner
      accent: "#0b7561",
    },
    {
      title: "Empowerment through education — ESOL & learning support",
      img: "/images/10.jpg",   // circle learning session at Burhan Centre
      accent: "#d70b68",
    },
    {
      title: "Community events — celebrating diversity in Longsight",
      img: "/images/16.jpeg",   // Bharatnatyam cultural dance workshop
      accent: "#14a28d",
    },
  ];

  return (
    <>
      <section ref={storiesRef} id="stories" className={`stories-editorial-section ${isStoriesVisible ? "is-visible" : ""}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .stories-editorial-section {
          background-color: #FFFFFF;
          padding: 80px 0 100px 0;
          position: relative;
          overflow: hidden;
        }
        .stories-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }
        .stories-kicker {
          font-family: "Avenir LT 55 Regular", sans-serif;
          text-transform: uppercase;
          letter-spacing: 8px;
          font-size: 16px;
          font-weight: 700;
          color: #4E9473;
          margin: 0 0 8px 0;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .stories-heading {
          font-family: "Gutenberg Clean Regular", sans-serif;
          text-transform: uppercase;
          color: #4E9072;
          font-size: 45px;
          line-height: 45px;
          letter-spacing: 0px;
          margin: 0 0 40px 0;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s;
        }
        .stories-carousel {
          display: flex;
          gap: 18px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding-bottom: 24px;
          scrollbar-width: thin; /* Firefox */
          scrollbar-color: #4E9473 rgba(0, 0, 0, 0.05);
        }
        .stories-carousel::-webkit-scrollbar {
          height: 8px; /* Chrome/Safari */
        }
        .stories-carousel::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 4px;
        }
        .stories-carousel::-webkit-scrollbar-thumb {
          background: #4E9473;
          border-radius: 4px;
        }
        .story-card-wrapper {
          flex: 0 0 calc(31.5%);
          scroll-snap-align: start;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .stories-editorial-section.is-visible .stories-kicker,
        .stories-editorial-section.is-visible .stories-heading,
        .stories-editorial-section.is-visible .story-card-wrapper {
          opacity: 1;
          transform: translateY(0);
        }
        .stories-editorial-section.is-visible .story-card-wrapper:nth-child(1) { transition-delay: 0.2s; }
        .stories-editorial-section.is-visible .story-card-wrapper:nth-child(2) { transition-delay: 0.3s; }
        .stories-editorial-section.is-visible .story-card-wrapper:nth-child(3) { transition-delay: 0.4s; }
        
        .story-card {
          background-color: #FFFFFF;
          border: 1px solid #EAEAEA;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .story-img-wrapper {
          width: 100%;
          height: 440px;
          overflow: hidden;
        }
        .story-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .story-card:hover .story-img {
          transform: scale(1.02);
        }
        .story-content {
          padding: 12px 10px 16px 10px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .story-meta {
          font-family: "Avenir LT 55 Regular", sans-serif;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #B35A9B;
          margin: 0 0 10px 0;
        }
        .story-title {
          font-family: "Avenir LT 55 Regular", sans-serif;
          font-size: 15px;
          letter-spacing: 4px;
          line-height: 1.6;
          text-transform: uppercase;
          color: #8A287C;
          margin: 0 0 10px 0;
        }
        .story-quote {
          font-family: "Avenir LT 55 Regular", sans-serif;
          font-size: 14px;
          line-height: 1.6;
          color: #4D4D4D;
          margin: 0 0 24px 0;
          flex-grow: 1;
        }
        .story-btn {
          align-self: flex-start;
          background-color: #4E9473;
          color: #FFFFFF;
          text-transform: uppercase;
          font-family: "Avenir LT 55 Regular", sans-serif;
          font-size: 14px;
          letter-spacing: 4px;
          padding: 10px 16px;
          border: none;
          text-decoration: none;
          transition: background-color 0.3s ease, transform 0.3s ease;
          margin-top: auto;
        }
        .story-btn:hover {
          background-color: #3b7559;
          transform: translateY(-2px);
        }

        @media (max-width: 1280px) {
          .stories-container {
            max-width: 1080px;
            padding: 0 32px;
          }
          .story-card-wrapper {
            flex-basis: calc(33.333% - 12px);
          }
          .story-img-wrapper {
            height: 340px;
          }
          .story-title {
            letter-spacing: 2.8px;
          }
        }

        /* Tablet Responsiveness */
        @media (max-width: 1024px) {
          .story-card-wrapper {
            flex: 0 0 calc(46%);
          }
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .stories-editorial-section {
            padding: 60px 0 80px 0;
          }
          .stories-container {
            padding: 0 24px;
          }
          .story-card-wrapper {
            flex: 0 0 85vw;
          }
          .story-img-wrapper {
            height: 400px;
          }
        }
      `}} />

      <div className="stories-container">
        <p className="stories-kicker">STORIES</p>
        <h2 className="stories-heading">COMMUNITY VOICES</h2>
        
        <div className="stories-carousel">
          {communityStories.map((story, index) => (
            <article className="story-card-wrapper" key={index}>
              <div className="story-card">
                <div className="story-img-wrapper">
                  <img src={story.img} alt={story.title} className="story-img" />
                </div>
                <div className="story-content">
                  <p className="story-meta">{story.meta}</p>
                  <h3 className="story-title">{story.title}</h3>
                  <p className="story-quote">&quot;{story.quote}&quot;</p>
                  <a href={`/stories/${story.slug}`} className="story-btn">READ</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>

      <section ref={joinRef} className={`join-editorial-section ${isJoinVisible ? "is-visible" : ""}`}>
        <style dangerouslySetInnerHTML={{ __html: `
          /* ── section shell ── */
          .join-editorial-section {
            background: #ffffff;
            padding: 0 0 0 0;
            position: relative;
            overflow: hidden;
          }

          /* ── header bar ── */
          .join-header-bar {
            background: #3b0e48;
            padding: 52px 40px 48px;
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 32px;
            flex-wrap: wrap;
            opacity: 0;
            transform: translateY(16px);
            transition: opacity 0.7s ease 0.05s, transform 0.7s ease 0.05s;
          }
          .join-editorial-section.is-visible .join-header-bar {
            opacity: 1; transform: translateY(0);
          }
          .join-header-left {}
          .join-eyebrow {
            font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 3.5px;
            text-transform: uppercase;
            color: #FDBE18;
            margin: 0 0 12px;
          }
          .join-heading {
            font-family: "Gutenberg Clean Regular", serif;
            font-size: 54px;
            line-height: 0.95;
            text-transform: uppercase;
            color: #fff;
            margin: 0;
          }
          .join-header-social {
            display: flex;
            align-items: center;
            gap: 14px;
          }
          .join-social-link {
            display: flex;
            align-items: center;
            gap: 9px;
            padding: 10px 20px;
            border: 1.5px solid rgba(255,255,255,0.25);
            color: #fff;
            text-decoration: none;
            font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            transition: background 0.2s, border-color 0.2s;
          }
          .join-social-link:hover {
            background: rgba(255,255,255,0.1);
            border-color: rgba(255,255,255,0.6);
          }
          .join-social-link svg { flex-shrink: 0; }

          /* ── body ── */
          .join-body {
            max-width: 1320px;
            margin: 0 auto;
            padding: 0 40px 80px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4px;
            margin-top: 4px;
          }

          /* left: main image */
          .join-main-img {
            width: 100%;
            height: 100%;
            min-height: 480px;
            object-fit: cover;
            display: block;
            opacity: 0;
            transform: scale(0.97);
            transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
          }
          .join-editorial-section.is-visible .join-main-img {
            opacity: 1; transform: scale(1);
          }

          /* right: 2x2 grid */
          .join-thumb-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4px;
          }
          .join-thumb-card {
            display: flex;
            flex-direction: column;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
          }
          .join-editorial-section.is-visible .join-thumb-card:nth-child(1) { transition-delay: 0.25s; opacity:1; transform:translateY(0); }
          .join-editorial-section.is-visible .join-thumb-card:nth-child(2) { transition-delay: 0.35s; opacity:1; transform:translateY(0); }
          .join-editorial-section.is-visible .join-thumb-card:nth-child(3) { transition-delay: 0.45s; opacity:1; transform:translateY(0); }
          .join-editorial-section.is-visible .join-thumb-card:nth-child(4) { transition-delay: 0.55s; opacity:1; transform:translateY(0); }
          .join-thumb-img {
            width: 100%;
            height: 190px;
            object-fit: cover;
            display: block;
            transition: transform 0.4s ease;
          }
          .join-thumb-card:hover .join-thumb-img { transform: scale(1.04); }
          .join-thumb-img-wrap { overflow: hidden; }
          .join-thumb-caption {
            color: #fff;
            font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 1.5px;
            line-height: 1.65;
            padding: 14px 16px;
            flex-grow: 1;
          }

          /* ── responsive ── */
          @media (max-width: 1280px) {
            .join-header-bar { padding: 44px 32px 40px; }
            .join-heading { font-size: 44px; }
            .join-body { padding: 0 32px 64px; }
            .join-main-img { min-height: 400px; }
            .join-thumb-img { height: 160px; }
          }
          @media (max-width: 1024px) {
            .join-body { grid-template-columns: 1fr; padding: 0 0 0; }
            .join-main-img { min-height: 360px; }
            .join-thumb-grid { grid-template-columns: repeat(4,1fr); }
            .join-thumb-img { height: 140px; }
          }
          @media (max-width: 768px) {
            .join-header-bar { padding: 36px 20px 32px; flex-direction: column; align-items: flex-start; }
            .join-heading { font-size: 34px; }
            .join-header-social { flex-wrap: wrap; }
            .join-body { padding: 0; gap: 4px; }
            .join-main-img { min-height: 260px; }
            .join-thumb-grid { grid-template-columns: 1fr 1fr; }
            .join-thumb-img { height: 130px; }
            .join-thumb-caption { font-size: 10px; padding: 10px 12px; }
          }
        `}} />

        {/* Header bar */}
        <div className="join-header-bar">
          <div className="join-header-left">
            <p className="join-eyebrow">Follow us online</p>
            <h2 className="join-heading">Join the<br/>Conversation</h2>
          </div>
          <div className="join-header-social">
            <a
              href="https://www.facebook.com/womensvoicesmcr/"
              target="_blank"
              rel="noopener noreferrer"
              className="join-social-link"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
              Facebook
            </a>
            <a
              href="https://twitter.com/WomensVoicesMCR"
              target="_blank"
              rel="noopener noreferrer"
              className="join-social-link"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
              </svg>
              Twitter / X
            </a>
          </div>
        </div>

        {/* Body */}
        <div className="join-body">
          {/* Main photo */}
          <img
            src="/images/6.jpg"
            alt="Women's Voices community moment"
            className="join-main-img"
          />

          {/* 2×2 thumbnail grid */}
          <div className="join-thumb-grid">
            {mediaThumbnails.map((thumb, index) => (
              <div className="join-thumb-card" key={index}>
                <div className="join-thumb-img-wrap">
                  <img src={thumb.img} alt={thumb.title} className="join-thumb-img" />
                </div>
                <div className="join-thumb-caption" style={{ background: thumb.accent }}>
                  {thumb.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImpactMapSection />
    </>
  );
}
