const careerStages = [
  { name: 'Michezo Afrika', years: '2010 - 2015' },
  { name: 'Building a Production Identity', years: '2015 - 2020' },
  { name: 'Dencast Global', years: '2021 - Present' },
];

function CareerTimeline() {
  return (
    <section className="career-timeline section-pad">
      <div className="career-timeline-inner">
        <div className="section-kicker">
          Career Path <span>Resilience · Mentorship · Growth</span>
        </div>
        <div className="career-timeline-track">
          {careerStages.map((stage, index) => (
            <div className="career-stage" key={stage.name}>
              <div className="career-stage-marker" aria-hidden="true" />
              <div className="career-stage-copy">
                <h3>{stage.name}</h3>
                <p>{stage.years}</p>
              </div>
              {index < careerStages.length - 1 && (
                <span className="career-stage-arrow" aria-hidden="true">
                  &rarr;
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="career-timeline-caption">A journey of Resilience, mentorship and Growth</p>
      </div>
    </section>
  );
}

export default CareerTimeline;