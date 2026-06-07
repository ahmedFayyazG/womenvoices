import { BlogsPageSections } from "@/app/components/blogs/BlogsPageSections";
import { FooterSection } from "@/app/components/home/NewsletterSection";
import { PatternHero } from "@/app/components/shared/ReusableSections";
import { SiteNav } from "@/app/components/shared/SiteNav";

export default function BlogsPage() {
  return (
    <main className="site-shell">
      <SiteNav />
      <PatternHero
        title="Blogs"
        className="blogs-green-hero"
        style={{ backgroundColor: "#0D6FB8" }}
      />
      <BlogsPageSections />
      <FooterSection />
    </main>
  );
}
