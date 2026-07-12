import { motion } from "framer-motion";

const timelineData = [
  {
    title: "Golden Age Arc",
    year: "Arc I",
    description:
      "Guts joins the Band of the Hawk under Griffith and rises from a lone mercenary to a legendary warrior.",
  },
  {
    title: "The Eclipse",
    year: "Arc II",
    description:
      "One of the darkest moments in manga history. Griffith sacrifices the Band of the Hawk to become Femto.",
  },
  {
    title: "Black Swordsman",
    year: "Arc III",
    description:
      "Marked by the Brand of Sacrifice, Guts begins hunting Apostles while seeking revenge against Griffith.",
  },
  {
    title: "Conviction",
    year: "Arc IV",
    description:
      "Guts protects Casca while facing inquisitors, demons, and the terrifying rebirth of Griffith.",
  },
  {
    title: "Falcon of the Millennium Empire",
    year: "Arc V",
    description:
      "The Berserker Armor appears, pushing Guts beyond human limits at a terrible cost.",
  },
  {
    title: "Fantasia",
    year: "Arc VI",
    description:
      "The worlds of humans and monsters merge, changing reality forever.",
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="timeline-section">

      <motion.div
        className="timeline-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="section-subtitle">
          JOURNEY
        </p>

        <h2 className="section-title">
          The Path of the Black Swordsman
        </h2>
      </motion.div>

      <div className="timeline">

        {timelineData.map((item, index) => (

          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: .8,
              delay: index * .15,
            }}
            viewport={{ once: true }}
          >

            <div className="timeline-dot"></div>

            <div className="timeline-card">

              <span className="timeline-year">
                {item.year}
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Timeline;