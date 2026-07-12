import { motion } from "framer-motion";
import Model from "./Model";
import ScrollIndicator from "./ScrollIndicator";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const scrollToStory = () => {
    const story = document.getElementById("story");
    if (story) {
      story.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Background Overlay */}
      <div className="hero-overlay"></div>

      {/* Floating Particles */}
      <ParticleBackground />

      {/* Left Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <p className="hero-subtitle">THE BLACK SWORDSMAN</p>

        <h1 className="hero-title">BERSERK</h1>

        <p className="hero-description">
          Enter the unforgiving world of Berserk. Experience the legendary
          Berserker Armor in an immersive cinematic journey inspired by Kentaro
          Miura's masterpiece. Discover the story, the sacrifice, and the
          darkness behind one of the greatest manga ever created.
        </p>

        <button className="hero-btn" onClick={scrollToStory}>
          Explore the Journey
        </button>
      </motion.div>

      {/* Right Model */}
      <motion.div
        className="hero-model"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Model />
      </motion.div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;