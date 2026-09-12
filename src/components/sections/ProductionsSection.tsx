import { ArrowUpRight, Clapperboard, Radio, Tv } from 'lucide-react';
import { productionEvents } from '../../data/siteContent';

type ProductionsSectionProps = {
  onGoContact: () => void;
};

const getEventIcon = (id: string) => {
  switch (id) {
    case 'amakovewala':
      return <Tv size={24} />;
    case 'eu-kenya-forum':
      return <Radio size={24} />;
    default:
      return <Clapperboard size={24} />;
  }
};

function ProductionsSection({ onGoContact }: ProductionsSectionProps) {
  return (
    <section className="productions section-pad">
      <div className="section-kicker">
        Live &amp; Broadcast <span>Broadcast</span>
      </div>
      <div className="productions-intro">
        <h2>
          Productions &amp; <em>events.</em>
        </h2>
        <p>
          From high-profile talk shows to multinational economic forums and live shareholder broadcasts, we
          deliver uncompromising technical precision and broadcast-grade presentation.
        </p>
      </div>

      <div className="productions-grid">
        {productionEvents.map((item) => (
          <article key={item.id} className="production-card">
            {item.image && (
              <div className="production-image">
                <img src={item.image} alt={item.title} />
              </div>
            )}
            <div className="production-header">
              <span className="production-icon">{getEventIcon(item.id)}</span>
              {item.year && <span className="production-year">{item.year}</span>}
            </div>
            <p className="project-type">{item.type}</p>
            <h3>{item.title}</h3>
            <p className="production-role">Role: {item.role}</p>
            <p className="production-desc">{item.description}</p>
            <button className="text-link" onClick={onGoContact}>
              Discuss similar project <ArrowUpRight size={15} />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductionsSection;
