import { motion } from "framer-motion";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.png",
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">

      <motion.div
        className="gallery-header"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="section-subtitle">
          VISUALS
        </p>

        <h2 className="section-title">
          Journey Through Darkness
        </h2>
      </motion.div>

      <div className="gallery-grid">

        {images.map((image, index) => (

          <motion.div
            key={index}
            className="gallery-card"
            whileHover={{ scale: 1.05 }}
          >

            <img
              src={image}
              alt="Berserk"
            />

          </motion.div>

        ))}

      </div>

    </section>
  );
}