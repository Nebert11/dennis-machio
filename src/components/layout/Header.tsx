import { ArrowUpRight, LayoutGrid, Menu, Mic2, Music, PartyPopper, Trophy, Users, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { PageKey } from '../../types/navigation';
import Brand from './Brand';

type HeaderProps = {
  currentPage: PageKey;
  onNavigate: (page: PageKey) => void;
};

type NavLink = { key: PageKey; label: string; children?: { key: PageKey; label: string }[] };

const navLinks: NavLink[] = [
  { key: 'home', label: 'Home' },
  { key: 'story', label: 'About Me' },
  { key: 'my-story', label: 'My Story' },
  { key: 'work', label: 'Work' },
  { key: 'journal', label: 'My Insights' },
  {
    key: 'gallery-videos',
    label: 'Gallery',
    children: [
      { key: 'gallery-photos', label: 'Photos' },
      { key: 'gallery-videos', label: 'Videos' },
    ],
  },
  { key: 'contact', label: 'Contact' },
  { key: 'services', label: 'Initiatives' },
];

const initiativePageKeys: PageKey[] = ['awards', 'festival', 'music', 'mentorship', 'live-recordings'];

const featuredInitiatives = [
  { key: 'awards' as PageKey, label: 'Magharibi Michezo Awards', subtitle: 'Celebrating sporting excellence', icon: Trophy },
  { key: 'festival' as PageKey, label: 'Magharibi Festival', subtitle: 'Music, sport & culture festival', icon: PartyPopper },
  { key: 'music' as PageKey, label: 'Music & Talent Development', subtitle: 'Nurturing emerging artists', icon: Music },
  { key: 'mentorship' as PageKey, label: 'Mentorship', subtitle: 'Guiding the next generation', icon: Users },
];

const allInitiatives = [
  { key: 'awards' as PageKey, label: 'Magharibi Michezo Awards', icon: Trophy },
  { key: 'festival' as PageKey, label: 'Magharibi Festival', icon: PartyPopper },
  { key: 'music' as PageKey, label: 'Music & Talent Development', icon: Music },
  { key: 'mentorship' as PageKey, label: 'Mentorship', icon: Users },
  { key: 'live-recordings' as PageKey, label: 'Live Recordings', icon: Mic2 },
  { key: 'services' as PageKey, label: 'All Initiatives', icon: LayoutGrid },
];

function Header({ currentPage, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<PageKey | null>(null);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  const navigate = (page: PageKey) => {
    onNavigate(page);
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <Brand onClick={() => navigate('home')} />
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
        {navLinks.map((link) => {
          const isActive =
            currentPage === link.key ||
            (link.key === 'work' && currentPage === 'project') ||
            (link.key === 'services' && initiativePageKeys.includes(currentPage)) ||
            (link.children?.some((child) => child.key === currentPage) ?? false);

          if (link.key === 'services') {
            return (
              <div
                key={link.key}
                className={`nav-dropdown nav-mega${openDropdown === link.key ? ' is-open' : ''}`}
                onMouseEnter={() => setOpenDropdown(link.key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={isActive ? 'is-active' : ''}
                  onClick={() => setOpenDropdown(openDropdown === link.key ? null : link.key)}
                >
                  {link.label}
                </button>
                <div className="nav-mega-panel">
                  <div className="nav-mega-header">
                    <span>Initiatives</span>
                    <button type="button" className="nav-mega-viewall" onClick={() => navigate('services')}>
                      View all <ArrowUpRight size={13} />
                    </button>
                  </div>
                  <div className="nav-mega-body">
                    <div className="nav-mega-featured">
                      <span className="nav-mega-label">Featured</span>
                      <div className="nav-mega-grid">
                        {featuredInitiatives.map((item) => (
                          <button
                            key={item.key}
                            type="button"
                            className="nav-mega-item"
                            onClick={() => navigate(item.key)}
                          >
                            <span className="nav-mega-icon">
                              <item.icon size={18} />
                            </span>
                            <span className="nav-mega-item-copy">
                              <strong>{item.label}</strong>
                              <small>{item.subtitle}</small>
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="nav-mega-divider" />
                    <div className="nav-mega-all">
                      <span className="nav-mega-label">All initiatives</span>
                      <div className="nav-mega-list">
                        {allInitiatives.map((item) => (
                          <button
                            key={item.key}
                            type="button"
                            className="nav-mega-listitem"
                            onClick={() => navigate(item.key)}
                          >
                            <item.icon size={14} /> {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="nav-mega-footer">
                    <span>Not sure where to start?</span>
                    <button type="button" className="nav-mega-cta" onClick={() => navigate('contact')}>
                      Get in touch <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          }

          if (link.children) {
            return (
              <div
                key={link.key}
                className={`nav-dropdown${openDropdown === link.key ? ' is-open' : ''}`}
                onMouseEnter={() => setOpenDropdown(link.key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={isActive ? 'is-active' : ''}
                  onClick={() => setOpenDropdown(openDropdown === link.key ? null : link.key)}
                >
                  {link.label}
                </button>
                <div className="nav-dropdown-menu">
                  {link.children.map((child) => (
                    <button
                      key={child.key}
                      className={currentPage === child.key ? 'is-active' : ''}
                      onClick={() => navigate(child.key)}
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <button key={link.key} className={isActive ? 'is-active' : ''} onClick={() => navigate(link.key)}>
              {link.label}
            </button>
          );
        })}
      </nav>

      <button className="header-cta" onClick={() => navigate('contact')}>
        Let&apos;s Talk <ArrowUpRight size={16} />
      </button>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}

export default Header;
