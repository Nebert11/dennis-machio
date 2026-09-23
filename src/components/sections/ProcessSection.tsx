import { processStages } from '../../data/siteContent';

function ProcessSection() {
  return (
    <section className="process-section section-pad">
      <div className="section-kicker">
        How we work
      </div>
      <div className="process-heading">
        <h2>
          From spark to <em>screen.</em>
        </h2>
        <p>
          A disciplined five-step pipeline built to safeguard narrative clarity, technical rigor, and
          creative ambition at every milestone.
        </p>
      </div>
      <div className="process-grid">
        {processStages.map((stage) => (
          <div key={stage.step} className="process-card">
            <span className="process-step">{stage.step}</span>
            <h3>{stage.title}</h3>
            <p>{stage.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProcessSection;
