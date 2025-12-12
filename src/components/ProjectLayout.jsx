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
    coreCompetencies,
    experience,
    screenshots,
    timeline,
    tags,
    link
  } = project;

  return (
    <article className="project-layout">
      {/* Header */}
      <header className="project-layout__header">
        <h1 className="heading-l">{title}</h1>
        {summary && <p className="text-body">{summary}</p>}
      </header>

      {/* Problem */}
      <section className="project-layout__section">
        <h2 className="heading-m section-header">Problem</h2>
        <p className="text-body">{problem}</p>
      </section>

      {/* Role */}
      <section className="project-layout__section">
        <h2 className="heading-m section-header">Role</h2>
        <p className="text-body">{role}</p>
      </section>

      {/* Solution */}
      <section className="project-layout__section">
        <h2 className="heading-m section-header">Solution</h2>
        <ul className="project-list">
          {solution?.map((item, idx) => (
            <li key={idx} className="text-body">{item}</li>
          ))}
        </ul>
      </section>

      {/* Impact */}
      <section className="project-layout__section">
        <h2 className="heading-m section-header">Impact</h2>
        <ul className="project-list">
          {impact?.map((item, idx) => (
            <li key={idx} className="text-body">{item}</li>
          ))}
        </ul>
      </section>

      {/* Core Competencies */}
      {coreCompetencies && (
        <section className="project-layout__section">
          <h2 className="heading-m section-header">Core Competencies</h2>
          {coreCompetencies.map((group, idx) => (
            <div key={idx} className="competency-group">
              <h3 className="heading-s">{group.category}</h3>
              <ul className="project-list">
                {group.items.map((item, index) => (
                  <li key={index} className="text-body">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Experience by Role */}
      {experience && (
        <section className="project-layout__section">
          <h2 className="heading-m section-header">Experience by Role</h2>
          {experience.map((roleItem, idx) => (
            <div key={idx} className="experience-block">
              <h3 className="heading-s">
                {roleItem.role} — {roleItem.organization}
              </h3>
              <ul className="project-list">
                {roleItem.highlights.map((item, index) => (
                  <li key={index} className="text-body">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Screenshots */}
      {screenshots && screenshots.length > 0 && (
        <section className="project-layout__section">
          <h2 className="heading-m section-header">Screenshots</h2>
          <ProjectScreenshotCarousel images={screenshots} />
        </section>
      )}
    </article>
  );
}