import { ArrowUpRight } from 'lucide-react';
import { musicDevelopmentProfiles } from '../../data/siteContent';

function MusicDevelopmentSection({ onViewProfile }: { onViewProfile: (profileId: string) => void }) {
  return (
    <section className="music-development section-pad">
      <div className="section-kicker">
        Music &amp; Talent Development <span>People &amp; Projects</span>
      </div>
      <div className="music-development-intro">
        <h2>
          Nurturing music,<br />
          celebrating <em>talent.</em>
        </h2>
        <p>
          Music has always been part of my creative journey. I support local artists by helping them develop their
          craft, preserve culture, tell authentic stories, connect with audiences, and build sustainable careers.
        </p>
      </div>

      <div className="music-development-grid">
        {musicDevelopmentProfiles.map((profile) => (
          <article className="music-development-card" key={profile.id}>
            <div className={`music-development-image${profile.id === 'steve-kay' ? ' music-development-image-steve-kay' : ''}${profile.id === 'cedars' ? ' music-development-image-cedars' : ''}${profile.id === 'micah-wanyenje' ? ' music-development-image-micah' : ''}`}>
              <img src={profile.image} alt={profile.name} loading="lazy" />
            </div>
            <div className="music-development-card-body">
              <p className="project-type">{profile.category}</p>
              <h3>{profile.name}</h3>
              <p>{profile.description}</p>
              <button type="button" className="text-link music-development-card-link" onClick={() => onViewProfile(profile.id)}>
                View full details <ArrowUpRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="music-development-feature">
        <div>
          <p className="project-type">The Bliss Project</p>
          <h3>Celebrating gospel music, creativity, and collaboration.</h3>
        </div>
        <p>
          The Bliss Project brought gospel artists together for a concert and mini-album launch in Bungoma Town,
          creating a shared platform for high-quality music and meaningful connection.
        </p>
        <a className="text-link" href="https://www.youtube.com/watch?v=aqsvyL6FAK0" target="_blank" rel="noopener noreferrer">
          Watch Baba Ni Wewe <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}

export default MusicDevelopmentSection;