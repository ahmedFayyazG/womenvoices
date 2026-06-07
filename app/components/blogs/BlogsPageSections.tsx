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
    date: "SEPTEMBER 10, 2025",
    title: "From Ground to Global: African Women's Power in Climate Action — the African Women and Gender Constituency Declaration",
    image: "/images/19.jpg",
  },
  {
    category: "BLOGS",
    date: "JULY 17, 2025",
    title: "How Are We Funding Our Own Exploitation? The Ultimate Irony!",
    image: "/images/14.jpeg",
  },
  {
    category: "BLOGS",
    date: "JULY 16, 2025",
    title: "Advancing Reparative Justice for African Women and Girls: Reflections from the 7th GIMAC Coordination Meeting",
    image: "/images/16.jpeg",
  },
  {
    category: "CALLS",
    date: "JULY 15, 2025",
    title: "Call for Applications: Internal Audit Firm for AMWA's 2025 Financial Year",
    image: "/images/17.jpg",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
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

  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCat =
        activeCategory === "ALL" ||
        post.category === activeCategory ||
        (activeCategory === "OPPORTUNITIES" && post.category === "CALLS");
      const matchesSearch =
        !q || `${post.category} ${post.date} ${post.title}`.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, posts, searchQuery]);

  return (
    <section className="blogs-section">
      <style dangerouslySetInnerHTML={{ __html: `
        /* ── hero overrides ── */
        .blogs-green-hero {
          min-height: 520px;
          padding-top: 170px;
          padding-bottom: 155px;
          background-color: #E5017E;
          overflow: hidden;
        }
        .blogs-green-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(180, 0, 100, 0.45);
          z-index: 1;
          pointer-events: none;
        }
        .blogs-green-hero .hero-copy { z-index: 2; }

        /* ── section ── */
        .blogs-section {
          background: #f7efd9;
          position: relative;
          padding: 0 0 80px;
          overflow: hidden;
        }
        .blogs-section::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0.03;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%238E2A91' stroke-width='2'%3E%3Cpath d='M90 90c-24-24-56-8-56-8s16-32 40-8c24-24 56-8 56-8s-16 32-40 8c-24 24-8 56-8 56s-32-16-8-40c24 24 8 56 8 56s32-16 8-40z'/%3E%3C/g%3E%3C/svg%3E");
          background-size: 230px 230px;
        }

        /* ── container ── */
        .blogs-inner {
          max-width: 1320px;
          margin: 0 auto;
          padding: 80px 40px 0;
          position: relative;
          z-index: 2;
          animation: blogsFadeUp 780ms cubic-bezier(0.22,1,0.36,1) both;
        }

        /* ── page heading ── */
        .blogs-heading {
          font-family: "Gutenberg Clean Regular", serif;
          font-size: 62px;
          line-height: 0.95;
          text-transform: uppercase;
          color: #251329;
          margin: 0 0 48px;
        }

        /* ── filter bar ── */
        .blogs-filter-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding-bottom: 24px;
          border-bottom: 2px solid rgba(37,19,41,0.1);
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .blogs-filter-left {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .blogs-filter-label {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: rgba(37,19,41,0.35);
          margin-right: 8px;
          flex-shrink: 0;
        }
        .blogs-category {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #251329;
          padding: 8px 18px;
          background: transparent;
          border: 1.5px solid rgba(37,19,41,0.2);
          cursor: pointer;
          transition: background 0.18s, color 0.18s, border-color 0.18s;
        }
        .blogs-category.is-active {
          background: #E5007E;
          color: #fff;
          border-color: #E5007E;
        }
        .blogs-category:hover:not(.is-active) {
          border-color: #E5007E;
          color: #E5007E;
        }

        /* search */
        .blogs-search {
          display: flex;
          align-items: stretch;
          flex-shrink: 0;
        }
        .blogs-search-input {
          width: 220px;
          height: 44px;
          border: 1.5px solid rgba(37,19,41,0.18);
          border-right: none;
          outline: none;
          background: #fff;
          padding: 0 14px;
          color: #251329;
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .blogs-search-input::placeholder { color: #b0a899; }
        .blogs-search-button {
          width: 44px;
          border: none;
          background: #E5007E;
          color: #fff;
          display: grid;
          place-items: center;
          cursor: pointer;
          transition: background 0.18s;
        }
        .blogs-search-button:hover { background: #c9006e; }

        /* ── card grid ── */
        .blogs-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 20px;
        }

        /* ── card ── */
        .blog-card {
          background: #fff;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 20px rgba(37,19,41,0.07);
          overflow: hidden;
          opacity: 0;
          transform: translateY(24px);
          animation: blogsFadeUp 700ms cubic-bezier(0.22,1,0.36,1) forwards;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .blog-card:hover {
          box-shadow: 0 8px 36px rgba(37,19,41,0.14);
          transform: translateY(-3px);
        }
        .blog-card:nth-child(1) { animation-delay: 80ms; }
        .blog-card:nth-child(2) { animation-delay: 160ms; }
        .blog-card:nth-child(3) { animation-delay: 240ms; }
        .blog-card:nth-child(4) { animation-delay: 320ms; }

        /* top accent bar */
        .blog-accent-bar {
          height: 5px;
          width: 100%;
          flex-shrink: 0;
        }

        /* image */
        .blog-image-wrap {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .blog-image {
          object-fit: cover;
          transition: transform 300ms ease;
        }
        .blog-card:hover .blog-image { transform: scale(1.04); }

        /* content */
        .blog-content {
          padding: 20px 20px 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .blog-cat-badge {
          display: inline-block;
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--cat-color, #E5007E);
          border: 1.5px solid var(--cat-color, #E5007E);
          padding: 3px 10px;
          margin-bottom: 10px;
          width: fit-content;
        }
        .blog-date {
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(37,19,41,0.4);
          margin: 0 0 12px;
        }
        .blog-title {
          font-family: "Gutenberg Clean Regular", serif;
          font-size: 16px;
          line-height: 1.35;
          text-transform: uppercase;
          color: #251329;
          margin: 0 0 20px;
          flex: 1;
        }
        .blog-read {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--cat-color, #E5007E);
          text-decoration: none;
          border-bottom: 2px solid var(--cat-color, #E5007E);
          padding-bottom: 2px;
          width: fit-content;
          transition: gap 0.2s;
        }
        .blog-read:hover { gap: 12px; }

        /* empty state */
        .blogs-empty {
          margin: 40px 0 0;
          font-family: "Avenir LT 55 Regular","Avenir Next",Avenir,Arial,sans-serif;
          font-size: 14px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(37,19,41,0.5);
        }

        @keyframes blogsFadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── responsive ── */
        @media (max-width: 1280px) {
          .blogs-inner { padding: 80px 32px 0; }
          .blogs-heading { font-size: 50px; }
        }
        @media (max-width: 1024px) {
          .blogs-grid { grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px; }
          .blog-image-wrap { height: 240px; }
        }
        @media (max-width: 768px) {
          .blogs-inner { padding: 60px 20px 0; }
          .blogs-heading { font-size: 38px; margin-bottom: 36px; }
          .blogs-filter-bar { flex-direction: column; align-items: flex-start; gap: 16px; }
          .blogs-search { width: 100%; }
          .blogs-search-input { flex: 1; width: auto; }
          .blogs-grid { grid-template-columns: 1fr; gap: 20px; }
          .blog-image-wrap { height: clamp(220px, 72vw, 320px); }
        }
        @media (max-width: 480px) {
          .blogs-heading { font-size: 32px; }
        }
      `}} />

      <div className="blogs-inner">
        <h1 className="blogs-heading">Recent Posts</h1>

        {/* Filter bar */}
        <div className="blogs-filter-bar">
          <div className="blogs-filter-left">
            <span className="blogs-filter-label">Filter:</span>
            <nav className="blogs-filter-left" aria-label="Blog categories" style={{ gap: "8px" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`blogs-category${cat === activeCategory ? " is-active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </div>
          <form className="blogs-search" role="search" onSubmit={(e) => e.preventDefault()}>
            <input
              className="blogs-search-input"
              placeholder="Search posts"
              aria-label="Search posts"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="blogs-search-button" type="submit" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="m16.5 16.5 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
              </svg>
            </button>
          </form>
        </div>

        {/* Card grid */}
        <div className="blogs-grid">
          {filteredPosts.map((post) => {
            const accentColor = CATEGORY_COLORS[post.category] ?? "#E5007E";
            return (
              <article
                key={post.title}
                className="blog-card"
                style={{ ["--cat-color" as string]: accentColor }}
              >
                <div className="blog-accent-bar" style={{ background: accentColor }} />
                <div className="blog-image-wrap">
                  <Image
                    className="blog-image"
                    src={post.image}
                    alt=""
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  />
                </div>
                <div className="blog-content">
                  <span className="blog-cat-badge">{post.category}</span>
                  <p className="blog-date">{post.date}</p>
                  <h2 className="blog-title">{post.title}</h2>
                  <a className="blog-read" href="#">
                    Read →
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {filteredPosts.length === 0 && (
          <p className="blogs-empty">No posts found.</p>
        )}
      </div>
    </section>
  );
}
