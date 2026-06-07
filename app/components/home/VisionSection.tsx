import { Flower, WomanIllustration } from "@/app/components/shared/Decorations";

export function VisionSection() {
  return (
    <section className="vision-section section-reveal">
      <Flower className="vision-flower-one" />
      <Flower className="vision-flower-two" />
      <div className="section-inner vision-grid">
        <div className="vision-copy left-copy">
          <p className="eyebrow green">Our Vision</p>
          <h2>Every woman feels empowered, included, and valued</h2>
          <p>
            We envision communities where women from all backgrounds can access
            opportunities, feel safe and respected, and participate fully in society.
          </p>
        </div>
        <WomanIllustration className="vision-woman" />
        <div className="vision-copy right-copy">
          <h2>Our Work</h2>
          <p>
            We strengthen women&apos;s voices, remove barriers to inclusion, and build
            supportive communities rooted in dignity, equality, and empowerment.
          </p>
        </div>
      </div>
    </section>
  );
}
