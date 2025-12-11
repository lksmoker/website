// src/components/SectionHeader.jsx
import React from "react";

export default function SectionHeader({ title, eyebrow }) {
  if (!title) return null;

  return (
    <header className="section-header">
      {eyebrow && <div className="section-eyebrow">{eyebrow}</div>}
      <h2 className="section-header__title">{title}</h2>
    </header>
  );
}
