// src/components/Home.jsx
export default function Home() {
  const services = [
    { title: "Lawn Mowing", icon: "/mowing.jpg" },
    { title: "Garden Care", icon: "/garden.png" },
    { title: "Spring Clean Up", icon: "/cleanup.png" },
    { title: "Pressure Washing", icon: "/pressure.png" },
    { title: "Custom Garden", icon: "/custom.png" },
    { title: "Mulch & Soil", icon: "/mulch.png" },
    { title: "Sod Install", icon: "/sod.png" },
    { title: "Landscape Install", icon: "/landscape.png" },
    { title: "Tree & Shrub Care", icon: "/tree.png" },
    { title: "Outdoor Lighting", icon: "/lighting.png" },
    { title: "Patio & Walkways", icon: "/patio.png" },
    { title: "Fencing", icon: "/fence.png" },
  ];

  const testimonials = [
    {
      name: "Sarah L.",
      feedback:
        "NorBec Landscaping transformed my backyard into a stunning oasis. The team was professional, creative, and fast!",
    },
    {
      name: "Mark R.",
      feedback:
        "I couldn’t be happier with the garden care service. My lawn has never looked this green and healthy before.",
    },
    {
      name: "Emily W.",
      feedback:
        "The patio and walkway installation was flawless. Excellent craftsmanship and attention to detail!",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Transform Your Outdoors Into a Breathtaking Escape</h1>
          <p className="tagline">
            Custom landscaping design and maintenance services that elevate your
            property’s beauty and value.
          </p>
          <div className="hero-actions">
            <a href="tel:123456789" className="btn primary">Call Now</a>
            <a href="/booking" className="btn secondary">Book Now</a>
          </div>
          <div className="brand-line">NorBec</div>
          <div className="slogan">Loyal 2 Your Soil</div>
        </div>
      </section>

      {/* Home Services Teaser */}
      <section className="home-services">
        <h2>Services</h2>
        <div className="home-services-grid">
          {services.slice(0, 4).map((s) => (
            <div className="home-service-item" key={s.title}>
              <img src={s.icon} alt={s.title} />
              <p>{s.title}</p>
            </div>
          ))}
        </div>
        <div className="view-all">
          <a href="/services" className="btn primary">View All Services</a>
        </div>
      </section>

      {/* ✅ Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p className="feedback">“{t.feedback}”</p>
              <p className="name">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
