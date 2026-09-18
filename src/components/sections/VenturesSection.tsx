import { ArrowUpRight, Globe } from 'lucide-react';
import { ventures } from '../../data/siteContent';

type VenturesSectionProps = {
  onGoContact?: () => void;
  onViewVenture?: (ventureId: string) => void;
};

function VenturesSection({ onGoContact, onViewVenture }: VenturesSectionProps) {
  return (
    <section className="ventures section-pad">
      <div className="section-kicker">
        Initiatives <span>Platforms &amp; Programmes</span>
      </div>
      <div className="ventures-heading">
        <h2>
          Work that <em>extends</em>
          <br />beyond production.
        </h2>
        <p>
          Creative platforms and initiatives built around storytelling, sport, culture and the next generation
          of creative voices.
        </p>
      </div>
      <div className="ventures-grid">
        {ventures.map((venture) => (
          <article key={venture.id} className="venture-card">
            {venture.image && (
              <div className="venture-image">
                <img src={venture.image} alt={venture.title} />
              </div>
            )}
            <div className="venture-top">
              <span className="venture-badge">{venture.badge}</span>
              {venture.role && <span className="venture-role">{venture.role}</span>}
            </div>
            <h3>{venture.title}</h3>
            <p className="venture-description">{venture.description}</p>
            {venture.url ? (
              <div className="venture-footer">
                <a
                  href={venture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="venture-link"
                  aria-label={`Visit ${venture.title}`}
                >
                  Visit {venture.title} <Globe size={14} /> <ArrowUpRight size={15} />
                </a>
              </div>
            ) : (venture.id === 'magharibi-michezo-awards' || venture.id === 'music-talent-development' || venture.id === 'magharibi-festival') && onViewVenture ? (
              <div className="venture-footer">
                <button
                  type="button"
                  className="venture-link"
                  onClick={() => onViewVenture(venture.id)}
                  aria-label={`Learn more about ${venture.title}`}
                >
                  Click for more <ArrowUpRight size={15} />
                </button>
              </div>
            ) : (
              onGoContact && (
                <div className="venture-footer">
                  <button
                    type="button"
                    className="venture-link"
                    onClick={onGoContact}
                    aria-label={`Learn more about ${venture.title}`}
                  >
                    Click for more <ArrowUpRight size={15} />
                  </button>
                </div>
              )
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default VenturesSection;
