import React from 'react';

export default function Categories() {
  const cats = ['Accesorios', 'Cuidado Facial', 'Esenciales'];
  return (
    <section id="categorias" className="py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-center text-xs uppercase tracking-[0.25em] text-neutral-400 mb-8">Explora Tendencias</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cats.map((cat, i) => (
          <div key={i} className="relative group aspect-[16/10] bg-neutral-100 overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 z-10" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <span className="text-white uppercase tracking-widest text-sm font-light bg-neutral-950/40 backdrop-blur-sm px-6 py-2.5 border border-white/20">{cat}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}