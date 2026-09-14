import ProjectDetailSection from '../components/sections/ProjectDetailSection';
import CollaborateCTA from '../components/sections/CollaborateCTA';
import type { Project } from '../types/site';

type ProjectPageProps = {
  project: Project | undefined;
  onBackToWork: () => void;
  onGoContact: () => void;
};

function ProjectPage({ project, onBackToWork, onGoContact }: ProjectPageProps) {
  return (
    <>
      <ProjectDetailSection project={project} onBackToWork={onBackToWork} onGoContact={onGoContact} />
      <CollaborateCTA onGoContact={onGoContact} />
    </>
  );
}

export default ProjectPage;
