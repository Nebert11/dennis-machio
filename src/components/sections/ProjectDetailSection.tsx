import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types/site';

type ProjectDetailSectionProps = {
  project: Project | undefined;
  onBackToWork: () => void;
  onGoContact: () => void;
};

function ProjectDetailSection({ project, onBackToWork, onGoContact }: ProjectDetailSectionProps) {
  if (!project) {
    return (
      <section className="project-detail-page section-pad">
        <button className="project-detail-back" onClick={onBackToWork}>
          <ArrowLeft size={16} /> Back to Selected Work
        </button>
        <div className="project-detail-notfound">
          <h2>Project not found.</h2>
          <p>This project may have been renamed or removed. Head back to see everything we&apos;ve made.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="project-detail-page section-pad">
      <button className="project-detail-back" onClick={onBackToWork}>
        <ArrowLeft size={16} /> Back to Selected Work
      </button>

      <div className="project-detail-media">
        <img src={project.image} alt={project.title} />
        <span className="project-detail-number">{project.number}</span>
      </div>

      <div className="project-detail-body">
        <p className="project-detail-type">{project.type}</p>
        <h1>{project.title}</h1>
        <p className="project-detail-copy">{project.detail}</p>

        <div className="project-detail-meta">
          {project.year && (
            <div>
              <span className="project-detail-meta-label">Year</span>
              <span>{project.year}</span>
            </div>
          )}
          {project.role && (
            <div>
              <span className="project-detail-meta-label">Role</span>
              <span>{project.role}</span>
            </div>
          )}
        </div>

        {project.tags && (
          <div className="project-tags project-detail-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
        )}

        <button className="button button-primary" onClick={onGoContact}>
          Start a similar project <ArrowUpRight size={16} />
        </button>
      </div>
    </section>
  );
}

export default ProjectDetailSection;
