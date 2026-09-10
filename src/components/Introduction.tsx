import { useEffect, useRef, useState } from 'react';
import { Reveal, MaskText } from '@/components/Reveal';

const stats = [
  { value: 10, suffix: '+', label: 'Years in film & production' },
  { value: 190, suffix: '+', label: 'Clients' },
  { value: 2, suffix: '', label: 'Companies founded / led' },
  { value: 0, suffix: '', label: 'Africa-wide footprint', text: true },
];

const portraitImage =
  'https://images.pexels.com/photos/4170573/pexels-photo-4170573.jpeg?auto=compress&cs=tinysrgb&w=1200';

function CountUp({
  target,
  suffix = '',
  text = false,
}: {
  target: number;
  suffix?: string;
  text?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1600;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setCount(Math.round(eased * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  if (text) {
    return (
      <span ref={ref} className="font-display text-[14vw] md:text-[10vw] lg:text-[8vw] font-light leading-none tracking-tight">
        AFRICA-WIDE
      </span>
    );
  }

  return (
    <span ref={ref} className="font-display text-[14vw] md:text-[10vw] lg:text-[8vw] font-light leading-none tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

export function Introduction() {
  return (
    <section id="story" className="relative bg-ink py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        {/* Large statement */}
        <div className="mb-24 md:mb-32 max-w-5xl">
          <Reveal as="h2">
            <span className="font-display font-light leading-[0.95] tracking-[-0.02em] text-bone text-[10vw] md:text-[7vw] lg:text-[6vw]">
              <MaskText>Stories that move</MaskText>{' '}
              <MaskText delay={120}>audiences</MaskText>{' '}
              <MaskText delay={240} className="italic text-accent">
                and build trust.
              </MaskText>
            </span>
          </Reveal>
        </div>

        {/* Introduction — image + condensed text */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Reveal slow>
              <div className="relative h-[50vh] w-full overflow-hidden md:h-[70vh]">
                <img
                  src={portraitImage}
                  alt="Dennis Machio behind the camera"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  style={{ filter: 'grayscale(0.2) brightness(0.82)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:pl-6 flex flex-col justify-center">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.3em] text-ash">
                Who I am
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 font-display text-2xl md:text-3xl lg:text-4xl font-light leading-[1.25] text-bone/90 text-balance">
                I'm Dennis Machio — Film Producer, Creative Director and Media
                Strategist, and Founder of{' '}
                <span className="text-accent">Dencast Global Limited</span>.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-bone/60">
                For more than a decade I've helped organizations across Africa
                turn complex ideas into visual stories that connect — strategy
                first, craft always, story at the center.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Credibility — large editorial numbers */}
        <div className="mt-32 md:mt-48 grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-16 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 120}>
              <div className="border-t border-white/10 pt-6">
                <CountUp
                  target={s.value}
                  suffix={s.suffix}
                  text={s.text}
                />
                <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-ash-light">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
