import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative bg-neutral-950 text-white h-[75vh] flex items-center justify-center overflow-hidden"
    >
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470')",
        }}
      ></div>

      {/* Overlay elegante */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-amber-500 uppercase text-[10px] block mb-3 font-semibold"
        >
          Nueva Colección 2026
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl font-extralight tracking-wide uppercase mb-6 leading-tight"
        >
          Tu esencia, tu estilo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-neutral-300 font-light text-xs md:text-sm tracking-widest mb-8 max-w-md mx-auto uppercase leading-6"
        >
          Diseños minimalistas pensados para resaltar tu brillo natural.
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          href="#productos"
          className="inline-block bg-transparent border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black transition-all duration-300 text-xs uppercase tracking-widest px-8 py-3.5 font-medium"
        >
          Ver Catálogo
        </motion.a>
      </div>
    </motion.section>
  );
}