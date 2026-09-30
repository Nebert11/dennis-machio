import { ArrowUpRight } from 'lucide-react';

type HeroSectionProps = {
  onGoWhatIDo: () => void;
  onGoContact?: () => void;
};

function HeroSection({ onGoWhatIDo }: HeroSectionProps) {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
        <source src="/images/Homepage%20Video/Dennis%20Machio.mp4" type="video/mp4" />
      </video>
      {/* <img className="hero-portrait" src="/images/new_images/den4.png" alt="" aria-hidden="true" /> */}
      <div className="hero-copy">
        <p className="eyebrow">
          <span /> Film Producer. Creative Director. Media Strategist. Storyteller.
        </p>

        <h1>I Tell Stories That Connect & Inspire.</h1>

        <p className="hero-intro">
          I am a Nairobi-based film producer, creative director, and storyteller dedicated to
          transforming ideas into powerful visual experiences. Through film, documentaries,
          live broadcasting experiences, branding and creative media,
        </p>

        <p className="hero-intro hero-intro-secondary">
          Every story matters. Every frame has a purpose. Every legacy begins with a
          story.
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
