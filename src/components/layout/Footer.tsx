// import { bioSummary } from '../../data/siteContent';
import { Facebook, Linkedin } from 'lucide-react';
// import Brand from './Brand';

function XIcon(props: { size?: number }) {
  return (
    <svg width={props.size ?? 18} height={props.size ?? 18} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialLinks = [
  { label: 'Facebook', href: 'https://web.facebook.com/dennis.machio', icon: Facebook },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dennis-machio-21536b1a/', icon: Linkedin },
  { label: 'X', href: 'https://x.com/dmachio', icon: XIcon },
];

function Footer() {
  return (
    <footer className="site-footer section-pad">
      <div className="footer-brand-column">
        {/* <Brand onClick={() => onNavigate('home')} /> */}
        <span className="footer-nav">Dennis Machio &copy; 2026</span>
      </div>

      <nav className="footer-social" aria-label="Social media">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <Icon size={18} />
          </a>
        ))}
      </nav>

      <div className="footer-profile">
        {/* <strong>Film Producer · Creative Director · Media Strategist</strong> */}
        {/* <span>{bioSummary.location}</span> */}
        <a
          className="footer-dencast-link"
          href="https://www.dencastglobal.co.ke/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit <img className="footer-dencast-logo" src="/logos/dencast-logo.png" alt="Dencast Global" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

