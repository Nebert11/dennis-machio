export type PageKey = 'home' | 'story' | 'work' | 'contact';

const pathByPage: Record<PageKey, string> = {
  home: '/',
  story: '/story',
  work: '/work',
  contact: '/contact',
};

const pageByPath: Record<string, PageKey> = {
  '/': 'home',
  '/story': 'story',
  '/work': 'work',
  '/contact': 'contact',
};

export function pageToPath(page: PageKey): string {
  return pathByPage[page];
}

export function pathToPage(pathname: string): PageKey {
  return pageByPath[pathname] ?? 'home';
}
