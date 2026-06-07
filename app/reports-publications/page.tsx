import { FooterSection } from "@/app/components/home/NewsletterSection";
import { SiteNav } from "@/app/components/shared/SiteNav";
import { SplitImageHero } from "@/app/components/shared/ReusableSections";

export default function ReportsPublicationsPage() {
  return (
    <main className="site-shell">
      <SiteNav />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .reports-page-hero {
              background-color: #0b7561 !important;
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='400' cy='400' r='50%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2314a28d'/%3E%3Cstop offset='1' stop-color='%230b7561'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='400' cy='400' r='70%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2314a28d'/%3E%3Cstop offset='1' stop-color='%2314a28d'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='800'/%3E%3Cg fill-opacity='.8'%3E%3Cpath fill='url(%23b)' d='M998.7 439.2c1.7-26.5 1.7-52.7 0.1-78.5L401 399.9c0 0 0-0.1 0-0.1l587.6-116.9c-5.1-25.9-11.9-51.2-20.3-75.8L400.9 399.7c0 0 0-0.1 0-0.1l537.3-265c-11.6-23.5-24.8-46.2-39.3-67.9L400.8 399.5c0 0 0-0.1-0.1-0.1l450.4-395c-17.3-19.7-35.8-38.2-55.5-55.5l-395 450.4c0 0-0.1 0-0.1-0.1L733.4-99c-21.7-14.5-44.4-27.6-68-39.3l-265 537.4c0 0-0.1 0-0.1 0l192.6-567.4c-24.6-8.3-49.9-15.1-75.8-20.2L400.2 399c0 0-0.1 0-0.1 0l39.2-597.7c-26.5-1.7-52.7-1.7-78.5-0.1L399.9 399c0 0-0.1 0-0.1 0L282.9-188.6c-25.9 5.1-51.2 11.9-75.8 20.3l192.6 567.4c0 0-0.1 0-0.1 0l-265-537.3c-23.5 11.6-46.2 24.8-67.9 39.3l332.8 498.1c0 0-0.1 0-0.1 0.1L4.4-51.1C-15.3-33.9-33.8-15.3-51.1 4.4l450.4 395c0 0 0 0.1-0.1 0.1L-99 66.6c-14.5 21.7-27.6 44.4-39.3 68l537.4 265c0 0 0 0.1 0 0.1l-567.4-192.6c-8.3 24.6-15.1 49.9-20.2 75.8L399 399.8c0 0 0 0.1 0 0.1l-597.7-39.2c-1.7 26.5-1.7 52.7-0.1 78.5L399 400.1c0 0 0 0.1 0 0.1l-587.6 116.9c5.1 25.9 11.9 51.2 20.3 75.8l567.4-192.6c0 0 0 0.1 0 0.1l-537.3 265c11.6 23.5 24.8 46.2 39.3 67.9l498.1-332.8c0 0 0 0.1 0.1 0.1l-450.4 395c17.3 19.7 35.8 38.2 55.5 55.5l395-450.4c0 0 0.1 0 0.1 0.1L66.6 899c21.7 14.5 44.4 27.6 68 39.3l265-537.4c0 0 0.1 0 0.1 0L207.1 968.3c24.6 8.3 49.9 15.1 75.8 20.2L399.8 401c0 0 0.1 0 0.1 0l-39.2 597.7c26.5 1.7 52.7 1.7 78.5 0.1L400.1 401c0 0 0.1 0 0.1 0l116.9 587.6c25.9-5.1 51.2-11.9 75.8-20.3L400.3 400.9c0 0 0.1 0 0.1 0l265 537.3c23.5-11.6 46.2-24.8 67.9-39.3L400.5 400.8c0 0 0.1 0 0.1-0.1l395 450.4c19.7-17.3 38.2-35.8 55.5-55.5l-450.4-395c0 0 0-0.1 0.1-0.1L899 733.4c14.5-21.7 27.6-44.4 39.3-68l-537.4-265c0 0 0-0.1 0-0.1l567.4 192.6c8.3-24.6 15.1-49.9 20.2-75.8L401 400.2c0 0 0-0.1 0-0.1L998.7 439.2z'/%3E%3C/g%3E%3C/svg%3E") !important;
              background-attachment: fixed !important;
              background-size: cover !important;
            }

            .reports-page-hero::before {
              background: transparent !important;
            }

            .reports-page-hero .about-hero-frame {
              box-shadow: none !important;
            }

            .reports-page-hero .about-hero-title {
              color: #ffffff !important;
            }

            .about-hero-fan-left {
              transform: scale(1.2) translateX(-3%) !important;
            }

            .about-hero-fan-right {
              transform: scale(1.2) translateX(3%) !important;
            }
          `,
        }}
      />
      <SplitImageHero
        className="reports-page-hero"
        title="Reports and Publications"
        body="Explore Women’s Voices reports, publications, research, community learning, and resources documenting our work with women across wellbeing, education, advocacy, leadership, and inclusion."
        image={{
          src: "/images/14.jpeg",
          alt: "Women’s Voices reports and publications",
        }}
        decorations={[
          { src: "/images/fan.png", className: "about-hero-fan-left" },
          { src: "/images/fan.png", className: "about-hero-fan-right" },
        ]}
        colors={{
          background: "#0b7561",
          overlay: "transparent",
          text: "#ffffff",
        }}
      />
      <section className="rp-body">
        <style dangerouslySetInnerHTML={{ __html: `
          .rp-body {
            background: #F7EFD9;
            padding: 80px 0 0;
            position: relative;
          }
          .rp-body-inner {
            max-width: 1180px;
            margin: 0 auto;
            padding: 0 40px 80px;
          }
          .rp-wave {
            display: block;
            width: 100%;
            line-height: 0;
            overflow: hidden;
          }
          .rp-wave svg {
            display: block;
            width: 100%;
            height: 90px;
          }
          .rp-section-title {
            font-family: "Gutenberg Clean Regular", var(--font-geist-sans), Arial, sans-serif;
            font-size: 42px;
            line-height: 44px;
            font-weight: 400;
            color: #8E2A91;
            margin: 0 0 14px 0;
            letter-spacing: 0;
          }
          .rp-section-lead {
            font-family: "Avenir LT 55 Regular", "Avenir Medium", "Avenir Next", Avenir, var(--font-geist-sans), Arial, sans-serif;
            font-size: 15px;
            line-height: 22px;
            font-weight: 400;
            color: #8E2A91;
            max-width: 680px;
            margin: 0 0 56px 0;
          }
          .rp-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 40px;
          }
          .rp-card {
            display: flex;
            flex-direction: column;
            border: 2px solid #8E2A91;
            overflow: hidden;
          }
          .rp-card-cover {
            width: 100%;
            aspect-ratio: 16 / 9;
            object-fit: cover;
            object-position: center top;
            display: block;
            background: #f3e6f5;
          }
          .rp-card-body-wrap {
            padding: 28px 28px 32px;
            display: flex;
            flex-direction: column;
            flex: 1;
          }
          .rp-card-tag {
            font-family: "Avenir Medium", "Avenir Next", Avenir, var(--font-geist-sans), Arial, sans-serif;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 2.8px;
            text-transform: uppercase;
            color: #E5007E;
            margin: 0 0 14px 0;
          }
          .rp-card-title {
            font-family: "Gutenberg Clean Regular", var(--font-geist-sans), Arial, sans-serif;
            font-size: 26px;
            line-height: 30px;
            font-weight: 400;
            color: #8E2A91;
            margin: 0 0 14px 0;
            letter-spacing: 0;
          }
          .rp-card-desc {
            font-family: "Avenir LT 55 Regular", "Avenir Medium", "Avenir Next", Avenir, var(--font-geist-sans), Arial, sans-serif;
            font-size: 15px;
            line-height: 22px;
            font-weight: 400;
            color: rgba(142, 42, 145, 0.72);
            margin: 0 0 28px 0;
            flex: 1;
          }
          .rp-card-footer {
            display: flex;
            align-items: center;
            gap: 20px;
            padding-top: 20px;
            border-top: 1px solid rgba(142, 42, 145, 0.18);
          }
          .rp-download-btn {
            display: inline-flex;
            align-items: center;
            gap: 9px;
            background: #E5007E;
            color: #ffffff;
            font-family: "Avenir Medium", "Avenir Next", Avenir, var(--font-geist-sans), Arial, sans-serif;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 2.4px;
            text-transform: uppercase;
            text-decoration: none;
            padding: 11px 20px;
            transition: background 0.2s;
          }
          .rp-download-btn:hover {
            background: #b8006a;
          }
          .rp-download-btn svg {
            flex-shrink: 0;
          }
          .rp-card-year {
            font-family: "Avenir LT 55 Regular", "Avenir Medium", "Avenir Next", Avenir, var(--font-geist-sans), Arial, sans-serif;
            font-size: 13px;
            line-height: 22px;
            color: rgba(142, 42, 145, 0.5);
            margin: 0;
          }
          @media (max-width: 768px) {
            .rp-grid { grid-template-columns: 1fr; gap: 32px; }
          }
          @media (max-width: 640px) {
            .rp-body { padding: 60px 0 0; }
            .rp-body-inner { padding: 0 24px 60px; }
            .rp-section-title { font-size: 32px; line-height: 36px; }
            .rp-card-body-wrap { padding: 22px 22px 26px; }
            .rp-card-title { font-size: 22px; line-height: 26px; }
          }
        `}} />
        <div className="rp-body-inner">
          <h2 className="rp-section-title">Our Reports &amp; Publications</h2>
          <p className="rp-section-lead">
            We document the lived experiences and achievements of the women we work with, publishing
            research, community reports, and resources that drive advocacy and inform policy across
            Manchester and beyond.
          </p>
          <div className="rp-grid">

            {/* Publication 1 */}
            <div className="rp-card">
              <img
                className="rp-card-cover"
                src="https://womensvoices.org.uk/wp-content/uploads/2022/06/thumbnail_photo-2022-05-09-10-58-52.jpg"
                alt="Women's Voices Community Research Project 2022"
              />
              <div className="rp-card-body-wrap">
                <p className="rp-card-tag">Community Research · 2021–2022</p>
                <h3 className="rp-card-title">
                  Identifying the Health and Social Needs of Black and Minoritised Women Aged 50+
                </h3>
                <p className="rp-card-desc">
                  Research investigating the health and social needs of Black and minoritised women
                  aged 50+ in the Longsight area, with key recommendations for improved practice and
                  more responsive services.
                </p>
                <div className="rp-card-footer">
                  <a
                    className="rp-download-btn"
                    href="https://womensvoices.org.uk/wp-content/uploads/2022/06/community-research-project-womens-voices-1-2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Download PDF
                  </a>
                  <p className="rp-card-year">Published June 2022</p>
                </div>
              </div>
            </div>

            {/* Publication 2 */}
            <div className="rp-card">
              <img
                className="rp-card-cover"
                src="https://womensvoices.org.uk/wp-content/uploads/2022/06/thumbnail_photo-2022-05-09-10-58-52.jpg"
                alt="Creative Writing and Food: A Pamphlet of New Work"
              />
              <div className="rp-card-body-wrap">
                <p className="rp-card-tag">Creative Writing · Community Publication</p>
                <h3 className="rp-card-title">
                  Creative Writing &amp; Food: A Pamphlet of New Work
                </h3>
                <p className="rp-card-desc">
                  A pamphlet featuring new creative writing about or inspired by food, developed
                  through a workshop led by Rebecca Hurst in consultation with Women's Voices CIC
                  members in Manchester.
                </p>
                <div className="rp-card-footer">
                  <a
                    className="rp-download-btn"
                    href="https://womensvoices.org.uk/wp-content/uploads/2022/06/creative-writing-food-pamphlet_s2-1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Download PDF
                  </a>
                  <p className="rp-card-year">Published June 2022</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="rp-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
            <path d="M0,90 C480,10 960,10 1440,90 L1440,90 L0,90 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
