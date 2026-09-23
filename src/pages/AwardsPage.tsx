import { Play, X } from 'lucide-react';
import { useState } from 'react';

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
  { id: 'MLJSmF0Ss3g', title: 'Magharibi Michezo Awards Highlights' },
  { id: 'KS6K4CLB42U', title: 'Magharibi Michezo Awards Ceremony Moments', start: '9' },
];

const galleryImages = [
  '/images/Magharibi%20Michezo%20Awards/130979852_10224547112488019_2869173515013023806_n.jpg',
  '/images/Magharibi%20Michezo%20Awards/131162895_10224547111808002_8700672584080514886_n.jpg',
  '/images/Magharibi%20Michezo%20Awards/131204958_10224547113168036_5061619110242597168_n.jpg',
  '/images/Magharibi%20Michezo%20Awards/78567270_10220904708710201_8982095626162405376_n.jpg',
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

function AwardsPage() {
  const [selectedVideo, setSelectedVideo] = useState<AwardsVideo | null>(null);

  const renderVideoCard = (video: AwardsVideo) => (
    <AwardsVideoCard key={video.id} video={video} onSelect={setSelectedVideo} />
  );

  return (
    <>
      <section className="awards-page section-pad">
        <div className="awards-intro">
          <p className="awards-eyebrow">Sports Recognition</p>
          <h1>Magharibi Michezo <em>Awards.</em></h1>
          <p>
            The Magharibi Michezo Awards (MMA) is a premier sporting recognition initiative celebrating the talent,
            achievements, and enduring contributions of athletes, coaches, officials, and sports stakeholders across
            Western Kenya.
          </p>
          <p>
            Designed to shine a spotlight on sporting excellence at every level, the awards honour established
            champions while creating opportunities for emerging talent across diverse sporting disciplines. From
            elite competitors to grassroots athletes, MMA seeks to tell the stories of dedication, resilience, and
            passion that continue to shape the region&apos;s sporting landscape.
          </p>
          <p>
            Beyond recognition, the initiative is committed to nurturing the next generation through talent
            development, life skills, sports equipment distribution, coaching programmes, and community-based
            sporting infrastructure. Its vision extends to supporting basketball and tennis court development,
            strengthening volleyball initiatives, equipping athletics training camps, and promoting inclusive
            sporting opportunities for athletes of all abilities.
          </p>
          <p>
            Through strategic partnerships and collaborative investment, the Magharibi Michezo Awards aims to build a
            stronger, more inclusive sporting ecosystem in Western Kenya, one that celebrates achievement, honours
            those who mentor and support athletes, and creates pathways for future champions.
          </p>
          <p>
            Our role: Supporting the storytelling, creative production, and visual communication that bring the
            spirit, impact, and ambition of the Magharibi Michezo Awards to life.
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

        <div className="awards-video-section">
          <div className="section-kicker">Awards Gallery <span>Moments From MMA</span></div>
          <div className="awards-image-grid">
            {galleryImages.map((image) => (
              <div className="awards-image-card" key={image}>
                <img src={image} alt="Magharibi Michezo Awards" loading="lazy" />
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