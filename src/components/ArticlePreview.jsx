import React from "react";
import { Link } from "react-router-dom";

export default function ArticlePreview({ article }) {
  const { slug, title, summary, date, category } = article;
  return (
    <article className="card">
      <h3 className="card-title">{title}</h3>
      {summary && <p className="text-body">{summary}</p>}
      <div className="article-meta text-meta">
        {date && <span>{date}</span>}
        {category && <span> • {category}</span>}
      </div>
      {slug && (
        <Link to={`/reflections/${slug}`} className="card-link">
          Read article
        </Link>
      )}
    </article>
  );
}