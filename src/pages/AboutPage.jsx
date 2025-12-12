import React from "react";
import aboutContent from "../content/about.json";
import SectionHeader from "../components/SectionHeader.jsx";
import TextBlock from "../components/TextBlock.jsx";

export default function AboutPage() {
  const { sections } = aboutContent;

  return (
    <>
      {/* Summary */}
      <section className="page-section">
        <SectionHeader title="About" />
        <TextBlock>{sections.summary.body}</TextBlock>
      </section>

      {/* Career Story */}
      <section className="page-section">
        <SectionHeader title="Career Story" />
        {sections.story.map((para, idx) => (
          <TextBlock key={idx}>{para}</TextBlock>
        ))}
      </section>

      {/* How I Work (NEW SECTION) */}
      {sections.howIWork && (
        <section className="page-section">
          <SectionHeader title="How I Work" />
          {sections.howIWork.map((para, idx) => (
            <TextBlock key={idx}>{para}</TextBlock>
          ))}
        </section>
      )}

      {/* Skills & Capabilities */}
      <section className="page-section">
        <SectionHeader title="Skills & Capabilities" />
        <div className="skills-grid">
          {Object.entries(sections.skills).map(([groupKey, items]) => (
            <div key={groupKey} className="skills-group">
              <h3 className="heading-s">
                {groupKey
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (s) => s.toUpperCase())}
              </h3>
              <ul className="text-body">
                {items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Values & Principles */}
      <section className="page-section">
        <SectionHeader title="Values & Principles" />
        <ul className="text-body">
          {sections.values.map((v, idx) => (
            <li key={idx}>{v}</li>
          ))}
        </ul>
      </section>

      {/* Aurora Origin */}
      <section className="page-section">
        <SectionHeader title="Aurora: Origin" />
        {sections.auroraOriginSafe.map((para, idx) => (
          <TextBlock key={idx}>{para}</TextBlock>
        ))}
      </section>

      {/* Personal Notes */}
      <section className="page-section">
        <SectionHeader title="Personal Notes" />
        {sections.personalNotes.map((para, idx) => (
          <TextBlock key={idx}>{para}</TextBlock>
        ))}
      </section>
    </>
  );
}