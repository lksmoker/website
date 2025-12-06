import React from "react";
import MainHeader from "./MainHeader.jsx";
import MainFooter from "./MainFooter.jsx";
import "../styles/site-shell.css";

export default function SiteShell({ children }) {
  return (
    <div className="site-shell">
      <MainHeader />
      <main className="site-main">
        <div className="page">{children}</div>
      </main>
      <MainFooter />
    </div>
  );
}
