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
    keyDecisions,
    tradeoffs, // NEW: Constraints & Tradeoffs content
  } = project;

  const isOpsLogistics = slug === "operations-workflow";

  // ─────────────────────────────────────────────────────────────
  // Helpers
  // ─────────────────────────────────────────────────────────────

  const toList = (val) => (Array.isArray(val) ? val : val ? [val] : []);
  const hasList = (val) => toList(val).length > 0;

  const hasTech = Boolean(tech && (tech.ids?.length > 0 || tech.bullets?.length > 0));
  const hasRole = Boolean(role);
  const hasProblem = hasList(problem);
  const hasSolution = hasList(solution);
  const hasKeyDecisions = hasList(keyDecisions);
  const hasImpact = hasList(impact);
  const hasTradeoffs = hasList(tradeoffs);
  const hasLink = Boolean(link && link.href);

  // Option A: Right column is the "Evidence" column.
  const hasAside = hasTech || hasKeyDecisions || hasImpact || hasTradeoffs || hasLink;

  const renderBody = (items) => {
    const list = toList(items);
    if (list.length === 0) return null;
    if (list.length === 1) return <p className="text-body">{list[0]}</p>;

    return (
      <ul className="project-list">
        {list.map((item, idx) => (
          <li key={idx} className="text-body">
            {item}
          </li>
        ))}
      </ul>
    );
  };

  const Section = ({ title, children, aside = false }) => (
    <section
      className={
        aside
          ? "project-layout__section project-layout__section--aside"
          : "project-layout__section"
      }
    >
      <h2 className="heading-m section-header">{title}</h2>
      {children}
    </section>
  );

  // ─────────────────────────────────────────────────────────────
  // Sections (reused across mobile + desktop)
  // ─────────────────────────────────────────────────────────────

  const ScreenshotsSection =
    screenshots && screenshots.length > 0 ? (
      <Section title="Screenshots">
        <ProjectScreenshotCarousel screenshots={screenshots} />
      </Section>
    ) : null;

  const RoleSection = hasRole ? (
    <Section title="Role">
      <p className="text-body">{role}</p>
    </Section>
  ) : null;

  const ProblemSection = hasProblem ? (
    <Section title="Problem">{renderBody(problem)}</Section>
  ) : null;

  const SolutionSection = hasSolution ? (
    <Section title="Solution">{renderBody(solution)}</Section>
  ) : null;

  const TechSection = hasTech ? (
    <Section title="Tech Stack" aside>
      {tech?.ids && tech.ids.length > 0 && (
        <div className="project-layout__meta project-layout__meta--tech">
          {tech.ids.map((id) => (
            <span key={id} className="project-layout__meta-item">
              {id}
            </span>
          ))}
        </div>
      )}

      {tech?.bullets && tech.bullets.length > 0 && <div>{renderBody(tech.bullets)}</div>}
    </Section>
  ) : null;

  const KeyDecisionsSection = hasKeyDecisions ? (
    <Section title="Key product decisions" aside>
      {renderBody(keyDecisions)}
    </Section>
  ) : null;

  const ImpactSection = hasImpact ? (
    <Section title="Impact" aside>
      {renderBody(impact)}
    </Section>
  ) : null;

  const TradeoffsSection = hasTradeoffs ? (
    <Section title="Constraints &amp; Tradeoffs" aside>
      {renderBody(tradeoffs)}
    </Section>
  ) : null;

  const LinkSection = hasLink ? (
    <section className="project-layout__section project-layout__section--aside">
      <a href={link.href} className="project-layout__link">
        {link.label || "View related link"}
      </a>
    </section>
  ) : null;

  // ─────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────

  return (
    <article className="project-layout">
      {/* Header / overview */}
      <header className="project-layout__header">
        <h1 className="heading-l">{title}</h1>

        {(timeline || (tags && tags.length > 0)) && (
          <div className="project-layout__meta">
            {timeline && <span className="project-layout__meta-item">{timeline}</span>}
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
          {/* Narrative first (now supports the GAS mini-case fields) */}
          {ProblemSection}
          {SolutionSection}

          {/* Evidence block (rendered inline for Ops since we don't use the grid layout here) */}
          {hasTech && (
            <section className="project-layout__section">
              <h2 className="heading-m section-header">Evidence</h2>

              {/* Reuse the same section blocks but keep them visually grouped */}
              <div className="project-layout__aside-inner">
                {TechSection}
                {KeyDecisionsSection}
                {ImpactSection}
                {TradeoffsSection}
                {LinkSection}
              </div>
            </section>
          )}

          {/* If no tech, still show the evidence sections that exist */}
          {!hasTech && (hasKeyDecisions || hasImpact || hasTradeoffs || hasLink) && (
            <section className="project-layout__section">
              <h2 className="heading-m section-header">Evidence</h2>
              <div className="project-layout__aside-inner">
                {KeyDecisionsSection}
                {ImpactSection}
                {TradeoffsSection}
                {LinkSection}
              </div>
            </section>
          )}

          {/* Experience stays where it was (and now comes after the mini-case) */}
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
            {TradeoffsSection}
            {LinkSection}
          </div>

          {/* ────────────────────────────────────────────────
             DESKTOP GRID (Option A: Evidence on the right)
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
              <aside className="project-layout__aside" aria-label="Project evidence">
                <div className="project-layout__aside-inner">
                  {TechSection}
                  {KeyDecisionsSection}
                  {ImpactSection}
                  {TradeoffsSection}
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
