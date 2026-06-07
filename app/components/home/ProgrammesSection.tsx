import { programmes } from "@/app/data/home";

export function ProgrammesSection() {
  return (
    <section id="programmes" className="themes-section section-reveal">
      <div className="section-inner">
        <p className="section-kicker">Our Programmes</p>
        <h2 className="center-heading">
          Supporting women through education, wellbeing, and community empowerment
        </h2>
        <div className="theme-grid programme-grid">
          {programmes.map((programme) => (
            <article className="theme-card programme-card" key={programme.title}>
              <div className={`theme-icon ${programme.className}`}>
                <span />
              </div>
              <h3>{programme.title}</h3>
              <p>{programme.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
