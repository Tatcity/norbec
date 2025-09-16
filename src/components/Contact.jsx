// src/components/Contact.jsx

export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>
        Have questions? Reach out and we’ll be happy to help you with your
        landscaping needs.
      </p>

      <div className="info">
        <p>📞 Phone: <a href="tel:+14165551234">(416) 555-1234</a></p>
        <p>📧 Email: <a href="mailto:info@norbec.ca">info@norbec.ca</a></p>
        <p>📍 Location: Toronto, ON</p>
      </div>

      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.515598302032!2d-79.38318408450927!3d43.653226779121534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d721d8b1f5%3A0x2f4a46b58c8794f9!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1689963000000"
        width="100%"
        height="300"
        style={{ border: 0, marginTop: "20px", borderRadius: "12px" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>

      <style jsx="true">{`
        .contact {
          text-align: center;
        }
        .info {
          margin: 20px 0;
          font-size: 1.1rem;
        }
        a {
          color: #2e7d32;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
