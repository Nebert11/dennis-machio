import CollaborateCTA from '../components/sections/CollaborateCTA';
import JourneySection from '../components/sections/JourneySection';
import QuoteSection from '../components/sections/QuoteSection';
import StorySection from '../components/sections/StorySection';

type StoryPageProps = {
  onGoContact: () => void;
};

function StoryPage({ onGoContact }: StoryPageProps) {
  return (
    <>
      <StorySection onGoContact={onGoContact} />
      <JourneySection />
      <QuoteSection />
      <CollaborateCTA
        onGoContact={onGoContact}
        title="Let's build something unforgettable."
        subtitle="Bring us the ambition, the challenge, or just the first idea. We'll bring the craft that makes it matter."
      />
    </>
  );
}

export default StoryPage;
