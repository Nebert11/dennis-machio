import { useMemo, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ShowreelModal from '../sections/ShowreelModal';
import HomePage from '../../pages/HomePage';
import StoryPage from '../../pages/StoryPage';
import WorkPage from '../../pages/WorkPage';
import ContactPage from '../../pages/ContactPage';
import type { PageKey } from '../../types/navigation';

export default function Layout() {
  const [currentPage, setCurrentPage] = useState<PageKey>('home');
  const [showreelOpen, setShowreelOpen] = useState(false);

  const activePage = useMemo(() => {
    switch (currentPage) {
      case 'story':
        return <StoryPage onGoContact={() => setCurrentPage('contact')} />;
      case 'work':
        return <WorkPage onGoContact={() => setCurrentPage('contact')} />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <HomePage
            onNavigate={setCurrentPage}
            onOpenShowreel={() => setShowreelOpen(true)}
          />
        );
    }
  }, [currentPage]);

  return (
    <div className="site-shell">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main id="top">{activePage}</main>
      <Footer onNavigate={setCurrentPage} />

      {showreelOpen && (
        <ShowreelModal
          onClose={() => setShowreelOpen(false)}
          onGoContact={() => setCurrentPage('contact')}
        />
      )}
    </div>
  );
}

