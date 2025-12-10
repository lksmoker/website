import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/main-header.css";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work & Projects" },
  { to: "/aurora", label: "Aurora" },
//  { to: "/writing", label: "Writing" },
  { to: "/contact", label: "Contact" },
];

export default function MainHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => setOpen((prev) => !prev);

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand-block">
          <div className="site-title">LUKE SMOKER</div>
          <div className="site-subtitle">Architect · Operations · Clarity</div>
        </div>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open ? "true" : "false"}
          onClick={toggleNav}
        >
          <span className="menu-toggle-box" aria-hidden="true">
            <span className="menu-toggle-line" />
            <span className="menu-toggle-line" />
            <span className="menu-toggle-line" />
          </span>
        </button>
      </div>

      <nav className={`main-nav ${open ? "is-open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={
              location.pathname === item.to
                ? "nav-link nav-link--active"
                : "nav-link"
            }
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}