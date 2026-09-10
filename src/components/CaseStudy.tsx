import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { X, ArrowLeft } from 'lucide-react';
import { projects } from '@/data/content';

export function CaseStudyPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    if (!project) navigate('/work');
  }, [project, navigate]);

  if (!project) return null;

  const nextIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(nextIndex + 1) % projects.length];

  return (
    <div className="fixed inset-0 z-[80] bg-ink overflow-y-auto">
      <div className="sticky top-0 z-10 flex items-center justify-between bg-ink/90 px-6 py-5 backdrop-blur-md md:px-10">
        <Link
          to="/work"
          className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-bone/70 transition-colors hover:text-bone"
        >
          <ArrowLeft size={16} /> All Work
        </Link>
        <span className="font-display text-sm text-bone/70 tracking-wide">
          {project.index} / {project.title}
        </span>
        <button
          onClick={() => navigate('/work')}
          className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-bone/70 transition-colors hover:text-bone"
        >
          Close <X size={16} />
        </button>
      </div>

      <div className="relative h-[60vh] w-full overflow-hidden md:h-[75vh]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          style={{ filter: 'grayscale(0.15) brightness(0.85)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
        <div className="absolute bottom-10 left-6 md:bottom-16 md:left-10">
          <h1 className="font-display font-light leading-[0.9] tracking-[-0.02em] text-bone text-[12vw] md:text-[7vw]">
            {project.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-2 gap-8 border-b border-white/10 pb-12 md:grid-cols-4">
          {[
            { label: 'Client', value: project.client },
            { label: 'Year', value: project.year },
            { label: 'Role', value: project.role },
            { label: 'Services', value: project.services.join(', ') },
          ].map((m) => (
            <div key={m.label}>
              <p className="text-[10px] uppercase tracking-[0.2em] text-ash">
                {m.label}
              </p>
              <p className="mt-2 text-sm text-bone/80">{m.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-12">
          {[
            { tag: 'The Brief', body: project.brief },
            { tag: 'The Approach', body: project.approach },
            { tag: 'The Production', body: project.production },
            { tag: 'The Result', body: project.result },
          ].map((s, i) => (
            <div
              key={s.tag}
              className="md:col-span-12 grid grid-cols-1 gap-6 md:grid-cols-12"
              style={{
                animation: `fadeUp 0.8s ${i * 0.1}s both cubic-bezier(0.16,1,0.3,1)`,
              }}
            >
              <div className="md:col-span-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                  {s.tag}
                </p>
              </div>
              <div className="md:col-span-9">
                <p className="font-display text-xl md:text-2xl lg:text-3xl font-light leading-[1.35] text-bone/85 text-balance">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 h-[50vh] w-full overflow-hidden md:h-[70vh]">
          <img
            src={project.image}
            alt={`${project.title} — detail`}
            className="h-full w-full object-cover"
            style={{ filter: 'grayscale(0.2)' }}
          />
        </div>

        <div className="mt-24 border-t border-white/10 pt-12 text-center">
          <Link
            to="/contact"
            className="font-display text-2xl md:text-4xl font-light text-bone/80 transition-colors hover:text-accent"
          >
            Have a story worth telling? <span className="text-accent">→</span>
          </Link>
        </div>

        <Link
          to={`/work/${nextProject.id}`}
          className="mt-16 flex items-center justify-between border-t border-white/10 pt-8 group"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-ash">
            Next Project
          </span>
          <span className="font-display text-xl md:text-3xl font-light text-bone/70 transition-colors group-hover:text-accent">
            {nextProject.title} <span className="text-accent">→</span>
          </span>
        </Link>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
