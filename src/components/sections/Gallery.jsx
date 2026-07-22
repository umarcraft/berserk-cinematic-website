import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { galleryImages } from "../../data/gallery";

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-surface-dark">
      <div className="section-container">
        <SectionHeader
          subtitle="VISUALS"
          title="Journey Through Darkness"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {galleryImages.map((image, index) => (
            <motion.figure
              key={image.src}
              className="group overflow-hidden rounded-2xl"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
