// src/components/ProjectCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import TechStackIcons from "./TechStackIcons.jsx";

export default function ProjectCard({
  project,
  showRole = true,
  showOwnership = false,
  showSuccessCriteria = false,
}) {
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
    tech,
    role,
    ownership,
    successCriteria,
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

      {metaLabel && <p className="project-meta">{metaLabel}</p>}

      {showRole && role && (
        <p className="project-role">
          <strong>Role:</strong> {role}
        </p>
      )}

      {summary && <p className="project-summary">{summary}</p>}

      {showOwnership && ownership && (
        <p className="project-ownership">
          <strong>Ownership:</strong> {ownership}
        </p>
      )}

      {showSuccessCriteria && successCriteria && (
        <p className="project-success">
          <strong>Success:</strong> {successCriteria}
        </p>
      )}

      {outcome && (
        <p className="project-outcome">
          <strong>Outcome:</strong> {outcome}
        </p>
      )}

      {tech && tech.ids && tech.ids.length > 0 && (
        <div className="project-card-tech">
          <TechStackIcons ids={tech.ids} label={`Tech stack for ${title}`} />
        </div>
      )}

      <Link to={linkTo} className="project-link">
        View project →
      </Link>
    </article>
  );
}
