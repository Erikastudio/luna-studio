import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({
  cartCount,
  setOpenCart,
  search,
  setSearch
}) {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100 px-6 py-4 flex justify-between items-center gap-4">

      {/* LOGO */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="text-xl font-bold tracking-widest uppercase text-neutral-900 cursor-pointer"
      >
        Luna<span className="text-amber-500">.</span>Store
      </motion.div>

      {/* SEARCH */}
      <div className="hidden md:flex flex-1 max-w-md mx-6">

        <div className="relative w-full">

          <input
            type="text"
            placeholder="Buscar productos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-neutral-100 border border-neutral-200 rounded-2xl px-5 py-3 text-sm outline-none focus:border-amber-500 transition-all duration-300"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 5.5 5.5a7.5 7.5 0 0 0 11.15 11.15Z"
            />
          </svg>

        </div>

      </div>

      {/* MENU DESKTOP */}
      <div className="hidden lg:flex space-x-8 text-xs uppercase tracking-wider font-medium text-neutral-600">

        <a href="#categorias" className="hover:text-amber-500 transition-colors duration-300">
          Categorías
        </a>

        <a href="#productos" className="hover:text-amber-500 transition-colors duration-300">
          Productos
        </a>

        <a href="#ofertas" className="hover:text-amber-500 transition-colors duration-300">
          Ofertas
        </a>

      </div>

      {/* DERECHA */}
      <div className="flex items-center gap-4">

        {/* CARRITO */}
        <motion.div
          whileTap={{ scale: 0.92 }}
          onClick={() => setOpenCart(true)}
          className="relative cursor-pointer p-1"
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-neutral-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
            />
          </svg>

          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-amber-500 text-black text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border border-white">
              {cartCount}
            </span>
          )}

        </motion.div>

        {/* MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
            />
          </svg>

        </button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="absolute top-full left-0 w-full bg-white border-b border-neutral-100 shadow-lg md:hidden"
          >

            <div className="p-6 space-y-5">

              <input
                type="text"
                placeholder="Buscar productos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-neutral-100 border border-neutral-200 rounded-2xl px-5 py-3 text-sm outline-none"
              />

              <div className="flex flex-col text-xs uppercase tracking-widest text-neutral-700 space-y-5">

                <a href="#categorias" onClick={() => setMenuOpen(false)}>
                  Categorías
                </a>

                <a href="#productos" onClick={() => setMenuOpen(false)}>
                  Productos
                </a>

                <a href="#ofertas" onClick={() => setMenuOpen(false)}>
                  Ofertas
                </a>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  );
}