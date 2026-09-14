import JournalSection from '../components/sections/JournalSection';
import PageHero from '../components/sections/PageHero';

type JournalPageProps = {
  onGoContact: () => void;
};

function JournalPage({ onGoContact }: JournalPageProps) {
  return (
    <>
      <PageHero
        kicker="My Insights"
        kickerTag="Insights"
        variant="insights-hero"
        title={
          <>
            STORIES &amp;
            <br />
            <em>Insights</em>
          </>
        }
      />
      <JournalSection page />
      <section className="journal-contact-prompt section-pad">
        <p>Have a story, idea or production challenge to explore?</p>
        <button className="text-link" onClick={onGoContact}>
          Start a conversation
        </button>
      </section>
    </>
  );
}

export default JournalPage;
