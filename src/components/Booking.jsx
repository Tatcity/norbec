import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",          // ✅ new field
    service: "",
    date: "",
    additionalInfo: "", // ✅ new field
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Quotation request submitted! ✅");
  }

  return (
    <section className="booking">
      <div className="booking-container">
        <h2>Book a Quotation</h2>
        <p className="subtitle">
          Fill out the form below to request a quotation for your landscaping needs.
        </p>

        <form className="booking-form" onSubmit={handleSubmit}>
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          {/* Service Selection */}
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

          {/* Date */}
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />

          {/* Additional Info */}
          <textarea
            name="additionalInfo"
            placeholder="Additional information about your project..."
            value={form.additionalInfo}
            onChange={handleChange}
            rows="4"
          />

          {/* Submit Button */}
          <button type="submit" className="btn-submit">
            Submit Quotation
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
        select,
        textarea {
          padding: 12px 15px;
          border-radius: 8px;
          border: none;
          font-size: 1rem;
        }

        textarea {
          resize: vertical;
        }

        .btn-submit {
          background: linear-gradient(135deg, #2D1B2A, #6a2c70);
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