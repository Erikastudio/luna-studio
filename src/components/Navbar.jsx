import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ cartCount }) {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100 px-6 py-4 flex justify-between items-center">

      {/* LOGO */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="text-xl font-bold tracking-widest uppercase text-neutral-900 cursor-pointer"
      >
        Luna<span className="text-amber-500">.</span>Store
      </motion.div>

      {/* MENU DESKTOP */}
      <div className="hidden md:flex space-x-8 text-xs uppercase tracking-wider font-medium text-neutral-600">

        <a href="#categorias" className="hover:text-amber-500 transition-colors duration-300">
          Categorías
        </a>

        <a href="#productos" className="hover:text-amber-500 transition-colors duration-300">
          Productos
        </a>

        <a href="#ofertas" className="hover:text-amber-500 transition-colors duration-300">
          Ofertas
        </a>

        <a href="#opiniones" className="hover:text-amber-500 transition-colors duration-300">
          Opiniones
        </a>

      </div>

      {/* DERECHA */}
      <div className="flex items-center gap-4">

        {/* CARRITO */}
        <motion.div
          whileTap={{ scale: 0.92 }}
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

          {/* CONTADOR */}
          <AnimatePresence>

            {cartCount > 0 && (

              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-1 -right-1 bg-amber-500 text-neutral-950 text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border border-white"
              >
                {cartCount}
              </motion.span>

            )}

          </AnimatePresence>

        </motion.div>

        {/* BOTÓN MOBILE */}
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

      {/* MENU MOBILE */}
      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="absolute top-full left-0 w-full bg-white border-b border-neutral-100 shadow-lg md:hidden"
          >

            <div className="flex flex-col text-xs uppercase tracking-widest text-neutral-700 p-6 space-y-5">

              <a href="#categorias" onClick={() => setMenuOpen(false)}>
                Categorías
              </a>

              <a href="#productos" onClick={() => setMenuOpen(false)}>
                Productos
              </a>

              <a href="#ofertas" onClick={() => setMenuOpen(false)}>
                Ofertas
              </a>

              <a href="#opiniones" onClick={() => setMenuOpen(false)}>
                Opiniones
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  );
}