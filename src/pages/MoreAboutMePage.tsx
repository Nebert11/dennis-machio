import { ArrowLeft } from 'lucide-react';
import { aboutMeFullStory } from '../data/siteContent';

type MoreAboutMePageProps = {
  onBack: () => void;
};

function MoreAboutMePage({ onBack }: MoreAboutMePageProps) {
  return (
    <article className="more-about-page">
      <div className="more-about-inner">
        <div className="article-toolbar">
          <button className="article-back text-link" onClick={onBack}>
            <ArrowLeft size={16} /> Back to About Me
          </button>
        </div>
        <div className="more-about-header">
          <p className="section-kicker">About Me</p>
          <h1>Welcome to my world.</h1>
        </div>
        <div className="article-content">
          {aboutMeFullStory.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

export default MoreAboutMePage;
