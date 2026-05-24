import { motion, AnimatePresence } from "framer-motion";

export default function Cart({
  openCart,
  setOpenCart,
  cart,
  setCart
}) {

  if (!openCart) return null;

  const total = cart.reduce(
    (sum, item) => sum + parseFloat(item.price.replace(".", "")) * (item.qty || 1),
    0
  );

  const removeItem = (index) => {
    const copy = [...cart];
    copy.splice(index, 1);
    setCart(copy);
  };

  const increaseQty = (index) => {
    const copy = [...cart];

    copy[index].qty = (copy[index].qty || 1) + 1;

    setCart(copy);
  };

  const decreaseQty = (index) => {
    const copy = [...cart];

    if ((copy[index].qty || 1) > 1) {
      copy[index].qty -= 1;
      setCart(copy);
    }
  };

  const sendWhatsApp = () => {

    let message = "Hola, quiero comprar:%0A%0A";

    cart.forEach((item) => {

      message += `• ${item.name} x${item.qty || 1} - $${item.price}%0A`;

    });

    message += `%0ATotal: $${total.toLocaleString()}`;

    window.open(
      `https://wa.me/573000000000?text=${message}`,
      "_blank"
    );
  };

  return (

    <AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999]"
        onClick={() => setOpenCart(false)}
      >

        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          exit={{ x: 400 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col"
        >

          {/* HEADER */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">

            <div>

              <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-400 mb-1">
                Luna Store
              </p>

              <h2 className="text-lg uppercase tracking-wide font-light text-neutral-900">
                Tu Carrito
              </h2>

            </div>

            <button
              onClick={() => setOpenCart(false)}
              className="text-neutral-500 hover:text-black transition-colors duration-300 text-xl"
            >
              ✕
            </button>

          </div>

          {/* PRODUCTOS */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">

            {cart.length === 0 && (

              <div className="h-full flex flex-col items-center justify-center text-center">

                <p className="text-neutral-400 uppercase tracking-widest text-xs mb-2">
                  Carrito vacío
                </p>

                <p className="text-neutral-500 text-sm">
                  Agrega productos para comenzar.
                </p>

              </div>

            )}

            {cart.map((item, i) => (

              <motion.div
                key={i}
                layout
                className="flex gap-4 border border-neutral-100 rounded-2xl p-3"
              >

                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-24 object-cover rounded-xl"
                />

                <div className="flex-1">

                  <h3 className="text-xs uppercase tracking-wide text-neutral-800 mb-1">
                    {item.name}
                  </h3>

                  <p className="text-sm font-medium text-neutral-900 mb-3">
                    ${item.price}
                  </p>

                  {/* CANTIDAD */}
                  <div className="flex items-center gap-2">

                    <button
                      onClick={() => decreaseQty(i)}
                      className="w-7 h-7 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-100"
                    >
                      -
                    </button>

                    <span className="text-sm w-5 text-center">
                      {item.qty || 1}
                    </span>

                    <button
                      onClick={() => increaseQty(i)}
                      className="w-7 h-7 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-100"
                    >
                      +
                    </button>

                  </div>

                </div>

                {/* ELIMINAR */}
                <button
                  onClick={() => removeItem(i)}
                  className="text-neutral-400 hover:text-red-500 transition-colors duration-300 text-sm"
                >
                  ✕
                </button>

              </motion.div>

            ))}

          </div>

          {/* FOOTER */}
          {cart.length > 0 && (

            <div className="border-t border-neutral-100 p-6">

              <div className="flex justify-between items-center mb-5">

                <span className="uppercase tracking-widest text-xs text-neutral-500">
                  Total
                </span>

                <span className="text-xl font-medium text-neutral-900">
                  ${total.toLocaleString()}
                </span>

              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={sendWhatsApp}
                className="w-full bg-neutral-950 text-white py-4 rounded-2xl uppercase tracking-widest text-xs hover:bg-amber-500 hover:text-black transition-all duration-300"
              >
                Finalizar Pedido
              </motion.button>

            </div>

          )}

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
}