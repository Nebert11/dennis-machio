import CollaborateCTA from '../components/sections/CollaborateCTA';
import PageHero from '../components/sections/PageHero';
import ProcessSection from '../components/sections/ProcessSection';
import ProductionsSection from '../components/sections/ProductionsSection';
import ServicesSection from '../components/sections/ServicesSection';
import VenturesSection from '../components/sections/VenturesSection';
import WorkSection from '../components/sections/WorkSection';

type WorkPageProps = {
  onGoContact: () => void;
  onViewProject: (slug: string) => void;
};

function WorkPage({ onGoContact, onViewProject }: WorkPageProps) {
  return (
    <>
      <PageHero
        kicker="Featured Films & Projects"
        kickerTag="Portfolio"
        title={
          <>
            Selected work, <em>made to matter.</em>
          </>
        }
        description="Documentaries, live broadcasts, brand films and institutional stories produced across Africa."
      />
      <VenturesSection />
      <ProductionsSection onGoContact={onGoContact} />
      <WorkSection onGoContact={onGoContact} onViewProject={onViewProject} />
      <ServicesSection onGoContact={onGoContact} />
      <ProcessSection />
      <CollaborateCTA
        onGoContact={onGoContact}
        title="Have a production or campaign to build?"
        subtitle="From documentary films to high-stakes live broadcasts and digital storytelling across Africa, let's talk about your vision."
      />
    </>
  );
}

export default WorkPage;
