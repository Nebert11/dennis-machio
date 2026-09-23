import CollaborateCTA from '../components/sections/CollaborateCTA';
import MusicDevelopmentSection from '../components/sections/MusicDevelopmentSection';
import PageHero from '../components/sections/PageHero';

type ServicesPageProps = {
  onGoContact: () => void;
  onViewProfile: (profileId: string) => void;
};

function ServicesPage({ onGoContact, onViewProfile }: ServicesPageProps) {
  return (
    <>
      <PageHero
        kicker="Initiatives"
        kickerTag=""
        title={
          <>
            Music &amp; talent
            <br />
            <em>development.</em>
          </>
        }
        description="Nurturing music, celebrating talent, and building a lasting creative legacy across Western Kenya."
      />
      <MusicDevelopmentSection onViewProfile={onViewProfile} />
      <CollaborateCTA onGoContact={onGoContact} />
    </>
  );
}

export default ServicesPage;
