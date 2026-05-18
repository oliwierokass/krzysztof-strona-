import { motion } from "framer-motion";
import { ShieldCheck, Phone, Clock, Award } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={32} />,
    title: "Gwarancja 100% satysfakcji",
    description:
      "Stały kontakt z inwestorem na każdym etapie remontu. Jesteś informowany o każdym kroku.",
  },
  {
    icon: <Phone size={32} />,
    title: "Bezpośredni kontakt",
    description:
      "Rozmawiasz bezpośrednio z wykonawcą – żadnych pośredników, żadnych niedomówień.",
  },
  {
    icon: <Clock size={32} />,
    title: "Dotrzymujemy terminów",
    description:
      "Cenimy Twój czas. Harmonogram prac jest ustalany przed rozpoczęciem i konsekwentnie realizowany.",
  },
  {
    icon: <Award size={32} />,
    title: "Wysoka jakość materiałów",
    description:
      "Stosujemy sprawdzone materiały od renomowanych producentów. Żadnych cięć kosztowych kosztem jakości.",
  },
];

export default function Trust() {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="block text-primary text-sm tracking-widest uppercase font-medium mb-4">
              Dlaczego my
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground font-medium leading-tight mb-6">
              Twoje wnętrze. <br />
              <span className="text-primary italic">Nasza odpowiedzialność.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-light mb-12">
              Remont to inwestycja – finansowa i emocjonalna. Rozumiemy to i traktujemy każde zlecenie 
              jak własne mieszkanie. Transparentność, terminowość i rzemieślnicza dbałość o detal 
              to nie slogan – to nasz standard.
            </p>

            <div className="inline-flex items-center gap-4 border border-primary/30 px-8 py-5 bg-primary/5">
              <ShieldCheck size={24} className="text-primary flex-shrink-0" />
              <span className="font-serif text-lg text-foreground italic">
                "Gwarancja 100% satysfakcji – stały kontakt z inwestorem na każdym etapie remontu."
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="bg-background p-8 group"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="font-serif text-lg text-foreground mb-2 font-medium">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
