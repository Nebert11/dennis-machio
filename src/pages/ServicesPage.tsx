import CollaborateCTA from '../components/sections/CollaborateCTA';
import PageHero from '../components/sections/PageHero';
import VenturesSection from '../components/sections/VenturesSection';

type ServicesPageProps = {
  onGoContact: () => void;
  onViewVenture: (ventureId: string) => void;
};

function ServicesPage({ onGoContact, onViewVenture }: ServicesPageProps) {
  return (
    <>
      <PageHero
        kicker="Initiatives"
        kickerTag=""
        title={
          <>
            Building platforms
            <br />
            &amp; <em>opportunity.</em>
          </>
        }
        description="Creative platforms and initiatives built around storytelling, sport, culture and the next generation of creative voices."
      />
      <VenturesSection onGoContact={onGoContact} onViewVenture={onViewVenture} />
      <CollaborateCTA onGoContact={onGoContact} />
    </>
  );
}

export default ServicesPage;
