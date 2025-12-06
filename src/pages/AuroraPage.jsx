import React from "react";
import auroraContent from "../content/aurora.json";
import SectionHeader from "../components/SectionHeader.jsx";
import TextBlock from "../components/TextBlock.jsx";
import AuroraCallout from "../components/AuroraCallout.jsx";

export default function AuroraPage() {
  const { sections } = auroraContent;

  return (
    <>
      {/* Top intro: what Aurora is */}
      <section className="page-section">
        <SectionHeader title="Aurora" />
        {sections.whatItIs.map((para, idx) => (
          <TextBlock key={idx}>{para}</TextBlock>
        ))}
      </section>

      {/* Why this matters */}
      <section className="page-section">
        <SectionHeader title="Why It Matters" />
        {sections.whyItMatters.map((para, idx) => (
          <TextBlock key={idx}>{para}</TextBlock>
        ))}
      </section>

      {/* Origin story */}
      <section className="page-section">
        <SectionHeader title="Where Aurora Came From" />
        {sections.origin.map((para, idx) => (
          <TextBlock key={idx}>{para}</TextBlock>
        ))}
      </section>

      {/* Signals from the field: external articles + Aurora's answer */}
      {sections.signals && (
        <section className="page-section">
          <SectionHeader title="Signals from the Field" />
          <div className="aurora-signals">
            {sections.signals.map((item) => (
              <article key={item.id} className="aurora-signal">
                <p className="aurora-signal__source">
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.source}
                  </a>
                </p>
                <p className="aurora-signal__idea">{item.idea}</p>
                <p className="aurora-signal__answer">
                  <strong>Aurora’s answer:</strong>{" "}
                  {item.auroraAnswer}
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
          {sections.whatItIsNot.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* High-level workings (without revealing internals) */}
      <section className="page-section">
        <SectionHeader title="How It Works (At a High Level)" />
        {sections.howItWorksSafe.map((para, idx) => (
          <TextBlock key={idx}>{para}</TextBlock>
        ))}
      </section>

      {/* Future direction + CTA */}
      <section className="page-section">
        <SectionHeader title="Future Direction" />
        {sections.futureDirection.map((para, idx) => (
          <TextBlock key={idx}>{para}</TextBlock>
        ))}
      </section>

      <section className="page-section">
        <TextBlock>{sections.cta}</TextBlock>
      </section>
    </>
  );
}
