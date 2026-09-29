import CollaborateCTA from '../components/sections/CollaborateCTA';
import InitiativesOverviewSection from '../components/sections/InitiativesOverviewSection';
import PageHero from '../components/sections/PageHero';

type ServicesPageProps = {
  onGoContact: () => void;
  onViewInitiative: (initiativeId: string) => void;
};

function ServicesPage({ onGoContact, onViewInitiative }: ServicesPageProps) {
  return (
    <>
      <PageHero
        kicker="Initiatives"
        kickerTag=""
        title={
          <>
            Work that extends
            <br />
            <em>beyond production.</em>
          </>
        }
        description="Creative platforms and initiatives built around storytelling, sport, culture and the next generation of creative voices."
      />
      <InitiativesOverviewSection onViewInitiative={onViewInitiative} />
      <CollaborateCTA onGoContact={onGoContact} />
    </>
  );
}

export default ServicesPage;
