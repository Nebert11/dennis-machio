import { Play, X } from 'lucide-react';
import { useState } from 'react';
import { galleryVideos } from '../../data/siteContent';
import type { GalleryVideo } from '../../types/site';

type GallerySectionProps = {
  onGoContact: () => void;
};

function getYoutubeId(url: string) {
  const parsedUrl = new URL(url);
  return parsedUrl.searchParams.get('v') || parsedUrl.pathname.split('/').pop() || '';
}

function getYoutubeThumbnail(item: GalleryVideo) {
  return item.url ? `https://i.ytimg.com/vi/${getYoutubeId(item.url)}/hqdefault.jpg` : item.poster;
}

function getYoutubeEmbedUrl(url: string) {
  const parsedUrl = new URL(url);
  const videoId = getYoutubeId(url);
  const startValue = parsedUrl.searchParams.get('start') || parsedUrl.searchParams.get('t');
  const startSeconds = startValue?.match(/\d+/)?.[0];
  const embedParams = new URLSearchParams({ autoplay: '1', rel: '0' });

  if (startSeconds) {
    embedParams.set('start', startSeconds);
  }

  return `https://www.youtube.com/embed/${videoId}?${embedParams.toString()}`;
}

function GallerySection({ onGoContact }: GallerySectionProps) {
  const [selectedVideo, setSelectedVideo] = useState<GalleryVideo | null>(null);

  return (
    <section className="gallery-section section-pad">
      <div className="gallery-feature">
        <div className="gallery-feature-copy">
          <span className="section-kicker">Featured Screen</span>
          <h2>Stories in <em>motion.</em></h2>
          <p>Explore a selection of films, broadcasts and visual stories from across Dennis Machio&apos;s production work.</p>
          <button className="button button-primary" onClick={onGoContact}>Share a production brief</button>
        </div>
        <button className="gallery-feature-screen" onClick={() => setSelectedVideo(galleryVideos[0])}>
          <img src={getYoutubeThumbnail(galleryVideos[0])} alt={galleryVideos[0].title} />
          <span className="gallery-play"><Play size={20} fill="currentColor" /></span>
          <strong>{galleryVideos[0].title}</strong>
        </button>
      </div>

      <GalleryRail
        title="Video gallery"
        items={galleryVideos}
        onSelect={setSelectedVideo}
        renderItem={(item) => (
          <div className="gallery-media-thumb gallery-video-thumb">
            <img src={getYoutubeThumbnail(item)} alt={item.title} />
            <span className="gallery-thumb-play"><Play size={14} fill="currentColor" /></span>
          </div>
        )}
      />

      {selectedVideo && (
        <div className="gallery-lightbox gallery-video-lightbox" role="dialog" aria-modal="true" aria-label={selectedVideo.title}>
          <button className="gallery-lightbox-close" onClick={() => setSelectedVideo(null)} aria-label="Close media viewer">
            <X size={22} />
          </button>
          <div className="gallery-lightbox-content">
            {selectedVideo.url ? (
              <iframe
                src={getYoutubeEmbedUrl(selectedVideo.url)}
                title={selectedVideo.title}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : null}
            <h3>{selectedVideo.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
}

type GalleryRailProps = {
  title: string;
  items: GalleryVideo[];
  onSelect: (item: GalleryVideo) => void;
  renderItem: (item: GalleryVideo) => React.ReactNode;
};

function GalleryRail({ title, items, onSelect, renderItem }: GalleryRailProps) {
  return (
    <div className="gallery-rail">
      <div className="gallery-rail-heading">
        <h3>{title}</h3>
      </div>
      <div className="gallery-rail-track">
        {items.map((item) => (
          <button className="gallery-card" key={item.id} onClick={() => onSelect(item)}>
            {renderItem(item)}
            <span>{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default GallerySection;

