import { ArrowUpRight, Check, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { bioSummary } from '../../data/siteContent';

const projectTypes = [
  'Film & Documentary',
  'Live Event & Broadcast',
  'Brand Storytelling',
  'Strategic Communications',
  'Creative Direction',
  'Other / Consultation',
];

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState(projectTypes[0]);

  return (
    <section className="contact section-pad">
      <div className="contact-copy">
        <p>
          Whether it&apos;s a documentary, a live broadcast, a brand campaign, or something that doesn&apos;t fit
          neatly into a category yet — I&apos;d love to hear about it.
        </p>

        <div className="contact-details-list">
          <div className="contact-detail-card">
            <span className="contact-icon">
              <Phone size={18} />
            </span>
            <div>
              <small>Phone &amp; WhatsApp</small>
              <a href={`tel:${bioSummary.phone.replace(/\s+/g, '')}`}>{bioSummary.phone}</a>
            </div>
          </div>

          <div className="contact-detail-card">
            <span className="contact-icon">
              <Mail size={18} />
            </span>
            <div>
              <small>Email</small>
              <a href={`mailto:${bioSummary.email}`}>{bioSummary.email}</a>
              <a className="sub-email" href={`mailto:${bioSummary.secondaryEmail}`}>
                {bioSummary.secondaryEmail}
              </a>
            </div>
          </div>

          <div className="contact-detail-card">
            <span className="contact-icon">
              <MapPin size={18} />
            </span>
            <div>
              <small>Based In</small>
              <span>{bioSummary.location}</span>
            </div>
          </div>
        </div>
      </div>

      <form
        className="contact-form"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        {submitted ? (
          <div className="form-success">
            <span>
              <Check size={22} />
            </span>
            <h3>Message received.</h3>
            <p>Thank you for reaching out. Dennis and the team will get back to you shortly.</p>
            <button type="button" className="button button-light" onClick={() => setSubmitted(false)}>
              Send another enquiry <ArrowUpRight size={16} />
            </button>
          </div>
        ) : (
          <>
            <label>
              Your name
              <input type="text" required placeholder="Jane Doe" />
            </label>

            <label>
              Email address
              <input type="email" required placeholder="jane@organization.com" />
            </label>

            <label>
              Organization / Company
              <input type="text" placeholder="Your Brand or Agency" />
            </label>

            <div className="form-field-group">
              <span>Project Type</span>
              <div className="type-chips">
                {projectTypes.map((type) => (
                  <button
                    type="button"
                    key={type}
                    className={`chip-btn ${selectedType === type ? 'is-selected' : ''}`}
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <label>
              Tell us about the project
              <textarea
                required
                placeholder="Share your goals, timeline, deliverables, or questions..."
                rows={4}
              />
            </label>

            <button className="button button-light" type="submit">
              Send enquiry <Send size={16} />
            </button>
          </>
        )}
      </form>
    </section>
  );
}

export default ContactSection;
