// src/components/Layout.jsx
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop"; // ✅ scroll reset

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-layout">
      <ScrollToTop />

      {/* Header */}
      <header className="header">
        <div className="header-inner">
          {/* Logo + Brand */}
          <div className="brand">
            <img src="/logo.png" alt="Store Logo" className="logo" />
            <span className="brand-name">My E-Shop</span>
          </div>

          {/* Hamburger (mobile only) */}
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Navigation */}
          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/shop" onClick={() => setMenuOpen(false)}>
              Shop
            </NavLink>
            <NavLink to="/cart" onClick={() => setMenuOpen(false)}>
              Cart
            </NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
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
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          padding: 12px 30px;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .header-inner {
          max-width: 1200px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo {
          width: 45px;
          height: 45px;
          object-fit: cover;
        }

        .brand-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: #111827;
          letter-spacing: 0.5px;
        }

        .hamburger {
          background: none;
          border: none;
          font-size: 1.8rem;
          color: #111827;
          cursor: pointer;
          display: block;
        }

        /* Nav Base */
        .nav {
          display: none;
          flex-direction: column;
          position: fixed;
          top: 0;
          right: 0;
          height: 100%;
          width: 220px;
          background: #111827;
          padding: 80px 20px;
          gap: 20px;
          transform: translateX(100%);
          transition: transform 0.3s ease-in-out;
        }

        .nav.open {
          display: flex;
          transform: translateX(0);
        }

        .nav a {
          color: #f9fafb;
          text-decoration: none;
          font-weight: 500;
          font-size: 1.1rem;
        }

        .nav a.active {
          color: #60a5fa;
        }

        .nav a:hover {
          color: #93c5fd;
        }

        /* Desktop view */
        @media (min-width: 768px) {
          .hamburger {
            display: none;
          }
          .nav {
            display: flex;
            position: static;
            flex-direction: row;
            height: auto;
            width: auto;
            background: none;
            padding: 0;
            transform: none;
          }
          .nav a {
            color: #374151;
          }
          .nav a:hover {
            color: #111827;
            border-bottom: 2px solid #111827;
          }
          .nav a.active {
            color: #111827;
            border-bottom: 2px solid #111827;
          }
        }
      `}</style>
    </div>
  );
}
