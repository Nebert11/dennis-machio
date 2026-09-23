import { ArrowUpRight } from 'lucide-react';

type StatementSectionProps = {
  onGoStory?: () => void;
};

function StatementSection({ onGoStory }: StatementSectionProps) {
  return (
    <section className="statement section-pad">
      <div className="section-kicker">
        Core Philosophy <span>01</span>
      </div>
      <div className="statement-grid">
        <h2>
          We don&apos;t just make <span>content.</span>
          <br />
          We create legacy.
        </h2>
        <div>
          <p>
            The most powerful stories do more than document what happened — they reveal why it matters, connect
            people to purpose, and leave something lasting behind.
          </p>
          {onGoStory && (
            <button className="text-link" onClick={onGoStory}>
              Read My Story <ArrowUpRight size={16} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default StatementSection;
