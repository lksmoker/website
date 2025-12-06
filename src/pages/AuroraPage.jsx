import React from "react";
import auroraContent from "../content/aurora.json";
import SectionHeader from "../components/SectionHeader.jsx";
import TextBlock from "../components/TextBlock.jsx";
import AuroraCallout from "../components/AuroraCallout.jsx";

export default function AuroraPage() {
  const { sections } = auroraContent;

  return (
    <>
      <section className="page-section">
        <SectionHeader title="Aurora" />
        {sections.whatItIs.map((para, idx) => (
          <TextBlock key={idx}>{para}</TextBlock>
        ))}
      </section>

      <section className="page-section">
        <SectionHeader title="Why It Matters" />
        {sections.whyItMatters.map((para, idx) => (
          <TextBlock key={idx}>{para}</TextBlock>
        ))}
      </section>

      <section className="page-section">
        <SectionHeader title="Origin" />
        {sections.origin.map((para, idx) => (
          <TextBlock key={idx}>{para}</TextBlock>
        ))}
      </section>

      <section className="page-section">
        <SectionHeader title="What Aurora Is Not" />
        <ul className="text-body">
          {sections.whatItIsNot.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="page-section">
        <SectionHeader title="How It Works (Safe Framing)" />
        <AuroraCallout>
          {sections.howItWorksSafe.map((para, idx) => (
            <p className="text-body" key={idx}>
              {para}
            </p>
          ))}
        </AuroraCallout>
      </section>

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
