import { ArrowUpRight } from 'lucide-react';
import { journalArticles } from '../../data/siteContent';

type JournalSectionProps = {
  onGoJournal?: () => void;
  page?: boolean;
};

function JournalSection({ onGoJournal, page = false }: JournalSectionProps) {
  const visibleArticles = page ? journalArticles : journalArticles.slice(0, 3);

  return (
    <section className={page ? 'journal-page-section section-pad' : 'journal-preview-section section-pad'}>
      <div className="section-heading journal-heading">
        <div>
          <div className="section-kicker">
            My Insights <span>{page ? 'Insights' : 'Latest 3'}</span>
          </div>
          <h2>
            Ideas from <em>the work.</em>
          </h2>
        </div>
        {onGoJournal && (
          <button className="text-link" onClick={onGoJournal}>
            View All Insights <ArrowUpRight size={16} />
          </button>
        )}
      </div>

      <div className="journal-grid">
        {visibleArticles.map((article) => (
          <article className={`journal-card journal-card-${article.id}`} key={article.id}>
            <div className="journal-card-image">
              <img src={article.image} alt="" loading="lazy" />
            </div>
            <div className="journal-card-body">
              <time>{article.date}</time>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <span className="journal-read-link">
                Read insight <ArrowUpRight size={14} />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default JournalSection;
