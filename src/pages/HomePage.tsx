import CareerTimeline from '../components/sections/CareerTimeline';
import CollaborateCTA from '../components/sections/CollaborateCTA';
import HeroSection from '../components/sections/HeroSection';
import JournalSection from '../components/sections/JournalSection';
import ServicesSection from '../components/sections/ServicesSection';
import StoryPreviewSection from '../components/sections/StoryPreviewSection';
import VenturesSection from '../components/sections/VenturesSection';
import WorkPreviewSection from '../components/sections/WorkPreviewSection';
import type { PageKey } from '../types/navigation';

type HomePageProps = {
  onNavigate: (page: PageKey) => void;
  onOpenShowreel: () => void;
};

function HomePage({ onNavigate, onOpenShowreel }: HomePageProps) {
  return (
    <>
      <HeroSection onOpenShowreel={onOpenShowreel} onGoWork={() => onNavigate('work')} />
      <StoryPreviewSection onGoStory={() => onNavigate('story')} />
      <CareerTimeline />
      <ServicesSection onGoContact={() => onNavigate('contact')} preview />
      <WorkPreviewSection onGoWork={() => onNavigate('work')} />
      <VenturesSection />
      <JournalSection onGoJournal={() => onNavigate('journal')} />
      <CollaborateCTA onGoContact={() => onNavigate('contact')} />
    </>
  );
}

export default HomePage;
