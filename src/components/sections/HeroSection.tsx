import { ArrowUpRight } from 'lucide-react';

type HeroSectionProps = {
  onGoWhatIDo: () => void;
  onGoContact?: () => void;
};

function HeroSection({ onGoWhatIDo }: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">
          <span /> Film Producer. Creative Director. Media Strategist. Storyteller.
        </p>

        <h1>I Tell Stories That Matter.</h1>

        <p className="hero-intro">
          Based in Nairobi, Kenya, Dennis Machio brings more than a decade of experience creating films,
          documentaries, live productions, branding experiences, digital campaigns, and visual strategies for
          organizations across Africa.
        </p>

        <p className="hero-intro hero-intro-secondary">
          From the first idea to the final frame, my work is driven by one belief: great stories should not
          only be seen, but they should also be felt, understood, and remembered.
        </p>

        <div className="hero-actions">
          <button className="button button-primary" onClick={onGoWhatIDo}>
            Explore More <ArrowUpRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
