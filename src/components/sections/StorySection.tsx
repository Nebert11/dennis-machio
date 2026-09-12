import { ArrowUpRight, Award, Film, Globe } from 'lucide-react';
import { bioSummary, images } from '../../data/siteContent';

type StorySectionProps = {
  onGoContact: () => void;
};

function StorySection({ onGoContact }: StorySectionProps) {
  return (
    <section className="story section-pad">
      <div className="story-photo">
        <img src={images.portrait} alt="Dennis Machio, Founder & Lead Producer" />
        <span className="photo-label">Founder · Dencast Global</span>
      </div>
      <div className="story-copy">
        <div className="section-kicker">
          The Storyteller <span>Biography</span>
        </div>
        <h2>
          Meet Dennis
          <br />
          <em>Machio.</em>
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
          &ldquo;The most powerful stories do not simply document what happened — they help people understand
          why it matters.&rdquo;
        </p>

        <p>
          I am a Nairobi-based Film Producer, Creative Director, Media Strategist, and Founder of Dencast
          Global Limited. For more than a decade I have worked with organizations across Africa to create
          documentaries, corporate films, live productions, digital campaigns, and strategic visual content
          that communicates clearly and connects deeply.
        </p>

        <p>
          My work sits at the intersection of storytelling, strategy, production, and impact — from
          international conferences and boardroom communications to wildlife conservancies, community
          projects, sports platforms, and development programs.
        </p>

        <p>
          Whether behind the camera on a conservancy shoot, directing a live multi-camera broadcast for an
          international forum, or producing a documentary for a development program, my approach stays the
          same: <strong>strategy first, craft always, story at the center.</strong>
        </p>

        <button className="button button-primary story-btn" onClick={onGoContact}>
          Start a conversation <ArrowUpRight size={16} />
        </button>
      </div>
    </section>
  );
}

export default StorySection;
