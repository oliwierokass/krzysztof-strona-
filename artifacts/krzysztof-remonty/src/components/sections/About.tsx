import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img 
                src="/images/gallery-detail-1.png" 
                alt="Detale wykończenia" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square bg-primary/10 border border-primary/20 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-8">
              Rzemiosło. <br />
              <span className="text-primary italic">Precyzja.</span> <br />
              Zaufanie.
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
              <p>
                Jesteśmy dynamiczną firmą remontowo-budowlaną z Małopolski. Specjalizujemy się w kompleksowej obsłudze inwestycji mieszkaniowych.
              </p>
              <p>
                Łączymy rzemieślniczą precyzję z nowoczesnymi technologiami, dbając o każdy, nawet najmniejszy detal Twojego nowego domu. Nasze podejście to nie tylko wykonawstwo, to doradztwo, transparentność i spokój ducha dla inwestora.
              </p>
              <div className="pt-6 border-t border-border flex gap-8">
                <div>
                  <span className="block text-3xl font-serif text-foreground mb-1">10+</span>
                  <span className="text-sm uppercase tracking-wider text-primary font-medium">Lat doświadczenia</span>
                </div>
                <div>
                  <span className="block text-3xl font-serif text-foreground mb-1">100%</span>
                  <span className="text-sm uppercase tracking-wider text-primary font-medium">Satysfakcji</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
