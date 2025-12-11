import React from "react";
import { Link } from "react-router-dom";

import homeContent from "../content/home.json";
import projects from "../content/projects.json";
import Hero from "../components/Hero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import TextBlock from "../components/TextBlock.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

// Flip this to true when you're ready to show the writing section ,,
const SHOW_WRITING_PREVIEW = false;

export default function HomePage() {
  const { hero, sections } = homeContent;

  const featured = projects.filter((project) =>
    sections.selectedWork.projectSlugs.includes(project.slug)
  );

  const resumeCta = sections.resumeCta;
  const productApproach = sections.productApproach;
  const skillsGrid = sections.skillsGrid;
  const auroraPreview = sections.auroraPreview;

  return (
    <>
      {/* Hero: PM + Systems + Tools identity */}
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        supportingLine={hero.supportingLine}
      />

      {/* Resume + “Open to” CTA strip */}
      {resumeCta && (
        <section className="page-section page-section--tight">
          <div className="home-cta-row">
            <a
              href={resumeCta.resumeUrl}
              className="button button-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {resumeCta.buttonLabel}
            </a>
            {resumeCta.note && (
              <p className="text-small home-cta-note">{resumeCta.note}</p>
            )}
          </div>
        </section>
      )}

      {/* Selected Projects directly below hero */}
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

      {/* Product Approach mini-section (PM-style pillars) */}
      {productApproach && (
        <section className="page-section">
          <SectionHeader title={productApproach.heading} />
          {productApproach.pillars && productApproach.pillars.length > 0 && (
            <div className="pillars-grid">
              {productApproach.pillars.map((pillar, idx) => (
                <div key={idx} className="card">
                  <h3 className="card-title">{pillar.title}</h3>
                  <p className="text-body">{pillar.body}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Skills & Capabilities grid */}
      {skillsGrid && (
        <section className="page-section">
          <SectionHeader title={skillsGrid.heading} />
          {skillsGrid.intro && <TextBlock>{skillsGrid.intro}</TextBlock>}

          {skillsGrid.categories && skillsGrid.categories.length > 0 && (
            <div className="skills-grid">
              {skillsGrid.categories.map((category, idx) => (
                <div key={idx} className="card">
                  <h3 className="card-title">{category.label}</h3>
                  <ul className="text-body">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Aurora preview (safe narrative, links to Aurora page) */}
      {auroraPreview && (
        <section className="page-section">
          <Link to="/aurora" className="no-decoration">
            <SectionHeader title={auroraPreview.heading} />
            <TextBlock>{auroraPreview.body}</TextBlock>
          </Link>
        </section>
      )}

      {/* About preview (short narrative, links to About page) */}
      <section className="page-section">
        <Link to="/about" className="no-decoration">
          <SectionHeader title={sections.aboutPreview.heading} />
          <TextBlock>{sections.aboutPreview.body}</TextBlock>
        </Link>
      </section>

      {/* Optional Writing preview (toggled) */}
      {SHOW_WRITING_PREVIEW && sections.writingPreview && (
        <section className="page-section">
          <SectionHeader title={sections.writingPreview.heading} />
          <ul className="text-body">
            {sections.writingPreview.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Contact CTA */}
      <section className="page-section">
        <TextBlock>{sections.contactCta.body}</TextBlock>
      </section>
    </>
  );
}
