import React from "react";
import workContent from "../content/work.json";
import projects from "../content/projects.json";
import SectionHeader from "../components/SectionHeader.jsx";
import TextBlock from "../components/TextBlock.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

export default function WorkIndexPage() {
  const { sections } = workContent;
  const featured =
    sections.featuredSlugs && sections.featuredSlugs.length > 0
      ? projects.filter((project) =>
          sections.featuredSlugs.includes(project.slug)
        )
      : projects;

  return (
    <>
      <section className="page-section">
        <SectionHeader title="Work & Projects" />
        {sections.intro && <TextBlock>{sections.intro}</TextBlock>}
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
