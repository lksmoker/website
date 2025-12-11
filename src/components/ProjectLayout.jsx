// src/components/ProjectLayout.jsx
import React from "react";
import ProjectScreenshotCarousel from "./ProjectScreenshotCarousel.jsx";
import TechStackIcons from "./TechStackIcons.jsx";

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
    tech,
  } = project;

  const innovationsList = Array.isArray(innovations)
    ? innovations
    : innovations
    ? [innovations]
    : [];

  return (
    <article className="project-layout">
      {/* ── HEADER: title, meta, summary ─────────────────────── */}
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

      {/* ── SCREENSHOTS NEAR TOP ─────────────────────────────── */}
      {screenshots && screenshots.length > 0 && (
        <section className="project-layout__section project-layout__section--screenshots">
          <ProjectScreenshotCarousel screenshots={screenshots} />
        </section>
      )}

      {/* ── TECH STACK DIRECTLY UNDER SCREENSHOTS ───────────── */}
      {tech && (tech.ids || tech.bullets) && (
        <section className="project-layout__section project-layout__section--tech">
          <header className="section-header">
            <h2 className="heading-m section-header__title">
              Tech stack &amp; implementation
            </h2>
          </header>

          {tech.ids && tech.ids.length > 0 && (
            <div className="project-layout__tech-icons">
              <TechStackIcons ids={tech.ids} label={`Tech stack for ${title}`} />
            </div>
          )}

          {tech.bullets && tech.bullets.length > 0 && (
            <ul className="tech-bullets-list">
              {tech.bullets.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* ── ROLE ─────────────────────────────────────────────── */}
      <section className="project-layout__section">
        <header className="section-header">
          <h2 className="heading-m section-header__title">Role</h2>
        </header>
        <p className="text-body">
          {role || "TODO: Add role description."}
        </p>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────────── */}
      <section className="project-layout__section">
        <header className="section-header">
          <h2 className="heading-m section-header__title">Problem</h2>
        </header>
        <p className="text-body">
          {problem || "TODO: Add problem description."}
        </p>
      </section>

      {/* ── SOLUTION ─────────────────────────────────────────── */}
      <section className="project-layout__section">
        <header className="section-header">
          <h2 className="heading-m section-header__title">Solution</h2>
        </header>
        <p className="text-body">
          {solution || "TODO: Add solution description."}
        </p>
      </section>

      {/* ── INNOVATIONS (optional) ───────────────────────────── */}
      {innovationsList.length > 0 && (
        <section className="project-layout__section">
          <header className="section-header">
            <h2 className="heading-m section-header__title">Innovations</h2>
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

      {/* ── IMPACT ───────────────────────────────────────────── */}
      <section className="project-layout__section">
        <header className="section-header">
          <h2 className="heading-m section-header__title">Impact</h2>
        </header>
        <p className="text-body">
          {impact || "TODO: Add impact description."}
        </p>
      </section>

      {/* ── CTA / LINK ──────────────────────────────────────── */}
      {link && link.href && (
        <section className="project-layout__section project-layout__section--cta">
          <header className="section-header">
            <h2 className="heading-m section-header__title">Learn More</h2>
          </header>
          <a href={link.href} className="project-layout__link-cta">
            {link.label || "Open related page"}
          </a>
        </section>
      )}
    </article>
  );
}