// src/components/TechStackIcons.jsx
import React from "react";
import techCatalog from "../content/tech.json";

const techById = techCatalog.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

export { techById };

export default function TechStackIcons({ ids, label = "Tech stack" }) {
  if (!ids || ids.length === 0) return null;

  const items = ids
    .map((id) => techById[id])
    .filter(Boolean);

  if (items.length === 0) return null;

  return (
    <div className="tech-strip" aria-label={label}>
      {items.map((item) => (
        <div key={item.id} className="tech-strip__item" title={item.label}>
          <img
            src={item.icon}
            alt={item.label}
            className="tech-strip__icon"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}