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

  const { title, summary, problem, role, solution, impact, screenshots } = project;

  return (
    <article className="project-layout">
      <header className="project-layout__header">
        <h1 className="heading-l">{title}</h1>
        {summary && <p className="text-body">{summary}</p>}
      </header>

      <section className="project-layout__section">
        <h2 className="heading-m">Problem</h2>
        <p className="text-body">
          {problem || "TODO: Add problem description."}
        </p>
      </section>

      <section className="project-layout__section">
        <h2 className="heading-m">Role</h2>
        <p className="text-body">
          {role || "TODO: Add role description."}
        </p>
      </section>

      <section className="project-layout__section">
        <h2 className="heading-m">Solution</h2>
        <p className="text-body">
          {solution || "TODO: Add solution description."}
        </p>
      </section>

      {screenshots && screenshots.length > 0 && (
        <section className="project-layout__section project-layout__section--screenshots">
          <ProjectScreenshotCarousel screenshots={screenshots} />
        </section>
      )}

      <section className="project-layout__section">
        <h2 className="heading-m">Impact</h2>
        <p className="text-body">
          {impact || "TODO: Add impact description."}
        </p>
      </section>
    </article>
  );
}
