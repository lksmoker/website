import React from "react";
import "../styles/components.css";

export default function Hero({ title, subtitle, supportingLine }) {
  return (
    <section className="hero">
      <h1 className="heading-xl">{title}</h1>
      {subtitle && <p className="text-body hero-subtitle">{subtitle}</p>}
      {supportingLine && (
        <p className="text-body hero-supporting">{supportingLine}</p>
      )}
    </section>
  );
}
