import { Reveal, MaskText } from '@/components/Reveal';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const contactImage =
  'https://images.pexels.com/photos/26743060/pexels-photo-26743060.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={contactImage}
          alt="Production lighting"
          className="h-full w-full object-cover"
          loading="lazy"
          style={{ filter: 'grayscale(0.4) brightness(0.35)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-32 text-center md:px-10">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.3em] text-bone/50">
            Contact
          </p>
        </Reveal>

        <div className="mt-10">
          <Reveal as="h2">
            <span className="font-display font-light leading-[0.88] tracking-[-0.03em] text-bone text-[13vw] md:text-[9vw] lg:text-[8vw]">
              <MaskText>Have a story</MaskText>
              <br />
              <MaskText delay={120} className="italic text-accent">
                worth telling?
              </MaskText>
            </span>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <p className="mx-auto mt-10 max-w-xl text-base md:text-xl leading-relaxed text-bone/70">
            Let's turn your message into a powerful visual experience.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <a
            href="mailto:hello@dennismachio.com"
            className="group mt-12 inline-flex items-center gap-3 font-display text-2xl md:text-4xl font-light text-bone transition-colors hover:text-accent"
          >
            Start a conversation
            <ArrowUpRight
              size={28}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </Reveal>

        {/* Contact details */}
        <Reveal delay={400}>
          <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 border-t border-white/10 pt-12 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-ash">
                Based in
              </p>
              <p className="mt-2 text-sm text-bone/80">Nairobi, Kenya</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-ash">
                Working across
              </p>
              <p className="mt-2 text-sm text-bone/80">Africa</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-ash">
                Email
              </p>
              <a
                href="mailto:hello@dennismachio.com"
                className="mt-2 block text-sm text-bone/80 transition-colors hover:text-accent"
              >
                hello@dennismachio.com
              </a>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-ash">
                Phone
              </p>
              <a
                href="tel:+254721710397"
                className="mt-2 block text-sm text-bone/80 transition-colors hover:text-accent"
              >
                +254 721 710 397
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-ink border-t border-white/10">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-display text-2xl md:text-3xl font-light text-bone">
              Dennis Machio
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-ash-light">
              Film Producer · Creative Director · Media Strategist
            </p>
            <p className="mt-6 text-sm text-bone/50">
              Nairobi, Kenya — Working across Africa
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-ash">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {[
                { label: 'Work', path: '/work' },
                { label: 'Story', path: '/story' },
                { label: 'Services', path: '/services' },
                { label: 'Contact', path: '/contact' },
              ].map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-sm text-bone/60 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-ash">
              Elsewhere
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/dennis_machio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-bone/60 transition-colors hover:text-accent"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/dmachio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-bone/60 transition-colors hover:text-accent"
                >
                  X / Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://ke.linkedin.com/in/dennis-machio-21536b1a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-bone/60 transition-colors hover:text-accent"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-ash">
            © 2026 Dennis Machio. All rights reserved.
          </p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-ash">
            Stories that move audiences.
          </p>
        </div>
      </div>
    </footer>
  );
}
