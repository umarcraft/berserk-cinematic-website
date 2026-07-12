import { motion } from "framer-motion";

const quotes = [
{
    text: "A man doesn't choose the shape of his suffering, only what he becomes because of it.",
    author: "Guts",
  },
  {
    text: "Power asks only one question: are you willing to lose everything to keep it?",
    author: "Griffith",
  },
  {
    text: "I stopped praying the day I realized the sky was empty.",
    author: "Casca",
  },
  {
    text: "Some men are born to lead. Others are born to be devoured by them.",
    author: "Zodd",
  },
  {
    text: "The dead don't haunt us. We haunt the memory of who we were before them.",
    author: "Skull Knight",
  },
  {
    text: "Not every wound bleeds. Some just sit quietly, waiting for the next blade.",
    author: "Farnese",
  },
  {
    text: "A prayer unanswered is still a prayer. It just costs more the second time.",
    author: "Godot",
  },
  {
    text: "There's a kind of silence that follows a man who has run out of things to lose.",
    author: "Void",
  },
  {
    text: "Magic doesn't fix a broken world. It just lets you see the cracks more clearly.",
    author: "Schierke",
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