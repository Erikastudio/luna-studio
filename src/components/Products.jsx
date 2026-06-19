import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductModal from './ProductModal';

export default function Products({
  addToCart,
  search,
  category,
  setCategory
}) {
console.log("Category en Products:", category);
  const [selectedProduct, setSelectedProduct] = useState(null);

const dummyProducts = [
  {
    id: 1,
    name: "Base Seytu",
    category: "Maquillaje",
    price: "120.000",
    img: "/productos/baseseytu.png",
    images: ["/productos/baseseytu.png"]
  },
  {
    id: 2,
    name: "Corrector Líquido Seytu",
    category: "Maquillaje",
    price: "95.000",
    img: "/productos/correctorliquidoseytu.webp",
    images: ["/productos/correctorliquidoseytu.webp"]
  },
  {
    id: 3,
    name: "Crema Hidratante Seytu",
    category: "Cuidado Facial",
    price: "150.000",
    img: "/productos/cremahidratanteseytu.png",
    images: ["/productos/cremahidratanteseytu.png"]
  },
  {
    id: 4,
    name: "Esponja Seytu",
    category: "Accesorios",
    price: "35.000",
    img: "/productos/esponjaseytu.jpg",
    images: ["/productos/esponjaseytu.jpg"]
  },
  {
    id: 5,
    name: "Espuma Limpiadora Seytu",
    category: "Cuidado Facial",
    price: "110.000",
    img: "/productos/espumalimpiadoraseytu.jpg",
    images: ["/productos/espumalimpiadoraseytu.jpg"]
  },
  {
    id: 6,
    name: "Gloss Seytu",
    category: "Maquillaje",
    price: "60.000",
    img: "/productos/glossseytu.jpg",
    images: ["/productos/glossseytu.jpg"]
  },
  {
    id: 7,
    name: "Lápiz Delineador Seytu",
    category: "Maquillaje",
    price: "45.000",
    img: "/productos/lapizdelineadorseytu.png",
    images: ["/productos/lapizdelineadorseytu.png"]
  },
  {
    id: 8,
    name: "Paleta de Sombras Seytu",
    category: "Maquillaje",
    price: "180.000",
    img: "/productos/paletadesombrasseytu.png",
    images: ["/productos/paletadesombrasseytu.png"]
  },
  {
    id: 9,
    name: "Pestañina Seytu",
    category: "Maquillaje",
    price: "85.000",
    img: "/productos/pestañinaseytu.png",
    images: ["/productos/pestañinaseytu.png"]
  },
  {
    id: 10,
    name: "Polvos Seytu",
    category: "Maquillaje",
    price: "90.000",
    img: "/productos/polvoseytu.jpg",
    images: ["/productos/polvoseytu.jpg"]
  },
  {
    id: 11,
    name: "Rubor Seytu",
    category: "Maquillaje",
    price: "75.000",
    img: "/productos/ruborseytu.jpeg",
    images: ["/productos/ruborseytu.jpeg"]
  },
  {
  id: 12,
  name: "Collar Elegante",
  category: "Accesorios",
  price: "45.000",
  img: "/productos/acc.webp",
  images: ["/productos/acc.webp"]
},
{
  id: 13,
  name: "Accesorio Premium",
  category: "Accesorios",
  price: "55.000",
  img: "/productos/acc1.jpg",
  images: ["/productos/acc1.jpg"]
},
{
  id: 14,
  name: "Collar Fashion",
  category: "Accesorios",
  price: "50.000",
  img: "/productos/acc2.jpg",
  images: ["/productos/acc2.jpg"]
},
{
  id: 15,
  name: "Perla Collar Deluxe",
  category: "Accesorios",
  price: "60.000",
  img: "/productos/acc3.webp",
  images: ["/productos/acc3.webp"]
},
{
  id: 16,
  name: "Bolso Glam",
  category: "Accesorios",
  price: "65.000",
  img: "/productos/acc4.webp",
  images: ["/productos/acc4.webp"]
},
{
  id: 17,
  name: "Bolso Exclusive",
  category: "Accesorios",
  price: "70.000",
  img: "/productos/acc5.webp",
  images: ["/productos/acc5.webp"]
},
{
  id: 18,
  name: "Camisa Moda",
  category: "Ropa",
  price: "89.000",
  img: "/productos/camisa.webp",
  images: ["/productos/camisa.webp"]
},
{
  id: 19,
  name: "Conjunto Moderno",
  category: "Ropa",
  price: "149.000",
  img: "/productos/conjunto.jpg",
  images: ["/productos/conjunto.jpg"]
},
{
  id: 20,
  name: "Falda Fashion",
  category: "Ropa",
  price: "79.000",
  img: "/productos/falda.jpg",
  images: ["/productos/falda.jpg"]
},
{
  id: 21,
  name: "Pantalón Casual",
  category: "Ropa",
  price: "99.000",
  img: "/productos/pantalon.jpg",
  images: ["/productos/pantalon.jpg"]
},
{
  id: 22,
  name: "Vestido Elegante",
  category: "Ropa",
  price: "129.000",
  img: "/productos/vestido.webp",
  images: ["/productos/vestido.webp"]
}
];

  // FILTRO SEARCH
 const filteredProducts = dummyProducts.filter((product) => {
  const matchSearch = product.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchCategory =
    category === "Todos" || product.category === category;

  return matchSearch && matchCategory;
});

  return (
    <>
      <section id="productos" className="py-12 px-4 max-w-7xl mx-auto">

        <div className="text-center mb-12">

          <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-2">
            Nuestro Catálogo
          </h2>

<p className="text-xl font-light tracking-wide uppercase text-neutral-900">
  {category === "Todos" ? "Productos Destacados" : category}
</p>

</div>

        {/* SIN RESULTADOS */}
        {filteredProducts.length === 0 && (

          <div className="text-center py-20">

            <p className="uppercase tracking-[0.3em] text-neutral-400 text-xs mb-3">
              Luna Store
            </p>

            <h3 className="text-2xl font-light text-neutral-800 mb-2">
              No encontramos productos
            </h3>

            <p className="text-neutral-500">
              Intenta buscar otro producto.
            </p>

          </div>

        )}
<div className="flex flex-wrap justify-center gap-4 mb-10">

  <button
    onClick={() => setCategory("Todos")}
    className="px-6 py-2 rounded-full border border-neutral-300 hover:bg-black hover:text-white transition-all duration-300"
  >
    ✨ Todos
  </button>

  <button
    onClick={() => setCategory("Maquillaje")}
    className="px-6 py-2 rounded-full border border-pink-300 hover:bg-pink-500 hover:text-white transition-all duration-300"
  >
    💄 Maquillaje
  </button>

  <button
    onClick={() => setCategory("Cuidado Facial")}
    className="px-6 py-2 rounded-full border border-emerald-300 hover:bg-emerald-500 hover:text-white transition-all duration-300"
  >
    🧴 Cuidado Facial
  </button>

  <button
    onClick={() => setCategory("Accesorios")}
    className="px-6 py-2 rounded-full border border-amber-300 hover:bg-amber-500 hover:text-white transition-all duration-300"
  >
    👜 Accesorios
  </button>

<button
  onClick={() => setCategory("Ropa")}
  className="px-6 py-2 rounded-full border border-violet-300 hover:bg-violet-500 hover:text-white transition-all duration-300"
>
  👗 Ropa
</button>

</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

          {filteredProducts.map((prod) => (

            <motion.div
              key={prod.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedProduct(prod)}
              className="group relative flex flex-col bg-white border border-neutral-100 p-2 transition-all duration-300 hover:shadow-md cursor-pointer"
            >

              <div className="relative aspect-square w-full bg-neutral-50 overflow-hidden mb-3 p-4">

               <img
  src={prod.img}
  alt={prod.name}
  className="h-full w-full object-contain object-center group-hover:scale-105 transition-transform duration-700"
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

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(prod);
                    }}
                    className="bg-neutral-950 text-white p-1.5 hover:bg-amber-500 hover:text-black transition-colors duration-300"
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

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        addToCart={addToCart}
      />
    </>
  );
}