import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white py-10 px-6 text-center border-t border-neutral-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-base font-light tracking-[0.3em] uppercase mb-4">Luna<span className="text-amber-500">.</span>Store</h2>
        <p className="text-neutral-500 text-[10px] tracking-widest uppercase mb-6">© 2026 Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-6 text-[10px] uppercase tracking-widest text-neutral-400">
          <a href="#" className="hover:text-amber-500">Privacidad</a>
          <a href="#" className="hover:text-amber-500">Términos</a>
          <a href="#" className="hover:text-amber-500">Soporte</a>
        </div>
      </div>
    </footer>
  );
}