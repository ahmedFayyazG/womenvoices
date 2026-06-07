import {
  Flower,
  LeafCluster,
  PhotoCard,
} from "@/app/components/shared/Decorations";

export function PartnershipsSection() {
  return (
    <section className="feature-section section-reveal">
      <Flower className="feature-flower" />
      <LeafCluster className="feature-leaves" />
      <div className="section-inner feature-grid">
        <div>
          <p className="eyebrow light">Partnerships</p>
          <h2>Working together to strengthen communities</h2>
          <p>
            Women&apos;s Voices collaborates with local organisations, volunteers, community
            leaders, and partners who share our commitment to women&apos;s empowerment and
            social inclusion.
          </p>
          <p>
            Together, we create sustainable support systems and wider opportunities for
            women and families across Manchester.
          </p>
        </div>
        <PhotoCard className="tilt-right" caption="PARTNERSHIPS" />
      </div>
    </section>
  );
}
