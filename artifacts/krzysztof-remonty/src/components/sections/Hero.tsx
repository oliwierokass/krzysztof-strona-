import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero.png)' }}
      >
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block text-primary font-medium tracking-widest uppercase mb-4 text-sm md:text-base">
              Krzysztof – Kompleksowe Wykończenia Wnętrz
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-medium leading-[1.1] mb-6">
              Wnętrza z Pasją – <br />
              Remonty od A do Z <br />
              <span className="text-primary italic">w Małopolsce</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 font-light leading-relaxed"
          >
            Kompleksowe wykończenia mieszkań deweloperskich i remonty z rynku wtórnego. 
            Rzemieślnicza precyzja, która odmieni Twoją przestrzeń.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="rounded-none text-base h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground border-none">
              <a href="#contact">Zgłoś się po darmową wycenę</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-none text-base h-14 px-8 bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white">
              <a href="#portfolio">Zobacz realizacje</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
