// src/components/ProjectCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  if (!project) return null;

  const {
    slug,
    title,
    summary,
    thumbnail,
    outcome,     // NEW: optional outcome field in projects.json
    meta,
    tags,
    category,
  } = project;

  const metaLabel =
    meta ||
    category ||
    (Array.isArray(tags) && tags.length > 0 ? tags.join(" · ") : null);

  const linkTo = `/work/${slug}`;

  return (
    <article className="card project-card">
      <h3 className="card-title">{title}</h3>

      {thumbnail && (
        <div className="project-card-thumb-wrapper">
          <img
            src={thumbnail}
            alt={`${title} screenshot`}
            className="project-card-thumb"
            loading="lazy"
          />
        </div>
      )}

      {summary && <p className="project-summary">{summary}</p>}

      {outcome && (
        <p className="project-outcome">
          <strong>Outcome:</strong> {outcome}
        </p>
      )}

      <Link to={linkTo} className="project-link">
        View project →
      </Link>
    </article>
  );
}
