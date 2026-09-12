import ContactPreviewSection from '../components/sections/ContactPreviewSection';
import HeroSection from '../components/sections/HeroSection';
import StatementSection from '../components/sections/StatementSection';
import StatsBar from '../components/sections/StatsBar';
import StoryPreviewSection from '../components/sections/StoryPreviewSection';
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
      <StatsBar />
      <StatementSection onGoStory={() => onNavigate('story')} />
      <StoryPreviewSection onGoStory={() => onNavigate('story')} />
      <WorkPreviewSection onGoWork={() => onNavigate('work')} />
      <ContactPreviewSection onGoContact={() => onNavigate('contact')} />
    </>
  );
}

export default HomePage;
