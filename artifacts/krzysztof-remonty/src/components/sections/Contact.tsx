import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="block text-primary text-sm tracking-widest uppercase font-medium mb-6">
              Kontakt
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-background font-medium leading-tight mb-6">
              Masz pytania? <br />
              <span className="text-primary italic">Zadzwoń teraz!</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed font-light mb-12">
              Porozmawiajmy o Twoim projekcie. Zadzwoń, opowiedz co chcesz zrobić,<br className="hidden md:block" />
              a przygotuję dla Ciebie bezpłatną wycenę.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mb-12"
          >
            <a
              href="tel:+48000000000"
              data-testid="link-phone-cta"
              className="inline-flex items-center gap-4 bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 text-xl font-medium tracking-wide transition-colors duration-200"
            >
              <Phone size={22} className="flex-shrink-0" />
              Zadzwoń: +48 000 000 000
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="flex items-start justify-center gap-3 text-white/40"
          >
            <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
            <p className="text-sm leading-relaxed font-light">
              Działamy na terenie całego województwa małopolskiego:<br />
              <span className="text-white/60">Limanowa · Nowy Sącz · Kraków i okolice</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
