import { ArrowUpRight } from 'lucide-react';
import type { PageKey } from '../../types/navigation';

type CollaborateCTAProps = {
  onGoContact: () => void;
  title?: string;
  subtitle?: string;
};

function CollaborateCTA({
  onGoContact,
  title = "Ready to shape your story?",
  subtitle = "Whether you're launching a campaign, documenting impact, producing a conference, or building a brand — let's turn your message into a powerful visual experience.",
}: CollaborateCTAProps) {
  return (
    <section className="collaborate-cta section-pad">
      <div className="collaborate-inner">
        <div className="section-kicker">
          Have a project in mind? <span>Collaboration</span>
        </div>
        <h2>
          {title}
        </h2>
        <p className="collaborate-subtitle">{subtitle}</p>
        <div className="collaborate-actions">
          <button className="button button-primary" onClick={onGoContact}>
            Let&apos;s Talk <ArrowUpRight size={17} />
          </button>
          <a className="contact-email-badge" href="mailto:hello@dennismachio.com">
            hello@dennismachio.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default CollaborateCTA;
