import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const { slug, title, summary } = project;
  return (
    <article className="card">
      <h3 className="card-title">{title}</h3>
      {summary && <p className="text-body">{summary}</p>}
      {slug && (
        <Link to={`/work/${slug}`} className="card-link">
          View project
        </Link>
      )}
    </article>
  );
}
