import { Play, X } from 'lucide-react';
import { useState } from 'react';
import CollaborateCTA from '../components/sections/CollaborateCTA';

type AwardsPageProps = {
  onGoContact: () => void;
};

const topVideos = [
  { id: 'Q7xIIqA1Pfc', title: 'Magharibi Michezo Awards 2019 Promo Video' },
  { id: 'SwCPD7KRX0M', title: 'Uzani Band performing at the 2018 Magharibi Michezo Awards' },
];

const otherVideos = [
  { id: 'tXYERGsewb8', title: 'Victor Wanyama supports Magharibi Michezo Awards' },
  { id: 'UOLvpiLgbAI', title: 'Scoreline: Magharibi Michezo Awards 2018', start: '849' },
  { id: '8jgOZm-e2QQ', title: 'Inspiring story of Magharibi Community Coach Luanda Okinyi', start: '67' },
  { id: 'Gx5VT0ysbCw', title: 'Ageless Producer Dominic Khaemba: Thrilling performance at 2018 MMA' },
  { id: 'Bi2l99gd-S8', title: 'JayRap & Mercy Manywe performing at the 2018 MMA' },
  { id: 'VC7-IGwEn_k', title: 'About Magharibi Michezo Awards Legacy Program' },
  { id: 'yE3-pdI0LSw', title: 'Magharibi Michezo Awards Legacy Program - Coaches Training' },
  { id: 'BQvu5KLi_8s', title: 'Magharibi Michezo Awards' },
  { id: 'f5Zl7W45ItI', title: 'Sherehekea Magharibi Michezo Awards' },
];

type AwardsVideo = (typeof topVideos)[number] & { start?: string };

function AwardsVideoCard({ video, onSelect }: { video: AwardsVideo; onSelect: (video: AwardsVideo) => void }) {
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

function AwardsPage({ onGoContact }: AwardsPageProps) {
  const [selectedVideo, setSelectedVideo] = useState<AwardsVideo | null>(null);

  const renderVideoCard = (video: AwardsVideo) => (
    <AwardsVideoCard key={video.id} video={video} onSelect={setSelectedVideo} />
  );

  return (
    <>
      <section className="awards-page section-pad">
        <div className="section-kicker">Initiatives <span>Magharibi Michezo Awards</span></div>
        <div className="awards-intro">
          <p className="awards-eyebrow">Sports Recognition</p>
          <h1>Magharibi Michezo <em>Awards.</em></h1>
          <p>
            Over the past 10 years I have partnered with stakeholders to celebrate and spotlight outstanding sporting
            talent through the Magharibi Michezo Awards, recognizing athletes, teams, and individuals who continue to
            inspire and shape the future of sports.
          </p>
        </div>

        <div className="awards-video-section">
          <div className="section-kicker">Top Videos <span>Featured</span></div>
          <div className="awards-video-grid awards-video-grid-featured">
            {topVideos.map(renderVideoCard)}
          </div>
        </div>

        <div className="awards-video-section">
          <div className="section-kicker">Others <span>More From The Awards</span></div>
          <div className="awards-video-grid">
            {otherVideos.map(renderVideoCard)}
          </div>
        </div>
      </section>
      <CollaborateCTA onGoContact={onGoContact} />
      {selectedVideo && (
        <div className="awards-video-lightbox" role="dialog" aria-modal="true" aria-label={selectedVideo.title}>
          <button className="awards-video-lightbox-close" type="button" onClick={() => setSelectedVideo(null)} aria-label="Close video">
            <X size={22} />
          </button>
          <div className="awards-video-lightbox-content">
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&rel=0${selectedVideo.start ? `&start=${selectedVideo.start}` : ''}`}
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

export default AwardsPage;