import React from "react";
import { Link } from "react-router-dom";
import aboutContent from "../content/about.json";
import SectionHeader from "../components/SectionHeader.jsx";
import TextBlock from "../components/TextBlock.jsx";
import { list } from "../content/normalize";

export default function AboutPage() {
  const { sections } = aboutContent;

  const story = list(sections?.story);
  const howIWork = list(sections?.howIWork);
  const values = list(sections?.values);
  const auroraOriginSafe = list(sections?.auroraOriginSafe);
  const personalNotes = list(sections?.personalNotes);

  // skills is an object map; keep it defensive
  const skillsEntries = sections?.skills ? Object.entries(sections.skills) : [];

  return (
    <>
      {/* Summary */}
      <section className="page-section">
        <SectionHeader title="About" />
        {sections?.summary?.body && <TextBlock>{sections.summary.body}</TextBlock>}

        <TextBlock>
          I also write short reflections on how I approach systems and work —
          tracing where things broke, what changed, and what eventually held. A
          few of those reflections live{" "}
          <Link to="/reflections" className="inline-link">
            here
          </Link>
          .
        </TextBlock>
      </section>

      {/* Career Story */}
      {story.length > 0 && (
        <section className="page-section">
          <SectionHeader title="Career Story" />
          {story.map((para, idx) => (
            <TextBlock key={idx}>{para}</TextBlock>
          ))}
        </section>
      )}

      {/* How I Work */}
      {howIWork.length > 0 && (
        <section className="page-section">
          <SectionHeader title="How I Work" />
          {howIWork.map((para, idx) => (
            <TextBlock key={idx}>{para}</TextBlock>
          ))}
        </section>
      )}

      {/* Skills & Capabilities */}
      {skillsEntries.length > 0 && (
        <section className="page-section">
          <SectionHeader title="Skills & Capabilities" />
          <div className="skills-grid">
            {skillsEntries.map(([groupKey, items]) => (
              <div key={groupKey} className="skills-group">
                <h3 className="heading-s">
                  {groupKey
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (s) => s.toUpperCase())}
                </h3>
                <ul className="text-body">
                  {list(items).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Values & Principles */}
      {values.length > 0 && (
        <section className="page-section">
          <SectionHeader title="Values & Principles" />
          <ul className="text-body">
            {values.map((v, idx) => (
              <li key={idx}>{v}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Aurora Origin */}
      <section className="page-section">
        <SectionHeader title="Aurora: Origin" />
        {auroraOriginSafe.map((para, idx) => (
          <TextBlock key={idx}>{para}</TextBlock>
        ))}
        <TextBlock className="text-muted">
          If you’re curious about where these ideas lead, I’ve written a
          higher-level overview of Aurora{" "}
          <Link to="/aurora" className="inline-link">
            here
          </Link>
          .
        </TextBlock>
      </section>

      {/* Personal Notes */}
      {personalNotes.length > 0 && (
        <section className="page-section">
          <SectionHeader title="Personal Notes" />
          {personalNotes.map((para, idx) => (
            <TextBlock key={idx}>{para}</TextBlock>
          ))}
        </section>
      )}
    </>
  );
}
