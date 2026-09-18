import ContactSection from '../components/sections/ContactSection';
import ClientLogoStrip from '../components/sections/ClientLogoStrip';

function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero-copy section-pad">
          <div className="section-kicker contact-hero-kicker">
            Have a story worth telling?
          </div>
          <h1>
            Let&apos;s <em>Collaborate.</em>
          </h1>
          <p>
            Whether you&apos;re launching a campaign, documenting impact, producing a conference or building a
            brand, I can help you turn your message into a powerful visual experience.
          </p>
        </div>
        <div className="contact-hero-photo">
          <img src="/images/new_images/contact-hero.jpg" alt="Dennis Machio on set at a live production" />
        </div>
      </section>
      <ContactSection />
      <ClientLogoStrip />
    </>
  );
}

export default ContactPage;
