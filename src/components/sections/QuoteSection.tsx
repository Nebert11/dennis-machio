import { Quote } from 'lucide-react';

function QuoteSection() {
  return (
    <section className="quote-section section-pad">
      <Quote size={30} className="quote-mark" />
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
