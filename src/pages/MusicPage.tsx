import { Play, X } from 'lucide-react';
import { useState } from 'react';

type MusicPageProps = { onGoContact: () => void };
type MusicVideo = { id: string; title: string };

const topVideos: MusicVideo[] = [
  { id: 'aqsvyL6FAK0', title: 'BABA NI WEWE' },
  { id: 'LOL6DHHFLmE', title: 'Vanissy Uwase - Gharama Ya Wokovu (Official Music Video)' },
];

const otherVideos: MusicVideo[] = [
  { id: 'PJ4HC7318h4', title: 'STEVE KAY - Mbe Omukhasi (Official Video)' },
  { id: 'Rloz0hZFd-o', title: 'HARRY RICHIE OFFICIAL - CONFIRM OFFICIAL VIDEO' },
];

function MusicVideoCard({ video, onSelect }: { video: MusicVideo; onSelect: (video: MusicVideo) => void }) {
  return (
    <article className="awards-video-card">
      <button className="awards-video-poster" type="button" onClick={() => onSelect(video)} aria-label={`Play ${video.title}`}>
        <img src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt="" />
        <span className="awards-video-play"><Play size={20} fill="currentColor" /></span>
      </button>
      <h3>{video.title}</h3>
    </article>
  );
}

function MusicPage({ onGoContact }: MusicPageProps) {
  const [selectedVideo, setSelectedVideo] = useState<MusicVideo | null>(null);

  return (
    <>
      <section className="awards-page section-pad">
        <button type="button" onClick={onGoContact}>Get in touch</button>
        <div className="section-kicker">Initiatives <span>Music &amp; Talent Development</span></div>
        <div className="awards-intro">
          <p className="awards-eyebrow">Creative Development</p>
          <h1>Music &amp; Talent <em>Development.</em></h1>
          <p>
            Music has always been part of my creative journey. I support and nurture emerging talent by creating
            opportunities for artists to develop their craft, tell authentic stories, and build sustainable creative careers.
          </p>
        </div>

        <div className="awards-video-section">
          <div className="section-kicker">Top Videos <span>Featured</span></div>
          <div className="awards-video-grid awards-video-grid-featured">
            {topVideos.map((video) => <MusicVideoCard key={video.id} video={video} onSelect={setSelectedVideo} />)}
          </div>
        </div>

        <div className="awards-video-section">
          <div className="section-kicker">More Videos <span>More From Music &amp; Talent Development</span></div>
          <div className="awards-video-grid awards-video-grid-two">
            {otherVideos.map((video) => <MusicVideoCard key={video.id} video={video} onSelect={setSelectedVideo} />)}
          </div>
        </div>
      </section>
      {selectedVideo && (
        <div className="awards-video-lightbox" role="dialog" aria-modal="true" aria-label={selectedVideo.title}>
          <button className="awards-video-lightbox-close" type="button" onClick={() => setSelectedVideo(null)} aria-label="Close video">
            <X size={22} />
          </button>
          <div className="awards-video-lightbox-content">
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&rel=0`}
              title={selectedVideo.title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
            <h3>{selectedVideo.title}</h3>
          </div>
        </div>
      )}
    </>
  );
}

export default MusicPage;