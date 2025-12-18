// src/pages/AuroraPage.jsx
import React from "react";
import auroraContent from "../content/aurora.json";
import projectsData from "../content/projects.json";
import SectionHeader from "../components/SectionHeader.jsx";
import TextBlock from "../components/TextBlock.jsx";
import { collection, list, bullets } from "../content/normalize";

export default function AuroraPage() {
  const { sections } = auroraContent;

  // Pull PM-bridge framing from the portfolio/project model
  const projects = collection(projectsData);
  const auroraProject = projects.find((p) => p.slug === "aurora");
  const pmBridge = auroraProject?.pmBridge;
  const pmBridgeBullets = bullets(pmBridge?.bullets);

  // Normalize content arrays so .map never crashes
  const whatItIs = list(sections?.whatItIs);
  const whyItMatters = list(sections?.whyItMatters);
  const origin = list(sections?.origin);
  const signals = list(sections?.signals);
  const whatItIsNot = list(sections?.whatItIsNot);
  const howItWorksSafe = list(sections?.howItWorksSafe);
  const futureDirection = list(sections?.futureDirection);

  return (
    <>
      {/* Leading conceptual question */}
      <section className="page-section">
        <p
          style={{
            fontStyle: "italic",
            fontSize: "1.25rem",
            marginBottom: "2.5rem",
            opacity: 0.85,
          }}
        >
          What if conversation was the development environment?
        </p>
      </section>

      {/* Top intro: what Aurora is */}
      <section className="page-section">
        <SectionHeader title="Aurora" />
        {whatItIs.map((para, idx) => (
          <TextBlock key={idx}>{para}</TextBlock>
        ))}
      </section>

      {/* Why this matters */}
      <section className="page-section">
        <SectionHeader title="Why It Matters" />
        {whyItMatters.map((para, idx) => (
          <TextBlock key={idx}>{para}</TextBlock>
        ))}
      </section>

      {/* Aurora → PM thinking bridge (from projects.json) */}
      {pmBridgeBullets.length > 0 && (
        <section className="page-section">
          <SectionHeader
            title={pmBridge?.title || "How Aurora Shapes My Product Thinking"}
          />
          <ul className="simple-list">
            {pmBridgeBullets.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Origin story */}
      <section className="page-section">
        <SectionHeader title="Where Aurora Came From" />
        {origin.map((para, idx) => (
          <TextBlock key={idx}>{para}</TextBlock>
        ))}
      </section>

      {/* Signals from the field */}
      {signals.length > 0 && (
        <section className="page-section">
          <SectionHeader title="Signals from the Field" />
          <div className="aurora-signals">
            {signals.map((item) => (
              <article key={item.id} className="aurora-signal card">
                <p className="aurora-signal__source">
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.source}
                  </a>
                </p>
                <p className="aurora-signal__idea">{item.idea}</p>
                <p className="aurora-signal__answer">
                  <strong>Aurora’s answer:</strong> {item.auroraAnswer}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* What Aurora is not */}
      <section className="page-section">
        <SectionHeader title="What Aurora Is Not" />
        <ul className="simple-list">
          {whatItIsNot.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* High-level workings */}
      <section className="page-section">
        <SectionHeader title="How It Works (At a High Level)" />
        {howItWorksSafe.map((para, idx) => (
          <TextBlock key={idx}>{para}</TextBlock>
        ))}
      </section>

      {/* Future direction + CTA */}
      <section className="page-section">
        <SectionHeader title="Future Direction" />
        {futureDirection.map((para, idx) => (
          <TextBlock key={idx}>{para}</TextBlock>
        ))}
      </section>

      <section className="page-section">
        {sections?.cta && <TextBlock>{sections.cta}</TextBlock>}
      </section>
    </>
  );
}
