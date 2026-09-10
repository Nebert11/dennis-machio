import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Work', path: '/work' },
  { label: 'Story', path: '/story' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          transparent
            ? 'bg-transparent py-6'
            : 'bg-ink/85 backdrop-blur-md py-4 border-b border-white/5'
        }`}
      >
        <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-10">
          <Link 
            to="/"
            className="font-display text-base md:text-lg tracking-tight text-white"
          >
            Dennis Machio
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className="group relative text-[11px] uppercase tracking-[0.2em] text-white/90 transition-colors hover:text-bone"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-bone transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-[11px] uppercase tracking-[0.2em] text-white/90 transition-colors hover:text-bone"
            >
              Let's Talk <span className="text-accent">→</span>
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-bone/90 md:hidden"
            aria-label="Open menu"
          >
            <Menu size={18} /> Menu
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[70] bg-ink md:hidden">
          <div className="flex items-center justify-between px-6 py-6">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="font-display text-lg text-bone"
            >
              Dennis Machio
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-bone"
            >
              <X size={22} />
            </button>
          </div>
          <div className="flex h-[calc(100%-80px)] flex-col justify-center gap-2 px-6">
            {links.map((l, i) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setMenuOpen(false)}
                className="font-display text-5xl text-bone/90 transition-colors hover:text-accent"
                style={{
                  animation: `fadeUp 0.6s ${i * 0.08}s both cubic-bezier(0.16,1,0.3,1)`,
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-8 text-sm uppercase tracking-[0.2em] text-accent"
            >
              Let's Talk →
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
