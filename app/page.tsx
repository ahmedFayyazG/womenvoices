import { AboutSection } from "@/app/components/home/AboutSection";
import { ApproachSection } from "@/app/components/home/ApproachSection";
import { HeroSection } from "@/app/components/home/HeroSection";
import { ImpactSection } from "@/app/components/home/ImpactSection";
import { FooterSection } from "@/app/components/home/NewsletterSection";
import { FeaturedStorySection, StoriesSection } from "@/app/components/home/StoriesSection";
import { SiteNav } from "@/app/components/shared/SiteNav";

export default function Home() {
  return (
    <main className="site-shell">
      <SiteNav />
      <HeroSection />
      <AboutSection />
      <ApproachSection />
      <ImpactSection />
      <FeaturedStorySection />
      <StoriesSection />
      <FooterSection />
    </main>
  );
}
