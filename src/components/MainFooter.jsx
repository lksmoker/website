import React from "react";

export default function MainFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>© Luke Smoker</span>

        <a
          href="/resume.pdf"
          className="footer-resume-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
    </footer>
  );
}
