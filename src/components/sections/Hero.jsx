import { Suspense } from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import Model from "../ui/Model";
import ScrollIndicator from "../ui/ScrollIndicator";
import ParticleBackground from "../ui/ParticleBackground";

const Hero = () => {
  const scrollToStory = () => {
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center gap-10 overflow-hidden px-5 pt-20 sm:px-8 md:flex-row md:items-center md:justify-between md:gap-8 md:pt-24 lg:gap-12 lg:px-10"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/backgrounds/hero-background.png')" }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/78 to-black/55"
        aria-hidden="true"
      />

      <ParticleBackground />

      <motion.div
        className="relative z-10 w-full max-w-xl text-center md:max-w-md md:flex-1 md:text-left md:translate-x-6 lg:max-w-xl lg:translate-x-12"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="mb-4 text-xs uppercase tracking-[0.5em] text-neutral-400 sm:text-sm">
          THE BLACK SWORDSMAN
        </p>

        <h1 className="font-serif text-5xl font-extrabold uppercase leading-[0.95] tracking-[0.15em] text-white sm:text-6xl md:text-5xl lg:text-7xl">
          BERSERK
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-neutral-300 sm:text-base sm:leading-8 md:mx-0">
          Enter the unforgiving world of Berserk. Experience the legendary
          Berserker Armor in an immersive cinematic journey inspired by Kentaro
          Miura's masterpiece. Discover the story, the sacrifice, and the
          darkness behind one of the greatest manga ever created.
        </p>

        <button
          type="button"
          onClick={scrollToStory}
          className="group relative mt-8 inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/25 bg-white/5 px-8 py-4 text-xs uppercase tracking-[0.25em] text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-berserk-red hover:bg-berserk-red hover:shadow-[0_0_30px_rgba(139,0,0,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-berserk-red-light focus-visible:ring-offset-2 focus-visible:ring-offset-black active:translate-y-0 active:scale-[0.97] active:shadow-none sm:px-10 sm:text-sm"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <span className="relative">Explore the Journey</span>
          <HiArrowRight className="relative text-base transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </motion.div>

      <motion.div
        className="relative z-10 h-[42vh] w-full max-w-lg md:h-[70vh] md:max-w-none md:flex-1 md:translate-x-6 lg:h-[80vh] lg:translate-x-12"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Suspense
          fallback={
            <div className="flex h-full items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-sm tracking-widest text-neutral-400">
              Loading armor...
            </div>
          }
        >
          <Model />
        </Suspense>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
