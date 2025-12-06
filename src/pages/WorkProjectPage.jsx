import React from "react";
import { useParams } from "react-router-dom";
import projects from "../content/projects.json";
import ProjectLayout from "../components/ProjectLayout.jsx";

export default function WorkProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  return (
    <section className="page-section">
      <ProjectLayout project={project} />
    </section>
  );
}
