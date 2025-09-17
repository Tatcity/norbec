import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./Footer";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // ✅ Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto" // change to "smooth" for smooth scroll
    });
  }, [pathname]);

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
          background: linear-gradient(135deg, #2d1b2a, #6a2c70);
          color: #fff;
          padding: 15px 30px;
          position: relative;
          z-index: 2000;
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
          z-index: 2001;
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
          }
        }
      `}</style>
    </div>
  );
}
