import { ArrowLeft, ArrowUpRight, Clock, Copy, Linkedin, Twitter, User } from 'lucide-react';
import { useState } from 'react';
import { bioSummary, journalArticles } from '../data/siteContent';
import type { JournalArticle } from '../types/site';

type ArticlePageProps = {
  article: JournalArticle | undefined;
  onBackToInsights: () => void;
  onGoArticle: (articleId: string) => void;
};

function estimateReadTime(content: string[]): number {
  const words = content.join(' ').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function ArticlePage({ article, onBackToInsights, onGoArticle }: ArticlePageProps) {
  const [copied, setCopied] = useState(false);

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

  const authorName = article.byline.replace(/^By\s+/i, '').trim();
  const readTime = estimateReadTime(article.content);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const relatedArticles = journalArticles.filter((item) => item.id !== article.id).slice(0, 3);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className="article-page">
      <div
        className="article-hero"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(5,8,13,.35) 0%, rgba(5,8,13,.6) 60%, rgba(5,8,13,.95) 100%), url("${article.image}")` }}
      >
        <div className="article-hero-copy">
          <span className="article-kicker">Insights</span>
          <h1>{article.title}</h1>
          <div className="article-meta">
            <span><User size={14} /> {authorName}</span>
            <span><Clock size={14} /> {readTime} min read</span>
          </div>
        </div>
      </div>

      <div className="article-body-section">
        <div className="article-body-inner">
          <div className="article-toolbar">
            <button className="article-back text-link" onClick={onBackToInsights}>
              <ArrowLeft size={16} /> Back to Insights
            </button>
          </div>
          {article.subtitle && <p className="article-lead">{article.subtitle}</p>}
          <div className="article-content">
            {article.content.map((paragraph, index) => (
              <p key={`${article.id}-${index}`}>{paragraph}</p>
            ))}
          </div>

          <div className="article-share">
            <span>Share this article</span>
            <div className="article-share-buttons">
              <button
                type="button"
                onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(shareUrl)}`, '_blank', 'noopener,noreferrer')}
              >
                <Twitter size={14} /> Twitter
              </button>
              <button
                type="button"
                onClick={() => window.open(`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank', 'noopener,noreferrer')}
              >
                <Linkedin size={14} /> LinkedIn
              </button>
              <button type="button" onClick={handleCopyLink}>
                <Copy size={14} /> {copied ? 'Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>

          <div className="article-author-card">
            <span className="article-author-avatar" aria-hidden="true">{getInitials(authorName)}</span>
            <div>
              <span className="article-author-kicker">Written By</span>
              <h4>{authorName}</h4>
              <p>{bioSummary.title}</p>
            </div>
          </div>
        </div>
      </div>

      {relatedArticles.length > 0 && (
        <div className="article-related-section section-pad">
          <div className="section-kicker">Keep Reading <span>More Insights</span></div>
          <div className="article-related-grid">
            {relatedArticles.map((item) => (
              <article className="article-related-card" key={item.id}>
                <button type="button" className="article-related-image" onClick={() => onGoArticle(item.id)} aria-label={`Read ${item.title}`}>
                  <img src={item.image} alt="" loading="lazy" />
                </button>
                <div className="article-related-body">
                  <span className="article-related-byline">{item.byline}</span>
                  <h3>{item.title}</h3>
                  <p>{item.content[0]}</p>
                  <button type="button" className="journal-read-link" onClick={() => onGoArticle(item.id)}>
                    Read More <ArrowUpRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

export default ArticlePage;
