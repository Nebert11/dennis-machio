import { ArrowUpRight, Globe, Star } from 'lucide-react';
import { ventures } from '../../data/siteContent';

function VenturesSection() {
  return (
    <section className="ventures section-pad">
      <div className="section-kicker">
        What I&apos;ve built <span>Ventures</span>
      </div>
      <div className="ventures-heading">
        <h2>
          Platforms for <em>storytelling</em>
          <br />&amp; impact.
        </h2>
        <p>
          Beyond independent directing, I have established dedicated production and media entities to serve
          brands, institutions, and communities across the continent.
        </p>
      </div>
      <div className="ventures-grid">
        {ventures.map((venture) => (
          <article key={venture.id} className="venture-card">
            <div className="venture-top">
              <span className="venture-badge">{venture.badge}</span>
              <span className="venture-role">{venture.role}</span>
            </div>
            <h3>{venture.title}</h3>
            <p className="venture-description">{venture.description}</p>
            <div className="venture-footer">
              <span className="venture-stats">
                <Star size={13} fill="#d70c2f" color="#d70c2f" /> {venture.stats}
              </span>
              <a
                href={venture.url}
                target="_blank"
                rel="noopener noreferrer"
                className="venture-link"
                aria-label={`Visit ${venture.title}`}
              >
                Visit platform <Globe size={14} /> <ArrowUpRight size={15} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default VenturesSection;
