import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { useState } from 'react';
import { galleryPhotos, galleryVideos } from '../../data/siteContent';
import type { GalleryPhoto, GalleryVideo } from '../../types/site';

type GallerySectionProps = {
  onGoContact: () => void;
};

type SelectedMedia =
  | { kind: 'video'; item: GalleryVideo }
  | { kind: 'photo'; item: GalleryPhoto };

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
  const [photoStart, setPhotoStart] = useState(0);
  const [selectedMedia, setSelectedMedia] = useState<SelectedMedia | null>(null);
  const visiblePhotos = galleryPhotos.slice(photoStart, photoStart + 4);

  const movePhotos = (direction: number) => {
    setPhotoStart((current) => Math.min(Math.max(current + direction, 0), galleryPhotos.length - 4));
  };

  return (
    <section className="gallery-section section-pad">
      <div className="gallery-feature">
        <div className="gallery-feature-copy">
          <span className="section-kicker">Featured Screen <span>Gallery</span></span>
          <h2>Stories in <em>motion.</em></h2>
          <p>Explore a selection of films, broadcasts and visual stories from across Dennis Machio&apos;s production work.</p>
          <button className="button button-primary" onClick={onGoContact}>Share a production brief</button>
        </div>
        <button className="gallery-feature-screen" onClick={() => setSelectedMedia({ kind: 'video', item: galleryVideos[0] })}>
          <img src={getYoutubeThumbnail(galleryVideos[0])} alt={galleryVideos[0].title} />
          <span className="gallery-play"><Play size={20} fill="currentColor" /></span>
          <strong>{galleryVideos[0].title}</strong>
        </button>
      </div>

      <GalleryRail
        title="Video gallery"
        items={galleryVideos}
        onSelect={(item) => setSelectedMedia({ kind: 'video', item })}
        showControls={false}
        renderItem={(item) => (
          <div className="gallery-media-thumb gallery-video-thumb">
            <img src={getYoutubeThumbnail(item)} alt={item.title} />
            <span className="gallery-thumb-play"><Play size={14} fill="currentColor" /></span>
          </div>
        )}
      />

      <GalleryRail
        title="Photo gallery"
        items={visiblePhotos}
        onPrevious={() => movePhotos(-1)}
        onNext={() => movePhotos(1)}
        onSelect={(item) => setSelectedMedia({ kind: 'photo', item })}
        renderItem={(item) => (
          <div className="gallery-media-thumb gallery-photo-thumb">
            <img src={item.image} alt={item.title} />
          </div>
        )}
      />

      {selectedMedia && (
        <div className={`gallery-lightbox ${selectedMedia.kind === 'video' ? 'gallery-video-lightbox' : ''}`} role="dialog" aria-modal="true" aria-label={selectedMedia.item.title}>
          <button className="gallery-lightbox-close" onClick={() => setSelectedMedia(null)} aria-label="Close media viewer">
            <X size={22} />
          </button>
          <div className="gallery-lightbox-content">
            {selectedMedia.kind === 'video' && selectedMedia.item.url ? (
              <iframe
                src={getYoutubeEmbedUrl(selectedMedia.item.url)}
                title={selectedMedia.item.title}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : selectedMedia.kind === 'photo' ? (
              <img src={selectedMedia.item.image} alt={selectedMedia.item.title} />
            ) : null}
            <h3>{selectedMedia.item.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
}

type GalleryRailProps<T extends GalleryVideo | GalleryPhoto> = {
  title: string;
  items: T[];
  onPrevious?: () => void;
  onNext?: () => void;
  showControls?: boolean;
  onSelect: (item: T) => void;
  renderItem: (item: T) => React.ReactNode;
};

function GalleryRail<T extends GalleryVideo | GalleryPhoto>({ title, items, onPrevious, onNext, showControls = true, onSelect, renderItem }: GalleryRailProps<T>) {
  return (
    <div className="gallery-rail">
      <div className="gallery-rail-heading">
        <h3>{title}</h3>
        {showControls && onPrevious && onNext && (
          <div>
            <button onClick={onPrevious} aria-label={`Previous ${title}`}><ChevronLeft size={18} /></button>
            <button onClick={onNext} aria-label={`Next ${title}`}><ChevronRight size={18} /></button>
          </div>
        )}
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



