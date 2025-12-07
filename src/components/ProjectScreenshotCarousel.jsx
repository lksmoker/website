import React, { useState } from "react";

export default function ProjectScreenshotCarousel({ screenshots }) {
  if (!screenshots || screenshots.length === 0) return null;

  const [index, setIndex] = useState(0);
  const current = screenshots[index];

  const hasPrev = index > 0;
  const hasNext = index < screenshots.length - 1;

  const handlePrev = () => {
    if (hasPrev) setIndex((i) => i - 1);
  };

  const handleNext = () => {
    if (hasNext) setIndex((i) => i + 1);
  };

  return (
    <section className="project-screenshots">
      <header className="project-screenshots__header">
        <h2 className="project-screenshots__title">Screenshots</h2>
        {screenshots.length > 1 && (
          <div className="project-screenshots__meta">
            <span>
              {index + 1} / {screenshots.length}
            </span>
          </div>
        )}
      </header>

      <figure className="project-screenshots__figure">
        <img
          src={current.src}
          alt={current.alt}
          className="project-screenshots__image"
        />
        {current.caption && (
          <figcaption className="project-screenshots__caption">
            {current.caption}
          </figcaption>
        )}
      </figure>

      {screenshots.length > 1 && (
        <div className="project-screenshots__controls">
          <button
            type="button"
            onClick={handlePrev}
            disabled={!hasPrev}
            className="project-screenshots__button"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={!hasNext}
            className="project-screenshots__button"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
