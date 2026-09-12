import CollaborateCTA from '../components/sections/CollaborateCTA';
import ProcessSection from '../components/sections/ProcessSection';
import ProductionsSection from '../components/sections/ProductionsSection';
import ServicesSection from '../components/sections/ServicesSection';
import VenturesSection from '../components/sections/VenturesSection';
import WorkSection from '../components/sections/WorkSection';

type WorkPageProps = {
  onGoContact: () => void;
};

function WorkPage({ onGoContact }: WorkPageProps) {
  return (
    <>
      <VenturesSection />
      <ProductionsSection onGoContact={onGoContact} />
      <WorkSection onGoContact={onGoContact} />
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
