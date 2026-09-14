export type PageKey = 'home' | 'story' | 'work' | 'journal' | 'project' | 'contact';

export type Route =
  | { page: 'home' | 'story' | 'work' | 'journal' | 'contact' }
  | { page: 'project'; projectSlug: string };

const pathByPage: Record<'home' | 'story' | 'work' | 'journal' | 'contact', string> = {
  home: '/',
  story: '/story',
  work: '/work',
  journal: '/insights',
  contact: '/contact',
};

export function routeToPath(route: Route): string {
  if (route.page === 'project') return `/work/${route.projectSlug}`;
  return pathByPage[route.page];
}

export function pathToRoute(pathname: string): Route {
  const projectMatch = pathname.match(/^\/work\/([^/]+)\/?$/);
  if (projectMatch) return { page: 'project', projectSlug: projectMatch[1] };

  switch (pathname) {
    case '/story':
      return { page: 'story' };
    case '/work':
      return { page: 'work' };
    case '/insights':
      return { page: 'journal' };
    case '/contact':
      return { page: 'contact' };
    default:
      return { page: 'home' };
  }
}
