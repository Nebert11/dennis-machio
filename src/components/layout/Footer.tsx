// import { bioSummary } from '../../data/siteContent';
import type { PageKey } from '../../types/navigation';
// import Brand from './Brand';

type FooterProps = {
  onNavigate: (page: PageKey) => void;
};

function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="site-footer section-pad">
      <div className="footer-brand-column">
        {/* <Brand onClick={() => onNavigate('home')} /> */}
        <span className="footer-nav">Dennis Machio &copy; 2026</span>
      </div>

      <nav className="footer-nav" aria-label="Footer navigation">
        <button onClick={() => onNavigate('home')}>Home</button>
        <button onClick={() => onNavigate('story')}>About</button>
        <button onClick={() => onNavigate('work')}>Work</button>
        <button onClick={() => onNavigate('journal')}>Insights</button>
        <button onClick={() => onNavigate('gallery')}>Gallery</button>
        <button onClick={() => onNavigate('contact')}>Contact</button>
      </nav>

      <div className="footer-profile">
        <strong>Film Producer · Creative Director · Media Strategist</strong>
        {/* <span>{bioSummary.location}</span> */}
      </div>
    </footer>
  );
}

export default Footer;

