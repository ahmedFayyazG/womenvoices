import { ContactPageSections } from "@/app/components/contact/ContactPageSections";
import { FooterSection } from "@/app/components/home/NewsletterSection";
import { SiteNav } from "@/app/components/shared/SiteNav";

export default function ContactPage() {
  return (
    <main className="site-shell">
      <SiteNav />
      <ContactPageSections />
      <FooterSection />
    </main>
  );
}
