import { FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="section-container py-16 text-center sm:py-20">
        <h2 className="font-serif text-2xl tracking-[0.35em] sm:text-3xl">
          BERSERK
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm text-neutral-400 sm:text-base">
          Inspired by Kentaro Miura's legendary masterpiece.
        </p>

        <div className="mt-8 flex items-center justify-center gap-8 text-2xl text-neutral-300">
          <FaEnvelope
            className="cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:text-berserk-red"
            aria-label="Email"
          />
          <FaGithub
            className="cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:text-berserk-red"
            aria-label="GitHub"
          />
        </div>

        <small className="mt-8 block text-xs tracking-widest text-neutral-500">
          Made by Umarcraft247@gmail.com
        </small>
      </div>
    </footer>
  );
}
