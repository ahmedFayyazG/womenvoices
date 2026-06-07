import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/app/components/shared/SiteNav";
import { FooterSection } from "@/app/components/home/NewsletterSection";
import { communityStories, getStoryBySlug } from "@/app/data/stories";

export async function generateStaticParams() {
  return communityStories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return { title: "Story Not Found" };
  return {
    title: `${story.title} — Women's Voices`,
    description: story.quote,
  };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();

  const textColor = story.heroTextLight ? "#ffffff" : "#251329";
  const accentColor = story.heroTextLight ? "rgba(255,255,255,0.18)" : "rgba(37,19,41,0.12)";
  const others = communityStories.filter((s) => s.slug !== story.slug).slice(0, 3);

  return (
    <main className="site-shell">
      <SiteNav />

      <style>{`
        /* ── Hero ── */
        .story-hero {
          background: ${story.heroColor};
          padding: 140px 0 80px;
          position: relative;
          overflow: hidden;
        }
        .story-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .story-hero-inner {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }
        .story-hero-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: ${textColor};
          opacity: 0.65;
          text-decoration: none;
          margin-bottom: 40px;
          transition: opacity 0.2s;
        }
        .story-hero-back:hover { opacity: 1; }
        .story-hero-meta {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: ${textColor};
          opacity: 0.55;
          margin: 0 0 16px;
        }
        .story-hero-title {
          font-family: "Gutenberg Clean Regular", serif;
          font-size: 62px;
          line-height: 1;
          color: ${textColor};
          text-transform: uppercase;
          margin: 0 0 40px !important;
        }
        .story-hero-byline {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 13px;
          letter-spacing: 1px;
          color: ${textColor};
          opacity: 0.6;
          margin: 0;
        }
        .story-hero-byline span {
          display: inline-block;
          width: 28px;
          height: 1px;
          background: ${textColor};
          opacity: 0.4;
          vertical-align: middle;
          margin: 0 10px 2px;
        }
        .story-hero-wave {
          position: absolute;
          bottom: -1px; left: 0;
          width: 100%; height: 80px;
          z-index: 3; pointer-events: none;
        }
        .story-hero-wave svg { width: 100%; height: 100%; display: block; }

        /* ── Lead image ── */
        .story-lead-img-wrap {
          max-width: 860px;
          margin: -40px auto 0;
          padding: 0 40px;
          position: relative;
          z-index: 4;
        }
        .story-lead-img {
          width: 100%;
          height: 460px;
          object-fit: cover;
          display: block;
          box-shadow: 12px 12px 0 ${story.heroColor}33;
        }

        /* ── Body ── */
        .story-body-section {
          background: #fff;
          padding: 64px 0 80px;
        }
        .story-body-inner {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .story-pull-quote {
          border-left: 4px solid ${story.heroColor};
          padding: 20px 28px;
          margin: 0 0 48px;
          background: ${accentColor.replace("rgba", "rgba").replace(/[\d.]+\)$/, "0.06)")};
        }
        .story-pull-quote p {
          font-family: "Gutenberg Clean Regular", serif;
          font-size: 22px;
          line-height: 1.5;
          color: ${story.heroColor};
          margin: 0;
        }
        .story-body-para {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 17px;
          line-height: 1.85;
          color: #3a3a3a;
          margin: 0 0 28px;
        }

        /* ── Gallery ── */
        .story-gallery {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin: 48px 0;
        }
        .story-gallery img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          display: block;
        }

        /* ── Related ── */
        .story-related {
          background: #f7efd9;
          padding: 80px 0;
        }
        .story-related-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .story-related-kicker {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #4E9473;
          margin: 0 0 8px;
        }
        .story-related-heading {
          font-family: "Gutenberg Clean Regular", serif;
          font-size: 38px;
          text-transform: uppercase;
          color: #251329;
          margin: 0 0 40px;
        }
        .story-related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .story-related-card {
          background: #fff;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          transition: transform 0.2s;
        }
        .story-related-card:hover { transform: translateY(-4px); }
        .story-related-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }
        .story-related-card-body {
          padding: 16px;
          border-top: 3px solid ${story.heroColor};
        }
        .story-related-card-meta {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #888;
          margin: 0 0 6px;
        }
        .story-related-card-title {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #251329;
          margin: 0 0 12px;
          line-height: 1.5;
        }
        .story-related-card-read {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: ${story.heroColor};
          font-weight: 700;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .story-hero { padding: 120px 0 60px; }
          .story-hero-title { font-size: 38px; margin-bottom: 30px !important; }
          .story-hero-inner, .story-lead-img-wrap,
          .story-body-inner, .story-related-inner { padding: 0 20px; }
          .story-lead-img { height: 280px; }
          .story-gallery { grid-template-columns: 1fr; }
          .story-gallery img { height: 220px; }
          .story-related-grid { grid-template-columns: 1fr; }
          .story-pull-quote p { font-size: 18px; }
          .story-body-para { font-size: 16px; }
        }
      `}</style>

      {/* ── Hero ── */}
      <section className="story-hero">
        <div className="story-hero-inner">
          <Link href="/#stories" className="story-hero-back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            All Stories
          </Link>
          <p className="story-hero-meta">{story.meta}</p>
          <h1 className="story-hero-title">{story.title}</h1>
          <p className="story-hero-byline">
            {story.author}
            <span />
            {story.date}
          </p>
        </div>
        <div className="story-hero-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,80 L0,40 Q360,0 720,30 Q1080,60 1440,20 L1440,80 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── Lead image ── */}
      <div className="story-lead-img-wrap">
        <img src={story.img} alt={story.title} className="story-lead-img" />
      </div>

      {/* ── Body ── */}
      <section className="story-body-section">
        <div className="story-body-inner">
          <blockquote className="story-pull-quote">
            <p>&ldquo;{story.quote}&rdquo;</p>
          </blockquote>

          {story.body.map((para, i) => (
            <p key={i} className="story-body-para">{para}</p>
          ))}

          {story.gallery.length > 0 && (
            <div className="story-gallery">
              {story.gallery.map((src, i) => (
                <img key={i} src={src} alt={`${story.title} — photo ${i + 1}`} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Related stories ── */}
      <section className="story-related">
        <div className="story-related-inner">
          <p className="story-related-kicker">More stories</p>
          <h2 className="story-related-heading">Community Voices</h2>
          <div className="story-related-grid">
            {others.map((s) => (
              <Link key={s.slug} href={`/stories/${s.slug}`} className="story-related-card">
                <img src={s.img} alt={s.title} />
                <div className="story-related-card-body">
                  <p className="story-related-card-meta">{s.meta}</p>
                  <p className="story-related-card-title">{s.title}</p>
                  <span className="story-related-card-read">Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
