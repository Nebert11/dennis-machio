import { type ReactNode } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Contact';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative bg-ink">
      <div className="grain" />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
