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
import ArticlePage from '../../pages/ArticlePage';
import ServicesPage from '../../pages/ServicesPage';
import GalleryPage from '../../pages/GalleryPage';
import AwardsPage from '../../pages/AwardsPage';
import MusicPage from '../../pages/MusicPage';
import FestivalPage from '../../pages/FestivalPage';
import MentorshipPage from '../../pages/MentorshipPage';
import LiveRecordingsPage from '../../pages/LiveRecordingsPage';
import { routeToPath, pathToRoute, type PageKey, type Route } from '../../types/navigation';
import { journalArticles, projects } from '../../data/siteContent';

export default function Layout() {
  const [route, setRouteState] = useState<Route>(() => pathToRoute(window.location.pathname));
  const [showreelOpen, setShowreelOpen] = useState(false);

  const navigateToRoute = useCallback((next: Route) => {
    setRouteState((previous) => {
      if (previous.page !== next.page || routeToPath(previous) !== routeToPath(next)) {
        window.history.pushState(next, '', routeToPath(next));
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
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

  const goToArticle = useCallback(
    (articleId: string) => navigateToRoute({ page: 'article', articleId }),
    [navigateToRoute],
  );

  const goToVenture = useCallback(
    (ventureId: string) => {
      if (ventureId === 'magharibi-michezo-awards') {
        navigateToRoute({ page: 'awards' });
      } else if (ventureId === 'music-talent-development') {
        navigateToRoute({ page: 'music' });
      } else if (ventureId === 'magharibi-festival') {
        navigateToRoute({ page: 'festival' });
      } else if (ventureId === 'mentorship') {
        navigateToRoute({ page: 'mentorship' });
      } else if (ventureId === 'live-recordings') {
        navigateToRoute({ page: 'live-recordings' });
      }
    },
    [navigateToRoute],
  );

  useEffect(() => {
    const onPopState = () => {
      setRouteState(pathToRoute(window.location.pathname));
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const activePage = useMemo(() => {
    switch (route.page) {
      case 'story':
        return <StoryPage onGoContact={() => setCurrentPage('contact')} />;
      case 'work':
        return (
          <WorkPage
            onGoContact={() => setCurrentPage('contact')}
            onViewProject={goToProject}
          />
        );
      case 'services':
        return <ServicesPage onGoContact={() => setCurrentPage('contact')} onViewVenture={goToVenture} />;
      case 'journal':
        return <JournalPage onGoContact={() => setCurrentPage('contact')} onGoArticle={goToArticle} />;
      case 'gallery':
        return <GalleryPage onGoContact={() => setCurrentPage('contact')} />;
      case 'article': {
        const article = journalArticles.find((item) => item.id === route.articleId);
        return (
          <ArticlePage
            article={article}
            onBackToInsights={() => setCurrentPage('journal')}
            onGoContact={() => setCurrentPage('contact')}
          />
        );
      }
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
      case 'awards':
        return <AwardsPage onGoContact={() => setCurrentPage('contact')} />;
      case 'music':
        return <MusicPage onGoContact={() => setCurrentPage('contact')} />;
      case 'festival':
        return <FestivalPage onGoContact={() => setCurrentPage('contact')} />;
      case 'mentorship':
        return <MentorshipPage onGoContact={() => setCurrentPage('contact')} />;
      case 'live-recordings':
        return <LiveRecordingsPage onGoContact={() => setCurrentPage('contact')} />;
      default:
        return (
          <HomePage
            onNavigate={setCurrentPage}
            onGoArticle={goToArticle}
            onViewVenture={goToVenture}
          />
        );
    }
  }, [route, setCurrentPage, goToProject, goToArticle, goToVenture]);

  const currentPage = route.page === 'article' ? 'journal' : route.page;

  return (
    <div className="site-shell">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main id="top">{activePage}</main>
      <Footer />

      {showreelOpen && (
        <ShowreelModal
          onClose={() => setShowreelOpen(false)}
          onGoContact={() => setCurrentPage('contact')}
        />
      )}
    </div>
  );
}

