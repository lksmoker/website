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
    ownership,
    successCriteria,
    problem,
    role,
    solution,
    impact,
    evidence,
    experience,
    screenshots,
    timeline,
    tags,
    link,
    tech,
    keyDecisions,
    tradeoffs, // Constraints & Tradeoffs content
  } = project;

  const isOpsLogistics = slug === "operations-workflow";

  // ─────────────────────────────────────────────────────────────
  // Helpers
  // ─────────────────────────────────────────────────────────────

  // Normal list coercion (supports array or single string)
  const toList = (val) => {
    if (val == null) return [];
    if (Array.isArray(val)) return val.filter(Boolean);
    return [val].filter(Boolean);
  };

  // Split a string like "react typescript supabase" into ["react","typescript","supabase"]
  // Keeps arrays as-is.
  const toSlugList = (val) => {
    if (val == null) return [];
    if (Array.isArray(val)) return val.filter(Boolean);

    if (typeof val === "string") {
      return val
        .split(/\s+/)
        .map((s) => s.trim())
        .filter(Boolean);
    }

    // If somehow an object sneaks in, wrap it so we don't crash.
    return [val].filter(Boolean);
  };

  const hasList = (val) => toList(val).length > 0;

  // Normalize tech shapes from projects.json (string or array)
  const techIds = toSlugList(tech?.ids);
  const techBullets = toList(tech?.bullets);

  const tagsList = Array.isArray(tags) ? tags : toList(tags);

  const hasTech = techIds.length > 0 || techBullets.length > 0;
  const hasRole = Boolean(role);
  const hasProblem = hasList(problem);
  const hasSolution = hasList(solution);
  const hasKeyDecisions = hasList(keyDecisions);
  const hasImpact = hasList(impact);
  const hasTradeoffs = hasList(tradeoffs);
  const hasLink = Boolean(link && link.href);
  const hasEvidence = hasList(evidence);
  const hasOwnership = Boolean(ownership);
  const hasSuccessCriteria = Boolean(successCriteria);

  // Option A: Right column is the "Evidence" column.
  const hasAside =
    hasTech ||
    hasOwnership ||
    hasSuccessCriteria ||
    hasKeyDecisions ||
    hasImpact ||
    hasTradeoffs ||
    hasLink;

  const renderBody = (items) => {
    const list = toList(items);
    if (list.length === 0) return null;

    if (list.length === 1) {
      return <p className="text-body">{list[0]}</p>;
    }

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

  const OwnershipSection = hasOwnership ? (
    <Section title="Ownership" aside>
      <p className="text-body">{ownership}</p>
    </Section>
  ) : null;

  const SuccessCriteriaSection = hasSuccessCriteria ? (
    <Section title="Success criteria" aside>
      <p className="text-body">{successCriteria}</p>
    </Section>
  ) : null;

  const SolutionSection = hasSolution ? (
    <Section title="Solution">{renderBody(solution)}</Section>
  ) : null;

  const TechSection = hasTech ? (
    <Section title="Tech Stack" aside>
      {techIds.length > 0 && (
        <div className="project-layout__meta project-layout__meta--tech">
          {techIds.map((id) => (
            <span key={String(id)} className="project-layout__meta-item">
              {String(id)}
            </span>
          ))}
        </div>
      )}

      {techBullets.length > 0 && <div>{renderBody(techBullets)}</div>}
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

        {(timeline || (tagsList && tagsList.length > 0)) && (
          <div className="project-layout__meta">
            {timeline && <span className="project-layout__meta-item">{timeline}</span>}

            {tagsList && tagsList.length > 0 && (
              <span className="project-layout__meta-item project-layout__tags">
                {tagsList.join(" · ")}
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
          {/* Product framing */}
          {(hasRole || hasOwnership || hasSuccessCriteria) && (
            <section className="project-layout__section">
              <h2 className="heading-m section-header">Product Framing</h2>

              {hasRole && (
                <p className="text-body">
                  <strong>Role:</strong> {role}
                </p>
              )}

              {hasOwnership && (
                <p className="text-body">
                  <strong>Ownership:</strong> {ownership}
                </p>
              )}

              {hasSuccessCriteria && (
                <p className="text-body">
                  <strong>Success criteria:</strong> {successCriteria}
                </p>
              )}
            </section>
          )}

          {/* Evidence (skimmable proof bullets) */}
          {(hasEvidence || hasLink) && (
            <section className="project-layout__section">
              <h2 className="heading-m section-header">Highlights</h2>
              {renderBody(evidence)}

              {hasLink && (
                <div style={{ marginTop: "0.75rem" }}>
                  <a href={link.href} className="inline-link">
                    {link.label || "Featured case"}
                  </a>
                </div>
              )}
            </section>
          )}

          {/* Experience */}
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
            {OwnershipSection}
            {SuccessCriteriaSection}
            {TechSection}
            {KeyDecisionsSection}
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
                  {OwnershipSection}
                  {SuccessCriteriaSection}
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
