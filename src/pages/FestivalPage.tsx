import { Play, X } from 'lucide-react';
import { useState } from 'react';
import CollaborateCTA from '../components/sections/CollaborateCTA';

type FestivalPageProps = { onGoContact: () => void };

const video = {
  id: '-vNPv6jrRx4',
  title: "Kidum Kibido and The Boda Boda band performing 'Mapenzi' Live in Bungoma - Magharibi Festival",
};

function FestivalPage({ onGoContact }: FestivalPageProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="awards-page section-pad">
        <div className="section-kicker">Initiatives <span>Magharibi Festival</span></div>
        <div className="awards-intro">
          <p className="awards-eyebrow">Mentorship &amp; Creative Development</p>
          <h1>Magharibi <em>Festival.</em></h1>
          <p>
            The Magharibi Festival is a platform for celebrating culture, creativity, music, talent, and community.
            It brings people together through experiences that showcase the richness of our heritage and the power of
            creative expression.
          </p>
        </div>

        <div className="awards-video-section">
          <div className="section-kicker">Featured Video <span>Magharibi Festival</span></div>
          <div className="awards-video-grid awards-video-grid-single">
            <article className="awards-video-card">
              <button className="awards-video-poster" type="button" onClick={() => setIsVideoOpen(true)} aria-label={`Play ${video.title}`}>
                <img src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt="" />
                <span className="awards-video-play"><Play size={20} fill="currentColor" /></span>
              </button>
              <h3>{video.title}</h3>
            </article>
          </div>
        </div>
      </section>
      <CollaborateCTA onGoContact={onGoContact} />
      {isVideoOpen && (
        <div className="awards-video-lightbox" role="dialog" aria-modal="true" aria-label={video.title}>
          <button className="awards-video-lightbox-close" type="button" onClick={() => setIsVideoOpen(false)} aria-label="Close video">
            <X size={22} />
          </button>
          <div className="awards-video-lightbox-content">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
              title={video.title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
            <h3>{video.title}</h3>
          </div>
        </div>
      )}
    </>
  );
}

export default FestivalPage;