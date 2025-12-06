import React from "react";

export default function ArticleLayout({ article }) {
  if (!article) {
    return (
      <div className="text-body">
        Article not found. Please check the URL or return to Writing.
      </div>
    );
  }

  const { title, summary, body, date, category } = article;

  return (
    <article className="article-layout">
      <header className="article-layout__header">
        <h1 className="heading-l">{title}</h1>
        {summary && <p className="text-body">{summary}</p>}
        <div className="article-meta text-meta">
          {date && <span>{date}</span>}
          {category && <span> • {category}</span>}
        </div>
      </header>
      <section className="article-layout__body">
        {Array.isArray(body)
          ? body.map((para, idx) => (
              <p className="text-body" key={idx}>
                {para}
              </p>
            ))
          : body && <p className="text-body">{body}</p>}
      </section>
    </article>
  );
}
