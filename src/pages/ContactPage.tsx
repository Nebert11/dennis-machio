import ContactSection from '../components/sections/ContactSection';
import PageHero from '../components/sections/PageHero';
import VenturesSection from '../components/sections/VenturesSection';

function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Have a story worth telling?"
        kickerTag="Get in touch"
        title={
          <>
            Let&apos;s shape <em>your story.</em>
          </>
        }
        description="Documentaries, live broadcasts, brand films or something that doesn't fit neatly into a category yet — let's talk."
      />
      <ContactSection />
      <VenturesSection />
    </>
  );
}

export default ContactPage;
