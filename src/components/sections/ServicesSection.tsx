import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { services } from '../../data/siteContent';

type ServicesSectionProps = {
  preview?: boolean;
};

function ServicesSection({ preview = false }: ServicesSectionProps) {
  const visibleServices = services;

  if (preview) {
    return (
      <section className="services services-home section-pad">
        <div className="services-home-heading">
          <div className="section-kicker">
            {/* <span>Why Us</span> */}
          </div>
          <h2>
            Where Creativity <em>Meets</em>
            <br />
            <em>Excellence</em>
          </h2>
          <p>
            The reasons why Africa&apos;s leading brands, global organisations, and visionary creators choose Dencast
            Global for their most important stories.
          </p>
        </div>

        <div className="services-home-grid">
          {visibleServices.map((service) => {
            const Icon = service.icon;
            return (
              <article className="services-home-card" key={service.id}>
                <div className="services-home-icon">
                  <Icon size={18} strokeWidth={1.8} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <section className="services section-pad">
      <div className="section-kicker">
        What I Do <span>{preview ? 'Two Featured Disciplines' : ''}</span>
      </div>
      <div className="services-intro">
        <h2>
          Creative work.
          <br />
          <em>Built to matter.</em>
        </h2>
        <p>
          Storytelling, creativity and strategy brought together to connect people, strengthen brands and bring
          ideas to life.
        </p>
      </div>
      <a className="text-link services-portfolio-link" href="https://dencastglobal.co.ke/portfolio" target="_blank" rel="noopener noreferrer">
        View Dencast Global Portfolio <ArrowUpRight size={16} />
      </a>
      <div className="services-list">
        {visibleServices.map((service, index) => {
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

            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ServicesSection;
