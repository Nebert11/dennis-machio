import { ArrowUpRight, Clapperboard, Radio, Tv } from 'lucide-react';
import { productionEvents } from '../../data/siteContent';

type ProductionsSectionProps = {
  onGoContact: () => void;
  onViewProject: (slug: string) => void;
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

function ProductionsSection({ onViewProject }: ProductionsSectionProps) {
  return (
    <section className="productions section-pad">
      <div className="section-kicker">
        Productions &amp; Events
      </div>
      <div className="productions-intro">
        <h2>
          Productions &amp; <em>events.</em>
        </h2>
        <p>
          The most powerful stories do not simply document what happened — they help people understand why it
          matters. That is the standard I bring to every production, every organization and every story I&apos;m part of.
          <br /><br />
          My work sits at the intersection of storytelling, strategy, production and impact — from international
          conferences and boardroom communications to wildlife conservancies, community projects, sports platforms
          and development programs. Whether behind the camera on a conservancy shoot, directing a live multi-camera
          broadcast for an international forum, or producing a documentary for a development program, my approach
          stays the same: strategy first, craft always, story at the center.
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
            {item.id === 'amakovewala' ? (
              <button className="text-link" onClick={() => onViewProject('the-amakovewala-show')}>
                View project <ArrowUpRight size={15} />
              </button>
            ) : (
              <a className="text-link" href="https://www.dencastglobal.co.ke/" target="_blank" rel="noopener noreferrer">
                Visit Dencast Global <ArrowUpRight size={15} />
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductionsSection;
