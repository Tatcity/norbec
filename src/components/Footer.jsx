import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Quick Links */}
        <nav className="links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Contact Info */}
        <div className="contact-info">
          <p>📞 (416) 555-1234</p>
          <p>📧 info@norbec.ca</p>
          <p>📍 Toronto, ON</p>
        </div>
      </div>

      <div className="copy">
        <p>© {year} NorBec Landscaping. All rights reserved.</p>
      </div>

      <style jsx="true">{`
        .footer {
          background: linear-gradient(135deg, #2D1B2A, #6a2c70);
          color: #fff;
          padding: 40px 20px 20px;
          margin-top: 60px;
        }

        .footer-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
          max-width: 1100px;
          margin: auto;
        }

        .links {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }
        .links a {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
        }
        .links a:hover {
          color: #ffe082;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }
        .contact-info p {
          margin: 0;
          font-size: 0.95rem;
        }

        .copy {
          margin-top: 20px;
          text-align: center;
          font-size: 0.85rem;
          opacity: 0.8;
        }

        /* 📱 Responsive */
        @media (min-width: 768px) {
          .contact-info {
            flex-direction: row;
            gap: 20px;
          }
        }
      `}</style>
    </footer>
  );
}