import { Play, X } from 'lucide-react';
import { useState } from 'react';

const video = {
  id: 'Bi2l99gd-S8',
  title: 'Inspiring story of Magharibi Community Coach Luanda Okinyi',
};

const galleryImages = [
  '/images/MENTORSHIP%20AND%20TRAINING/3O6A1715.JPG',
  '/images/MENTORSHIP%20AND%20TRAINING/519363326_10237569193671910_2484539785284979947_n.jpg',
];

function MentorshipPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="awards-page section-pad">
        <div className="awards-hero">
          <div className="awards-intro">
            <p className="awards-eyebrow">Nurturing Talent. Mentoring Creatives. Building Dreams.</p>
            <h1>Mentorship &amp; <em>support.</em></h1>
            <p>
              For over 15 years, I have dedicated my journey to supporting, mentoring, and creating opportunities for
              emerging talent across the creative and sporting industries. From writers and music artists to dancers,
              sports journalists, creative technical crews, and production teams, I have believed in the power of young
              people and their ability to transform their passion into purpose.
            </p>
            <p>
              Through mentorship, hands-on collaboration, and real-world production opportunities, I have encouraged
              young creatives to discover their strengths, sharpen their skills, and develop the confidence to pursue
              bigger dreams. My approach is rooted in recognising potential, opening doors, sharing knowledge, and
              building platforms where talent can grow.
            </p>
            <p>
              I believe that every great dream deserves an opportunity, and every young creative deserves someone who
              believes in their potential. My greatest fulfilment lies not only in the stories we create and the
              productions we deliver, but also in the people we inspire, the careers we help shape, and the future we
              build together.
            </p>
          </div>
          <div className="awards-hero-image">
            <img src="/images/Work%20that%20extends/Mentorship%20and%20training.jpg" alt="Mentorship & Support" loading="lazy" />
          </div>
        </div>

        <div className="awards-video-section">
          <div className="section-kicker">Featured Video <span>Mentorship</span></div>
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

        <div className="awards-video-section">
          <div className="section-kicker">Gallery <span>Mentorship &amp; Training</span></div>
          <div className="awards-image-grid awards-image-grid-two">
            {galleryImages.map((image) => (
              <div className="awards-image-card" key={image}>
                <img src={image} alt="Mentorship and training" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
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

export default MentorshipPage;