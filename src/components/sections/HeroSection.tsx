import { ArrowUpRight } from 'lucide-react';

type HeroSectionProps = {
  onGoWhatIDo: () => void;
  onGoContact?: () => void;
};

function HeroSection({ onGoWhatIDo }: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="hero-copy">
        {/*
        <p className="eyebrow">
          <span /> {bioSummary.name} · {bioSummary.title}
        </p>
        <h1>
          Capturing Moments.
          <br />
          Telling Stories.
          <br />
          Building Brands.
        </h1>
        <p className="hero-intro">{bioSummary.heroDescription}</p>
        */}
        <div className="hero-actions">
          <button className="button button-primary" onClick={onGoWhatIDo}>
            Explore my work <ArrowUpRight size={17} />
          </button>
          {/*
          <button className="play-link" onClick={onOpenShowreel}>
            <span className="play-icon">
              <Play size={13} fill="currentColor" />
            </span>
            Watch showreel
          </button>
          */}
        </div>
      </div>
      {/* <div className="scroll-cue">
        <span>Scroll to discover</span>
        <ChevronDown size={16} />
      </div> */}
    </section>
  );
}

export default HeroSection;
