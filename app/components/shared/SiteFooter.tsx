import { footerLinks } from "@/app/data/home";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-inner footer-grid">
        <div>
          <h2>Women&apos;s Voices</h2>
          <p>Empowering women through community, inclusion, education, and opportunity.</p>
        </div>
        {footerLinks.map(([heading, ...links]) => (
          <div key={heading}>
            <h3>{heading}</h3>
            {links.map((link) => (
              <a href="#top" key={link}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
