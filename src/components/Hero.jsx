// src/components/Hero.jsx
import React from "react";

export default function Hero({ title, subtitle, supportingLine }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {supportingLine && (
          <p className="hero-support">{supportingLine}</p>
        )}
      </div>
    </section>
  );
}