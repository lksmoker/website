import React from "react";
import workContent from "../content/work.json";
import projectsData from "../content/projects.json";
import SectionHeader from "../components/SectionHeader.jsx";
import TextBlock from "../components/TextBlock.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { collection, list } from "../content/normalize";

export default function WorkIndexPage() {
  const { sections } = workContent;

  const projects = collection(projectsData);
  const featuredSlugs = list(sections?.featuredSlugs);

  const featured =
    featuredSlugs.length > 0
      ? projects.filter((project) => featuredSlugs.includes(project.slug))
      : projects;

  return (
    <>
      <section className="page-section">
        <SectionHeader title="Work & Projects" />
        {sections?.intro && <TextBlock>{sections.intro}</TextBlock>}
      </section>

      <section className="page-section">
        <div className="card-row">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
