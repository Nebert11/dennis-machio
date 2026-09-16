import CollaborateCTA from '../components/sections/CollaborateCTA';
import PageHero from '../components/sections/PageHero';
import ServicesSection from '../components/sections/ServicesSection';

type ServicesPageProps = {
  onGoContact: () => void;
};

function ServicesPage({ onGoContact }: ServicesPageProps) {
  return (
    <>
      <PageHero
        kicker="What I Do"
        kickerTag="Capabilities"
        title={
          <>
            Ideas into <em>impact.</em>
          </>
        }
        description="Five disciplines for turning important ideas, experiences and stories into purposeful visual work."
      />
      <ServicesSection onGoContact={onGoContact} />
      <CollaborateCTA onGoContact={onGoContact} />
    </>
  );
}

export default ServicesPage;
