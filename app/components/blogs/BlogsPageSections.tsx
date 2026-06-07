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
    title:
      "FROM GROUND TO GLOBAL: AFRICAN WOMEN’S POWER IN CLIMATE ACTION- THE AFRICAN WOMEN AND GENDER CONSTITUENCY DECLARATION",
    image: "/images/19.jpg",
  },
  {
    category: "BLOGS",
    date: "JULY 17, 2025",
    title: "HOW ARE WE FUNDING OUR OWN EXPLOITATION? THE ULTIMATE IRONY!",
    image: "/images/14.jpeg",
  },
  {
    category: "BLOGS",
    date: "JULY 16, 2025",
    title:
      "ADVANCING REPARATIVE JUSTICE FOR AFRICAN WOMEN AND GIRLS: REFLECTIONS FROM THE 7TH GIMAC COORDINATION MEETING WITH RECS",
    image: "/images/16.jpeg",
  },
  {
    category: "CALLS",
    date: "JULY 15, 2025",
    title: "CALL FOR APPLICATIONS: INTERNAL AUDIT FIRM FOR AMWA’S 2025 FINANCIAL YEAR",
    image: "/images/17.jpg",
  },
];

export function BlogsPageSections({
  posts = defaultPosts,
  categories = ["ALL", "BLOGS", "NEWS", "OPPORTUNITIES"],
}: BlogsPageSectionsProps) {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "ALL" ||
        post.category === activeCategory ||
        (activeCategory === "OPPORTUNITIES" && post.category === "CALLS");
      const matchesSearch =
        normalizedSearch.length === 0 ||
        `${post.category} ${post.date} ${post.title}`.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, posts, searchQuery]);

  return (
    <section className="blogs-page-section">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .blogs-green-hero {
              min-height: 520px;
              padding-top: 170px;
              padding-bottom: 155px;
              background-color: #0D6FB8;
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='400' cy='400' r='50%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%231E9BD7'/%3E%3Cstop offset='1' stop-color='%230A4FA3'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='400' cy='400' r='70%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%231E9BD7'/%3E%3Cstop offset='1' stop-color='%230D6FB8'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='800'/%3E%3Cg fill-opacity='.8'%3E%3Cpath fill='url(%23b)' d='M998.7 439.2c1.7-26.5 1.7-52.7 0.1-78.5L401 399.9c0 0 0-0.1 0-0.1l587.6-116.9c-5.1-25.9-11.9-51.2-20.3-75.8L400.9 399.7c0 0 0-0.1 0-0.1l537.3-265c-11.6-23.5-24.8-46.2-39.3-67.9L400.8 399.5c0 0 0-0.1-0.1-0.1l450.4-395c-17.3-19.7-35.8-38.2-55.5-55.5l-395 450.4c0 0-0.1 0-0.1-0.1L733.4-99c-21.7-14.5-44.4-27.6-68-39.3l-265 537.4c0 0-0.1 0-0.1 0l192.6-567.4c-24.6-8.3-49.9-15.1-75.8-20.2L400.2 399c0 0-0.1 0-0.1 0l39.2-597.7c-26.5-1.7-52.7-1.7-78.5-0.1L399.9 399c0 0-0.1 0-0.1 0L282.9-188.6c-25.9 5.1-51.2 11.9-75.8 20.3l192.6 567.4c0 0-0.1 0-0.1 0l-265-537.3c-23.5 11.6-46.2 24.8-67.9 39.3l332.8 498.1c0 0-0.1 0-0.1 0.1L4.4-51.1C-15.3-33.9-33.8-15.3-51.1 4.4l450.4 395c0 0 0 0.1-0.1 0.1L-99 66.6c-14.5 21.7-27.6 44.4-39.3 68l537.4 265c0 0 0 0.1 0 0.1l-567.4-192.6c-8.3 24.6-15.1 49.9-20.2 75.8L399 399.8c0 0 0 0.1 0 0.1l-597.7-39.2c-1.7 26.5-1.7 52.7-0.1 78.5L399 400.1c0 0 0 0.1 0 0.1l-587.6 116.9c5.1 25.9 11.9 51.2 20.3 75.8l567.4-192.6c0 0 0 0.1 0 0.1l-537.3 265c11.6 23.5 24.8 46.2 39.3 67.9l498.1-332.8c0 0 0 0.1 0.1 0.1l-450.4 395c17.3 19.7 35.8 38.2 55.5 55.5l395-450.4c0 0 0.1 0 0.1 0.1L66.6 899c21.7 14.5 44.4 27.6 68 39.3l265-537.4c0 0 0.1 0 0.1 0L207.1 968.3c24.6 8.3 49.9 15.1 75.8 20.2L399.8 401c0 0 0.1 0 0.1 0l-39.2 597.7c26.5 1.7 52.7 1.7 78.5 0.1L400.1 401c0 0 0.1 0 0.1 0l116.9 587.6c25.9-5.1 51.2-11.9 75.8-20.3L400.3 400.9c0 0 0.1 0 0.1 0l265 537.3c23.5-11.6 46.2-24.8 67.9-39.3L400.5 400.8c0 0 0.1 0 0.1-0.1l395 450.4c19.7-17.3 38.2-35.8 55.5-55.5l-450.4-395c0 0 0-0.1 0.1-0.1L899 733.4c14.5-21.7 27.6-44.4 39.3-68l-537.4-265c0 0 0-0.1 0-0.1l567.4 192.6c8.3-24.6 15.1-49.9 20.2-75.8L401 400.2c0 0 0-0.1 0-0.1L998.7 439.2z'/%3E%3C/g%3E%3C/svg%3E");
              overflow: hidden;
            }

            .blogs-green-hero::before {
              content: "";
              position: absolute;
              inset: 0;
              background: rgba(7, 82, 158, 0.58);
              z-index: 1;
              pointer-events: none;
            }

            .blogs-green-hero .hero-copy {
              z-index: 2;
            }

            .blogs-page-section {
              position: relative;
              background: #E6DFCF;
              overflow: hidden;
              padding-bottom: 92px;
            }

            .blogs-page-section::before {
              content: "";
              position: absolute;
              inset: 0;
              opacity: 0.04;
              pointer-events: none;
              background-image: url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%238E2A91' stroke-width='2'%3E%3Cpath d='M90 90c-24-24-56-8-56-8s16-32 40-8c24-24 56-8 56-8s-16 32-40 8c-24 24-8 56-8 56s-32-16-8-40c24 24 8 56 8 56s32-16 8-40z'/%3E%3Cpath d='M35 138c34-22 78-22 110 0M40 42c28 16 74 16 101 0'/%3E%3C/g%3E%3C/svg%3E");
              background-size: 230px 230px;
            }

            .blogs-container {
              width: min(1320px, calc(100% - 56px));
              margin: 0 auto;
              padding: 100px 0 120px;
              position: relative;
              z-index: 2;
              animation: blogsFadeUp 780ms cubic-bezier(0.22, 1, 0.36, 1) both;
            }

            .blogs-heading {
              margin: 0 0 28px;
              color: #4E9473;
              font-family: "AMwA Font Medium", "Gutenberg Clean Regular", sans-serif;
              font-size: 64px;
              line-height: 0.95;
              letter-spacing: 0;
              text-transform: uppercase;
            }

            .blogs-filter {
              width: 100%;
              min-height: 150px;
              padding: 26px 24px;
              background: #8E2A91;
              display: grid;
              gap: 22px;
            }

            .blogs-filter-title {
              margin: 0;
              color: #ffffff;
              font-family: "AMwA Font Medium", "Gutenberg Clean Regular", sans-serif;
              font-size: 42px;
              line-height: 1;
              text-transform: uppercase;
            }

            .blogs-filter-row {
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 24px;
            }

            .blogs-categories {
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              gap: 18px 26px;
            }

            .blogs-category {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              border: 0;
              border-radius: 0;
              background: transparent;
              color: #ffffff;
              font-family: "Avenir LT 55 Regular", "Avenir Next", Arial, sans-serif;
              font-size: 14px;
              line-height: 1;
              letter-spacing: 6px;
              text-transform: uppercase;
              text-decoration: none;
              cursor: pointer;
              padding: 0;
            }

            .blogs-category.is-active {
              padding: 12px 24px;
              background: #FDBE18;
              color: #8E2A91;
            }

            .blogs-search {
              display: flex;
              align-items: stretch;
              flex: 0 0 auto;
            }

            .blogs-search-input {
              width: 220px;
              height: 50px;
              border: 0;
              border-radius: 0;
              outline: none;
              background: #ffffff;
              padding: 0 14px;
              color: #251329;
              font-family: "Avenir LT 55 Regular", "Avenir Next", Arial, sans-serif;
              font-size: 14px;
              letter-spacing: 5px;
              text-transform: uppercase;
            }

            .blogs-search-input::placeholder {
              color: #999999;
            }

            .blogs-search-button {
              width: 52px;
              border: 0;
              border-radius: 0;
              background: #E5007E;
              color: #ffffff;
              display: grid;
              place-items: center;
              cursor: pointer;
            }

            .blogs-grid {
              display: grid;
              grid-template-columns: repeat(4, minmax(0, 1fr));
              gap: 22px;
              margin-top: 30px;
            }

            .blog-card {
              background: #D8D1BF;
              overflow: hidden;
              opacity: 0;
              transform: translateY(28px);
              animation: blogsFadeUp 760ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
            }

            .blog-card:nth-child(1) { animation-delay: 120ms; }
            .blog-card:nth-child(2) { animation-delay: 210ms; }
            .blog-card:nth-child(3) { animation-delay: 300ms; }
            .blog-card:nth-child(4) { animation-delay: 390ms; }

            .blog-image-wrap {
              position: relative;
              width: 100%;
              height: 430px;
              overflow: hidden;
            }

            .blog-image {
              object-fit: cover;
              transition: transform 240ms ease;
            }

            .blog-card:hover .blog-image {
              transform: scale(1.02);
            }

            .blog-content {
              padding: 12px;
            }

            .blog-meta {
              margin: 0;
              font-family: "Avenir LT 55 Regular", "Avenir Next", Arial, sans-serif;
              font-size: 11px;
              line-height: 1.4;
              letter-spacing: 4px;
              text-transform: uppercase;
            }

            .blog-meta-category {
              color: #4E9473;
            }

            .blog-meta-date {
              color: #B35A9B;
            }

            .blog-title {
              margin: 8px 0 0;
              color: #8E2A91;
              font-family: "Avenir LT 55 Regular", "Avenir Next", Arial, sans-serif;
              font-size: 14px;
              line-height: 1.6;
              letter-spacing: 4px;
              text-transform: uppercase;
            }

            .blog-read {
              display: inline-block;
              margin-top: 12px;
              padding: 10px 16px;
              background: #4E9473;
              color: #ffffff;
              font-family: "Avenir LT 55 Regular", "Avenir Next", Arial, sans-serif;
              font-size: 14px;
              letter-spacing: 4px;
              text-transform: uppercase;
              text-decoration: none;
              transition: transform 180ms ease, background-color 180ms ease;
            }

            .blog-read:hover {
              transform: translateY(-2px);
              background: #3f7f61;
            }

            .blogs-empty {
              margin: 34px 0 0;
              color: #8E2A91;
              font-family: "Avenir LT 55 Regular", "Avenir Next", Arial, sans-serif;
              font-size: 14px;
              line-height: 1.6;
              letter-spacing: 4px;
              text-transform: uppercase;
            }

            .blogs-bottom-curve {
              position: absolute;
              left: 0;
              right: 0;
              bottom: -1px;
              height: 92px;
              z-index: 3;
              pointer-events: none;
            }

            .blogs-bottom-curve svg {
              width: 100%;
              height: 100%;
              display: block;
            }

            @keyframes blogsFadeUp {
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @media (max-width: 1199px) {
              .blogs-container {
                width: min(1180px, calc(100% - 64px));
              }

              .blogs-heading {
                font-size: 56px;
              }

              .blogs-grid {
                gap: 18px;
              }

              .blog-image-wrap {
                height: 380px;
              }
            }

            @media (max-width: 1023px) {
              .blogs-container {
                width: calc(100% - 56px);
                padding-top: 80px;
              }

              .blogs-heading {
                font-size: 46px;
              }

              .blogs-filter {
                min-height: 0;
                padding: 24px;
              }

              .blogs-filter-title {
                font-size: 36px;
              }

              .blogs-filter-row {
                flex-wrap: wrap;
              }

              .blogs-search-input {
                width: 260px;
              }

              .blogs-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 22px;
              }

              .blog-image-wrap {
                height: 360px;
              }
            }

            @media (max-width: 767px) {
              .blogs-green-hero {
                min-height: 430px;
                padding-top: 150px;
                padding-bottom: 130px;
              }

              .blogs-container {
                width: calc(100% - 44px);
                padding-top: 60px;
                padding-bottom: 80px;
              }

              .blogs-heading {
                font-size: 38px;
              }

              .blogs-filter {
                padding: 22px 18px;
              }

              .blogs-filter-title {
                font-size: 30px;
              }

              .blogs-filter-row {
                display: grid;
                gap: 20px;
              }

              .blogs-categories {
                gap: 14px 18px;
              }

              .blogs-category {
                font-size: 12px;
                letter-spacing: 3px;
              }

              .blogs-category.is-active {
                padding: 10px 18px;
              }

              .blogs-search {
                width: 100%;
              }

              .blogs-search-input {
                width: auto;
                min-width: 0;
                flex: 1;
                font-size: 12px;
                letter-spacing: 3px;
              }

              .blogs-search-button {
                flex: 0 0 52px;
              }

              .blogs-grid {
                grid-template-columns: 1fr;
                gap: 28px;
                margin-top: 28px;
              }

              .blog-image-wrap {
                height: clamp(330px, 92vw, 380px);
              }

              .blog-content {
                padding: 14px;
              }

              .blog-meta {
                font-size: 10px;
                letter-spacing: 3px;
              }

              .blog-title {
                font-size: 13px;
                line-height: 1.55;
                letter-spacing: 3px;
              }

              .blog-read {
                font-size: 13px;
                letter-spacing: 3px;
                padding: 10px 15px;
              }

              .blogs-bottom-curve {
                height: 62px;
              }
            }
          `,
        }}
      />
      <div className="blogs-container">
        <h1 className="blogs-heading">RECENT POSTS</h1>
        <div className="blogs-filter">
          <p className="blogs-filter-title">FILTER</p>
          <div className="blogs-filter-row">
            <nav className="blogs-categories" aria-label="Blog categories">
              {categories.map((category) => (
                <button
                  className={`blogs-category ${category === activeCategory ? "is-active" : ""}`}
                  type="button"
                  key={category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </nav>
            <form className="blogs-search" role="search" onSubmit={(event) => event.preventDefault()}>
              <input
                className="blogs-search-input"
                placeholder="SEARCH BLOGS"
                aria-label="Search blogs"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
              <button className="blogs-search-button" type="submit" aria-label="Search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                  <path d="m16.5 16.5 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="blogs-grid">
          {filteredPosts.map((post) => (
            <article className="blog-card" key={post.title}>
              <div className="blog-image-wrap">
                <Image className="blog-image" src={post.image} alt="" fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw" />
              </div>
              <div className="blog-content">
                <p className="blog-meta">
                  <span className="blog-meta-category">{post.category}</span>{" "}
                  <span className="blog-meta-date">{post.date}</span>
                </p>
                <h2 className="blog-title">{post.title}</h2>
                <a className="blog-read" href="#">
                  READ
                </a>
              </div>
            </article>
          ))}
        </div>
        {filteredPosts.length === 0 ? (
          <p className="blogs-empty">No posts found for this filter.</p>
        ) : null}
      </div>
      <div className="blogs-bottom-curve" aria-hidden="true">
        <svg viewBox="0 0 1440 92" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 C360 54 1080 54 1440 0 L1440 92 L0 92 Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  );
}
