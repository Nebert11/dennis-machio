import { useState } from 'react';
import { services } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="relative bg-ink py-24 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.3em] text-ash">
            What I do
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-display font-light leading-[0.9] tracking-[-0.02em] text-bone text-[11vw] md:text-[6vw]">
            Five disciplines, one goal
          </h2>
        </Reveal>

        <div className="mt-20 md:mt-32">
          {services.map((s, i) => {
            const isActive = active === i;
            return (
              <div
                key={s.id}
                className="group relative border-t border-white/10"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                <div className="grid grid-cols-12 items-center gap-4 py-10 md:py-14 transition-colors duration-500">
                  <span className="col-span-2 md:col-span-1 font-display text-sm text-ash-light tracking-widest">
                    {s.index}
                  </span>

                  <h3
                    className="col-span-10 md:col-span-7 font-display font-light leading-[1] tracking-[-0.02em] transition-all duration-500 text-[7vw] md:text-[3.2vw] lg:text-[2.8vw]"
                    style={{
                      color: 'var(--color-bone)',
                      transform: isActive ? 'translateX(16px)' : 'translateX(0)',
                      opacity: isActive ? 1 : 0.85,
                    }}
                  >
                    {s.title}
                  </h3>

                  <div className="col-span-12 md:col-span-4">
                    <p
                      className="text-sm md:text-base leading-relaxed text-bone/55 transition-all duration-500"
                      style={{
                        opacity: isActive ? 1 : 0.4,
                        transform: isActive ? 'translateY(0)' : 'translateY(4px)',
                      }}
                    >
                      {s.description}
                    </p>
                  </div>
                </div>

                {/* Always-visible image strip */}
                <div
                  className="overflow-hidden transition-all duration-700"
                  style={{
                    maxHeight: isActive ? '320px' : '180px',
                    opacity: isActive ? 1 : 0.5,
                  }}
                >
                  <div className="relative h-[180px] w-full md:h-[320px]">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      style={{ filter: 'grayscale(0.2) brightness(0.85)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
