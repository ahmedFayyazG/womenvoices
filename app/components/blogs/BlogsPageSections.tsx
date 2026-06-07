"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type BlogPost = {
  category: string;
  date: string;
  title: string;
  image: string;
};

type BlogsPageSectionsProps = {
  posts?: BlogPost[];
  categories?: string[];
};

const defaultPosts: BlogPost[] = [
  {
    category: "FORUMS",
    date: "September 10, 2025",
    title: "From Ground to Global: African Women's Power in Climate Action — the African Women and Gender Constituency Declaration",
    image: "/images/19.jpg",
  },
  {
    category: "BLOGS",
    date: "July 17, 2025",
    title: "How Are We Funding Our Own Exploitation? The Ultimate Irony!",
    image: "/images/14.jpeg",
  },
  {
    category: "BLOGS",
    date: "July 16, 2025",
    title: "Advancing Reparative Justice for African Women and Girls: Reflections from the 7th GIMAC Coordination Meeting",
    image: "/images/16.jpeg",
  },
  {
    category: "CALLS",
    date: "July 15, 2025",
    title: "Call for Applications: Internal Audit Firm for AMWA's 2025 Financial Year",
    image: "/images/17.jpg",
  },
];

const CAT_COLOR: Record<string, string> = {
  FORUMS:        "#0b7561",
  BLOGS:         "#E5007E",
  CALLS:         "#c67c00",
  NEWS:          "#53155f",
  OPPORTUNITIES: "#14a28d",
};

