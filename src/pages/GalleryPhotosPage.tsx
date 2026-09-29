import { ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { galleryPhotos } from '../data/siteContent';

function GalleryPhotosPage() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [thumbsOpen, setThumbsOpen] = useState(false);
  // Alternates so consecutive same-direction slides use a distinct animation name and always restart.
  const [animAlt, setAnimAlt] = useState(false);
  const thumbRailRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  // Measured in pixels (not a CSS "%") so the closed position is always exact, regardless of content height.
  const [panelHeight, setPanelHeight] = useState(0);

  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel) return undefined;

    const updateHeight = () => setPanelHeight(panel.offsetHeight);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(panel);
    return () => observer.disconnect();
  }, []);

  const goTo = (nextIndex: number) => {
    const total = galleryPhotos.length;
    const wrapped = (nextIndex + total) % total;
    setDirection(nextIndex > index ? 1 : -1);
    setIndex(wrapped);
    setAnimAlt((current) => !current);
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const interval = window.setInterval(() => {
      setDirection(1);
      setIndex((current) => (current + 1) % galleryPhotos.length);
      setAnimAlt((current) => !current);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') goTo(index + 1);
      if (event.key === 'ArrowLeft') goTo(index - 1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    // Only when open, and scroll the rail's own scrollLeft directly (not scrollIntoView,
    // which can scroll an off-screen ancestor into view and defeat the hide transform).
    if (!thumbsOpen) return;
    const rail = thumbRailRef.current;
    const activeThumb = rail?.children[index] as HTMLElement | undefined;
    if (!rail || !activeThumb) return;
    const target = activeThumb.offsetLeft - (rail.clientWidth - activeThumb.clientWidth) / 2;
    rail.scrollTo({ left: target, behavior: 'smooth' });
  }, [index, thumbsOpen]);

  const current = galleryPhotos[index];

  return (
    <section
      className="photo-gallery-page"
      aria-label="Photo gallery"
    >
      <div className="photo-lightbox-stage">
        <button className="photo-lightbox-arrow photo-lightbox-arrow-prev" onClick={() => goTo(index - 1)} aria-label="Previous photo">
          <ChevronLeft size={26} />
        </button>
        <div className="photo-lightbox-frame">
          <img
            key={current.id}
            src={current.image}
            alt={current.title}
            className={direction >= 0
              ? (animAlt ? 'photo-slide-in-right-alt' : 'photo-slide-in-right')
              : (animAlt ? 'photo-slide-in-left-alt' : 'photo-slide-in-left')}
          />
        </div>
        <button className="photo-lightbox-arrow photo-lightbox-arrow-next" onClick={() => goTo(index + 1)} aria-label="Next photo">
          <ChevronRight size={26} />
        </button>
      </div>

      <button
        type="button"
        className={`photo-gallery-toggle${thumbsOpen ? ' is-active' : ''}`}
        onClick={() => setThumbsOpen((open) => !open)}
        aria-label={thumbsOpen ? 'Hide all photos' : 'Show all photos'}
        aria-expanded={thumbsOpen}
      >
        <LayoutGrid size={20} />
      </button>

      <div
        className={`photo-gallery-footer-panel${thumbsOpen ? ' is-open' : ''}`}
        ref={panelRef}
        style={{ transform: `translateY(${thumbsOpen ? 0 : panelHeight}px)` }}
      >
        <div className="photo-lightbox-footer">
          <span className="photo-lightbox-counter">{index + 1} / {galleryPhotos.length}</span>
          <div className="photo-lightbox-thumbs" ref={thumbRailRef}>
            {galleryPhotos.map((photo, photoIndex) => (
              <button
                className={`photo-lightbox-thumb ${photoIndex === index ? 'is-active' : ''}`}
                key={photo.id}
                onClick={() => goTo(photoIndex)}
                aria-label={`View ${photo.title}`}
                aria-current={photoIndex === index}
              >
                <img src={photo.image} alt="" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GalleryPhotosPage;
