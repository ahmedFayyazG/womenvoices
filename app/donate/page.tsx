import { FooterSection } from "@/app/components/home/NewsletterSection";
import { SiteNav } from "@/app/components/shared/SiteNav";
import { SplitImageHero } from "@/app/components/shared/ReusableSections";

export default function DonatePage() {
  return (
    <main className="site-shell">
      <SiteNav />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .donate-page-hero {
              background-color: #E5007E !important;
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='400' cy='400' r='50%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23E5007E'/%3E%3Cstop offset='1' stop-color='%23B8006A'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='400' cy='400' r='70%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23E5007E'/%3E%3Cstop offset='1' stop-color='%23E5007E'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='800'/%3E%3Cg fill-opacity='.8'%3E%3Cpath fill='url(%23b)' d='M998.7 439.2c1.7-26.5 1.7-52.7 0.1-78.5L401 399.9c0 0 0-0.1 0-0.1l587.6-116.9c-5.1-25.9-11.9-51.2-20.3-75.8L400.9 399.7c0 0 0-0.1 0-0.1l537.3-265c-11.6-23.5-24.8-46.2-39.3-67.9L400.8 399.5c0 0 0-0.1-0.1-0.1l450.4-395c-17.3-19.7-35.8-38.2-55.5-55.5l-395 450.4c0 0-0.1 0-0.1-0.1L733.4-99c-21.7-14.5-44.4-27.6-68-39.3l-265 537.4c0 0-0.1 0-0.1 0l192.6-567.4c-24.6-8.3-49.9-15.1-75.8-20.2L400.2 399c0 0-0.1 0-0.1 0l39.2-597.7c-26.5-1.7-52.7-1.7-78.5-0.1L399.9 399c0 0-0.1 0-0.1 0L282.9-188.6c-25.9 5.1-51.2 11.9-75.8 20.3l192.6 567.4c0 0-0.1 0-0.1 0l-265-537.3c-23.5 11.6-46.2 24.8-67.9 39.3l332.8 498.1c0 0-0.1 0-0.1 0.1L4.4-51.1C-15.3-33.9-33.8-15.3-51.1 4.4l450.4 395c0 0 0 0.1-0.1 0.1L-99 66.6c-14.5 21.7-27.6 44.4-39.3 68l537.4 265c0 0 0 0.1 0 0.1l-567.4-192.6c-8.3 24.6-15.1 49.9-20.2 75.8L399 399.8c0 0 0 0.1 0 0.1l-597.7-39.2c-1.7 26.5-1.7 52.7-0.1 78.5L399 400.1c0 0 0 0.1 0 0.1l-587.6 116.9c5.1 25.9 11.9 51.2 20.3 75.8l567.4-192.6c0 0 0 0.1 0 0.1l-537.3 265c11.6 23.5 24.8 46.2 39.3 67.9l498.1-332.8c0 0 0 0.1 0.1 0.1l-450.4 395c17.3 19.7 35.8 38.2 55.5 55.5l395-450.4c0 0 0.1 0 0.1 0.1L66.6 899c21.7 14.5 44.4 27.6 68 39.3l265-537.4c0 0 0.1 0 0.1 0L207.1 968.3c24.6 8.3 49.9 15.1 75.8 20.2L399.8 401c0 0 0.1 0 0.1 0l-39.2 597.7c26.5 1.7 52.7 1.7 78.5 0.1L400.1 401c0 0 0.1 0 0.1 0l116.9 587.6c25.9-5.1 51.2-11.9 75.8-20.3L400.3 400.9c0 0 0.1 0 0.1 0l265 537.3c23.5-11.6 46.2-24.8 67.9-39.3L400.5 400.8c0 0 0.1 0 0.1-0.1l395 450.4c19.7-17.3 38.2-35.8 55.5-55.5l-450.4-395c0 0 0-0.1 0.1-0.1L899 733.4c14.5-21.7 27.6-44.4 39.3-68l-537.4-265c0 0 0-0.1 0-0.1l567.4 192.6c8.3-24.6 15.1-49.9 20.2-75.8L401 400.2c0 0 0-0.1 0-0.1L998.7 439.2z'/%3E%3C/g%3E%3C/svg%3E") !important;
              background-attachment: fixed !important;
              background-size: cover !important;
            }

            .donate-page-hero::before {
              background: transparent !important;
            }

            .donate-page-hero .about-hero-frame {
              box-shadow: none !important;
            }

            .donate-page-hero .about-hero-title {
              color: #ffffff !important;
            }

            .about-hero-fan-left {
              transform: scale(1.2) translateX(-3%) !important;
            }

            .about-hero-fan-right {
              transform: scale(1.2) translateX(3%) !important;
            }

            .donate-body {
              background: #FAFAF7;
              padding: 80px 0 100px;
              position: relative;
            }
            .donate-body-inner {
              max-width: 800px;
              margin: 0 auto;
              padding: 0 40px;
              text-align: center;
            }
            .donate-title {
              font-family: "Gutenberg Clean Regular", var(--font-geist-sans), Arial, sans-serif;
              font-size: 42px;
              line-height: 44px;
              color: #8E2A91;
              margin: 0 0 24px 0;
            }
            .donate-text {
              font-family: "Avenir LT 55 Regular", "Avenir Medium", "Avenir Next", Avenir, var(--font-geist-sans), Arial, sans-serif;
              font-size: 16px;
              line-height: 26px;
              color: #4D4D4D;
              margin: 0 0 40px 0;
            }
            .donate-btn-large {
              display: inline-block;
              background: #E5007E;
              color: #ffffff;
              font-family: "Avenir Medium", "Avenir Next", Avenir, var(--font-geist-sans), Arial, sans-serif;
              font-size: 14px;
              font-weight: 700;
              letter-spacing: 2px;
              text-transform: uppercase;
              text-decoration: none;
              padding: 18px 40px;
              transition: background 0.2s, transform 0.2s;
            }
            .donate-btn-large:hover {
              background: #b8006a;
              transform: translateY(-2px);
            }
            @media (max-width: 640px) {
              .donate-body { padding: 60px 0 80px; }
              .donate-body-inner { padding: 0 24px; }
              .donate-title { font-size: 32px; line-height: 36px; }
            }
          `,
        }}
      />
      <SplitImageHero
        className="donate-page-hero"
        title="Support Our Cause"
        body="Your contribution helps us continue empowering women, fostering inclusive spaces, and providing vital resources to our community. Every donation makes a meaningful difference."
        image={{
          src: "/images/12.jpg",
          alt: "Women's Voices Donation",
        }}
        decorations={[
          { src: "/images/fan.png", className: "about-hero-fan-left" },
          { src: "/images/fan.png", className: "about-hero-fan-right" },
        ]}
        colors={{
          background: "#E5007E",
          overlay: "transparent",
          text: "#ffffff",
        }}
      />
      
      <section className="donate-body">
        <div className="donate-body-inner">
          <h2 className="donate-title">Make a Difference Today</h2>
          <p className="donate-text">
            By donating to Women's Voices, you are directly supporting our initiatives focused on women's leadership, advocacy, education, skills, health, and wellbeing. We believe that empowered women strengthen families, communities, and society.
          </p>
          <a href="#" className="donate-btn-large">Donate Now</a>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}