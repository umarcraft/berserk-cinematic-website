import { motion } from "framer-motion";

const quotes = [
  {
    text: "Is mankind truly free, or merely a puppet dancing on strings held by something beyond this world?",
    author: "Void",
  },
  {
    text: "Hatred is the refuge of a man who can no longer bear his own sorrow.",
    author: "Godot",
  },
  {
    text: "A dream can breathe life into a man's soul or become the very cage that destroys him.",
    author: "Griffith",
  },
  {
    text: "Worry about every ant you might crush beneath your feet, and you'll never take another step.",
    author: "Guts",
  },
  {
    text: "There is no paradise for you to escape to.",
    author: "Skull Knight",
  },
  {
    text: "The world is not beautiful, therefore it is.",
    author: "Flora",
  },
  {
    text: "Strength is earned by those who continue to struggle, even after losing everything.",
    author: "Guts",
  },
  {
    text: "Dreams give people purpose. Without them, even victory feels empty.",
    author: "Griffith",
  },
  {
    text: "Those who cling to life will eventually encounter despair, yet they continue to move forward.",
    author: "Skull Knight",
  },
];

export default function Quotes() {
  return (
    <section className="quotes" id="quotes">

      <motion.div
        className="quotes-header"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="section-subtitle">ECHOES FROM THE ABYSS</p>

        <h2 className="section-title">
          Quotes That Defined A Legend
        </h2>
      </motion.div>

      <div className="quotes-grid">
        {quotes.map((quote, index) => (
          <motion.div
            className="quote-card"
            key={index}
            whileHover={{
              scale: 1.03,
              y: -8,
            }}
          >
            <span className="quote-mark">"</span>

            <p>{quote.text}</p>

            <h4>— {quote.author}</h4>
          </motion.div>
        ))}
      </div>

    </section>
  );
}