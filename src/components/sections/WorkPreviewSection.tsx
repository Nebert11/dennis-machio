import { ArrowUpRight } from 'lucide-react';
import { projects, ventures } from '../../data/siteContent';

type WorkPreviewSectionProps = {
  onGoWork: () => void;
};

function WorkPreviewSection({ onGoWork }: WorkPreviewSectionProps) {
  // Take 2 top preview items for concise teaser
  const previewProjects = projects.slice(0, 2);

  return (
    <section className="work-preview-section section-pad">
      <div className="section-heading">
        <div>
          <div className="section-kicker">
            Page Preview <span>02 / Selected Work</span>
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
              <span className="project-number">{project.number}</span>
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
                <p className="project-type">{project.type}</p>
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
              <p className="project-detail">{project.detail}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="work-preview-ventures-bar">
        <div className="ventures-bar-content">
          <span className="ventures-bar-label">Ventures &amp; Broadcast:</span>
          <div className="ventures-bar-pills">
            {ventures.map((v) => (
              <span key={v.id} className="ventures-bar-pill">
                <strong>{v.title}</strong> · {v.badge}
              </span>
            ))}
            <span className="ventures-bar-pill">
              <strong>TV &amp; Broadcast</strong> · The Amakovewala Show · EU-Kenya Forum
            </span>
          </div>
        </div>
        <button className="button button-light" onClick={onGoWork}>
          Explore All Work &amp; Disciplines <ArrowUpRight size={16} />
        </button>
      </div>
    </section>
  );
}

export default WorkPreviewSection;
