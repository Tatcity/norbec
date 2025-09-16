// src/MainRouter.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import About from "./components/About";   // ✅ new import

export default function MainRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />          {/* Home page */}
        <Route path="shop" element={<Shop />} />    {/* Shop page */}
        <Route path="cart" element={<Cart />} />    {/* Cart page */}
        <Route path="about" element={<About />} />  {/* ✅ About page */}
        <Route path="contact" element={<Contact />} /> {/* Contact page */}
      </Route>
    </Routes>
  );
}
