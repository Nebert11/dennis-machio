import CollaborateCTA from '../components/sections/CollaborateCTA';
import JourneySection from '../components/sections/JourneySection';
import PageHero from '../components/sections/PageHero';
import QuoteSection from '../components/sections/QuoteSection';
import StorySection from '../components/sections/StorySection';
import StoryPreviewSection from '../components/sections/StoryPreviewSection';

type StoryPageProps = {
  onGoContact: () => void;
};

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
      <StorySection onGoContact={onGoContact} />
      <JourneySection />
      <QuoteSection />
      <CollaborateCTA onGoContact={onGoContact} />
    </>
  );
}

export default StoryPage;
