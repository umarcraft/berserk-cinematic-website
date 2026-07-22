import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks, sectionIds } from "../../data/navigation";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const Navbar = () => {
  const { activeSection, scrolled } = useScrollSpy(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex h-16 items-center justify-between sm:h-20">
        <a
          href="#home"
          className="font-serif text-lg font-bold tracking-[0.35em] sm:text-xl"
          onClick={closeMenu}
        >
          <span className="text-berserk-red-light">B</span>ERSERK
        </a>

        <ul className="hidden items-center gap-8 lg:flex xl:gap-11">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`nav-link ${activeSection === link.id ? "active" : ""}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-2xl text-white transition-all duration-300 hover:border-berserk-red hover:text-berserk-red-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-berserk-red-light/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-90 lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="grid place-items-center">
            <motion.span
              key={menuOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="col-start-1 row-start-1"
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </motion.span>
          </span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="section-container flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className={`block rounded-lg px-4 py-3 text-sm tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-berserk-red-light/70 ${
                      activeSection === link.id
                        ? "bg-berserk-red/20 text-berserk-red-light"
                        : "text-white/90 hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
