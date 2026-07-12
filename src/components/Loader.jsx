import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
<img
  src="/images/brand.png"
  alt="Brand of Sacrifice"
  className="brand-logo"
/>

      <motion.h1
        className="loader-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        BERSERK
      </motion.h1>

      <motion.p
        className="loader-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.8,
          duration: 1,
        }}
      >
        ENTERING THE ABYSS
      </motion.p>

      <div className="loader-bar">
        <motion.div
          className="loader-progress"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};

export default Loader;