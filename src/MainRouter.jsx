// src/MainRouter.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Booking from "./components/Booking";

export default function MainRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />          {/* Home page */}
        <Route path="services" element={<Services />} />
        <Route path="booking" element={<Booking />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
