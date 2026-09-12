import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { services } from '../../data/siteContent';

type ServicesSectionProps = {
  onGoContact: () => void;
};

function ServicesSection({ onGoContact }: ServicesSectionProps) {
  return (
    <section className="services section-pad">
      <div className="section-kicker">
        Capabilities <span>05 Disciplines</span>
      </div>
      <div className="services-intro">
        <h2>
          Five disciplines.
          <br />
          <em>One standard.</em>
        </h2>
        <p>
          Turning complex ideas into visual experiences that people remember and act on. From concept to
          delivery, we ensure strategic alignment and cinematic execution.
        </p>
      </div>
      <div className="services-list">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <article className="service-detail-card" key={service.id}>
              <div className="service-detail-header">
                <span className="service-index">0{index + 1}</span>
                <div className="service-icon-wrap">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="service-subtitle">{service.subtitle}</p>
                  <h3>{service.title}</h3>
                </div>
              </div>

              <p className="service-desc">{service.text}</p>

              <div className="service-deliverables">
                <strong>Key Deliverables:</strong>
                <ul>
                  {service.deliverables.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={13} className="bullet-icon" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className="service-action-btn"
                onClick={onGoContact}
                aria-label={`Inquire about ${service.title}`}
              >
                Inquire for this discipline <ArrowUpRight size={16} />
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ServicesSection;
