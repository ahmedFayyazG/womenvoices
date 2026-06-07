"use client";

import { useEffect, useRef, useState } from "react";
import { stories } from "@/app/data/home";
import { EventsSection } from "@/app/components/home/EventsSection";

export function FeaturedStorySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentImg, setCurrentImg] = useState(0);

  // Replace these paths with actual carousel images if you have others
  const carouselImages = [
    "/images/6.jpg",
    "/images/11.jpg",
    "/images/12.jpg"
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
          padding: 160px 0 200px 0;
          overflow: hidden;
        }

        /* Top Magenta Divider */
        .awli-top-polygon {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 120px;
          background-color: #E5007E;
          clip-path: polygon(0 0, 100% 0, 100% 20%, 50% 100%, 0 20%);
          z-index: 10;
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
          display: inline-block;
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

      {/* Top Magenta Angular Divider */}
      <div className="awli-top-polygon" aria-hidden="true" />

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

  const communityStories = [
    {
      meta: "STORY",
      title: "BUILDING CONFIDENCE AGAIN",
      quote: "Women's Voices gave me a place where I felt supported and understood. I gained confidence and found a community.",
      img: "/images/3.jpg"
    },
    {
      meta: "STORY",
      title: "LEARNING AND INDEPENDENCE",
      quote: "The training and support helped me improve my English, meet people, and feel more independent.",
      img: "/images/14.jpeg"
    },
    {
      meta: "STORY",
      title: "HEALING THROUGH COMMUNITY",
      quote: "I no longer feel isolated. I found friendship, support, and hope for the future.",
      img: "/images/6.jpg"
    },
    {
      meta: "STORY",
      title: "A SENSE OF BELONGING",
      quote: "Being part of this group has changed my life. I finally feel like I belong somewhere.",
      img: "/images/7.jpg"
    },
    {
      meta: "STORY",
      title: "FINDING MY VOICE",
      quote: "I have learned how to speak up for myself and my family. The support here is incredible.",
      img: "/images/9.jpg"
    },
    {
      meta: "STORY",
      title: "GROWING TOGETHER",
      quote: "We share our struggles and our victories. It is a beautiful sisterhood.",
      img: "/images/10.jpg"
    },
    {
      meta: "STORY",
      title: "STRENGTH IN NUMBERS",
      quote: "Together we are stronger. This community has given me the tools to build a better life.",
      img: "/images/11.jpg"
    }
  ];

  const mediaThumbnails = [
    {
      title: "WHAT COMES NEXT? FEMINIST REFLECTIONS ON THE UN TAX CONVENTION AFTER THE FOURTH SESSION.",
      img: "/images/14.jpeg"
    },
    {
      title: "HON. KHANYISILE LITCHFIELD TSHABALALA RECLAIMING AFRICA’S FISCAL SOVEREIGNTY",
      img: "/images/16.jpeg"
    },
    {
      title: "OVONJI ODIDA ON RECLAIMING AFRICA’S FISCAL SOVEREIGNTY",
      img: "/images/17.jpg"
    },
    {
      title: "FROM GROUND TO GLOBAL: AFRICAN WOMEN’S POWER IN CLIMATE ACTION",
      img: "/images/19.jpg"
    }
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
                  <a href="#read" className="story-btn">READ</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>

      <section ref={joinRef} className={`join-editorial-section ${isJoinVisible ? "is-visible" : ""}`}>
        <style dangerouslySetInnerHTML={{ __html: `
          .join-editorial-section {
            background-color: #FFFFFF;
            padding: 60px 0 120px 0;
            position: relative;
            overflow: hidden;
          }
          .join-container {
            max-width: 1320px;
            margin: 0 auto;
            padding: 0 40px;
            display: flex;
            gap: 70px;
            position: relative;
            z-index: 2;
          }
          .join-left {
            width: 24%;
            opacity: 0;
            transform: translateY(24px);
            transition: opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s;
          }
          .join-right {
            width: 70%;
          }
          .join-editorial-section.is-visible .join-left {
            opacity: 1;
            transform: translateY(0);
          }
          .join-heading {
            font-family: "Gutenberg Clean Regular", sans-serif;
            font-size: 45px;
            line-height: 45px;
            letter-spacing: 0px;
            text-transform: uppercase;
            color: #4E9072;
            margin: 0 0 55px 0;
          }
          .join-social {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          .join-x-icon {
            width: 52px;
            height: 52px;
            fill: #E5007E;
          }
          .join-social p {
            font-family: "Avenir LT 55 Regular", sans-serif;
            font-size: 16px;
            color: #E5007E;
            margin: 18px 0 0 0;
          }

          .join-main-video {
            width: 100%;
            height: 420px;
            position: relative;
            margin-bottom: 4px;
            opacity: 0;
            transform: translateY(24px);
            transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
          }
          .join-editorial-section.is-visible .join-main-video {
            opacity: 1;
            transform: translateY(0);
          }
          .join-main-video img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .yt-play-button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 68px;
            height: 48px;
            background-color: #FF0000;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .yt-play-triangle {
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 10px 0 10px 16px;
            border-color: transparent transparent transparent #FFFFFF;
            margin-left: 4px;
          }

          .join-thumbnails-strip {
            display: flex;
            gap: 4px;
            overflow-x: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .join-thumbnails-strip::-webkit-scrollbar {
            display: none;
          }
          .join-thumb-card {
            flex: 1;
            display: flex;
            flex-direction: column;
            min-width: 0;
            opacity: 0;
            transform: translateY(24px);
            transition: opacity 0.7s ease, transform 0.7s ease;
          }
          .join-editorial-section.is-visible .join-thumb-card:nth-child(1) { transition-delay: 0.4s; }
          .join-editorial-section.is-visible .join-thumb-card:nth-child(2) { transition-delay: 0.5s; }
          .join-editorial-section.is-visible .join-thumb-card:nth-child(3) { transition-delay: 0.6s; }
          .join-editorial-section.is-visible .join-thumb-card:nth-child(4) { transition-delay: 0.7s; }
          .join-editorial-section.is-visible .join-thumb-card {
            opacity: 1;
            transform: translateY(0);
          }
          .join-thumb-img {
            width: 100%;
            height: 180px;
            object-fit: cover;
          }
          .join-thumb-caption {
            background-color: #E5007E;
            color: #FFFFFF;
            font-family: "Avenir LT 55 Regular", sans-serif;
            font-size: 11px;
            letter-spacing: 4px;
            line-height: 1.7;
            padding: 12px;
            flex-grow: 1;
            text-transform: uppercase;
          }

          .join-bottom-curve {
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 100%;
            height: 60px;
            z-index: 10;
            pointer-events: none;
          }
          .join-curve-svg {
            width: 100%;
            height: 100%;
            display: block;
          }

          @media (max-width: 1280px) {
            .join-container {
              max-width: 1080px;
              padding: 0 32px;
              gap: 44px;
            }
            .join-left {
              width: 28%;
            }
            .join-right {
              width: 68%;
            }
            .join-heading {
              font-size: 38px;
              line-height: 40px;
            }
            .join-main-video {
              height: 340px;
            }
            .join-thumb-img {
              height: 140px;
            }
            .join-thumb-caption {
              letter-spacing: 2.8px;
            }
          }

          @media (max-width: 1024px) {
            .join-container {
              padding: 0 30px;
              gap: 40px;
            }
            .join-left { width: 30%; }
            .join-right { width: 66%; }
            .join-main-video { height: 320px; }
            .join-thumb-card { flex: 0 0 calc(33.333% - 4px); scroll-snap-align: start; }
            .join-thumbnails-strip {
              scroll-snap-type: x mandatory;
              padding-bottom: 12px;
            }
          }

          @media (max-width: 768px) {
            .join-editorial-section {
              padding: 50px 0 80px 0;
            }
            .join-container {
              flex-direction: column;
              padding: 0 24px;
              gap: 40px;
            }
            .join-left { width: 100%; }
            .join-right { width: 100%; }
            .join-heading { margin-bottom: 30px; }
            .join-main-video {
              height: 240px;
            }
            .join-thumb-card {
              flex: 0 0 75vw;
            }
            .join-thumb-img {
              height: 160px;
            }
            .join-bottom-curve {
              height: 40px;
            }
          }
        `}} />

        <div className="join-container">
          <div className="join-left">
            <h2 className="join-heading">JOIN THE CONVERSATION</h2>
            <div className="join-social">
              <svg className="join-x-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
              <p>Posts by WV</p>
            </div>
          </div>
          <div className="join-right">
            <div className="join-main-video">
              <img src="/images/198.jpg" alt="Main Video Thumbnail" />
              <div className="yt-play-button">
                <div className="yt-play-triangle" />
              </div>
            </div>
            <div className="join-thumbnails-strip">
              {mediaThumbnails.map((thumb, index) => (
                <div className="join-thumb-card" key={index}>
                  <img src={thumb.img} alt={thumb.title} className="join-thumb-img" />
                  <div className="join-thumb-caption">{thumb.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="join-bottom-curve" aria-hidden="true">
          <svg className="join-curve-svg" viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 L1440,60 L1440,30 Q720,-10 0,30 Z" fill="#F4F4F4" />
          </svg>
        </div>
      </section>

      <EventsSection />
    </>
  );
}
