import { ArrowUpRight, Award, Film, Globe } from 'lucide-react';
import { images } from '../../data/siteContent';

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
          My Story <span>Biography</span>
        </div>
        <h2>
          From behind the camera
          <br />
          <em>to building stories.</em>
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
           &ldquo;The most powerful stories do more than document what happened — they reveal why it matters, connect
           people to purpose, and leave something lasting behind.&rdquo;
        </p>

        <p>
          What began with a camera and a passion for storytelling has grown into years of creative work,
          meaningful partnerships and Dencast Global: shaped by the people, places and stories encountered
          along the way.
        </p>

        <p>
          For more than 15 years, I have worked across Africa creating documentaries, corporate films, live
          multi-camera productions and strategic visual content that connects people, strengthens brands and
          brings ideas to life.
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
