import { FooterSection } from "@/app/components/home/NewsletterSection";
import { SiteNav } from "@/app/components/shared/SiteNav";
import { SplitImageHero } from "@/app/components/shared/ReusableSections";
import { AboutSection } from "@/app/components/home/AboutSection";
import { ApproachSection } from "@/app/components/home/ApproachSection";
import { GuidingPrinciplesSection } from "@/app/components/home/GuidingPrinciplesSection";
import { HowWeWorkSection } from "@/app/components/home/HowWeWorkSection";
import { OurStorySection } from "@/app/components/home/OurStorySection";
import { ImpactMapSection } from "@/app/components/home/ImpactMapSection";

export default function AboutPage() {
  return (
    <main className="site-shell">
      <style dangerouslySetInnerHTML={{ __html: `
        .about-hero-fan-left {
          transform: scale(1.2) translateX(-3%) !important;
        }
        .about-hero-fan-right {
          transform: scale(1.2) translateX(3%) !important;
        }
      `}} />
      <SiteNav />
      <SplitImageHero
        title="About Women Voices"
        body="Women’s Voices is a community-focused organisation empowering women from diverse backgrounds through wellbeing support, education, advocacy, and leadership development. We create safe and inclusive spaces where women can build confidence, strengthen their voices, and create positive change within their communities."
        image={{
          src: "/images/heroWomen.png",
          alt: "Women Voices community members",
        }}
        decorations={[
          { src: "/images/fan.png", className: "about-hero-fan-left" },
          { src: "/images/fan.png", className: "about-hero-fan-right" },
        ]}
        colors={{
          background: "#e5017e",
          overlay: "rgba(229, 1, 126, 0.58)",
          text: "#ffffff",
        }}
      />
      <AboutSection image={{ src: "/images/gril.png", alt: "Women's Voices" }} />
      <ApproachSection
        id="about-values"
        valuesHeading="OUR CORE PRINCIPLES"
        values={[
          "Authenticity",
          "Compassion",
          "Resilience",
          "Inclusivity",
          "Accountability",
          "Justice",
        ]}
        creedHeading="OUR MISSION"
        creedParagraphs={[
          "Our mission is to foster a supportive community where women's voices are amplified, and their contributions are celebrated.",
          "We actively dismantle systemic barriers to create pathways to success, ensuring that all women have the resources they need to thrive.",
        ]}
        hideThematicAreas={true}
        dividerColor="#FAFAF7"
      />
      <GuidingPrinciplesSection />
      <HowWeWorkSection />
      <OurStorySection />
      <ImpactMapSection />
      <FooterSection />
    </main>
  );
}
