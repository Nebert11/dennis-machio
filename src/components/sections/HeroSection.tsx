import { ArrowUpRight, Play } from 'lucide-react';
import { bioSummary, images } from '../../data/siteContent';

type HeroSectionProps = {
  onOpenShowreel: () => void;
  onGoWork: () => void;
  onGoContact?: () => void;
};

function HeroSection({ onOpenShowreel, onGoWork }: HeroSectionProps) {
  return (
    <section className="hero section-pad">
      <div className="hero-copy">
        <p className="eyebrow">
          <span /> {bioSummary.name} · {bioSummary.title}
        </p>
        <h1>
          Stories that <em>move.</em>
          <br />
          Trust that lasts.
        </h1>
        <p className="hero-intro">{bioSummary.heroDescription}</p>
        <div className="hero-actions">
          <button className="button button-primary" onClick={onGoWork}>
            Explore our work <ArrowUpRight size={17} />
          </button>
          <button className="play-link" onClick={onOpenShowreel}>
            <span className="play-icon">
              <Play size={13} fill="currentColor" />
            </span>
            Watch showreel <span className="duration">01:12</span>
          </button>
        </div>
        <div className="hero-meta">
          <span>Since 2015</span>
          <i />
          <span>10+ Years</span>
          <i />
          <span>{bioSummary.location}</span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-image-wrap">
          <img src={images.hero} alt="Dennis Machio, Film Producer and Creative Director" />
        </div>
        <div className="hero-stamp">
          <span>
            DENNIS
            <br />
            MACHIO
          </span>
          <small>DM / 2026</small>
        </div>
        <div className="hero-caption">
          <span>01 / 04</span>
          <span>Lead with the story</span>
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
