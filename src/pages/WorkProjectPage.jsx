import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import projectsData from "../content/projects.json";
import ProjectLayout from "../components/ProjectLayout.jsx";
import { collection } from "../content/normalize";

export default function WorkProjectPage() {
  const { slug } = useParams();

  const projects = useMemo(() => collection(projectsData), []);
  const project = useMemo(
    () => projects.find((p) => p.slug === slug),
    [projects, slug]
  );

  if (!project) {
    return (
      <section className="page-section">
        <h1 className="card-title">Project not found</h1>
        <p className="text-body">
          This project may have moved or been renamed.
        </p>
        <Link to="/work" className="inline-link">
          Back to Work & Projects →
        </Link>
      </section>
    );
  }

  return (
    <section className="page-section">
      <ProjectLayout project={project} />
    </section>
  );
}
