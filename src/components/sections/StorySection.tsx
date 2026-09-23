import { ArrowUpRight, Award, Film, Globe } from 'lucide-react';
import { images } from '../../data/siteContent';

type StorySectionProps = {
  onGoContact: () => void;
};

function StorySection({ onGoContact }: StorySectionProps) {
  return (
    <section className="story section-pad">
      <div className="story-photo">
        <img src={images.storyDetail} alt="Dennis Machio, Founder & Lead Producer" />
        {/* <span className="photo-label">Founder · Dencast Global</span> */}
      </div>
      <div className="story-copy">
        <div className="section-kicker">
          My Story
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

        <div className="story-offerings">
          <article>
            <h3><span>01.</span> Film &amp; Documentary Production</h3>
            <p>I create documentaries, impact films, institutional videos and human-interest stories that bring real people, real work and real transformation to life. From concept and research to production and final delivery, I combine strong visual storytelling with clear, purposeful messaging.</p>
          </article>
          <article>
            <h3><span>02.</span> Brand Storytelling</h3>
            <p>I help organisations and brands communicate who they are, what they do and why they matter through brand films, creative branding campaigns, testimonials, profiles and purpose-driven visual content. The goal is not simply to create content, but to build a story people can connect with.</p>
          </article>
          <article>
            <h3><span>03.</span> Post-Production &amp; Motion Graphics</h3>
            <p>I turn raw footage into polished, compelling stories through editing, colour grading, sound design, animation and motion graphics. Every frame is shaped to strengthen the message, improve clarity and create an experience that feels intentional.</p>
          </article>
          <article>
            <h3><span>04.</span> Live Event Coverage &amp; Livestreaming</h3>
            <p>I capture conferences, corporate events, sports, launches and major occasions through professional multi-camera production and livestreaming. From the live experience to the content that follows, I ensure important moments are captured, connected and delivered with broadcast-quality standards.</p>
          </article>
          <article>
            <h3><span>05.</span> Content Strategy &amp; Media Advisory</h3>
            <p>I help individuals, organisations and brands make better decisions about what to say, how to say it and where to tell it. This includes content planning, media strategy, storytelling frameworks, campaign development and visual communication designed to reach the right audiences and create meaningful impact.</p>
          </article>
        </div>

        <button className="button button-primary story-btn" onClick={onGoContact}>
          Start a conversation <ArrowUpRight size={16} />
        </button>
      </div>
    </section>
  );
}

export default StorySection;


