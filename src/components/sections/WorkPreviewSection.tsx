import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/siteContent';

type WorkPreviewSectionProps = {
  onGoWork: () => void;
};

function WorkPreviewSection({ onGoWork }: WorkPreviewSectionProps) {
  const previewProjects = projects.slice(0, 2);

  return (
    <section className="work-preview-section section-pad">
      <div className="section-heading">
        <div>
          <div className="section-kicker">
            My Selected Work <span>Two Featured Productions</span>
          </div>
          <h2>
            Where the <em>stories live.</em>
          </h2>
        </div>
        <button className="text-link" onClick={onGoWork}>
          View Full Portfolio <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="work-preview-grid">
        {previewProjects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <button
                className="project-arrow"
                onClick={onGoWork}
                aria-label={`View ${project.title}`}
              >
                <ArrowUpRight size={21} />
              </button>
            </div>
            <div className="project-info">
              <div>
                <p className="project-type">{project.category}</p>
                <h3>{project.title}</h3>
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

      <button className="text-link work-preview-more" onClick={onGoWork}>
        Explore all selected work <ArrowUpRight size={16} />
      </button>
    </section>
  );
}

export default WorkPreviewSection;
