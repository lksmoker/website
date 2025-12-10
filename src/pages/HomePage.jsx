import React from "react";
import homeContent from "../content/home.json";
import projects from "../content/projects.json";
import Hero from "../components/Hero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import TextBlock from "../components/TextBlock.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { Link } from "react-router-dom";

// Flip this to true when you're ready to show the writing section
const SHOW_WRITING_PREVIEW = false;

export default function HomePage() {
  const { hero, sections } = homeContent;
  const featured = projects.filter((project) =>
    sections.selectedWork.projectSlugs.includes(project.slug)
  );

  return (
    <>
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        supportingLine={hero.supportingLine}
      />

      <section className="page-section">
        <SectionHeader title={sections.selectedWork.heading} />
        {sections.selectedWork.intro && (
          <TextBlock>{sections.selectedWork.intro}</TextBlock>
        )}
        <div className="card-row">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="page-section">
        <Link to="/about" className="no-decoration">
          <SectionHeader title={sections.aboutPreview.heading} />
          <TextBlock>{sections.aboutPreview.body}</TextBlock>
        </Link>
      </section>

      {SHOW_WRITING_PREVIEW && (
        <section className="page-section">
          <SectionHeader title={sections.writingPreview.heading} />
          <ul className="text-body">
            {sections.writingPreview.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="page-section">
        <TextBlock>{sections.contactCta.body}</TextBlock>
      </section>
    </>
  );
}
