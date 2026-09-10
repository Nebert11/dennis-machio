import { type ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  slow?: boolean;
  as?: 'div' | 'section' | 'span' | 'li' | 'p' | 'h2' | 'h3';
};

export function Reveal({
  children,
  className = '',
  delay = 0,
  slow = false,
  as = 'div',
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Tag = as as 'div';

  return (
    <Tag
      ref={ref}
      className={`reveal ${slow ? 'reveal-slow' : ''} ${
        visible ? 'is-visible' : ''
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

type MaskProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function MaskText({ children, className = '', delay = 0 }: MaskProps) {
  const { ref, visible } = useReveal<HTMLSpanElement>();
  return (
    <span ref={ref} className={`mask-line ${visible ? 'is-visible' : ''}`}>
      <span
        className={`mask-text ${className}`}
        style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      >
        {children}
      </span>
    </span>
  );
}
