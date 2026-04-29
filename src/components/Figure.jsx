import { figureFor } from '../data/figures.js';

/**
 * Renders a question's figure (if any).
 * Looks up by question.id (e.g. "1D29"). Returns null if no figure registered.
 *
 *   <Figure questionId="1D29" />
 */
export function Figure({ questionId, className = '' }) {
  const fig = figureFor(questionId);
  if (!fig) return null;

  if (fig.type === 'image') {
    return (
      <figure className={'my-3 ' + className}>
        <img
          src={fig.src}
          alt={fig.alt || ''}
          loading="lazy"
          className="rounded-xl border border-hairline max-w-full max-h-72 object-contain bg-elevated"
        />
        {fig.caption && (
          <figcaption className="text-[11px] text-ink-dim mt-1 italic">{fig.caption}</figcaption>
        )}
      </figure>
    );
  }

  if (fig.type === 'svg') {
    return (
      <figure className={'my-3 ' + className}>
        <div
          className="rounded-xl"
          // SVG markup is generated server-side in figures.js — safe.
          dangerouslySetInnerHTML={{ __html: fig.svg }}
        />
        {fig.caption && (
          <figcaption className="text-[11px] text-ink-dim mt-1 italic">{fig.caption}</figcaption>
        )}
      </figure>
    );
  }

  return null;
}
