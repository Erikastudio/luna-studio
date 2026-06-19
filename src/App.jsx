import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Offers from "./components/Offers";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Cart from "./components/Cart";
import Toast from "./components/Toast";

export default function App() {

  // Carrito persistente
  const [cart, setCart] = useState(() => {

    const savedCart = localStorage.getItem("luna-cart");

    return savedCart ? JSON.parse(savedCart) : [];

  });

  // Abrir carrito
  const [openCart, setOpenCart] = useState(false);

  // Search
  const [search, setSearch] = useState("");
const [category, setCategory] = useState("Todos");
console.log("Categoría actual:", category);  
const [selectedProduct, setSelectedProduct] = useState(null);
// Toast
  const [showToast, setShowToast] = useState(false);

  // Guardar carrito automáticamente
  useEffect(() => {

    localStorage.setItem("luna-cart", JSON.stringify(cart));

  }, [cart]);

  // Agregar productos
  const addToCart = (product) => {

    setCart((prevCart) => [...prevCart, product]);

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  // Cantidad total
  const cartCount = cart.length;

  return (
    <div className="bg-white min-h-screen text-neutral-900 font-sans antialiased">

      {/* Navbar */}
      <Navbar
        cartCount={cartCount}
        setOpenCart={setOpenCart}
        search={search}
        setSearch={setSearch}
      />

      <Hero />
      <Categories setCategory={setCategory} />
      <Offers />

      {/* Productos */}
     <Products
  addToCart={addToCart}
  search={search}
  category={category}
  setCategory={setCategory}
/>

      <Testimonials />
      <Footer />

      {/* WhatsApp */}
      <WhatsAppButton />

      {/* Carrito */}
      <Cart
        openCart={openCart}
        setOpenCart={setOpenCart}
        cart={cart}
        setCart={setCart}
      />

      {/* Toast */}
      <Toast
        show={showToast}
        message="Producto agregado al carrito"
      />

    </div>
  );
}