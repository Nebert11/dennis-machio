import type { ReactNode } from 'react';

type PageHeroProps = {
  kicker: string;
  kickerTag: string;
  title: ReactNode;
  description?: string;
  variant?: string;
};

function PageHero({ kicker, kickerTag, title, description, variant }: PageHeroProps) {
  return (
    <section className={`page-hero section-pad${variant ? ` ${variant}` : ''}`}>
      {variant === 'insights-hero' && <div className="insights-hero-visual" aria-hidden="true" />}
      <div className="section-kicker">
        {kicker} <span>{kickerTag}</span>
      </div>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </section>
  );
}

export default PageHero;
