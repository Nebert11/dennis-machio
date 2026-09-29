import { ArrowUpRight, Music, PartyPopper, Trophy, Users } from 'lucide-react';
import { ventures } from '../../data/siteContent';

const initiativeCards = [
  { id: 'magharibi-michezo-awards', icon: Trophy },
  { id: 'magharibi-festival', icon: PartyPopper },
  { id: 'music-talent-development', icon: Music },
  { id: 'mentorship', icon: Users },
];

type InitiativesOverviewSectionProps = {
  onViewInitiative: (initiativeId: string) => void;
};

function InitiativesOverviewSection({ onViewInitiative }: InitiativesOverviewSectionProps) {
  return (
    <section className="initiatives-preview section-pad">
      <div className="section-kicker">
        Initiatives <span>What I Do</span>
      </div>
      <div className="services-intro">
        <h2>
          Creative platforms.
          <br />
          <em>Built to matter.</em>
        </h2>
        <p>
          Ongoing initiatives spanning sport, culture, music and mentorship, each with its own story, community
          and impact across Western Kenya.
        </p>
      </div>
      <div className="services-list">
        {initiativeCards.map(({ id, icon: Icon }) => {
          const venture = ventures.find((item) => item.id === id);
          if (!venture) return null;
          return (
            <article className="service-detail-card" key={id}>
              <div className="service-detail-header">
                <div className="service-icon-wrap">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="service-subtitle">{venture.badge}</p>
                  <h3>{venture.title}</h3>
                </div>
              </div>
              <p className="service-desc">{venture.description}</p>
              <button type="button" className="text-link" onClick={() => onViewInitiative(id)}>
                Learn more <ArrowUpRight size={16} />
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default InitiativesOverviewSection;
