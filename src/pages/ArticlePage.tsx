import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { JournalArticle } from '../types/site';

type ArticlePageProps = {
  article: JournalArticle | undefined;
  onBackToInsights: () => void;
  onGoContact: () => void;
};

function ArticlePage({ article, onBackToInsights, onGoContact }: ArticlePageProps) {
  if (!article) {
    return (
      <section className="article-not-found section-pad">
        <h1>Insight not found.</h1>
        <button className="text-link" onClick={onBackToInsights}>
          Back to Insights <ArrowLeft size={16} />
        </button>
      </section>
    );
  }

  return (
    <article className="article-page section-pad">
      <button className="article-back text-link" onClick={onBackToInsights}>
        <ArrowLeft size={16} /> Back to Insights
      </button>
      <div className="article-header">
        <span className="article-byline">{article.byline}</span>
        <h1>{article.title}</h1>
        {article.subtitle && <p className="article-subtitle">{article.subtitle}</p>}
      </div>
      <div className="article-layout">
        <img className="article-image" src={article.image} alt="" />
        <div className="article-content">
          {article.content.map((paragraph, index) => (
            <p key={`${article.id}-${index}`}>{paragraph}</p>
          ))}
          <button className="button button-primary article-contact" onClick={onGoContact}>
            Talk about your story <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default ArticlePage;
