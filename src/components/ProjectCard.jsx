// src/components/ProjectCard.jsx
import React from "react";

export default function ProjectCard({ project }) {
  if (!project) return null;

  const { title, summary } = project;

  return (
    <article className="project-card">
      <h3 className="project-card__title">{title}</h3>
      {summary && <p className="project-card__summary">{summary}</p>}
    </article>
  );
}