// src/components/ProjectCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  if (!project) return null;

  const { slug, title, summary } = project;

  if (!slug) {
    return (
      <article className="project-card">
        <h3 className="project-card__title">{title}</h3>
        {summary && <p className="project-card__summary">{summary}</p>}
      </article>
    );
  }

  return (
    <Link to={`/work/${slug}`} className="project-card__link-wrapper">
      <article className="project-card">
        <h3 className="project-card__title">{title}</h3>
        {summary && <p className="project-card__summary">{summary}</p>}
      </article>
    </Link>
  );
}
