import { PatternHero, type PatternHeroProps } from "@/app/components/shared/ReusableSections";

type HeroSectionProps = Partial<PatternHeroProps>;

export function HeroSection({
  id = "top",
  title = "Building Stronger Communities Through Women's Empowerment",
  cta = { href: "#about", label: "Read More" },
  ...props
}: HeroSectionProps = {}) {
  return <PatternHero id={id} title={title} cta={cta} {...props} />;
}
