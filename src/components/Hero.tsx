import { useEffect, useRef, useState } from 'react';
import { useScrollProgress } from '@/hooks/useReveal';

const heroImage =
  'https://images.pexels.com/photos/30396798/pexels-photo-30396798.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function Hero() {
  const progress = useScrollProgress();
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Hero occupies ~2.5 viewports of scroll; local progress within that
  const local = Math.min(progress * 4, 1);

  const nameOpacity = Math.max(1 - local * 1.4, 0);
  const nameScale = 1 + local * 0.12;
  const nameY = local * 80;

  const bgScale = 1 + local * 0.18;
  const bgOpacity = Math.max(1 - local * 0.9, 0.15);

  const taglineOpacity = Math.min(Math.max(local - 0.35, 0) * 2.5, 1);
  const taglineY = (1 - taglineOpacity) * 60;

  const statementOpacity = Math.min(Math.max(local - 0.6, 0) * 3, 1);
  const statementY = (1 - statementOpacity) * 50;

  const scrollIndicatorOpacity = Math.max(1 - local * 3, 0);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative h-[250vh] w-full"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-ink">
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            transform: `scale(${bgScale})`,
            opacity: bgOpacity,
            transition: 'opacity 0.1s linear',
          }}
        >
          <img
            src={heroImage}
            alt="Film crew on set"
            className="h-full w-full object-cover"
            style={{ filter: 'grayscale(0.3) brightness(0.55)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink" />
        </div>

        {/* Top metadata labels */}
        <div
          className="absolute left-6 top-28 md:left-10 md:top-32 z-20 transition-opacity duration-700"
          style={{ opacity: nameOpacity }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-bone/50">
            Nairobi · Kenya
          </p>
        </div>
        <div
          className="absolute right-6 top-28 z-20 text-right transition-opacity duration-700 md:right-10 md:top-32"
          style={{ opacity: nameOpacity }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-bone/50">
            Est. 2021 — Dencast Global
          </p>
        </div>

        {/* Name — oversized, edge-aligned */}
        <div
          className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-10"
          style={{
            opacity: nameOpacity,
            transform: `translateY(${nameY}px) scale(${nameScale})`,
            transformOrigin: 'center center',
          }}
        >
          <h1 className="font-display font-light leading-[0.82] tracking-[-0.03em] text-bone">
            <span className="block text-[19vw] md:text-[16vw] lg:text-[15vw]">
              DENNIS
            </span>
            <span className="block text-[19vw] md:text-[16vw] lg:text-[15vw] pl-[12vw] md:pl-[18vw]">
              MACHIO
            </span>
          </h1>

          {/* Roles — positioned around the composition */}
          <div className="mt-6 flex flex-col gap-1 pl-[12vw] md:pl-[18vw]">
            <p className="text-[10px] uppercase tracking-[0.3em] text-bone/60 md:text-xs">
              Film Producer
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-bone/60 md:text-xs">
              Creative Director
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-bone/60 md:text-xs">
              Media Strategist
            </p>
          </div>
        </div>

        {/* Tagline — appears mid-scroll */}
        <div
          className="absolute inset-0 z-20 flex items-center justify-center px-6"
          style={{
            opacity: taglineOpacity,
            transform: `translateY(${taglineY}px)`,
          }}
        >
          <h2 className="font-display text-center font-light leading-[0.9] tracking-[-0.02em] text-bone">
            <span className="block text-[12vw] md:text-[8vw] lg:text-[7vw]">
              STORIES
            </span>
            <span className="block text-[12vw] md:text-[8vw] lg:text-[7vw]">
              THAT MOVE
            </span>
            <span className="block text-[12vw] md:text-[8vw] lg:text-[7vw] text-accent italic">
              AUDIENCES.
            </span>
          </h2>
        </div>

        {/* Statement — appears late scroll */}
        <div
          className="absolute inset-0 z-20 flex items-end justify-center px-6 pb-[14vh] md:pb-[16vh]"
          style={{
            opacity: statementOpacity,
            transform: `translateY(${statementY}px)`,
          }}
        >
          <p className="max-w-xl text-center text-sm leading-relaxed text-bone/70 md:text-base">
            Turning complex ideas into visual stories that connect, communicate
            and create impact across Africa.
          </p>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-bone/50">
            Scroll
          </span>
          <span className="text-bone/40 text-xs">↓</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-bone/50">
            Explore
          </span>
        </div>

        {/* Mounted fade-in for initial name */}
        {!mounted && <div className="absolute inset-0 bg-ink z-40" />}
      </div>
    </section>
  );
}
