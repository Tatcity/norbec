// src/components/Layout.jsx
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-layout">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          {/* Logo + Brand */}
          <div className="brand">
            <img src="/logo.png" alt="NorBec Logo" className="logo" />
            <span className="brand-name">NorBec Landscaping</span>
          </div>

          {/* Hamburger (mobile only) */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Navigation */}
          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/services" onClick={() => setMenuOpen(false)}>
              Services
            </NavLink>
            <NavLink to="/booking" onClick={() => setMenuOpen(false)}>
              Booking
            </NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      <style jsx="true">{`
        .header {
          background: linear-gradient(135deg, #2D1B2A, #6a2c70);
          color: #fff;
          padding: 15px 30px;
          position: relative;
          z-index: 2000; /* ✅ keeps header/nav above hero */
        }

        .header-inner {
          max-width: 1100px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid #fff;
          object-fit: cover;
        }

        .brand-name {
          font-size: 1.2rem;
          font-weight: bold;
        }

        .hamburger {
          background: none;
          border: none;
          font-size: 1.8rem;
          color: #fff;
          cursor: pointer;
          display: block;
          z-index: 2001; /* ✅ hamburger always clickable */
        }

        .nav {
          display: none;
          flex-direction: column;
          position: absolute;
          top: 70px;
          right: 20px;
          background: #6a2c70;
          padding: 20px;
          border-radius: 8px;
          gap: 15px;

          /* ✅ dropdown always above hero */
          z-index: 3000;
        }

        .nav.open {
          display: flex;
        }

        .nav a {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
        }

        .nav a.active {
          border-bottom: 2px solid #fff;
        }

        .nav a:hover {
          color: #ffe082;
        }

        /* Desktop view */
        @media (min-width: 768px) {
          .hamburger {
            display: none;
          }
          .nav {
            display: flex !important;
            position: static;
            flex-direction: row;
            background: none;
            padding: 0;
            gap: 20px;
            z-index: auto;
          }
        }
      `}</style>
    </div>
  );
}
