import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects, workCategories } from '../../data/siteContent';

type WorkSectionProps = {
  onGoContact: () => void;
  onViewProject: (slug: string) => void;
};

function WorkSection({ onGoContact, onViewProject }: WorkSectionProps) {
  const total = projects.length;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(query.matches);
    const handleChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return undefined;

    let frame = 0;
    const update = () => {
      frame = 0;
      const el = wrapperRef.current;
      if (!el) return;
      const viewportHeight = window.innerHeight;
      const rect = el.getBoundingClientRect();
      const scrollableDistance = rect.height - viewportHeight;
      const traveled = Math.min(Math.max(-rect.top, 0), Math.max(scrollableDistance, 0));
      const raw = scrollableDistance > 0 ? traveled / viewportHeight : 0;
      setProgress(Math.min(Math.max(raw, 0), total - 1));
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reducedMotion, total]);

  return (
    <section className="work section-pad">
      <div className="section-heading">
        <div>
          <div className="section-kicker">
            Visual Identity <span>Explore My Work</span>
          </div>
          <h2>
            Selected <em>work.</em>
          </h2>
        </div>
        <button className="text-link" onClick={onGoContact}>
          Start a project <ArrowUpRight size={16} />
        </button>
      </div>
      <div className="work-categories" aria-label="Work categories">
        {workCategories.map((category) => (
          <span className="work-category" key={category}>{category}</span>
        ))}
      </div>

      {reducedMotion ? (
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <button
                  className="project-arrow"
                  onClick={() => onViewProject(project.slug)}
                  aria-label={`View ${project.title}`}
                >
                  <ArrowUpRight size={21} />
                </button>
              </div>
              <div className="project-info">
                <div>
                  <p className="project-type">{project.category}</p>
                  <h3>{project.title}</h3>
                  {project.role && <p className="project-role">Role: {project.role}</p>}
                  {project.tags && (
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="work-reel" ref={wrapperRef} style={{ height: `${total * 100}vh` }}>
          <div className="work-reel-sticky">
            {projects.map((project, index) => {
              const distance = index - progress;
              const clamped = Math.min(Math.max(distance, -1), 1);
              const magnitude = Math.abs(clamped);
              // keep each project fully visible for most of its segment; only
              // crossfade briefly around the boundary so text never double-exposes
              const plateau = 0.4;
              const fadeSpan = 0.2;
              const fade = Math.min(Math.max((magnitude - plateau) / fadeSpan, 0), 1);
              const eased = fade * fade * (3 - 2 * fade);
              const isActive = Math.abs(distance) < 0.5;

              return (
                <article
                  className="work-reel-project"
                  key={project.number}
                  aria-hidden={!isActive}
                  style={{
                    opacity: 1 - eased,
                    transform: `translate3d(0, ${clamped * 64}px, 0) scale(${1 - eased * 0.06})`,
                    zIndex: total - Math.round(magnitude * total),
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  <div className="work-reel-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                  <div className="work-reel-info">
                    <p className="work-reel-type">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p className="work-reel-detail">{project.detail}</p>
                    <div className="work-reel-meta">
                      {project.year && <span className="work-reel-year">{project.year}</span>}
                      {project.role && <span className="work-reel-role">{project.role}</span>}
                    </div>
                    {project.tags && (
                      <div className="project-tags">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag-pill">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <button className="work-reel-link" onClick={() => onViewProject(project.slug)}>
                      View Project <ArrowUpRight size={16} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

export default WorkSection;
