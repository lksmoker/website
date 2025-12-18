// src/components/TechStackIcons.jsx
import React from "react";
import techCatalog from "../content/tech.json";

const techById = techCatalog.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

export { techById };

const normalizeIds = (ids) => {
  if (!ids) return [];
  if (Array.isArray(ids)) return ids.filter(Boolean);
  if (typeof ids === "string") return ids.trim().split(/\s+/).filter(Boolean);
  // last-resort: single value
  return [ids].filter(Boolean);
};

export default function TechStackIcons({ ids, label = "Tech stack" }) {
  const normalized = normalizeIds(ids);
  if (normalized.length === 0) return null;

  const items = normalized
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
