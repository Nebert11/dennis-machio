import { ArrowUpRight } from 'lucide-react';
import { journalArticles } from '../../data/siteContent';

type JournalSectionProps = {
  onGoJournal?: () => void;
  onGoArticle?: (articleId: string) => void;
  page?: boolean;
};

function JournalSection({ onGoJournal, onGoArticle, page = false }: JournalSectionProps) {
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
              <span className="journal-byline">{article.byline}</span>
              <h3>{article.title}</h3>
              {article.subtitle && <p className="journal-subtitle">{article.subtitle}</p>}
              <p>{article.content[0]}</p>
              {onGoArticle && (
                <button className="journal-read-link" onClick={() => onGoArticle(article.id)}>
                  Read More <ArrowUpRight size={14} />
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default JournalSection;
