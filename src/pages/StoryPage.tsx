import CollaborateCTA from '../components/sections/CollaborateCTA';
import JourneySection from '../components/sections/JourneySection';
import PageHero from '../components/sections/PageHero';
import QuoteSection from '../components/sections/QuoteSection';
import StorySection from '../components/sections/StorySection';
import StoryPreviewSection from '../components/sections/StoryPreviewSection';
import { images } from '../data/siteContent';

type StoryPageProps = {
  onGoContact: () => void;
};

const storyScrollPhotos = [
  '/images/about%20me%20photo%20scrolls/IMG_4176%20copy.jpg',
  '/images/about%20me%20photo%20scrolls/Dencast%20Global%20(2).jpeg',
  '/images/about%20me%20photo%20scrolls/47573087_10217854383413975_6479667836347219968_n.jpg',
  '/images/about%20me%20photo%20scrolls/051A3860.jpg',
  '/images/about%20me%20photo%20scrolls/519363326_10237569193671910_2484539785284979947_n.jpg',
  '/images/about%20me%20photo%20scrolls/Live%20events.jpg',
  '/images/about%20me%20photo%20scrolls/IMG_4231%20copy.jpg',
  '/images/about%20me%20photo%20scrolls/RHNK%20horizontal.jpg',
];

function StoryPage({ onGoContact }: StoryPageProps) {
  return (
    <>
      <PageHero
        kicker="The Storyteller"
        kickerTag="My Story"
        variant="story-hero"
        title={
          <>
            Explore <em>My Story.</em>
          </>
        }
        description="From behind the camera to supporting brands and building stories that matter."
      />
      <StoryPreviewSection />
      <section className="story-photo-scroll-section section-pad">
        <div className="section-kicker">Behind The Scenes <span>In Photos</span></div>
        <div className="story-photo-scroll-window">
          <div className="story-photo-scroll-track">
            {[...storyScrollPhotos, ...storyScrollPhotos].map((photo, index) => (
              <div className="story-photo-scroll-item" key={`${photo}-${index}`}>
                <img src={photo} alt="Dennis Machio behind the scenes" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <StorySection onGoContact={onGoContact} />
      <JourneySection />
      <QuoteSection />
      <CollaborateCTA onGoContact={onGoContact} />
    </>
  );
}

export default StoryPage;
