import CollaborateCTA from '../components/sections/CollaborateCTA';
import JourneySection from '../components/sections/JourneySection';
import PageHero from '../components/sections/PageHero';
import QuoteSection from '../components/sections/QuoteSection';
import StorySection from '../components/sections/StorySection';

type StoryPageProps = {
  onGoContact: () => void;
};

function StoryPage({ onGoContact }: StoryPageProps) {
  return (
    <>
      <PageHero
        kicker="The Storyteller"
        kickerTag="My Story"
        title={
          <>
            A decade of craft, <em>told honestly.</em>
          </>
        }
        description="From first camera jobs to founding Dencast Global — the people, projects and principles behind the work."
      />
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
