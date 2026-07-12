import { motion } from "framer-motion";

const Story = () => {
  return (
    <section id="story" className="story">

      <motion.div
        className="story-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

<p className="section-subtitle">
  THE LEGEND
</p>

<h2 className="section-title">
  A Story Forged in Blood
</h2>

<p className="story-text">
  Born from the corpse of his hanged mother and raised on a battlefield,
  Guts has known nothing but violence since birth. His path eventually
  crosses with Griffith, leader of the Band of the Hawk  a mercenary
  company chasing a dream of kingship. Guts rises through their ranks,
  finding in them the first real family he has ever known.
</p>

<p className="story-text">
  That family ends in a single night. Betrayed by the man he once called
  friend, Guts survives the Eclipse branded and broken marked forever
  by the Brand of Sacrifice, a curse that draws every demon in the world
  to his blood.
</p>

<p className="story-text">
  Now known as the Black Swordsman, Guts wages a solitary war against
  the Apostles who hunt him, wielding the massive Dragonslayer and later
  the Berserker Armor a relic that grants monstrous strength at the
  cost of his own mind. Vengeance is no longer a goal. It is the only
  thing keeping him alive.
</p>

      </motion.div>

      <motion.div
        className="story-right"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

<div className="story-card">
  <h3 className="card-title">The Brand of Sacrifice</h3>

  <p className="card-text">
  Burned into Guts during the Eclipse, the Brand marks him as an offering
  denied to the God Hand. It bleeds when night falls, calling every
  Apostle within reach a permanent hunter's mark carved by the one
  person he trusted most.
</p>

<div className="card-divider" />

<p className="card-highlight">
  "There is no removing it. No curing it. Only outrunning what it calls."
</p>

<p className="card-text">
  For Guts, the Brand isn't just a curse it's proof of what ambition
  can cost. Every scar it draws to him is a reminder of the night his
  entire world was traded away for someone else's godhood.
</p> 


<br/>
<br/> 
<br/>

<h3 className="card-title">The Berserker Armor</h3>

<p className="card-text">
  A gift from the witch Flora, the Berserker Armor answers Guts's rage
  with strength no mortal body should possess. It dulls pain, accelerates
  his reflexes, and lets him fight past the point any normal warrior
  would fall but the armor takes as much as it gives.
</p>

<div className="card-divider" />

<p className="card-highlight">
  "Power without limit always asks for something in return."
</p>

<p className="card-text">
  Each time Guts dons it, the armor pulls him closer to losing himself
  completely his mind fraying under its influence, blurring the line
  between the man fighting for vengeance and the monster the armor wants
  him to become.
</p>

</div>

      </motion.div>

    </section>
    






  );
};

export default Story;