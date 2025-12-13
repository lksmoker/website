// src/components/SectionHeader.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function SectionHeader({
  title,
  eyebrow,
  hint,
  to,
}) {
  if (!title) return null;

  const Hint = hint
    ? to
      ? (
          <Link to={to} className="section-header__hint">
            {hint}
          </Link>
        )
      : (
          <span className="section-header__hint">{hint}</span>
        )
    : null;

  return (
    <header className="section-header">
      {eyebrow && <div className="section-eyebrow">{eyebrow}</div>}

      <div className="section-header__row">
        <h2 className="section-header__title">{title}</h2>
        {Hint}
      </div>
    </header>
  );
}
