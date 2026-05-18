import { motion } from "framer-motion";
import { Layers, PanelTop, PaintBucket, Ruler, Building2 } from "lucide-react";

const services = [
  {
    icon: <Ruler size={28} />,
    title: "Prace Glazurnicze",
    description:
      "Kompleksowe wykończenia łazienek, kładzenie glazury i gresu wielkoformatowego. Precyzja spoin, hydroizolacja, montaż armatury.",
  },
  {
    icon: <PanelTop size={28} />,
    title: "Zabudowy i Sufity",
    description:
      "Konstrukcje kartonowo-gipsowe, sufity podwieszane, obniżane i napinane. Adaptacja poddaszy z izolacją termiczną i akustyczną.",
  },
  {
    icon: <PaintBucket size={28} />,
    title: "Wykończenia Ścian",
    description:
      "Szpachlowanie, gipsowanie, malowanie i tapetowanie wnętrz. Nowoczesne tynki dekoracyjne i efektowne wykończenia powierzchni.",
  },
  {
    icon: <Layers size={28} />,
    title: "Podłogi i Stolarka",
    description:
      "Układanie paneli podłogowych i parkietów z fachowym przygotowaniem podłoża. Profesjonalny montaż drzwi wewnętrznych.",
  },
  {
    icon: <Building2 size={28} />,
    title: "Remonty Generalne",
    description:
      "Przebudowy budynków od stanu surowego do finalnego efektu. Koordynacja wszystkich branż, jeden wykonawca – pełen spokój.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 md:mb-20"
        >
          <span className="block text-primary text-sm tracking-widest uppercase font-medium mb-4">
            Zakres prac
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-background font-medium leading-tight">
            Wszystko, czego <br />
            <span className="text-primary italic">potrzebuje Twój dom</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group bg-foreground p-10 md:p-12 hover:bg-white/5 transition-colors duration-300 cursor-default"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-serif text-2xl text-background mb-4 font-medium">
                {service.title}
              </h3>
              <p className="text-white/50 leading-relaxed font-light text-sm">
                {service.description}
              </p>
              <div className="mt-8 h-px w-0 group-hover:w-12 bg-primary transition-all duration-500" />
            </motion.div>
          ))}

          {/* Filler cell for grid symmetry */}
          <motion.div
            variants={cardVariants}
            className="hidden lg:flex bg-primary/10 p-10 md:p-12 items-end"
          >
            <p className="text-primary/60 font-serif text-2xl italic leading-tight">
              "Każdy detal ma znaczenie."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
