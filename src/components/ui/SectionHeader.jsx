import { motion } from "framer-motion";

export default function SectionHeader({
  subtitle,
  title,
  align = "center",
  className = "",
}) {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.header
      className={`mb-12 sm:mb-16 lg:mb-20 max-w-3xl ${alignment} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-berserk-red sm:text-sm">
        {subtitle}
      </p>
      <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </motion.header>
  );
}
