import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="app-layout">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          {/* Logo + Brand */}
          <div className="brand">
            <img
              src="/logo.png"
              alt="NorBec Logo"
              className="logo"
            />
            <span className="brand-name">NorBec Landscaping</span>
          </div>

          {/* Navigation */}
          <nav className="nav">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/booking">Booking</NavLink>
            <NavLink to="/contact">Contact</NavLink>
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
          background: linear-gradient(135deg, #6a2c70, #b83b5e);
          color: #fff;
          padding: 15px 30px;
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
        .nav {
          display: flex;
          gap: 20px;
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
      `}</style>
    </div>
  );
}
