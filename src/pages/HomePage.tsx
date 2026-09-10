import { Hero } from '@/components/Hero';
import { Introduction } from '@/components/Introduction';
import { SelectedWork } from '@/components/SelectedWork';
import { Gallery } from '@/components/Gallery';
import { VisualStorytelling } from '@/components/VisualStorytelling';
import { Services } from '@/components/Services';
import { Companies } from '@/components/Companies';
import { Contact } from '@/components/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <SelectedWork />
      <Gallery />
      <VisualStorytelling />
      <Services />
      <Companies />
      <Contact />
    </>
  );
}
