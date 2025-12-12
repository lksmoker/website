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
    slug,
    title,
    summary,
    problem,
    role,
    solution,
    impact,
    experience,
    screenshots,
    timeline,
    tags,
    link
  } = project;

  const isOpsLogistics = slug === "operations-workflow";

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
              <span className="project-layout__meta-item project-layout__tags">
                {tags.join(" · ")}
              </span>
            )}
          </div>
        )}

        {summary && <p className="text-body">{summary}</p>}
      </header>

      {/* ────────────────────────────────────────────────
         SPECIAL LAYOUT FOR OPERATIONS & LOGISTICS
         ──────────────────────────────────────────────── */}
      {isOpsLogistics ? (
        <>
          {/* Experience by Role FIRST */}
          {experience && experience.length > 0 && (
            <section className="project-layout__section">
              <h2 className="heading-m section-header">Experience by Role</h2>
              {experience.map((roleItem, idx) => (
                <div key={idx} className="experience-block">
                  <h3 className="heading-s role-header">
                    {roleItem.role} — {roleItem.organization}
                  </h3>

                  {roleItem.highlights && roleItem.highlights.length > 0 && (
                    <ul className="project-list">
                      {roleItem.highlights.map((item, index) => (
                        <li key={index} className="text-body">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          )}
        </>
      ) : (
        <>
          {/* ────────────────────────────────────────────────
             DEFAULT LAYOUT FOR OTHER PROJECTS
             ──────────────────────────────────────────────── */}

          {/* Problem */}
          {problem && (
            <section className="project-layout__section">
              <h2 className="heading-m section-header">Problem</h2>
              <p className="text-body">{problem}</p>
            </section>
          )}

          {/* Role */}
          {role && (
            <section className="project-layout__section">
              <h2 className="heading-m section-header">Role</h2>
              <p className="text-body">{role}</p>
            </section>
          )}

          {/* Solution */}
          {solution && (
            <section className="project-layout__section">
              <h2 className="heading-m section-header">Solution</h2>
              {Array.isArray(solution) ? (
                <ul className="project-list">
                  {solution.map((item, idx) => (
                    <li key={idx} className="text-body">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-body">{solution}</p>
              )}
            </section>
          )}

          {/* Impact */}
          {impact && (
            <section className="project-layout__section">
              <h2 className="heading-m section-header">Impact</h2>
              {Array.isArray(impact) ? (
                <ul className="project-list">
                  {impact.map((item, idx) => (
                    <li key={idx} className="text-body">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-body">{impact}</p>
              )}
            </section>
          )}

          {/* Optional Experience Section for Other Projects */}
          {experience && experience.length > 0 && (
            <section className="project-layout__section">
              <h2 className="heading-m section-header">Experience</h2>
              {experience.map((roleItem, idx) => (
                <div key={idx} className="experience-block">
                  <h3 className="heading-s role-header">
                    {roleItem.role} — {roleItem.organization}
                  </h3>

                  {roleItem.highlights && roleItem.highlights.length > 0 && (
                    <ul className="project-list">
                      {roleItem.highlights.map((item, index) => (
                        <li key={index} className="text-body">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          )}
        </>
      )}

      {/* Screenshots (shared for all projects) */}
      {screenshots && screenshots.length > 0 && (
        <section className="project-layout__section">
          <h2 className="heading-m section-header">Screenshots</h2>
          <ProjectScreenshotCarousel images={screenshots} />
        </section>
      )}

      {/* Optional external link */}
      {link && link.href && (
        <section className="project-layout__section">
          <a href={link.href} className="project-layout__link">
            {link.label || "View related link"}
          </a>
        </section>
      )}
    </article>
  );
}