import React from 'react';

export default function Offers() {
  return (
    <section id="ofertas" className="bg-neutral-950 text-white py-14 px-6 my-12 border-y border-neutral-900">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="text-amber-500 text-[10px] uppercase tracking-widest font-bold block mb-1">¡Solo por hoy!</span>
          <h2 className="text-2xl md:text-3xl font-light tracking-widest uppercase text-white mb-2">Ofertas de Temporada</h2>
          <p className="text-neutral-400 text-xs max-w-sm font-light">Llévate tus favoritos con descuentos exclusivos. Envíos seguros a nivel nacional.</p>
        </div>
        <div className="flex gap-3">
          <div className="text-center bg-neutral-900 border border-neutral-800 p-3 min-w-[65px]">
            <span className="block text-lg font-medium text-amber-500">02</span>
            <span className="text-[8px] uppercase text-neutral-400 tracking-wider">Días</span>
          </div>
          <div className="text-center bg-neutral-900 border border-neutral-800 p-3 min-w-[65px]">
            <span className="block text-lg font-medium text-amber-500">14</span>
            <span className="text-[8px] uppercase text-neutral-400 tracking-wider">Horas</span>
          </div>
        </div>
      </div>
    </section>
  );
}