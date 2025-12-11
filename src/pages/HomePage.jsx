// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";

import homeContent from "../content/home.json";
import projects from "../content/projects.json";
import Hero from "../components/Hero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import TextBlock from "../components/TextBlock.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

// Flip this to true when you're ready to show the writing section
const SHOW_WRITING_PREVIEW = false;

export default function HomePage() {
  const { hero, sections } = homeContent;

  const {
    selectedWork,
    productApproach,
    skillsGrid,
    auroraPreview,
    aboutPreview,
    writingPreview,
    contactCta,
  } = sections;

  // Selected projects for the homepage card row
  const featured = projects.filter((project) =>
    selectedWork.projectSlugs.includes(project.slug)
  );

  return (
    <>
      {/* Hero */}
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        supportingLine={hero.supportingLine}
      />

      {/* Selected Projects */}
      <section className="page-section">
        <SectionHeader eyebrow="Portfolio" title={selectedWork.heading} />
        {selectedWork.intro && <TextBlock>{selectedWork.intro}</TextBlock>}

        <div className="card-row">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Product Approach (pillars) */}
      {productApproach && (
        <section className="page-section">
          <SectionHeader
            eyebrow="Product Approach"
            title={productApproach.heading}
          />
          {productApproach.pillars && productApproach.pillars.length > 0 && (
            <div className="pillars-grid">
              {productApproach.pillars.map((pillar, idx) => (
                <article key={idx} className="card">
                  <h3 className="card-title">{pillar.title}</h3>
                  <p className="text-body">{pillar.body}</p>
                </article>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Skills & Capabilities */}
      {skillsGrid && (
        <section className="page-section">
          <SectionHeader
            eyebrow="Capabilities"
            title={skillsGrid.heading}
          />
          {skillsGrid.intro && <TextBlock>{skillsGrid.intro}</TextBlock>}

          {skillsGrid.categories && skillsGrid.categories.length > 0 && (
            <div className="skills-grid">
              {skillsGrid.categories.map((category, idx) => (
                <article key={idx} className="card">
                  <h3 className="card-title">{category.label}</h3>
                  <ul className="text-body">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Aurora preview */}
      {auroraPreview && (
        <section className="page-section">
          <Link to="/aurora" className="no-decoration">
            <SectionHeader
              eyebrow="Concept Work"
              title={auroraPreview.heading}
            />
            <TextBlock>{auroraPreview.body}</TextBlock>
          </Link>
        </section>
      )}

      {/* About preview */}
      {aboutPreview && (
        <section className="page-section">
          <Link to="/about" className="no-decoration">
            <SectionHeader eyebrow="About" title={aboutPreview.heading} />
            <TextBlock>{aboutPreview.body}</TextBlock>
          </Link>
        </section>
      )}

      {/* Optional Writing preview */}
      {SHOW_WRITING_PREVIEW && writingPreview && (
        <section className="page-section">
          <SectionHeader
            eyebrow="Writing"
            title={writingPreview.heading}
          />
          <ul className="text-body">
            {writingPreview.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Contact CTA */}
      {contactCta && (
        <section className="page-section">
          <TextBlock>{contactCta.body}</TextBlock>
        </section>
      )}
    </>
  );
}
