import { useState } from "react";

export default function Shop() {
  const [products] = useState([
    { id: 1, title: "Wireless Headphones", image: "/headphones.jpg", price: "$129" },
    { id: 2, title: "Smart Watch", image: "/watch.jpg", price: "$199" },
    { id: 3, title: "Sneakers", image: "/sneakers.jpg", price: "$89" },
    { id: 4, title: "Backpack", image: "/backpack.jpg", price: "$59" },
    { id: 5, title: "Sunglasses", image: "/sunglasses.jpg", price: "$49" },
    { id: 6, title: "Bluetooth Speaker", image: "/speaker.jpg", price: "$79" },
    { id: 7, title: "Gaming Mouse", image: "/mouse.jpg", price: "$45" },
    { id: 8, title: "Laptop Stand", image: "/stand.jpg", price: "$39" },
  ]);

  // ✅ Track quantities per product
  const [quantities, setQuantities] = useState({});

  function handleQuantityChange(id, value) {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(1, Number(value)) }));
  }

  function handleAddToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((item) => item.id === product.id);

    const qtyToAdd = quantities[product.id] || 1;

    if (existing) {
      existing.qty += qtyToAdd;
    } else {
      cart.push({ ...product, qty: qtyToAdd });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${qtyToAdd} × ${product.title} added to cart 🛒`);
  }

  return (
    <section className="shop">
      <div className="shop-container">
        <h2>Shop All Products</h2>
        <p className="subtitle">Browse our latest products and best deals.</p>

        <div className="product-grid">
          {products.map((p) => (
            <div className="product-card" key={p.id}>
              <img src={p.image} alt={p.title} className="product-img" />
              <h3>{p.title}</h3>
              <p className="price">{p.price}</p>

              {/* Quantity input */}
              <input
                type="number"
                min="1"
                value={quantities[p.id] || 1}
                onChange={(e) => handleQuantityChange(p.id, e.target.value)}
                className="qty-input"
              />

              <button
                className="btn-add"
                onClick={() => handleAddToCart(p)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .shop {
          min-height: 100vh;
          padding: 60px 20px;
          background: #f9fafb;
          color: #111827;
        }

        .shop-container {
          max-width: 1200px;
          margin: auto;
          text-align: center;
        }

        h2 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .subtitle {
          margin-bottom: 40px;
          color: #6b7280;
          font-size: 1.1rem;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 25px;
        }

        .product-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 20px;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
        }

        .product-img {
          width: 100%;
          max-height: 200px;
          object-fit: contain; /* ✅ keeps full image without cutting */
          border-radius: 8px;
          margin-bottom: 15px;
          background: #f3f4f6; /* light gray background for empty space */
        }

        .price {
          font-weight: bold;
          color: #2563eb;
          margin: 10px 0 15px;
        }

        .qty-input {
          width: 60px;
          padding: 6px;
          margin-bottom: 12px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          text-align: center;
        }

        .btn-add {
          background: #2563eb;
          color: #fff;
          border: none;
          padding: 10px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.3s;
        }
        .btn-add:hover {
          background: #1e40af;
        }
      `}</style>
    </section>
  );
}
