import React from "react";

export default function SectionHeader({ title, eyebrow }) {
  return (
    <header className="section-header">
      {eyebrow && <div className="section-eyebrow">{eyebrow}</div>}
      <h2 className="heading-m">{title}</h2>
    </header>
  );
}
