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
    link,
    tech,
  } = project;

  const isOpsLogistics = slug === "operations-workflow";

  const hasTech = tech && (tech.ids?.length > 0 || tech.bullets?.length > 0);
  const hasRole = Boolean(role);
  const hasLink = Boolean(link && link.href);
  const hasKeyDecisions = project.keyDecisions?.length > 0;

  // Sidebar only exists if there is something meaningful to show.
  const hasAside = hasTech || hasKeyDecisions || hasLink || impact;

  const renderListOrText = (items) => {
    if (!items) return null;
    if (!Array.isArray(items)) return <p className="text-body">{items}</p>;
    if (items.length === 1) return <p className="text-body">{items[0]}</p>;

    return (
      <ul className="project-list">
        {items.map((item, idx) => (
          <li key={idx} className="text-body">
            {item}
          </li>
        ))}
      </ul>
    );
  };

  // ─────────────────────────────────────────────────────────────
  // SECTIONS (reuse across mobile + desktop without duplicating logic)
  // ─────────────────────────────────────────────────────────────

  const ScreenshotsSection =
    screenshots && screenshots.length > 0 ? (
      <section className="project-layout__section">
        <h2 className="heading-m section-header">Screenshots</h2>
        <ProjectScreenshotCarousel screenshots={screenshots} />
      </section>
    ) : null;

  const RoleSection = hasRole ? (
    <section className="project-layout__section">
      <h2 className="heading-m section-header">Role</h2>
      <p className="text-body">{role}</p>
    </section>
  ) : null;

  const ProblemSection = problem ? (
    <section className="project-layout__section">
      <h2 className="heading-m section-header">Problem</h2>
      <p className="text-body">{problem}</p>
    </section>
  ) : null;

  const SolutionSection = solution ? (
    <section className="project-layout__section">
      <h2 className="heading-m section-header">Solution</h2>
      {renderListOrText(solution)}
    </section>
  ) : null;

  const TechSection = hasTech ? (
    <section className="project-layout__section project-layout__section--aside">
      <h2 className="heading-m section-header">Tech Stack</h2>

      {tech.ids && tech.ids.length > 0 && (
        <div className="project-layout__meta project-layout__meta--tech">
          {tech.ids.map((id) => (
            <span key={id} className="project-layout__meta-item">
              {id}
            </span>
          ))}
        </div>
      )}

      {tech.bullets && tech.bullets.length > 0 && (
        <div>{renderListOrText(tech.bullets)}</div>
      )}
    </section>
  ) : null;

  const KeyDecisionsSection = hasKeyDecisions ? (
    <section className="project-layout__section project-layout__section--aside">
      <h2 className="heading-m section-header">Key product decisions</h2>
      {renderListOrText(project.keyDecisions)}
    </section>
  ) : null;

  const ImpactSection = impact ? (
    <section className="project-layout__section project-layout__section--aside">
      <h2 className="heading-m section-header">Impact</h2>
      {renderListOrText(impact)}
    </section>
  ) : null;

  const LinkSection = hasLink ? (
    <section className="project-layout__section project-layout__section--aside">
      <a href={link.href} className="project-layout__link">
        {link.label || "View related link"}
      </a>
    </section>
  ) : null;

  return (
    <article className="project-layout">
      {/* Header */}
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
         OPERATIONS / LOGISTICS SPECIAL LAYOUT
         ──────────────────────────────────────────────── */}
      {isOpsLogistics ? (
        <>
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

          {hasLink && (
            <section className="project-layout__section">
              <a href={link.href} className="project-layout__link">
                {link.label || "View related link"}
              </a>
            </section>
          )}
        </>
      ) : (
        <>
          {/* ────────────────────────────────────────────────
             MOBILE STACK (explicit order)
             ──────────────────────────────────────────────── */}
          <div className="project-layout__mobile">
            {ScreenshotsSection}
            {RoleSection}
            {TechSection}
            {KeyDecisionsSection}
            {ProblemSection}
            {SolutionSection}
            {ImpactSection}
            {LinkSection}
          </div>

          {/* ────────────────────────────────────────────────
             DESKTOP GRID (current behavior)
             ──────────────────────────────────────────────── */}
          <div
            className={
              hasAside
                ? "project-layout__grid"
                : "project-layout__grid project-layout__grid--no-aside"
            }
          >
            <div className="project-layout__main">
              {ScreenshotsSection}
              {RoleSection}
              {ProblemSection}
              {SolutionSection}
            </div>

            {hasAside && (
              <aside
                className="project-layout__aside"
                aria-label="Project details"
              >
                <div className="project-layout__aside-inner">
                  {TechSection}
                  {KeyDecisionsSection}
                  {ImpactSection}
                  {LinkSection}
                </div>
              </aside>
            )}
          </div>
        </>
      )}
    </article>
  );
}
