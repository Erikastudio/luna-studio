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
  // Estado para controlar cuántos productos hay en el carrito
  const [cartCount, setCartCount] = useState(0);

  // Función para aumentar el carrito cuando le den clic al botón "+"
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="bg-white min-h-screen text-neutral-900 font-sans antialiased">
      {/* Le pasamos el número actual al Navbar */}
      <Navbar cartCount={cartCount} />
      <Hero />
      <Categories />
      <Offers />
      {/* Le pasamos la función de sumar a la sección de Productos */}
      <Products addToCart={addToCart} />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}