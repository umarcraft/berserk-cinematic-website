import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { quotes } from "../../data/quotes";

export default function Quotes() {
  return (
    <section id="quotes" className="section-padding bg-surface-darker">
      <div className="section-container">
        <SectionHeader
          subtitle="ECHOES FROM THE ABYSS"
          title="Quotes That Defined A Legend"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {quotes.map((quote, index) => (
            <motion.blockquote
              key={quote.text}
              className="glass-card flex min-h-[280px] flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-berserk-red/60 hover:shadow-[0_20px_50px_rgba(139,0,0,0.2)] sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <span
                className="font-serif text-5xl leading-none text-berserk-red"
                aria-hidden="true"
              >
                "
              </span>

              <p className="my-4 flex flex-1 items-center text-sm leading-7 text-neutral-200 sm:text-base">
                {quote.text}
              </p>

              <footer className="mt-4 text-sm font-medium text-white sm:text-base">
                — {quote.author}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
