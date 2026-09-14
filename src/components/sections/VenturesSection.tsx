import { ArrowUpRight, Globe } from 'lucide-react';
import { ventures } from '../../data/siteContent';

function VenturesSection() {
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
            <div className="venture-top">
              <span className="venture-badge">{venture.badge}</span>
              {venture.role && <span className="venture-role">{venture.role}</span>}
            </div>
            <h3>{venture.title}</h3>
            <p className="venture-description">{venture.description}</p>
            {venture.url && (
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
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default VenturesSection;
