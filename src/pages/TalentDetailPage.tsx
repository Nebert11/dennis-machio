import { ArrowLeft, Play, X } from 'lucide-react';
import { useState } from 'react';
import type { TalentProfile } from '../types/site';

type TalentDetailPageProps = {
  profile?: TalentProfile;
  onBack: () => void;
};

function TalentDetailPage({ profile, onBack }: TalentDetailPageProps) {
  const [selectedVideo, setSelectedVideo] = useState<{ id: string; title: string } | null>(null);

  if (!profile) {
    return <section className="awards-page section-pad"><button type="button" onClick={onBack}>Back to initiatives</button></section>;
  }

  return (
    <>
      <section className="awards-page section-pad talent-detail-page">
        <div className="talent-detail-actions">
          <button type="button" onClick={onBack}><ArrowLeft size={16} /> Back to initiatives</button>
        </div>
        <div className="talent-detail-hero">
          <div className="talent-detail-copy">
            <p className="awards-eyebrow">{profile.category}</p>
            <h1>{profile.name}</h1>
            {profile.details.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="talent-detail-image"><img src={profile.image} alt={profile.name} /></div>
        </div>

        {profile.videos?.length ? (
          <div className="awards-video-section talent-detail-section">
            <div className="section-kicker">Videos <span>{profile.name}</span></div>
            <div className="awards-video-grid awards-video-grid-featured">
              {profile.videos.map((video) => (
                <article className="awards-video-card" key={video.id}>
                  <button className="awards-video-poster" type="button" onClick={() => setSelectedVideo(video)} aria-label={`Play ${video.title}`}>
                    <img src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt="" />
                    <span className="awards-video-play"><Play size={20} fill="currentColor" /></span>
                  </button>
                  <h3>{video.title}</h3>
                </article>
              ))}
            </div>
          </div>
        ) : null}
        <div className="awards-video-section talent-detail-section">
          <div className="section-kicker">Gallery <span>{profile.name}</span></div>
          <div className="awards-image-grid">
            {profile.galleryImages.map((image) => (
              <div className="awards-image-card" key={image}>
                <img src={image} alt={profile.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedVideo && (
        <div className="awards-video-lightbox" role="dialog" aria-modal="true" aria-label={selectedVideo.title}>
          <button className="awards-video-lightbox-close" type="button" onClick={() => setSelectedVideo(null)} aria-label="Close video"><X size={22} /></button>
          <div className="awards-video-lightbox-content">
            <iframe src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&rel=0`} title={selectedVideo.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
            <h3>{selectedVideo.title}</h3>
          </div>
        </div>
      )}
    </>
  );
}

export default TalentDetailPage;