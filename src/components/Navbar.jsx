import React from 'react';

export default function Navbar({ cartCount }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100 px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold tracking-widest uppercase text-neutral-900">
        Luna<span className="text-amber-500">.</span>Store
      </div>
      
      <div className="hidden md:flex space-x-8 text-xs uppercase tracking-wider font-medium text-neutral-600">
        <a href="#categorias" className="hover:text-amber-500 transition-colors">Categorías</a>
        <a href="#productos" className="hover:text-amber-500 transition-colors">Productos</a>
        <a href="#ofertas" className="hover:text-amber-500 transition-colors">Ofertas</a>
        <a href="#opiniones" className="hover:text-amber-500 transition-colors">Opiniones</a>
      </div>

      {/* Carrito Dinámico */}
      <div className="relative cursor-pointer p-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-neutral-900">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
        </svg>
        {/* Aquí se pinta el número que viene desde App.jsx */}
        <span className="absolute -top-1 -right-1 bg-amber-500 text-neutral-950 text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border border-white">
          {cartCount}
        </span>
      </div>
    </nav>
  );
}