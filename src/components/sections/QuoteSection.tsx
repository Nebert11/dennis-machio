import { Quote } from 'lucide-react';

function QuoteSection() {
  return (
    <section className="quote-section section-pad">
      <Quote size={30} className="quote-mark" />
      <blockquote>
        “Dencast understood our vision, pushed our thinking, and delivered something that felt genuinely like
        us.”
      </blockquote>
      <div className="quote-attribution">
        <span className="avatar">CK</span>
        <span>
          <strong>Caren Wakoli</strong>
          <small>Partner & client</small>
        </span>
      </div>
    </section>
  );
}

export default QuoteSection;
