import { Reveal } from '@/components/Reveal';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/30396798/pexels-photo-30396798.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Film crew on set',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/8102677/pexels-photo-8102677.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Video editing',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/159400/television-camera-men-outdoors-ballgame-159400.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Sports broadcast',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/33925166/pexels-photo-33925166.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Live event production',
    span: 'md:col-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/23531613/pexels-photo-23531613.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Cinematographer at work',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/6253568/pexels-photo-6253568.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Editing timeline',
    span: '',
  },
];

export function Gallery() {
  return (
    <section className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.3em] text-ash">
            In the field
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[280px]">
          {galleryImages.map((img, i) => (
            <Reveal key={i} delay={i * 60} slow>
              <div
                className={`group relative h-[40vh] overflow-hidden md:h-full ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  style={{ filter: 'grayscale(0.2) brightness(0.85)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-20" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
