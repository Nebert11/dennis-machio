import { Introduction } from '@/components/Introduction';
import { VisualStorytelling } from '@/components/VisualStorytelling';
import { Gallery } from '@/components/Gallery';
import { Companies } from '@/components/Companies';
import { Reveal } from '@/components/Reveal';
import { journey } from '@/data/content';

function Journey() {
  return (
    <section className="relative bg-ink py-24 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.3em] text-ash">
            The Journey
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-display font-light leading-[0.9] tracking-[-0.02em] text-bone text-[11vw] md:text-[6vw]">
            How it came together
          </h2>
        </Reveal>

        <div className="mt-20 md:mt-32">
          {journey.map((item, i) => (
            <Reveal key={`${item.year}-${i}`} delay={i * 80}>
              <div className="grid grid-cols-1 gap-8 border-t border-white/10 py-12 md:grid-cols-12 md:py-16">
                <div className="md:col-span-2">
                  <span className="font-display text-3xl md:text-4xl font-light text-accent">
                    {item.year}
                  </span>
                </div>
                <div className="md:col-span-5">
                  <div className="relative h-[40vh] w-full overflow-hidden md:h-[50vh]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      style={{ filter: 'grayscale(0.2) brightness(0.82)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                  </div>
                </div>
                <div className="md:col-span-5 flex flex-col justify-center">
                  <h3 className="font-display text-xl md:text-2xl font-light text-bone">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-bone/60">
                    {item.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StoryPage() {
  return (
    <div className="pt-20">
      <Introduction />
      <VisualStorytelling />
      <Gallery />
      <Journey />
      <Companies />
    </div>
  );
}
