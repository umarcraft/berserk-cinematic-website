import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = [
      "home",
      "story",
      "timeline",
      "quotes",
      "gallery",
    ];

    const handleScroll = () => {
      // Navbar background
      setScrolled(window.scrollY > 60);

      // Position used to detect the current section
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const id of sections) {
        const section = document.getElementById(id);

        if (!section) continue;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          if (activeSection !== id) {
            setActiveSection(id);
          }
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <div className="logo">
        <span>B</span>ERSERK
      </div>

      <ul className="nav-links">
        <li>
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#story"
            className={activeSection === "story" ? "active" : ""}
          >
            Story
          </a>
        </li>

        <li>
          <a
            href="#timeline"
            className={activeSection === "timeline" ? "active" : ""}
          >
            Timeline
          </a>
        </li>

        <li>
          <a
            href="#quotes"
            className={activeSection === "quotes" ? "active" : ""}
          >
            Quotes
          </a>
        </li>

        <li>
          <a
            href="#gallery"
            className={activeSection === "gallery" ? "active" : ""}
          >
            Gallery
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;