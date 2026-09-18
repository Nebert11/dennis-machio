import { Quote } from 'lucide-react';

function QuoteSection() {
  return (
    <section className="quote-section testimonials-section section-pad">
      <div className="testimonial-heading">
        <span className="section-kicker">Testimonials</span>
        <span>Client Perspective</span>
      </div>
      <Quote size={28} className="quote-mark" aria-hidden="true" />
      <blockquote>
        &ldquo;Dencast Global is the home of quality. They have offered us quality yet affordable services with
        excellence and mastery. From when we were starting out to this time when we are established, they have
        continued to relentlessly believe in us and grow with us. Thank you Dennis Machio and your team. Invest in
        Dencast Global and your organization will never be the same again.&rdquo;
      </blockquote>
      <div className="quote-attribution">
        <span className="avatar">CW</span>
        <span>
          <strong>Caren Wakoli</strong>
          <small>Founder &amp; Executive Director, Emerging Leaders Foundation</small>
        </span>
      </div>
    </section>
  );
}

export default QuoteSection;
