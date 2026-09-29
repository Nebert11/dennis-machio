import CollaborateCTA from '../components/sections/CollaborateCTA';
import GallerySection from '../components/sections/GallerySection';
import PageHero from '../components/sections/PageHero';

type GalleryPageProps = {
  onGoContact: () => void;
};

function GalleryPage({ onGoContact }: GalleryPageProps) {
  return (
    <>
      <PageHero
        kicker="Gallery"
        kickerTag=""
        title={
          <>
            Stories in <em>motion.</em>
          </>
        }
        description="A growing collection of films and broadcasts from the work."
      />
      <GallerySection onGoContact={onGoContact} />
      <CollaborateCTA onGoContact={onGoContact} />
    </>
  );
}

export default GalleryPage;
