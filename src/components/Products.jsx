import React from 'react';
import { motion } from 'framer-motion';

export default function Products({ addToCart }) {

  const dummyProducts = [
    {
      id: 1,
      name: "Glow Serum Premium",
      price: "85.000",
      oldPrice: "110.000",
      tag: "Best Seller",
      img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600"
    },
    {
      id: 2,
      name: "Paleta Cuarzo Luna",
      price: "62.000",
      oldPrice: null,
      tag: "Nuevo",
      img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600"
    },
    {
      id: 3,
      name: "Tónico Facial Botánico",
      price: "45.000",
      oldPrice: "55.000",
      tag: "Sale",
      img: "https://images.unsplash.com/photo-1608248597481-496100c8c836?q=80&w=600"
    },
    {
      id: 4,
      name: "Brocha Luxe Powder",
      price: "38.000",
      oldPrice: null,
      tag: null,
      img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600"
    }
  ];

  return (
    <section id="productos" className="py-12 px-4 max-w-7xl mx-auto">

      <div className="text-center mb-12">
        <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-2">
          Nuestro Catálogo
        </h2>

        <p className="text-xl font-light tracking-wide uppercase text-neutral-900">
          Productos Destacados
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

        {dummyProducts.map((prod) => (

          <motion.div
            key={prod.id}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="group relative flex flex-col bg-white border border-neutral-100 p-2 transition-all duration-300 hover:shadow-md"
          >

            <div className="relative aspect-[3/4] w-full bg-neutral-50 overflow-hidden mb-3">

              <img
                src={prod.img}
                alt={prod.name}
                className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {prod.tag && (
                <span className="absolute top-2 left-2 bg-neutral-950 text-amber-500 text-[9px] uppercase tracking-widest font-semibold px-2 py-0.5">
                  {prod.tag}
                </span>
              )}

            </div>

            <div className="flex flex-col flex-grow px-1 pb-1">

              <h3 className="text-xs font-light text-neutral-800 tracking-wide uppercase mb-1 line-clamp-1">
                {prod.name}
              </h3>

              <div className="flex items-center justify-between mt-auto pt-2">

                <div className="flex space-x-2 items-baseline">

                  <span className="text-neutral-900 font-medium text-xs">
                    ${prod.price}
                  </span>

                  {prod.oldPrice && (
                    <span className="text-neutral-400 line-through text-[10px]">
                      ${prod.oldPrice}
                    </span>
                  )}

                </div>

                {/* BOTÓN REAL */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => addToCart(prod)}
                  className="bg-neutral-950 text-white p-1.5 hover:bg-amber-500 hover:text-black transition-colors duration-300 cursor-pointer"
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>

                </motion.button>

              </div>
            </div>

          </motion.div>

        ))}

      </div>
    </section>
  );
}