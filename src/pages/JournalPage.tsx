import JournalSection from '../components/sections/JournalSection';
import PageHero from '../components/sections/PageHero';

type JournalPageProps = {
  onGoContact: () => void;
  onGoArticle: (articleId: string) => void;
};

function JournalPage({ onGoContact, onGoArticle }: JournalPageProps) {
  return (
    <>
      <PageHero
        kicker="My Insights"
        kickerTag=""
        variant="insights-hero"
        title={
          <>
            STORIES &amp;
            <br />
            <em>Insights</em>
          </>
        }
        description="Reflections, lessons and ideas from a life in storytelling, creative production and visual communication across Africa."
      />
      <JournalSection page onGoArticle={onGoArticle} />
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
