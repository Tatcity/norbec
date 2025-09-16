// src/components/Booking.jsx
import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Booking submitted! ✅");
  }

  return (
    <section className="booking">
      <div className="booking-container">
        <h2>Book a Service</h2>
        <p className="subtitle">
          Fill out the form below to schedule your landscaping service with us.
        </p>

        <form className="booking-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a Service</option>
            <option value="Lawn Mowing">Lawn Mowing</option>
            <option value="Garden Care">Garden Care</option>
            <option value="Spring Clean Up">Spring Clean Up</option>
            <option value="Pressure Washing">Pressure Washing</option>
            <option value="Custom Garden">Custom Garden</option>
            <option value="Mulch & Soil">Mulch & Soil</option>
            <option value="Sod Install">Sod Install</option>
            <option value="Landscape Install">Landscape Install</option>
            <option value="Tree & Shrub Care">Tree & Shrub Care</option>
            <option value="Outdoor Lighting">Outdoor Lighting</option>
            <option value="Plant Installation">Plant Installation</option>
            <option value="Patio & Walkways">Patio & Walkways</option>
            <option value="Fencing">Fencing</option>
          </select>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />

          {/* ✅ Gradient Button */}
          <button type="submit" className="btn-submit">
            Submit Booking
          </button>
        </form>
      </div>

      {/* Styles */}
      <style jsx="true">{`
        .booking {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;

          /* ❌ Removed main background color/gradient */
          background: none;
          color: #fff;
        }

        .booking-container {
          background: rgba(0, 0, 0, 0.5);
          padding: 40px;
          border-radius: 12px;
          max-width: 500px;
          width: 100%;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        h2 {
          text-align: center;
          margin-bottom: 10px;
          font-size: 2rem;
          font-weight: 700;
        }

        .subtitle {
          text-align: center;
          margin-bottom: 30px;
          opacity: 0.9;
        }

        .booking-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        input,
        select {
          padding: 12px 15px;
          border-radius: 8px;
          border: none;
          font-size: 1rem;
        }

        /* ✅ Gradient Submit Button */
        .btn-submit {
          background: linear-gradient(135deg, #6a2c70, #b83b5e);
          color: #fff;
          font-weight: bold;
          padding: 14px;
          border-radius: 8px;
          cursor: pointer;
          border: none;
          transition: all 0.3s ease;
        }

        .btn-submit:hover {
          background: linear-gradient(135deg, #812d75, #d94a72);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
