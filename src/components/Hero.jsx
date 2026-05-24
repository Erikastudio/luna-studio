import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-neutral-950 text-white h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Imagen estética de fondo con opacidad suave */}
      <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470')" }}></div>
      
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <span className="text-amber-500 tracking-[0.3em] uppercase text-[10px] block mb-3 font-semibold">Nueva Colección 2026</span>
        <h1 className="text-4xl md:text-6xl font-extralight tracking-wide uppercase mb-6">
          Tu esencia, tu estilo
        </h1>
        <p className="text-neutral-400 font-light text-xs md:text-sm tracking-widest mb-8 max-w-md mx-auto uppercase">
          Diseños minimalistas pensados para resaltar tu brillo natural.
        </p>
        <a href="#productos" className="inline-block bg-transparent border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black transition-all duration-300 text-xs uppercase tracking-widest px-8 py-3.5 font-medium">
          Ver Catálogo
        </a>
      </div>
    </section>
  );
}