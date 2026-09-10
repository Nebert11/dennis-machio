import { Reveal, MaskText } from '@/components/Reveal';

const philosophyImage =
  'https://images.pexels.com/photos/3379938/pexels-photo-3379938.jpeg?auto=compress&cs=tinysrgb&w=1600';
const philosophyImage2 =
  'https://images.pexels.com/photos/5026523/pexels-photo-5026523.jpeg?auto=compress&cs=tinysrgb&w=1600';

export function VisualStorytelling() {
  return (
    <section className="relative overflow-hidden bg-ink py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          {/* Image */}
          <div className="md:col-span-5">
            <Reveal slow>
              <div className="relative h-[60vh] w-full overflow-hidden md:h-[80vh]">
                <img
                  src={philosophyImage}
                  alt="Filmmaker at work"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  style={{ filter: 'grayscale(0.25) brightness(0.8)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              </div>
            </Reveal>
          </div>

          {/* Typography */}
          <div className="md:col-span-7 md:pl-10 flex flex-col justify-center">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.3em] text-ash">
                Philosophy
              </p>
            </Reveal>

            <div className="mt-8">
              <Reveal as="h2">
                <span className="font-display font-light leading-[0.92] tracking-[-0.02em] text-bone text-[10vw] md:text-[6vw] lg:text-[5.5vw]">
                  <MaskText>Good stories</MaskText>
                  <br />
                  <MaskText delay={120}>don't just</MaskText>{' '}
                  <MaskText delay={240} className="italic text-accent">
                    inform.
                  </MaskText>
                </span>
              </Reveal>
            </div>

            <div className="mt-8">
              <Reveal as="h2" delay={200}>
                <span className="font-display font-light leading-[0.92] tracking-[-0.02em] text-bone/60 text-[10vw] md:text-[6vw] lg:text-[5.5vw]">
                  <MaskText>They move</MaskText>{' '}
                  <MaskText delay={120}>people.</MaskText>
                </span>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Second image — full-bleed strip */}
        <Reveal slow delay={200}>
          <div className="relative mt-16 h-[40vh] w-full overflow-hidden md:mt-24 md:h-[55vh]">
            <img
              src={philosophyImage2}
              alt="Reviewing footage on set"
              className="h-full w-full object-cover"
              loading="lazy"
              style={{ filter: 'grayscale(0.2) brightness(0.85)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
