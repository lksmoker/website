// src/components/TextBlock.jsx
import React from "react";

export default function TextBlock({ children }) {
  if (!children) return null;

  return <div className="text-block">{children}</div>;
}