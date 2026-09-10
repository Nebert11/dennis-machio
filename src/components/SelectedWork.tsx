import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects, type Project } from '@/data/content';
import { Reveal } from '@/components/Reveal';

function ProjectRow({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <Link
      to={`/work/${project.id}`}
      className="group relative block cursor-pointer border-t border-white/10 py-12 md:py-20"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 items-center gap-6 px-6 md:px-10">
        <div className="col-span-2 md:col-span-1">
          <span className="font-display text-sm text-ash-light tracking-widest">
            {project.index}
          </span>
        </div>

        <div className="col-span-10 md:col-span-6">
          <h3
            className="font-display font-light leading-[0.95] tracking-[-0.02em] text-bone transition-all duration-700 text-[8vw] md:text-[4vw] lg:text-[3.4vw]"
            style={{
              transform: hovered ? 'translateX(12px)' : 'translateX(0)',
            }}
          >
            {project.title}
          </h3>
          <div
            className="mt-4 flex flex-wrap gap-x-4 gap-y-1 transition-opacity duration-500"
            style={{ opacity: hovered ? 1 : 0.5 }}
          >
            {project.services.map((s) => (
              <span
                key={s}
                className="text-[10px] uppercase tracking-[0.2em] text-ash-light"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="col-span-6 md:col-span-2 md:text-right">
          <p className="text-[10px] uppercase tracking-[0.2em] text-ash-light">
            {project.role}
          </p>
          <p className="mt-1 font-display text-lg text-bone/70">
            {project.year}
          </p>
        </div>

        <div className="col-span-6 md:col-span-3 flex items-center justify-end">
          <span
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-accent transition-all duration-500"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translateX(0)' : 'translateX(-10px)',
            }}
          >
            View Project <ArrowUpRight size={14} />
          </span>
        </div>
      </div>

      <div
        className="pointer-events-none absolute right-[8%] top-1/2 z-10 hidden h-48 w-72 overflow-hidden md:block lg:h-60 lg:w-96"
        style={{
          transform: `translateY(-50%) scale(${hovered ? 1 : 0.85})`,
          opacity: hovered ? 1 : 0,
          transition:
            'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <img
          ref={imgRef}
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          loading="lazy"
          style={{ filter: 'grayscale(0.2)' }}
        />
      </div>
    </Link>
  );
}

export function SelectedWork() {
  return (
    <section className="relative bg-ink py-24 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.3em] text-ash">
            Selected Work
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-display font-light leading-[0.9] tracking-[-0.02em] text-bone text-[11vw] md:text-[7vw] lg:text-[6vw]">
            Where the stories live
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-bone/60">
            Documentaries, corporate films, live productions and campaigns —
            each built on one belief: powerful storytelling leaves a lasting
            legacy.
          </p>
        </Reveal>
      </div>

      <div className="mt-20 md:mt-32">
        {projects.map((p) => (
          <ProjectRow key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
