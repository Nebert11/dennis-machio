import { ArrowUpRight, Award, Film, Globe } from 'lucide-react';
import { bioSummary, images } from '../../data/siteContent';

type StoryPreviewSectionProps = {
  onGoStory?: () => void;
};

function StoryPreviewSection({ onGoStory }: StoryPreviewSectionProps) {
  return (
    <section className={`story-preview-section section-pad${onGoStory ? ' story-preview-home' : ''}`}>
      <div className="section-kicker">
        About Me
      </div>

      <div className="story-preview-grid">
        {!onGoStory && (
          <a
            className="story-preview-photo"
            href="https://www.dencastglobal.co.ke/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View the Dencast Global portfolio"
          >
            <img src={images.portrait} alt="Dennis Machio" />
            <div className="story-preview-badge">
              <span>Dennis Machio</span>
              <small>Founder · Dencast Global</small>
            </div>
          </a>
        )}

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
            The story of how a decade in film, broadcast and communications led to building Dencast Global, 
            and why I believe storytelling can influence decisions and leave a legacy.
          </p>

          <p>
            I am a Nairobi-based Film Producer, Creative Director, Media Strategist and Founder of Dencast Global Limited. 
            For more than a decade I have worked with organizations across Africa to create documentaries, corporate films, 
            live productions, digital campaigns and strategic visual content that communicates clearly and connects deeply.
          </p>

          {onGoStory && (
            <div className="preview-action-row">
              <button className="button button-primary" onClick={onGoStory}>
                Read My Full Story &amp; Journey <ArrowUpRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default StoryPreviewSection;
