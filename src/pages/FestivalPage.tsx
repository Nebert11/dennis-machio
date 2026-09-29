import { Play, X } from 'lucide-react';
import { useState } from 'react';

const videos = [
  {
    id: 'kSDbt78t32Y',
    title: 'Magharibi Festival — Highlights',
  },
  {
    id: '-vNPv6jrRx4',
    title: "Kidum Kibido and The Boda Boda band performing 'Mapenzi' Live in Bungoma - Magharibi Festival",
  },
];

const galleryImages = [
  '/images/Magharibi%20Festival/311594710_523277599806479_1274588842605595526_n.jpg',
  '/images/Magharibi%20Festival/480498646_1185603596907206_4146803276762077052_n.jpg',
  '/images/Magharibi%20Festival/481970900_2695578463966160_1021105034213761109_n.jpg',
  '/images/Magharibi%20Festival/490540696_10236105087910181_3541032729946846380_n.jpg',
  '/images/Magharibi%20Festival/490835917_10236105088030184_6683024669825336925_n.jpg',
  '/images/Magharibi%20Festival/499405187_10236546081174737_1248615036839344700_n.jpg',
];

type FestivalVideo = (typeof videos)[number];

function FestivalPage() {
  const [selectedVideo, setSelectedVideo] = useState<FestivalVideo | null>(null);

  return (
    <>
      <section className="awards-page section-pad">
        <div className="awards-hero">
          <div className="awards-intro">
            <p className="awards-eyebrow">Celebrating Western Kenya&apos;s Talent, Culture, and Creative Expression</p>
            <h1>Magharibi <em>Festival.</em></h1>
            <p>
              The Magharibi Festival is a celebration of the rich talent, culture, and creative identity of Western
              Kenya. The festival brings together music, sports, and cultural experiences from Bungoma, Busia,
              Kakamega, Vihiga, Trans-Nzoia, parts of Uganda, and the Nyanza region.
            </p>
            <p>
              The inaugural Magharibi Festival was held in Bungoma Town on 31 December 2022, marking the beginning of an
              initiative dedicated to promoting cultural expression, celebrating local talent, and creating meaningful
              experiences for communities across the region.
            </p>
            <p>
              Over the years, Western Kenya has produced some of the finest talents in sports, arts, film, and music.
              Yet, many of these creatives continue to face limited opportunities for visibility, recognition, and
              professional growth. This gap in showcase events and award platforms inspired the development of the
              Magharibi Festival.
            </p>
            <p>
              I seek to contribute to building platforms that celebrate local talent, promote cultural heritage, and
              create opportunities for artists, athletes, and creatives to share their stories with a wider audience.
            </p>
            <p>
              The Magharibi Festival is a celebration of identity, a platform for discovery, and a commitment to
              nurturing the creative potential of Western Kenya.
            </p>
          </div>
          <div className="awards-hero-image">
            <img src="/images/Work%20that%20extends/Magharibi%20Festival.jpg" alt="Magharibi Festival" loading="lazy" />
          </div>
        </div>

        <div className="awards-video-section">
          <div className="section-kicker">Festival Videos <span>Magharibi Festival</span></div>
          <div className="awards-video-grid awards-video-grid-two">
            {videos.map((item) => (
              <article className="awards-video-card" key={item.id}>
                <button className="awards-video-poster" type="button" onClick={() => setSelectedVideo(item)} aria-label={`Play ${item.title}`}>
                  <img src={`https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`} alt="" />
                  <span className="awards-video-play"><Play size={20} fill="currentColor" /></span>
                </button>
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </div>

        <div className="awards-video-section">
          <div className="section-kicker">Festival Gallery <span>Moments From Magharibi Festival</span></div>
          <div className="awards-image-grid">
            {galleryImages.map((image) => (
              <div className="awards-image-card" key={image}>
                <img src={image} alt="Magharibi Festival" loading="lazy" />
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

export default FestivalPage;