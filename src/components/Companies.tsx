import { Reveal, MaskText } from '@/components/Reveal';
import { ArrowUpRight } from 'lucide-react';

const dencastImage =
  'https://images.pexels.com/photos/38059003/pexels-photo-38059003.jpeg?auto=compress&cs=tinysrgb&w=1600';
const michezoImage =
  'https://images.pexels.com/photos/20254635/pexels-photo-20254635.jpeg?auto=compress&cs=tinysrgb&w=1600';

export function Companies() {
  return (
    <section className="relative bg-ink">
      {/* Dencast Global — full-bleed image left, text right */}
      <div className="relative overflow-hidden border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[55vh] overflow-hidden md:h-auto md:min-h-[80vh]">
            <img
              src={dencastImage}
              alt="Dencast Global production"
              className="h-full w-full object-cover"
              loading="lazy"
              style={{ filter: 'grayscale(0.2) brightness(0.8)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/40 to-transparent" />
          </div>
          <div className="flex flex-col justify-center px-6 py-20 md:px-16 md:py-32 lg:px-24">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.3em] text-ash">
                Founder / Director / Lead Producer
              </p>
            </Reveal>
            <div className="mt-6">
              <Reveal as="h2">
                <span className="font-display font-light leading-[0.9] tracking-[-0.02em] text-bone text-[10vw] md:text-[5vw] lg:text-[4.5vw]">
                  <MaskText>Dencast</MaskText>{' '}
                  <MaskText delay={120} className="italic text-accent">
                    Global
                  </MaskText>
                </span>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-bone/50">
                Creative Production & Communications
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-8 max-w-lg text-base md:text-lg leading-relaxed text-bone/65">
                A creative production and communications company helping
                organizations tell better stories — documentaries, live events,
                brand films and campaigns across Africa.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <a
                href="https://www.dencastglobal.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-bone/80 transition-colors hover:text-accent"
              >
                Visit Dencast Global
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Michezo Afrika — inverted layout, full-bleed image right */}
      <div className="relative overflow-hidden border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="order-2 flex flex-col justify-center px-6 py-20 md:order-1 md:px-16 md:py-32 lg:px-24">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.3em] text-ash">
                Lead Editor
              </p>
            </Reveal>
            <div className="mt-6">
              <Reveal as="h2">
                <span className="font-display font-light leading-[0.9] tracking-[-0.02em] text-bone text-[10vw] md:text-[5vw] lg:text-[4.5vw]">
                  <MaskText>Michezo</MaskText>{' '}
                  <MaskText delay={120} className="italic text-accent">
                    Afrika
                  </MaskText>
                </span>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-bone/50">
                Telling the story of African sport
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-8 max-w-lg text-base md:text-lg leading-relaxed text-bone/65">
                Sports journalism and multimedia content that connects athletes,
                teams and communities through stories beyond scores and results.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <a
                href="https://www.michezoafrika.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-bone/80 transition-colors hover:text-accent"
              >
                Visit Michezo Afrika
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Reveal>
          </div>
          <div className="relative order-1 h-[55vh] overflow-hidden md:order-2 md:h-auto md:min-h-[80vh]">
            <img
              src={michezoImage}
              alt="African sport"
              className="h-full w-full object-cover"
              loading="lazy"
              style={{ filter: 'grayscale(0.15) brightness(0.85)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-ink/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
