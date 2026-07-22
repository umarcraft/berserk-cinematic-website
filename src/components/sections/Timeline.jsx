import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { timelineData } from "../../data/timeline";

const Timeline = () => {
  return (
    <section id="timeline" className="section-padding bg-surface">
      <div className="section-container">
        <SectionHeader
          subtitle="JOURNEY"
          title="The Path of the Black Swordsman"
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute bottom-0 left-[11px] top-0 w-0.5 bg-berserk-red"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <motion.article
                key={item.title}
                className="relative pl-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-60px" }}
              >
                <div
                  className="absolute left-1 top-5 h-5 w-5 rounded-full border-2 border-berserk-red bg-surface shadow-[0_0_20px_#8b0000]"
                  aria-hidden="true"
                />

                <div className="glass-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-berserk-red/60 hover:shadow-[0_15px_45px_rgba(139,0,0,0.15)] sm:p-8">
                  <span className="text-xs uppercase tracking-[0.25em] text-berserk-red">
                    {item.year}
                  </span>

                  <h3 className="mt-3 font-serif text-xl sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-neutral-300 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
