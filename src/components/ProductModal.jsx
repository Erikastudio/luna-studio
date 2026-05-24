import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductModal({
  product,
  onClose,
  addToCart
}) {

  const [img, setImg] = useState("");

  useEffect(() => {
    if (product) {
      setImg(product.images?.[0] || product.img);
    }
  }, [product]);

  if (!product) return null;

  const images = product.images || [product.img];

  return (

    <AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] flex items-center justify-center p-4"
      >

        <motion.div
          initial={{ y: 40, opacity: 0, scale: 0.96 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="bg-white w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2"
        >

          {/* IMÁGENES */}
          <div className="bg-neutral-100 p-4 md:p-6">

            <div className="aspect-square overflow-hidden rounded-2xl bg-white">

              <img
                src={img}
                alt={product.name}
                className="w-full h-full object-cover"
              />

            </div>

            {/* MINIATURAS */}
            <div className="flex gap-3 mt-4">

              {images.map((i, index) => (

                <button
                  key={index}
                  onClick={() => setImg(i)}
                  className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    img === i
                      ? "border-amber-500"
                      : "border-transparent"
                  }`}
                >

                  <img
                    src={i}
                    alt=""
                    className="w-full h-full object-cover"
                  />

                </button>

              ))}

            </div>

          </div>

          {/* INFO */}
          <div className="p-6 md:p-10 flex flex-col justify-center">

            <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-400 mb-2">
              Luna Store
            </p>

            <h2 className="text-3xl font-light uppercase tracking-wide text-neutral-900 mb-4">
              {product.name}
            </h2>

            <div className="flex items-center gap-3 mb-6">

              <span className="text-2xl font-medium text-neutral-900">
                ${product.price}
              </span>

              {product.oldPrice && (
                <span className="text-neutral-400 line-through">
                  ${product.oldPrice}
                </span>
              )}

            </div>

            <p className="text-neutral-500 leading-relaxed mb-8">
              {product.description || "Descubre una experiencia premium diseñada para elevar tu rutina de belleza con elegancia y sofisticación."}
            </p>

            {/* BOTONES */}
            <div className="space-y-3">

              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => addToCart(product)}
                className="w-full bg-neutral-950 text-white py-4 rounded-2xl uppercase tracking-widest text-xs hover:bg-amber-500 hover:text-black transition-all duration-300"
              >
                Agregar al carrito
              </motion.button>

              <button
                onClick={onClose}
                className="w-full border border-neutral-200 py-4 rounded-2xl uppercase tracking-widest text-xs hover:bg-neutral-100 transition-all duration-300"
              >
                Cerrar
              </button>

            </div>

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
}