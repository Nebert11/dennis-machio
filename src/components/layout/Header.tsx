import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { PageKey } from '../../types/navigation';
import Brand from './Brand';

type HeaderProps = {
  currentPage: PageKey;
  onNavigate: (page: PageKey) => void;
};

const navLinks: Array<{ key: PageKey; label: string }> = [
  { key: 'home', label: 'Home' },
  { key: 'story', label: 'About' },
  { key: 'work', label: 'Work' },
  { key: 'journal', label: 'My Insights' },
  { key: 'contact', label: 'Contact' },
];

function Header({ currentPage, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  const navigate = (page: PageKey) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <Brand onClick={() => navigate('home')} />
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
        {navLinks.map((link) => {
          const isActive =
            currentPage === link.key || (link.key === 'work' && currentPage === 'project');
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
