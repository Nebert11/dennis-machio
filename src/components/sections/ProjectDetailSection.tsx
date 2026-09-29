import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types/site';

type ProjectDetailSectionProps = {
  project: Project | undefined;
  onBackToWork: () => void;
  onGoContact: () => void;
};

const amakovePhotos = [
  '051A4553.jpg',
  '051A4618.jpg',
  '051A4733.jpg',
  '051A4805.jpg',
  '051A4986.jpg',
  'RMP_1292.JPG',
  'RMP_1396.JPG',
  'RMP_1866.JPG',
];

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

  if (project.slug === 'the-amakovewala-show') {
    return (
      <section className="amakove-page section-pad">
        <button className="project-detail-back" onClick={onBackToWork}>
          <ArrowLeft size={16} /> Back to Selected Work
        </button>
        <div className="amakove-heading">
          <p className="section-kicker">Studio Production <span>Amakove Wala</span></p>
          <h1>The Amakove Wala Show</h1>
          <p>Bringing meaningful conversations to life, from ideation and scripting to media training, studio production and post-production. Together with a team of industry professionals, we shaped a space for honest discussions about relationships, careers, family and challenging expectations.</p>
        </div>
        <div className="amakove-video">
          <iframe src="https://www.youtube.com/embed/D1QvoiMpK-Q" title="The Amakove Wala Show - Divorce and Separation" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
        <div className="amakove-gallery-heading">
          <p className="section-kicker">Behind The Scenes <span>In Photos</span></p>
          <h2>From set to screen.</h2>
        </div>
        <div className="amakove-gallery">
          {amakovePhotos.map((photo) => (
            <img key={photo} src={`/images/Amakove%20Wala%20/${encodeURIComponent(photo)}`} alt="The Amakove Wala Show production" loading="lazy" />
          ))}
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
