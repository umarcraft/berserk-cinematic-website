import { motion } from "framer-motion";

const StoryCard = ({ title, children }) => (
  <div className="space-y-4">
    <h3 className="font-serif text-lg uppercase tracking-[0.2em] text-white sm:text-xl">
      {title}
    </h3>
    {children}
  </div>
);

const Story = () => {
  return (
    <section id="story" className="section-padding bg-surface">
      <div className="section-container">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-berserk-red sm:text-sm">
              THE LEGEND
            </p>

            <h2 className="mb-8 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              A Story Forged in Blood
            </h2>

            <div className="space-y-6 text-sm leading-8 text-neutral-300 sm:text-base">
              <p>
                Born from the corpse of his hanged mother and raised on a
                battlefield, Guts has known nothing but violence since birth.
                His path eventually crosses with Griffith, leader of the Band of
                the Hawk a mercenary company chasing a dream of kingship. Guts
                rises through their ranks, finding in them the first real family
                he has ever known.
              </p>

              <p>
                That family ends in a single night. Betrayed by the man he once
                called friend, Guts survives the Eclipse branded and broken
                marked forever by the Brand of Sacrifice, a curse that draws
                every demon in the world to his blood.
              </p>

              <p>
                Now known as the Black Swordsman, Guts wages a solitary war
                against the Apostles who hunt him, wielding the massive
                Dragonslayer and later the Berserker Armor a relic that grants
                monstrous strength at the cost of his own mind. Vengeance is no
                longer a goal. It is the only thing keeping him alive.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="space-y-6">
              <div className="glass-card p-5 shadow-xl sm:p-6 lg:p-7">
                <StoryCard title="The Brand of Sacrifice">
                  <p className="text-sm leading-7 text-neutral-300 sm:text-base">
                    Burned into Guts during the Eclipse, the Brand marks him as an
                    offering denied to the God Hand. It bleeds when night falls,
                    calling every Apostle within reach a permanent hunter's mark
                    carved by the one person he trusted most.
                  </p>

                  <div className="my-4 h-px bg-white/10" />

                  <p className="text-sm italic leading-7 text-neutral-200 sm:text-base">
                    "There is no removing it. No curing it. Only outrunning what
                    it calls."
                  </p>

                  <p className="text-sm leading-7 text-neutral-300 sm:text-base">
                    For Guts, the Brand isn't just a curse it's proof of what
                    ambition can cost. Every scar it draws to him is a reminder of
                    the night his entire world was traded away for someone else's
                    godhood.
                  </p>
                </StoryCard>
              </div>

              <div className="glass-card p-5 shadow-xl sm:p-6 lg:p-7">
                <StoryCard title="The Berserker Armor">
                  <p className="text-sm leading-7 text-neutral-300 sm:text-base">
                    A gift from the witch Flora, the Berserker Armor answers
                    Guts's rage with strength no mortal body should possess. It
                    dulls pain, accelerates his reflexes, and lets him fight past
                    the point any normal warrior would fall but the armor takes as
                    much as it gives.
                  </p>

                  <div className="my-4 h-px bg-white/10" />

                  <p className="text-sm italic leading-7 text-neutral-200 sm:text-base">
                    "Power without limit always asks for something in return."
                  </p>

                  <p className="text-sm leading-7 text-neutral-300 sm:text-base">
                    Each time Guts dons it, the armor pulls him closer to losing
                    himself completely his mind fraying under its influence,
                    blurring the line between the man fighting for vengeance and
                    the monster the armor wants him to become.
                  </p>
                </StoryCard>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
