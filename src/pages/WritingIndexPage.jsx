import React from "react";
import writingContent from "../content/writing.json";
import SectionHeader from "../components/SectionHeader.jsx";
import TextBlock from "../components/TextBlock.jsx";
import ArticlePreview from "../components/ArticlePreview.jsx";
import { list } from "../content/normalize";

export default function WritingIndexPage() {
  const { sections } = writingContent;

  const articles = list(sections?.articles);

  return (
    <>
      <section className="page-section">
        <SectionHeader title="Reflections" />
        {sections?.intro && <TextBlock>{sections.intro}</TextBlock>}
      </section>

      <section className="page-section">
        <SectionHeader title="Articles" />
        <div className="card-row">
          {articles.map((article) => (
            <ArticlePreview key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
