import React from 'react';

export default function Categories({ setCategory }) {

 const cats = [
  {
    name: 'Maquillaje',
    image: '/productos/paletadesombrasseytu.png'
  },
  {
    name: 'Cuidado Facial',
    image: '/productos/cremahidratanteseytu.png'
  },
  {
    name: 'Accesorios',
    image: '/productos/acc4.webp'
  },
  {
    name: 'Ropa',
    image: '/productos/vestido.webp'
  }
];

  return (
    <section id="categorias" className="py-12 px-6 max-w-7xl mx-auto">

      <h2 className="text-center text-xs uppercase tracking-[0.25em] text-neutral-400 mb-8">
        Explora Tendencias
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {cats.map((cat, i) => (

       <div
  key={i}
  onClick={() => {
    setCategory(cat.name);

    document.getElementById("productos")?.scrollIntoView({
      behavior: "smooth"
    });
  }}
            className="relative group aspect-[16/10] overflow-hidden rounded-xl cursor-pointer shadow-md"
          >

            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

              <span className="text-white uppercase tracking-widest text-sm font-medium">
                {cat.name}
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}