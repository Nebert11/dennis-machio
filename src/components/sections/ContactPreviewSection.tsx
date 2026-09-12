import { ArrowUpRight, Mail, MapPin, Phone, Send } from 'lucide-react';
import { bioSummary } from '../../data/siteContent';

type ContactPreviewSectionProps = {
  onGoContact: () => void;
};

function ContactPreviewSection({ onGoContact }: ContactPreviewSectionProps) {
  return (
    <section className="contact-preview-section section-pad">
      <div className="section-kicker">
        Page Preview <span>03 / Contact</span>
      </div>

      <div className="contact-preview-container">
        <div className="contact-preview-copy">
          <h2>
            Have a story worth telling?
            <br />
            <em>Get in touch.</em>
          </h2>
          <p>
            Whether it&apos;s a documentary, a live broadcast event, a brand campaign, or strategic communications
            across Africa — let&apos;s talk about what you need to achieve.
          </p>

          <div className="contact-preview-cards">
            <a href={`tel:${bioSummary.phone.replace(/\s+/g, '')}`} className="preview-contact-item">
              <span className="preview-contact-icon">
                <Phone size={16} />
              </span>
              <div>
                <small>Direct Line / WhatsApp</small>
                <strong>{bioSummary.phone}</strong>
              </div>
            </a>

            <a href={`mailto:${bioSummary.email}`} className="preview-contact-item">
              <span className="preview-contact-icon">
                <Mail size={16} />
              </span>
              <div>
                <small>Email</small>
                <strong>{bioSummary.email}</strong>
              </div>
            </a>

            <div className="preview-contact-item">
              <span className="preview-contact-icon">
                <MapPin size={16} />
              </span>
              <div>
                <small>Headquarters</small>
                <strong>{bioSummary.location}</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-preview-card-cta">
          <div className="cta-icon-badge">
            <Send size={24} />
          </div>
          <h3>Start Your Project Brief</h3>
          <p>
            Select your discipline, specify timelines and scope, and submit your project requirements directly to Dennis and the production team.
          </p>
          <button className="button button-primary" onClick={onGoContact}>
            Open Full Contact &amp; Brief Form <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactPreviewSection;
