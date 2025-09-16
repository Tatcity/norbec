export default function Services() {
  const services = [
    { title: "Lawn Mowing", image: "/mowing.jpg", desc: "Keep your lawn neat and tidy." },
    { title: "Garden Care", image: "/garden.png", desc: "Beautiful garden maintenance." },
    { title: "Spring Clean Up", image: "/cleanup.png", desc: "Outdoor cleanup for spring." },
    { title: "Pressure Washing", image: "/pressure.png", desc: "Decks, patios, and driveways." },
    { title: "Custom Garden", image: "/custom.png", desc: "Personalized garden designs." },
    { title: "Mulch & Soil", image: "/mulch.png", desc: "Premium mulch & soil installs." },
    { title: "Sod Install", image: "/sod.png", desc: "Professional sod installation." },
    { title: "Landscape Install", image: "/landscape.png", desc: "Custom landscape design." },
    { title: "Tree & Shrub Care", image: "/tree.png", desc: "Healthy trees & shrubs." },
    { title: "Outdoor Lighting", image: "/lighting.png", desc: "Enhance curb appeal at night." },
    { title: "Patio & Walkways", image: "/patio.png", desc: "Beautiful stone walkways." },
    { title: "Fencing", image: "/fence.png", desc: "Durable, stylish fencing options." },
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <p className="subtitle">Full-service landscaping solutions tailored to your needs.</p>
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <img src={s.image} alt={s.title} />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>

      <style jsx="true">{`
        .services {
          padding: 60px 20px;
          text-align: center;
        }

        .subtitle {
          margin-bottom: 40px;
          font-size: 1rem;
          opacity: 0.8;
        }

        /* ✅ Centered grid */
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          justify-items: center;
        }

        .service-card {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 280px;
          width: 100%;
        }

        .service-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 15px;
        }

        h3 {
          margin: 10px 0;
          font-size: 1.2rem;
          color: #6a2c70;
        }

        p {
          font-size: 0.95rem;
          color: #444;
        }

        /* ✅ Tablet & Desktop */
        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
