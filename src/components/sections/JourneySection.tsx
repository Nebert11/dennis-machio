import { images, journeyTimeline } from '../../data/siteContent';

function JourneySection() {
  return (
    <section className="journey-section section-pad">
      <div className="journey-frame">
        <div className="journey-content">
          <div className="section-kicker">
            The Journey <span>Timeline</span>
          </div>
          <div className="journey-heading">
            <h2>
              How it came <em>together.</em>
            </h2>
            <p>
              A decade of craft, enterprise, and deep commitment to telling Africa&apos;s most vital stories.
            </p>
          </div>

          <div className="journey-timeline">
            {journeyTimeline.map((item, index) => (
              <div key={item.title} className="timeline-card">
                <div className="timeline-left">
                  <span className="timeline-year">{item.year}</span>
                  <span className="timeline-tag">{item.tag}</span>
                </div>
                <div className="timeline-divider">
                  <span className="timeline-dot" />
                  {index !== journeyTimeline.length - 1 && <span className="timeline-line" />}
                </div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="journey-portrait">
          <img src={images.portraitTwo} alt="Dennis Machio" />
        </div>
      </div>
    </section>
  );
}

export default JourneySection;
