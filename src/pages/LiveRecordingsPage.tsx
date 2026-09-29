import { Play, X } from 'lucide-react';
import { useState } from 'react';

type LiveRecordingVideo = { id: string; title: string };

const videos: LiveRecordingVideo[] = [
  { id: '1MVyqfKYBbw', title: 'Rehoboth — Holygate Worship (Live Recording)' },
  { id: 'pmwzr_g9iL4', title: 'Rehoboth — Holygate Worship (Live Recording)' },
  { id: 'uh9SYkUflHw', title: 'Rehoboth — Holygate Worship (Live Recording)' },
  { id: '3KDWtsJZohA', title: 'Rehoboth — Holygate Worship (Live Recording)' },
  { id: 'TqFnliAH0f8', title: 'Rehoboth — Holygate Worship (Live Recording)' },
  { id: 'Ad3jxhyZx0I', title: 'Rehoboth — Holygate Worship (Live Recording)' },
];

const galleryImages = [
  '/images/MUSIC%20DEVELOPMENT/music2.jpg', 
  '/images/MUSIC%20DEVELOPMENT/music1.jpg',
  '/images/MUSIC%20DEVELOPMENT/music3.jpg',
];

function LiveRecordingVideoCard({ video, onSelect }: { video: LiveRecordingVideo; onSelect: (video: LiveRecordingVideo) => void }) {
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

function LiveRecordingsPage() {
  const [selectedVideo, setSelectedVideo] = useState<LiveRecordingVideo | null>(null);

  return (
    <>
      <section className="awards-page section-pad">
        <div className="awards-hero">
          <div className="awards-intro">
            <p className="awards-eyebrow">Live Worship Recordings</p>
            <h1>My Live <em>Recordings.</em></h1>
            <p className="awards-subheading">Rehoboth &ndash; Holygate Worship</p>
            <p>
              Partnered with the Bungoma-based Holygate Worship team to produce their first live recording, Rehoboth.
              Filmed and produced at Holygate Church in Bungoma, the project captured the team&apos;s worship, musical
              expression, and passion for sharing inspiring songs through a professionally produced live recording.
            </p>
            <p>
              A meaningful collaboration that brought together music, faith, and creative storytelling, celebrating
              local talent and creating a platform for the team&apos;s music to reach a wider audience.
            </p>
          </div>
          <div className="awards-hero-image">
            <img src="/images/MUSIC%20DEVELOPMENT/card_image.jpg" alt="My Live Recordings" loading="lazy" />
          </div>
        </div>

        <div className="awards-video-section">
          <div className="section-kicker">Live Recordings Videos <span>Rehoboth</span></div>
          <div className="awards-video-grid">
            {videos.map((video) => (
              <LiveRecordingVideoCard key={video.id} video={video} onSelect={setSelectedVideo} />
            ))}
          </div>
        </div>

        <div className="awards-video-section">
          <div className="section-kicker">Gallery <span>From The Sessions</span></div>
          <div className="awards-image-grid awards-image-grid-three">
            {galleryImages.map((image) => (
              <div className="awards-image-card" key={image}>
                <img src={image} alt="Live recording session" loading="lazy" />
              </div>
            ))}
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

export default LiveRecordingsPage;