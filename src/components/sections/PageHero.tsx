import type { ReactNode } from 'react';

type PageHeroProps = {
  kicker: string;
  kickerTag: string;
  title: ReactNode;
  description?: string;
};

function PageHero({ kicker, kickerTag, title, description }: PageHeroProps) {
  return (
    <section className="page-hero section-pad">
      <div className="section-kicker">
        {kicker} <span>{kickerTag}</span>
      </div>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </section>
  );
}

export default PageHero;
