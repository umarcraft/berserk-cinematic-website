import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black px-6"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src="/images/band_of_the_hawk/berserk-band-mark.png"
        alt="Brand of Sacrifice"
        className="brand-logo mb-8 w-24 opacity-85 drop-shadow-[0_0_20px_rgba(179,0,0,0.8)] sm:w-28"
        width={112}
        height={112}
      />

      <motion.h1
        className="font-serif text-3xl tracking-[0.35em] text-white sm:text-4xl md:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        BERSERK
      </motion.h1>

      <motion.p
        className="mt-4 text-xs tracking-[0.35em] text-neutral-400 sm:text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        ENTERING THE ABYSS
      </motion.p>

      <div className="mt-10 h-0.5 w-full max-w-xs overflow-hidden rounded-full bg-neutral-800">
        <motion.div
          className="h-full bg-berserk-red"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default Loader;
