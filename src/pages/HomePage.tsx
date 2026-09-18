// import CareerTimeline from '../components/sections/CareerTimeline';
import CollaborateCTA from '../components/sections/CollaborateCTA';
import HeroSection from '../components/sections/HeroSection';
import JournalSection from '../components/sections/JournalSection';
import ServicesSection from '../components/sections/ServicesSection';
import StoryPreviewSection from '../components/sections/StoryPreviewSection';
import VenturesSection from '../components/sections/VenturesSection';
import type { PageKey } from '../types/navigation';

type HomePageProps = {
  onNavigate: (page: PageKey) => void;
  onGoArticle: (articleId: string) => void;
  onViewVenture: (ventureId: string) => void;
};

function HomePage({ onNavigate, onGoArticle, onViewVenture }: HomePageProps) {
  return (
    <>
      <HeroSection onGoWhatIDo={() => onNavigate('services')} />
      <StoryPreviewSection onGoStory={() => onNavigate('story')} />
      {/* <CareerTimeline /> */}
      <ServicesSection onGoContact={() => onNavigate('contact')} preview />
      <section className="machio-tv-section section-pad">
        <div className="machio-tv-header">
          <span className="machio-tv-dot" />
          <span className="machio-tv-brand">Machio TV</span>
        </div>

        <div className="machio-tv-shell">
          <div className="machio-tv-bezel">
            <div className="machio-tv-screen">
              <iframe
                src="https://www.youtube.com/embed/5foVufL9pi8?autoplay=1&mute=1&playsinline=1&loop=1&playlist=5foVufL9pi8&rel=0"
                title="Machio TV featured video"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
      <VenturesSection onGoContact={() => onNavigate('contact')} onViewVenture={onViewVenture} />
      <JournalSection onGoJournal={() => onNavigate('journal')} onGoArticle={onGoArticle} />
      <CollaborateCTA onGoContact={() => onNavigate('contact')} />
    </>
  );
}

export default HomePage;
