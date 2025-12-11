// src/components/ProjectCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import TechStackIcons from "./TechStackIcons.jsx";

// @context: {
//   "kind": "frontend.component",
//   "layer": "frontend",
//   "name": "ProjectCard",
//   "domains": ["marketing", "portfolio"],
//   "description": "Card used on the homepage and Work & Projects index, now supporting tech stack icons."
// }

export default function ProjectCard({ project }) {
  if (!project) return null;

  const {
    slug,
    title,
    summary,
    thumbnail,
    outcome,
    meta,
    tags,
    category,
    tech, // NEW: tech block from projects.json
  } = project;

  const metaLabel =
    meta ||
    category ||
    (Array.isArray(tags) && tags.length > 0 ? tags.join(" · ") : null);

  const linkTo = `/work/${slug}`;

  return (
    <article className="card project-card">
      {/* Title */}
      <h3 className="card-title">{title}</h3>

      {/* Thumbnail */}
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

      {/* Meta line (optional: tags/categories) */}
      {metaLabel && <p className="project-meta">{metaLabel}</p>}

      {/* Summary */}
      {summary && <p className="project-summary">{summary}</p>}

      {/* Outcome (optional) */}
      {outcome && (
        <p className="project-outcome">
          <strong>Outcome:</strong> {outcome}
        </p>
      )}

      {/* ──────────────────────────────────────────────
          TECH ICONS — NEW
          Displays small icons for the project's tech stack
         ────────────────────────────────────────────── */}
      {tech && tech.ids && tech.ids.length > 0 && (
        <div className="project-card-tech">
          <TechStackIcons
            ids={tech.ids}
            label={`Tech stack for ${title}`}
          />
        </div>
      )}

      {/* View project */}
      <Link to={linkTo} className="project-link">
        View project →
      </Link>
    </article>
  );
}