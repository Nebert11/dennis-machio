import { useCallback, useEffect, useMemo, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ShowreelModal from '../sections/ShowreelModal';
import HomePage from '../../pages/HomePage';
import StoryPage from '../../pages/StoryPage';
import WorkPage from '../../pages/WorkPage';
import ProjectPage from '../../pages/ProjectPage';
import ContactPage from '../../pages/ContactPage';
import JournalPage from '../../pages/JournalPage';
import { routeToPath, pathToRoute, type PageKey, type Route } from '../../types/navigation';
import { projects } from '../../data/siteContent';

export default function Layout() {
  const [route, setRouteState] = useState<Route>(() => pathToRoute(window.location.pathname));
  const [showreelOpen, setShowreelOpen] = useState(false);

  const navigateToRoute = useCallback((next: Route) => {
    setRouteState((previous) => {
      if (previous.page !== next.page || routeToPath(previous) !== routeToPath(next)) {
        window.history.pushState(next, '', routeToPath(next));
      }
      return next;
    });
  }, []);

  const setCurrentPage = useCallback(
    (page: PageKey) => navigateToRoute(page === 'project' ? { page: 'home' } : { page }),
    [navigateToRoute],
  );

  const goToProject = useCallback(
    (projectSlug: string) => navigateToRoute({ page: 'project', projectSlug }),
    [navigateToRoute],
  );

  useEffect(() => {
    const onPopState = () => setRouteState(pathToRoute(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const activePage = useMemo(() => {
    switch (route.page) {
      case 'story':
        return <StoryPage onGoContact={() => setCurrentPage('contact')} />;
      case 'work':
        return <WorkPage onGoContact={() => setCurrentPage('contact')} onViewProject={goToProject} />;
      case 'journal':
        return <JournalPage onGoContact={() => setCurrentPage('contact')} />;
      case 'project': {
        const project = projects.find((item) => item.slug === route.projectSlug);
        return (
          <ProjectPage
            project={project}
            onBackToWork={() => setCurrentPage('work')}
            onGoContact={() => setCurrentPage('contact')}
          />
        );
      }
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
  }, [route, setCurrentPage, goToProject]);

  const currentPage = route.page;

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

