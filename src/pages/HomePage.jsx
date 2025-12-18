// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";

import homeContent from "../content/home.json";
import projectsData from "../content/projects.json";
import { collection, list } from "../content/normalize";

import Hero from "../components/Hero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import TextBlock from "../components/TextBlock.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

const SHOW_WRITING_PREVIEW = true;

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
  } = sections ?? {};

  // Normalize collections / lists (Option A boundary)
  const projects = collection(projectsData);
  const selectedSlugs = list(selectedWork?.projectSlugs);

  const featured = projects.filter((project) =>
    selectedSlugs.includes(project.slug)
  );

  const pillars = list(productApproach?.pillars);
  const categories = list(skillsGrid?.categories);
  const writingItems = list(writingPreview?.items);

  return (
    <>
      <Hero
        title={hero?.title}
        subtitle={hero?.subtitle}
        supportingLine={hero?.supportingLine}
      />

      {/* Selected Work */}
      {selectedWork && (
        <section className="page-section">
          <SectionHeader eyebrow="Portfolio" title={selectedWork.heading} />
          {selectedWork.intro && <TextBlock>{selectedWork.intro}</TextBlock>}

          <div className="card-row">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Product Approach */}
      {productApproach && pillars.length > 0 && (
        <section className="page-section">
          <SectionHeader
            eyebrow="Product Approach"
            title={productApproach.heading}
          />
          <div className="pillars-grid">
            {pillars.map((pillar, idx) => (
              <article key={idx} className="card">
                <h3 className="card-title">{pillar.title}</h3>
                <p className="text-body">{pillar.body}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skillsGrid && categories.length > 0 && (
        <section className="page-section">
          <SectionHeader eyebrow="Capabilities" title={skillsGrid.heading} />
          {skillsGrid.intro && <TextBlock>{skillsGrid.intro}</TextBlock>}

          <div className="skills-grid">
            {categories.map((category, idx) => (
              <article key={idx} className="card">
                <h3 className="card-title">{category.label}</h3>
                <ul className="text-body">
                  {list(category?.items).map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Aurora Preview */}
      {auroraPreview && (
        <section className="page-section">
          <SectionHeader eyebrow="Concept Work" title={auroraPreview.heading} />
          <TextBlock>{auroraPreview.body}</TextBlock>
          <div className="text-body">
            <Link to="/aurora" className="inline-link">
              Explore →
            </Link>
          </div>
        </section>
      )}

      {/* About Preview */}
      {aboutPreview && (
        <section className="page-section">
          <SectionHeader eyebrow="About" title={aboutPreview.heading} />
          <TextBlock>{aboutPreview.body}</TextBlock>
          <div className="text-body">
            <Link to="/about" className="inline-link">
              Learn more →
            </Link>
          </div>
        </section>
      )}

      {/* Writing Preview */}
      {SHOW_WRITING_PREVIEW && writingPreview && (
        <section className="page-section">
          <SectionHeader eyebrow="Writing" title={writingPreview.heading} />

          <ul className="text-body">
            {writingItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <div className="text-body">
            <Link to="/reflections" className="inline-link">
              Read more →
            </Link>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      {contactCta?.body && (
        <section className="page-section">
          <TextBlock>{contactCta.body}</TextBlock>
        </section>
      )}
    </>
  );
}
