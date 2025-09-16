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
    </section>
  );
}
