<div className="group relative flex flex-col bg-white overflow-hidden border border-gray-100 p-2">
  {/* Contenedor de Imagen */}
  <div className="relative aspect-[3/4] w-full bg-gray-100 overflow-hidden mb-4">
    <img 
      src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1374" 
      alt="Producto" 
      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
    />
    {/* Badge de Oferta */}
    <span className="absolute top-3 left-3 bg-dark text-gold text-[10px] uppercase tracking-widest font-bold px-2 py-1">
      Sale -20%
    </span>
  </div>

  {/* Detalles */}
  <div className="flex flex-col flex-grow px-2 pb-2">
    <span className="text-[10px] uppercase text-gray-400 tracking-wider mb-1">Categoría</span>
    <h3 className="text-sm font-medium text-dark tracking-wide uppercase mb-2 line-clamp-1">Nombre del Producto</h3>
    
    <div className="flex items-center justify-between mt-auto">
      <div className="flex space-x-2 items-baseline">
        <span className="text-dark font-semibold text-sm">$80.000</span>
        <span className="text-gray-400 line-through text-xs">$100.000</span>
      </div>
      
      {/* Botón Agregar al Carrito minimalista */}
      <button className="bg-dark text-white p-2 hover:bg-gold hover:text-dark transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
  </div>
</div>