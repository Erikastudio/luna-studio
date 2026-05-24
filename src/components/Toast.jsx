import { motion, AnimatePresence } from "framer-motion";

export default function Toast({ show, message }) {

  return (

    <AnimatePresence>

      {show && (

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
          className="fixed top-24 right-6 z-[9999]"
        >

          <div className="bg-neutral-950 text-white px-5 py-4 rounded-2xl shadow-2xl border border-neutral-800 flex items-center gap-3 min-w-[260px]">

            <div className="w-2 h-2 rounded-full bg-amber-500"></div>

            <p className="text-xs uppercase tracking-widest">
              {message}
            </p>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}