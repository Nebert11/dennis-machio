import { stats } from '../../data/siteContent';

function StatsBar() {
  return (
    <section className="stats-bar section-pad">
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <span className="stat-value">{stat.value}</span>
            <strong className="stat-label">{stat.label}</strong>
            <small className="stat-subtext">{stat.subtext}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsBar;
