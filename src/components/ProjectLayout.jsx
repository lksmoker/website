// src/components/ProjectLayout.jsx
import React from "react";
import ProjectScreenshotCarousel from "./ProjectScreenshotCarousel.jsx";

export default function ProjectLayout({ project }) {
  if (!project) {
    return (
      <div className="text-body">
        Project not found. Please check the URL or return to Work &amp; Projects.
      </div>
    );
  }

  const {
    title,
    summary,
    problem,
    role,
    solution,
    impact,
    screenshots,
    timeline,
    tags,
    link,
    innovations,
  } = project;

  // Normalize innovations so we can handle either a string or an array
  const innovationsList = Array.isArray(innovations)
    ? innovations
    : innovations
    ? [innovations]
    : [];

  return (
    <article className="project-layout">
      {/* Header / overview */}
      <header className="project-layout__header">
        <h1 className="heading-l">{title}</h1>

        {(timeline || (tags && tags.length > 0)) && (
          <div className="project-layout__meta">
            {timeline && (
              <span className="project-layout__meta-item">{timeline}</span>
            )}
            {tags && tags.length > 0 && (
              <span className="project-layout__meta-item project-layout__meta-tags">
                {tags.join(" · ")}
              </span>
            )}
          </div>
        )}

        {summary && <p className="text-body">{summary}</p>}
      </header>

      {/* Core narrative sections */}
      <section className="project-layout__section">
        <header className="section-header">
          <h2 className="heading-m section-title">Problem</h2>
        </header>
        <p className="text-body">
          {problem || "TODO: Add problem description."}
        </p>
      </section>

      <section className="project-layout__section">
        <header className="section-header">
          <h2 className="heading-m section-title">Role</h2>
        </header>
        <p className="text-body">
          {role || "TODO: Add role description."}
        </p>
      </section>

      <section className="project-layout__section">
        <header className="section-header">
          <h2 className="heading-m section-title">Solution</h2>
        </header>
        <p className="text-body">
          {solution || "TODO: Add solution description."}
        </p>
      </section>

      {/* Innovations (optional) */}
      {innovationsList.length > 0 && (
        <section className="project-layout__section">
          <header className="section-header">
            <h2 className="heading-m section-title">Innovations</h2>
          </header>
          {innovationsList.length === 1 ? (
            <p className="text-body">{innovationsList[0]}</p>
          ) : (
            <ul className="text-body">
              {innovationsList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      )}

      <section className="project-layout__section">
        <header className="section-header">
          <h2 className="heading-m section-title">Impact</h2>
        </header>
        <p className="text-body">
          {impact || "TODO: Add impact description."}
        </p>
      </section>

      {/* Optional screenshots */}
      {screenshots && screenshots.length > 0 && (
        <section className="project-layout__section project-layout__section--screenshots">
          <header className="section-header">
            <h2 className="heading-m section-title">Screenshots</h2>
          </header>
          <ProjectScreenshotCarousel screenshots={screenshots} />
        </section>
      )}

      {/* Optional project-level CTA (e.g., link to Aurora page) */}
      {link && link.href && (
        <section className="project-layout__section project-layout__section--cta">
          <header className="section-header">
            <h2 className="heading-m section-title">Learn More</h2>
          </header>
          <a href={link.href} className="project-layout__link-cta">
            {link.label || "Open related page"}
          </a>
        </section>
      )}
    </article>
  );
}
