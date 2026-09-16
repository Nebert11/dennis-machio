import ContactSection from '../components/sections/ContactSection';
import ClientLogoStrip from '../components/sections/ClientLogoStrip';
import PageHero from '../components/sections/PageHero';

function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Have a story worth telling?"
        kickerTag="Get in touch"
        title={
          <>
            Let&apos;s <em>Collaborate.</em>
          </>
        }
        description="Whether you're launching a campaign, documenting impact, producing a conference or building a brand, I can help you turn your message into a powerful visual experience."
      />
      <ContactSection />
      <ClientLogoStrip />
    </>
  );
}

export default ContactPage;
