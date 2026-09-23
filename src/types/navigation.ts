export type PageKey = 'home' | 'story' | 'work' | 'services' | 'journal' | 'gallery' | 'project' | 'contact' | 'awards' | 'music' | 'festival' | 'mentorship' | 'live-recordings';

export type Route =
  | { page: 'home' | 'story' | 'work' | 'services' | 'journal' | 'gallery' | 'contact' | 'awards' | 'music' | 'festival' | 'mentorship' | 'live-recordings' }
  | { page: 'project'; projectSlug: string }
  | { page: 'article'; articleId: string };

const pathByPage: Record<'home' | 'story' | 'work' | 'services' | 'journal' | 'gallery' | 'contact' | 'awards' | 'music' | 'festival' | 'mentorship' | 'live-recordings', string> = {
  home: '/',
  story: '/story',
  work: '/work',
  services: '/what-i-do',
  journal: '/insights',
  gallery: '/gallery',
  contact: '/contact',
  awards: '/initiatives/magharibi-michezo-awards',
  music: '/initiatives/music-and-talent-development',
  festival: '/initiatives/magharibi-festival',
  mentorship: '/initiatives/mentorship',
  'live-recordings': '/initiatives/live-recordings',
};

export function routeToPath(route: Route): string {
  if (route.page === 'project') return `/work/${route.projectSlug}`;
  if (route.page === 'article') return `/insights/${route.articleId}`;
  return pathByPage[route.page];
}

export function pathToRoute(pathname: string): Route {
  const projectMatch = pathname.match(/^\/work\/([^/]+)\/?$/);
  if (projectMatch) return { page: 'project', projectSlug: projectMatch[1] };
  const articleMatch = pathname.match(/^\/insights\/([^/]+)\/?$/);
  if (articleMatch) return { page: 'article', articleId: articleMatch[1] };

  switch (pathname) {
    case '/story':
      return { page: 'story' };
    case '/work':
      return { page: 'work' };
    case '/what-i-do':
      return { page: 'services' };
    case '/insights':
      return { page: 'journal' };
    case '/gallery':
      return { page: 'gallery' };
    case '/contact':
      return { page: 'contact' };
    case '/initiatives/magharibi-michezo-awards':
      return { page: 'awards' };
    case '/initiatives/music-and-talent-development':
      return { page: 'music' };
    case '/initiatives/magharibi-festival':
      return { page: 'festival' };
    case '/initiatives/mentorship':
      return { page: 'mentorship' };
    case '/initiatives/live-recordings':
      return { page: 'live-recordings' };
    default:
      return { page: 'home' };
  }
}
