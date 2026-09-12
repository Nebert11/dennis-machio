import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import type { PageKey } from '../../types/navigation';
import Brand from './Brand';

type HeaderProps = {
  currentPage: PageKey;
  onNavigate: (page: PageKey) => void;
};

const navLinks: Array<{ key: PageKey; label: string }> = [
  { key: 'home', label: 'Home' },
  { key: 'story', label: 'My Story' },
  { key: 'work', label: 'Selected Work' },
  { key: 'contact', label: 'Contact' },
];

function Header({ currentPage, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (page: PageKey) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <Brand onClick={() => navigate('home')} />
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
        {navLinks.map((link) => (
          <button
            key={link.key}
            className={currentPage === link.key ? 'is-active' : ''}
            onClick={() => navigate(link.key)}
          >
            {link.label}
          </button>
        ))}
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
