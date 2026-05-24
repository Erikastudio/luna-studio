import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Offers from "./components/Offers";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {

  // Carrito REAL
  const [cart, setCart] = useState([]);

  // Agregar productos
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Cantidad total
  const cartCount = cart.length;

  return (
    <div className="bg-white min-h-screen text-neutral-900 font-sans antialiased">

      {/* Navbar */}
      <Navbar cartCount={cartCount} />

      <Hero />
      <Categories />
      <Offers />

      {/* Productos */}
      <Products addToCart={addToCart} />

      <Testimonials />
      <Footer />

      {/* WhatsApp */}
      <WhatsAppButton />

    </div>
  );
}