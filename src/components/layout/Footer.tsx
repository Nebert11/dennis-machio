import { ArrowUpRight } from 'lucide-react';
import { bioSummary } from '../../data/siteContent';
import type { PageKey } from '../../types/navigation';
import Brand from './Brand';

type FooterProps = {
  onNavigate: (page: PageKey) => void;
};

function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="site-footer section-pad">
      <div className="footer-brand-column">
        <Brand onClick={() => onNavigate('home')} />
        <p className="footer-bio-tagline">{bioSummary.heroTagline}</p>
        <p className="footer-subtext">
          Film Producer · Creative Director · Media Strategist
          <br />
          {bioSummary.location}
        </p>
      </div>

      <div className="footer-nav-groups">
        <div className="footer-col">
          <span className="footer-col-title">Navigation</span>
          <button onClick={() => onNavigate('home')}>Home</button>
          <button onClick={() => onNavigate('story')}>My Story</button>
          <button onClick={() => onNavigate('work')}>Selected Work</button>
          <button onClick={() => onNavigate('contact')}>Contact</button>
        </div>

        <div className="footer-col">
          <span className="footer-col-title">Platforms &amp; Ventures</span>
          <a href="https://www.dencastglobal.co.ke/" target="_blank" rel="noopener noreferrer">
            Dencast Global <ArrowUpRight size={12} />
          </a>
          <a href="https://www.michezoafrika.com/" target="_blank" rel="noopener noreferrer">
            Michezo Afrika <ArrowUpRight size={12} />
          </a>
        </div>

        <div className="footer-col">
          <span className="footer-col-title">Direct Inquiries</span>
          <a href={`mailto:${bioSummary.email}`}>{bioSummary.email}</a>
          <a href={`tel:${bioSummary.phone.replace(/\s+/g, '')}`}>{bioSummary.phone}</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="copyright">© 2026 Dennis Machio · Dencast Global Limited. All Rights Reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
