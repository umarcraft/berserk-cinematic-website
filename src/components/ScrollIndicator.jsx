import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <motion.div
      className="scroll-indicator"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <span>SCROLL</span>

      <motion.div
        className="scroll-arrow"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ↓
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;