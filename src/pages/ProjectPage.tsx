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
      <CollaborateCTA
        onGoContact={onGoContact}
        title="Have a production or campaign to build?"
        subtitle="From documentary films to high-stakes live broadcasts and digital storytelling across Africa, let's talk about your vision."
      />
    </>
  );
}

export default ProjectPage;
