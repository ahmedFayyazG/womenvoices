import Image from "next/image";

type ContactPageSectionsProps = {
  locations?: {
    heading: string;
    body: string;
  };
  form?: {
    heading: string;
    submitLabel: string;
    whistleblowerLabel: string;
  };
  colors?: {
    purple: string;
    beige: string;
    yellow: string;
    magenta: string;
    green: string;
  };
};

const defaultColors = {
  purple: "#8E2A91",
  beige: "#E6DFCF",
  yellow: "#FDBE18",
  magenta: "#E5007E",
  green: "#4E9473",
};

export function ContactPageSections({
  locations = {
    heading: "OUR LOCATIONS",
    body:
      "Women’s Voices is committed to working openly, respectfully, and responsibly with women, families, community partners, and supporters. Get in touch with us for programme enquiries, partnerships, volunteering, referrals, or general questions.",
  },
  form = {
    heading: "GET IN TOUCH WITH US",
    submitLabel: "SEND",
    whistleblowerLabel: "VOICE FOR ACCOUNTABILITY / WHISTLEBLOWER",
  },
  colors = defaultColors,
}: ContactPageSectionsProps) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .contact-page {
              --contact-purple: ${colors.purple};
              --contact-beige: ${colors.beige};
              --contact-yellow: ${colors.yellow};
              --contact-magenta: ${colors.magenta};
              --contact-green: ${colors.green};
              background: var(--contact-beige);
              overflow: hidden;
            }

            .contact-locations {
              position: relative;
              min-height: 700px;
              padding: 150px 28px 140px;
              background: var(--contact-purple);
              color: #ffffff;
              overflow: hidden;
            }

            .contact-locations-inner,
            .contact-form-inner {
              width: min(1320px, 100%);
              margin: 0 auto;
              position: relative;
              z-index: 2;
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: clamp(48px, 6vw, 92px);
            }

            .contact-map-col {
              flex: 0 0 52%;
              position: relative;
              opacity: 0;
              transform: translateY(28px) scale(0.97);
              animation: contactRevealMap 900ms cubic-bezier(0.22, 1, 0.36, 1) 160ms forwards;
            }

            .contact-copy-col {
              flex: 0 0 38%;
              opacity: 0;
              transform: translateY(26px);
              animation: contactReveal 850ms cubic-bezier(0.22, 1, 0.36, 1) 260ms forwards;
            }

            .contact-map {
              width: min(1860px, 300%);
              display: block;
              margin-left: -12px;
              margin-bottom: -86px;
              height: auto;
            }

            .contact-heading {
              font-family: "AMwA Font Medium", "Gutenberg Clean Regular", sans-serif;
              font-size: 68px;
              line-height: 0.95;
              letter-spacing: 0;
              color: var(--contact-yellow);
              text-transform: uppercase;
              margin: 0;
            }

            .contact-location-text {
              max-width: 480px;
              margin: 24px 0 0;
              color: #ffffff;
              font-family: "Avenir LT 55 Regular", "Avenir Next", Arial, sans-serif;
              font-size: 18px;
              line-height: 1.8;
            }

            .contact-beige-divider {
              position: absolute;
              left: 0;
              right: 0;
              bottom: -1px;
              height: 170px;
              background: var(--contact-beige);
              clip-path: polygon(0 48%, 50% 100%, 100% 48%, 100% 100%, 0 100%);
              z-index: 3;
            }

            .contact-form-section {
              position: relative;
              padding: 90px 28px 120px;
              background: var(--contact-beige);
              overflow: hidden;
            }

            .contact-form-col {
              flex: 0 0 52%;
              opacity: 0;
              transform: translateY(26px);
              animation: contactReveal 850ms cubic-bezier(0.22, 1, 0.36, 1) 180ms forwards;
            }

            .contact-flower-col {
              flex: 0 0 38%;
              display: flex;
              justify-content: center;
              opacity: 0;
              transform: translateY(24px);
              animation: contactReveal 850ms cubic-bezier(0.22, 1, 0.36, 1) 360ms forwards;
            }

            .contact-form-heading {
              max-width: 640px;
              margin: 0 0 36px;
              color: var(--contact-green);
              font-family: "AMwA Font Medium", "Gutenberg Clean Regular", sans-serif;
              font-size: 72px;
              line-height: 0.95;
              letter-spacing: 0;
              text-transform: uppercase;
            }

            .contact-form {
              display: grid;
              gap: 14px;
            }

            .contact-form-row {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 14px;
            }

            .contact-field,
            .contact-message {
              width: 100%;
              border: 0;
              border-radius: 0;
              outline: none;
              background: var(--contact-purple);
              color: #ffffff;
              font-family: "Avenir LT 55 Regular", "Avenir Next", Arial, sans-serif;
              font-size: 16px;
              line-height: 1.4;
              padding: 18px 20px;
              opacity: 0;
              transform: translateY(18px);
              animation: contactReveal 680ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
            }

            .contact-field {
              height: 60px;
            }

            .contact-message {
              height: 220px;
              resize: vertical;
            }

            .contact-field::placeholder,
            .contact-message::placeholder {
              color: rgba(255, 255, 255, 0.7);
              text-transform: uppercase;
              letter-spacing: 5px;
              font-size: 14px;
            }

            .contact-form .contact-field:nth-child(1) { animation-delay: 260ms; }
            .contact-form-row .contact-field:nth-child(1) { animation-delay: 340ms; }
            .contact-form-row .contact-field:nth-child(2) { animation-delay: 420ms; }
            .contact-message { animation-delay: 500ms; }

            .contact-actions {
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              gap: 16px;
              margin-top: 20px;
            }

            .contact-send,
            .contact-whistleblower {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              border: 0;
              border-radius: 0;
              text-decoration: none;
              text-transform: uppercase;
              color: #ffffff;
              font-family: "Avenir LT 55 Regular", "Avenir Next", Arial, sans-serif;
              font-size: 16px;
              letter-spacing: 5px;
              cursor: pointer;
              transition: transform 180ms ease, background-color 180ms ease;
            }

            .contact-send {
              padding: 18px 60px;
              background: var(--contact-magenta);
            }

            .contact-whistleblower {
              padding: 18px 34px;
              background: var(--contact-green);
            }

            .contact-send:hover {
              background: #c90077;
              transform: translateY(-2px);
            }

            .contact-whistleblower:hover {
              background: #3f7f61;
              transform: translateY(-2px);
            }

            .contact-flower {
              width: min(580px, 100%);
              height: auto;
              object-fit: contain;
              animation: flowerFloat 7s ease-in-out infinite;
            }

            @keyframes contactReveal {
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes contactRevealMap {
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }

            @keyframes flowerFloat {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }

            @media (max-width: 1100px) {
              .contact-locations {
                min-height: 760px;
              }

              .contact-heading {
                font-size: 52px;
              }

              .contact-form-heading {
                font-size: 52px;
              }

              .contact-map {
                width: min(780px, 145%);
                margin-left: -12px;
              }

              .contact-locations-inner,
              .contact-form-inner {
                gap: 42px;
              }
            }

            @media (max-width: 760px) {
              .contact-locations {
                min-height: 0;
                padding: 126px 24px 132px;
              }

              .contact-locations-inner,
              .contact-form-inner {
                flex-direction: column;
                align-items: flex-start;
                gap: 42px;
              }

              .contact-map-col,
              .contact-copy-col,
              .contact-form-col,
              .contact-flower-col {
                flex: 0 0 auto;
                width: 100%;
              }

              .contact-map {
                width: 135vw;
                max-width: 630px;
                margin: 0 auto -46px;
              }

              .contact-heading,
              .contact-form-heading {
                font-size: 38px;
                line-height: 0.98;
              }

              .contact-location-text {
                font-size: 16px;
                line-height: 1.75;
              }

              .contact-beige-divider {
                height: 96px;
              }

              .contact-form-section {
                padding: 76px 24px 100px;
              }

              .contact-form-row {
                grid-template-columns: 1fr;
              }

              .contact-actions {
                align-items: stretch;
                flex-direction: column;
              }

              .contact-send,
              .contact-whistleblower {
                width: 100%;
                padding-left: 20px;
                padding-right: 20px;
              }

              .contact-flower {
                width: 80vw;
                max-width: 420px;
                margin: 12px auto 0;
              }
            }
          `,
        }}
      />
      <div className="contact-page">
        <section className="contact-locations">
          <div className="contact-locations-inner">
            <div className="contact-map-col">
              <Image
                className="contact-map"
                src="/images/maplongsight.png"
                alt="Africa locations map"
                width={1536}
                height={1024}
                priority
              />
            </div>
            <div className="contact-copy-col">
              <h1 className="contact-heading">{locations.heading}</h1>
              <p className="contact-location-text">{locations.body}</p>
            </div>
          </div>
          <div className="contact-beige-divider" aria-hidden="true" />
        </section>

        <section className="contact-form-section">
          <div className="contact-form-inner">
            <div className="contact-form-col">
              <h2 className="contact-form-heading">{form.heading}</h2>
              <form className="contact-form">
                <input className="contact-field" name="name" placeholder="FULL NAME" />
                <div className="contact-form-row">
                  <input className="contact-field" name="phone" placeholder="CONTACT NO." />
                  <input className="contact-field" name="email" type="email" placeholder="EMAIL" />
                </div>
                <textarea className="contact-message" name="message" placeholder="MESSAGE" />
                <div className="contact-actions">
                  <button className="contact-send" type="submit">
                    {form.submitLabel}
                  </button>
                  <a className="contact-whistleblower" href="mailto:info@womensvoices.org.uk">
                    {form.whistleblowerLabel}
                  </a>
                </div>
              </form>
            </div>
            <div className="contact-flower-col" aria-hidden="true">
              <Image
                className="contact-flower"
                src="/images/sunflower.png"
                alt=""
                width={1024}
                height={1536}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
