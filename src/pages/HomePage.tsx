// import CareerTimeline from '../components/sections/CareerTimeline';
import CollaborateCTA from '../components/sections/CollaborateCTA';
import HeroSection from '../components/sections/HeroSection';
import JournalSection from '../components/sections/JournalSection';
import ServicesSection from '../components/sections/ServicesSection';
import StoryPreviewSection from '../components/sections/StoryPreviewSection';
import VenturesSection from '../components/sections/VenturesSection';
import type { PageKey } from '../types/navigation';
import { X } from 'lucide-react';
import { useState } from 'react';

const homepagePhotos = [
  '051A4057.jpg',
  '051A4986.jpg',
  '47573087_10217854383413975_6479667836347219968_n.jpg',
  '499405187_10236546081174737_1248615036839344700_n.jpg',
  '503620132_10236791176861976_8229046894511825961_n.jpg',
  '504376356_10237569192231874_7097728687841123983_n.jpg',
  '508770370_10237011617052843_5918956581081626573_n.jpg',
  '642826549_10240802745308680_5807325189112084965_n.jpg',
  'Dencast Global.jpg',
  'IMG_4176.jpg',
  'Live events.jpg',
  'RHNK.jpeg',
];

type HomePageProps = {
  onNavigate: (page: PageKey) => void;
  onGoArticle: (articleId: string) => void;
  onViewVenture: (ventureId: string) => void;
};

function HomePage({ onNavigate, onGoArticle, onViewVenture }: HomePageProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <>
      <HeroSection onGoWhatIDo={() => onNavigate('services')} />
      
      <StoryPreviewSection onGoStory={() => onNavigate('my-story')} />
      {/* <CareerTimeline /> */}
      <ServicesSection preview />
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

      <VenturesSection
        onGoContact={() => onNavigate('contact')}
        onViewVenture={onViewVenture}
        onViewAll={() => onNavigate('services')}
        preview
      />
      <JournalSection onGoJournal={() => onNavigate('journal')} onGoArticle={onGoArticle} />

        <section className="home-photo-section" aria-label="Photography by Dennis Machio">
        <div className="home-photo-track">
          {[false, true].map((duplicate) => (
            <div className="home-photo-group" key={String(duplicate)} aria-hidden={duplicate}>
              {homepagePhotos.map((photo) => {
                const src = `/images/homepage-scroll/${encodeURIComponent(photo)}`;
                return (
                  <button
                    className="home-photo-item"
                    key={photo}
                    type="button"
                    tabIndex={duplicate ? -1 : 0}
                    onClick={() => setSelectedPhoto(src)}
                    aria-label="View photo by Dennis Machio"
                  >
                    <img
                      src={src}
                      alt={duplicate ? '' : 'A moment captured by Dennis Machio'}
                      loading="lazy"
                    />
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </section>
      
      <CollaborateCTA onGoContact={() => onNavigate('contact')} />
      {selectedPhoto && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Photo by Dennis Machio" onClick={() => setSelectedPhoto(null)}>
          <button className="gallery-lightbox-close" type="button" onClick={() => setSelectedPhoto(null)} aria-label="Close photo viewer">
            <X size={22} />
          </button>
          <div className="gallery-lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={selectedPhoto} alt="A moment captured by Dennis Machio" />
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
