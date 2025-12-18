import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../content/projects.json";
import ProjectLayout from "../components/ProjectLayout.jsx";
import { collection } from "../content/normalize";

export default function WorkProjectPage() {
  const { slug } = useParams();

  const projects = collection(projectsData);
  const project = projects.find((p) => p.slug === slug);

  return (
    <section className="page-section">
      <ProjectLayout project={project} />
    </section>
  );
}
