import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/main-header.css";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work & Projects" },
  { to: "/reflections", label: "Reflections" },
  { to: "/aurora", label: "Aurora" },
  { to: "/contact", label: "Contact" },
];

export default function MainHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="site-header">
      <div className="header-inner header-inner--top">
        <div className="brand-block">
          <div className="site-title">LUKE SMOKER</div>
          <div className="site-subtitle">Architect · Operations · Clarity</div>
        </div>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="menu-toggle-box" aria-hidden="true">
            <span className="menu-toggle-line" />
            <span className="menu-toggle-line" />
            <span className="menu-toggle-line" />
          </span>
        </button>
      </div>

      <div className="header-inner header-inner--nav">
        <nav className={`main-nav ${open ? "is-open" : ""}`}>
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.to;

            return (
              <Link
                key={item.to}
                to={item.to}
                className={`nav-link ${isActive ? "nav-link--active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}