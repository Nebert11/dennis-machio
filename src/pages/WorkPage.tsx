import CollaborateCTA from '../components/sections/CollaborateCTA';
import PageHero from '../components/sections/PageHero';
import ProcessSection from '../components/sections/ProcessSection';
import ProductionsSection from '../components/sections/ProductionsSection';
import ServicesSection from '../components/sections/ServicesSection';
import VenturesSection from '../components/sections/VenturesSection';
// import WorkSection from '../components/sections/WorkSection';
import WorkIntroSection from '../components/sections/WorkIntroSection';

type WorkPageProps = {
  onGoContact: () => void;
  onViewProject: (slug: string) => void;
  onViewVenture: (ventureId: string) => void;
};

function WorkPage({ onGoContact, onViewVenture }: WorkPageProps) {
  return (
    <>
      <PageHero
        kicker="Selected Work"
        kickerTag="Portfolio"
        variant="work-hero"
        title={
          <>
            Films, campaigns
            <br />
            &amp; <em>broadcasts.</em>
          </>
        }
        description="A selection of productions, brand films and live experiences created across Africa."
      />
      <WorkIntroSection />
      <VenturesSection onGoContact={onGoContact} onViewVenture={onViewVenture} />
      <ProductionsSection onGoContact={onGoContact} />
      {/* <WorkSection onGoContact={onGoContact} onViewProject={onViewProject} /> */}
      <ServicesSection onGoContact={onGoContact} />
      <ProcessSection />
      <CollaborateCTA onGoContact={onGoContact} />
    </>
  );
}

export default WorkPage;