export function BlogsPageSections({
  posts = defaultPosts,
  categories = ["ALL", "BLOGS", "NEWS", "OPPORTUNITIES"],
}: BlogsPageSectionsProps) {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return posts.filter((p) => {
      const matchCat =
        activeCategory === "ALL" ||
        p.category === activeCategory ||
        (activeCategory === "OPPORTUNITIES" && p.category === "CALLS");
      const matchSearch = !q || `${p.category} ${p.date} ${p.title}`.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [activeCategory, posts, searchQuery]);

  return (
    <section className="blogs-section">
      <style dangerouslySetInnerHTML={{ __html: `

        /* ── hero override: magenta, match site theme ── */
        .blogs-green-hero {
          background-color: #E5017E !important;
          min-height: 420px;
          padding-top: 160px;
          padding-bottom: 120px;
          overflow: hidden;
        }
        .blogs-green-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(140, 0, 78, 0.4);
          z-index: 1;
          pointer-events: none;
        }
        .blogs-green-hero .hero-copy { z-index: 2; position: relative; }

        /* ════════════════════════════════
           CREAM SECTION — single bg, no competing dividers
        ════════════════════════════════ */
        .blogs-section {
          background: #f7efd9;
          padding: 80px 0 100px;
          position: relative;
        }
        .blogs-section::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0.025;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%238E2A91' stroke-width='1.5'%3E%3Cpath d='M90 90c-24-24-56-8-56-8s16-32 40-8c24-24 56-8 56-8s-16 32-40 8c-24 24-8 56-8 56s-32-16-8-40c24 24 8 56 8 56s32-16 8-40z'/%3E%3C/g%3E%3C/svg%3E");
          background-size: 200px 200px;
        }

        .blogs-inner {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 2;
        }

        /* ════════════════════════════════
           PAGE HEADER
        ════════════════════════════════ */
        .blogs-page-hdr {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 0;
          flex-wrap: wrap;
        }
        .blogs-page-hdr-left { flex-shrink: 0; }
        .blogs-eyebrow {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: #E5007E;
          margin: 0 0 14px;
        }
        .blogs-title {
          font-family: "Gutenberg Clean Regular", serif;
          font-size: 64px;
          line-height: 0.92;
          text-transform: uppercase;
          color: #251329;
          margin: 0;
        }
        .blogs-title-bar {
          width: 52px;
          height: 3px;
          background: #FDBE18;
          margin-top: 20px;
        }

        /* ════════════════════════════════
           FILTER BAR
        ════════════════════════════════ */
        .blogs-filter-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          padding: 28px 0;
          border-top: 2px solid rgba(37,19,41,0.1);
          border-bottom: 2px solid rgba(37,19,41,0.1);
          margin: 36px 0 52px;
        }
        .blogs-filter-label {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: rgba(37,19,41,0.3);
          margin-right: 10px;
          flex-shrink: 0;
        }
        .blogs-cat-btn {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #251329;
          background: transparent;
          border: 1.5px solid rgba(37,19,41,0.2);
          padding: 9px 22px;
          cursor: pointer;
          transition: background 0.18s, color 0.18s, border-color 0.18s;
        }
        .blogs-cat-btn:hover:not(.is-active) {
          border-color: #E5007E;
          color: #E5007E;
        }
        .blogs-cat-btn.is-active {
          background: #3b0e48;
          color: #fff;
          border-color: #3b0e48;
        }
        .blogs-search-wrap {
          display: flex;
          margin-left: auto;
          flex-shrink: 0;
        }
        .blogs-search-input {
          width: 210px;
          height: 44px;
          background: #fff;
          border: 1.5px solid rgba(37,19,41,0.18);
          border-right: none;
          outline: none;
          color: #251329;
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 0 14px;
        }
        .blogs-search-input::placeholder { color: rgba(37,19,41,0.3); }
        .blogs-search-btn {
          width: 44px;
          background: #E5007E;
          border: none;
          color: #fff;
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: background 0.18s;
        }
        .blogs-search-btn:hover { background: #c9006e; }

        /* ════════════════════════════════
           CARD GRID
        ════════════════════════════════ */
        .blogs-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 24px;
        }

        /* featured: first card spans 2 cols */
        .blog-card--featured {
          grid-column: span 2;
        }

        /* ── card base ── */
        .blog-card {
          background: #fff;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 28px rgba(37,19,41,0.08);
          transition: transform 0.22s, box-shadow 0.22s;
          animation: blogFadeUp 660ms cubic-bezier(0.22,1,0.36,1) both;
        }
        .blog-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 52px rgba(37,19,41,0.16);
        }
        .blog-card:nth-child(1) { animation-delay: 60ms; }
        .blog-card:nth-child(2) { animation-delay: 140ms; }
        .blog-card:nth-child(3) { animation-delay: 220ms; }
        .blog-card:nth-child(4) { animation-delay: 300ms; }

        /* colored left sidebar strip */
        .blog-side-strip {
          position: absolute;
          top: 0; left: 0;
          width: 6px;
          height: 100%;
          z-index: 3;
          flex-shrink: 0;
        }

        /* ── image ── */
        .blog-img-wrap {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .blog-card--featured .blog-img-wrap { height: 280px; }
        .blog-img { object-fit: cover; transition: transform 340ms ease; }
        .blog-card:hover .blog-img { transform: scale(1.06); }

        /* category badge pinned on image */
        .blog-cat-tag {
          position: absolute;
          top: 0; right: 0;
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #fff;
          padding: 6px 14px;
          z-index: 4;
        }

        /* dark overlay on featured image bottom */
        .blog-card--featured .blog-img-wrap::after {
          content: "";
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 60%;
          background: linear-gradient(to top, rgba(37,19,41,0.65) 0%, transparent 100%);
          z-index: 2;
          pointer-events: none;
        }

        /* ── content zone ── */
        .blog-content {
          padding: 22px 22px 26px 28px; /* extra left to clear the side strip */
          display: flex;
          flex-direction: column;
          flex: 1;
          position: relative;
          overflow: hidden;
        }

        /* ghost category word in background */
        .blog-ghost-word {
          position: absolute;
          bottom: -16px; right: -6px;
          font-family: "Gutenberg Clean Regular", serif;
          font-size: 80px;
          line-height: 1;
          text-transform: uppercase;
          pointer-events: none;
          user-select: none;
          white-space: nowrap;
          color: rgba(37,19,41,0.04);
        }

        .blog-date {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(37,19,41,0.38);
          margin: 0 0 10px;
        }
        .blog-title {
          font-family: "Gutenberg Clean Regular", serif;
          font-size: 16px;
          line-height: 1.35;
          text-transform: uppercase;
          color: #251329;
          margin: 0 0 20px;
          flex: 1;
          position: relative;
          z-index: 1;
        }
        .blog-card--featured .blog-title { font-size: 20px; }

        .blog-read-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--cat-color, #E5007E);
          border-bottom: 2px solid var(--cat-color, #E5007E);
          padding-bottom: 2px;
          width: fit-content;
          transition: gap 0.2s;
          position: relative;
          z-index: 1;
        }
        .blog-read-link:hover { gap: 12px; }

        /* ── empty state ── */
        .blogs-empty {
          padding: 60px 0;
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 13px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(37,19,41,0.4);
        }

        @keyframes blogFadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* ═══ responsive ═══ */
        @media (max-width: 1280px) {
          .blogs-inner { padding: 0 32px; }
          .blogs-title { font-size: 52px; }
        }
        @media (max-width: 1024px) {
          .blogs-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
          .blog-card--featured { grid-column: span 2; }
          .blog-card--featured .blog-img-wrap { height: 260px; }
        }
        @media (max-width: 768px) {
          .blogs-section { padding: 60px 0 80px; }
          .blogs-inner { padding: 0 20px; }
          .blogs-title { font-size: 40px; }
          .blogs-page-hdr { flex-direction: column; align-items: flex-start; gap: 0; }
          .blogs-filter-bar { gap: 6px; }
          .blogs-search-wrap { margin-left: 0; width: 100%; margin-top: 4px; }
          .blogs-search-input { flex: 1; width: auto; }
          .blogs-grid { grid-template-columns: 1fr; }
          .blog-card--featured { grid-column: span 1; }
        }
        @media (max-width: 480px) {
          .blogs-title { font-size: 34px; }
        }
      `}} />

      <div className="blogs-inner">

        {/* ── Page heading ── */}
        <div className="blogs-page-hdr">
          <div className="blogs-page-hdr-left">
            <p className="blogs-eyebrow">Blogs &amp; News</p>
            <h1 className="blogs-title">Recent<br/>Posts</h1>
            <div className="blogs-title-bar" />
          </div>
        </div>

        {/* ── Filter bar ── */}
        <div className="blogs-filter-bar">
          <span className="blogs-filter-label">Filter:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`blogs-cat-btn${cat === activeCategory ? " is-active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
          <form
            className="blogs-search-wrap"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="blogs-search-input"
              placeholder="Search posts"
              aria-label="Search posts"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="blogs-search-btn" type="submit" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="m16.5 16.5 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
              </svg>
            </button>
          </form>
        </div>

        {/* ── Card grid ── */}
        {filtered.length === 0 ? (
          <p className="blogs-empty">No posts found.</p>
        ) : (
          <div className="blogs-grid">
            {filtered.map((post, idx) => {
              const accentColor = CAT_COLOR[post.category] ?? "#E5007E";
              const isFeatured = idx === 0;
              return (
                <article
                  key={post.title}
                  className={`blog-card${isFeatured ? " blog-card--featured" : ""}`}
                  style={{ ["--cat-color" as string]: accentColor }}
                >
                  {/* coloured left side strip */}
                  <div className="blog-side-strip" style={{ background: accentColor }} />

                  {/* image */}
                  <div className="blog-img-wrap">
                    <Image
                      className="blog-img"
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    />
                    {/* category tag pinned to image */}
                    <span
                      className="blog-cat-tag"
                      style={{ background: accentColor }}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* content */}
                  <div className="blog-content">
                    <span className="blog-ghost-word">{post.category}</span>
                    <p className="blog-date">{post.date}</p>
                    <h2 className="blog-title">{post.title}</h2>
                    <a className="blog-read-link" href="#">
                      Read →
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
