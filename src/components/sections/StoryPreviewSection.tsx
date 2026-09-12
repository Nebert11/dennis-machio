import { ArrowUpRight, Award, Film, Globe } from 'lucide-react';
import { bioSummary, images } from '../../data/siteContent';

type StoryPreviewSectionProps = {
  onGoStory: () => void;
};

function StoryPreviewSection({ onGoStory }: StoryPreviewSectionProps) {
  return (
    <section className="story-preview-section section-pad">
      <div className="section-kicker">
        Page Preview <span>01 / My Story</span>
      </div>

      <div className="story-preview-grid">
        <div className="story-preview-photo">
          <img src={images.portrait} alt="Dennis Machio" />
          <div className="story-preview-badge">
            <span>Dennis Machio</span>
            <small>Founder · Dencast Global</small>
          </div>
        </div>

        <div className="story-preview-copy">
          <h2>
            More than content.
            <br />
            <em>Stories that create legacy.</em>
          </h2>

          <div className="story-pillars">
            <span className="pillar-tag">
              <Film size={14} /> Film Producer
            </span>
            <span className="pillar-tag">
              <Award size={14} /> Creative Director
            </span>
            <span className="pillar-tag">
              <Globe size={14} /> Media Strategist
            </span>
          </div>

          <p className="lead">
            &ldquo;{bioSummary.philosophy}&rdquo;
          </p>

          <p>
            For more than a decade, I have worked across Africa to create documentaries, corporate films,
            live multi-camera productions, and strategic visual content that connects deeply with audiences.
          </p>

          <div className="preview-action-row">
            <button className="button button-primary" onClick={onGoStory}>
              Read My Full Story &amp; Journey <ArrowUpRight size={16} />
            </button>
            <span className="preview-hint">Includes 10-year career timeline &amp; endorsements</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoryPreviewSection;
