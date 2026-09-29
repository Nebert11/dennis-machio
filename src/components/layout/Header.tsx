import { ArrowUpRight, Menu, X } from 'lucide-react';
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
  { key: 'services', label: 'Initiatives' },
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
            (link.children?.some((child) => child.key === currentPage) ?? false);

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
