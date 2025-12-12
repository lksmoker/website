import React from "react";
import { useParams } from "react-router-dom";
import writingContent from "../content/writing.json";
import ArticleLayout from "../components/ArticleLayout.jsx";

export default function WritingArticlePage() {
  const { slug } = useParams();
  const { sections } = writingContent;

  const article = sections.articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <section className="page-section">
        <p className="text-body">
          This reflection could not be found.
        </p>
      </section>
    );
  }

  return (
    <section className="page-section">
      <ArticleLayout article={article} />
    </section>
  );
}