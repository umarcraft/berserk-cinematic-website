import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center text-xs tracking-[0.35em] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <span>SCROLL</span>

      <motion.span
        className="mt-2 text-xl"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      >
        ↓
      </motion.span>
    </motion.div>
  );
};

export default ScrollIndicator;
