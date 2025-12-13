// App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SiteShell from "./components/SiteShell.jsx";

import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import WorkIndexPage from "./pages/WorkIndexPage.jsx";
import WorkProjectPage from "./pages/WorkProjectPage.jsx";
import AuroraPage from "./pages/AuroraPage.jsx";
import WritingIndexPage from "./pages/WritingIndexPage.jsx";
import WritingArticlePage from "./pages/WritingArticlePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  return (
    <SiteShell>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkIndexPage />} />
        <Route path="/work/:slug" element={<WorkProjectPage />} />
        <Route path="/aurora" element={<AuroraPage />} />

        {/* Reflections */}
        <Route path="/reflections" element={<WritingIndexPage />} />
        <Route path="/reflections/:slug" element={<WritingArticlePage />} />

        {/* Backward compatibility for old links */}
        <Route path="/writing" element={<Navigate to="/reflections" replace />} />
        <Route
          path="/writing/:slug"
          element={<Navigate to="/reflections/:slug" replace />}
        />

        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </SiteShell>
  );
}
