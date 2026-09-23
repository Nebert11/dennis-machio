import { ArrowUpRight } from 'lucide-react';
import { bioSummary } from '../../data/siteContent';

type CollaborateCTAProps = {
  onGoContact: () => void;
  title?: string;
  subtitle?: string;
};

function CollaborateCTA({
  onGoContact,
  title = 'Let’s Create Something That Matters',
  subtitle = 'Whether you are launching a campaign, documenting impact, producing an event, building a brand or telling an important story, I can help transform your vision into a powerful visual experience.',
}: CollaborateCTAProps) {
  return (
    <section className="collaborate-cta section-pad">
      <div className="collaborate-inner">
        <div className="section-kicker">
          Talk to Me
        </div>
        <h2>
          {title}
        </h2>
        <p className="collaborate-subtitle">{subtitle}</p>
        <div className="collaborate-actions">
          <button className="button button-primary" onClick={onGoContact}>
            Let&apos;s Talk <ArrowUpRight size={17} />
          </button>
        </div>
        <div className="contact-signature">
          <strong>Dennis Machio</strong>
          <span>Film Producer &bull; Creative Director &bull; Media Strategist</span>
          <span>Nairobi, Kenya | Working Across Africa</span>
          <div className="contact-signature-links">
            <a href={`mailto:${bioSummary.email}`}>{bioSummary.email}</a>
            <a href={`tel:${bioSummary.phone.replace(/\s+/g, '')}`}>{bioSummary.phone}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollaborateCTA;
