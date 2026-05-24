import React from 'react';

export default function Testimonials() {
  const reviews = [
    { name: "Valeria M.", text: "El empaque es precioso y la atención al cliente por WhatsApp fue súper rápida. ¡Recomendados!" },
    { name: "Camila R.", text: "Amo el minimalismo de la marca. Mis productos llegaron a Bogotá en dos días perfectos." }
  ];

  return (
    <section id="opiniones" className="py-12 bg-neutral-50 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-400 mb-8">Experiencias Luna</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-6 border border-neutral-100 text-center">
              <p className="text-neutral-600 text-xs italic font-light mb-4">"{rev.text}"</p>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-neutral-900">{rev.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}