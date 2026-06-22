import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img3 from "@assets/3_1779293287674.webp";
import img6 from "@assets/6_1779293287675.webp";
import img7 from "@assets/7_1779293287675.webp";

type Category = "Wszystkie" | "Wykończenia" | "Łazienki";

interface GalleryItem {
  id: number;
  category: Exclude<Category, "Wszystkie">;
  title: string;
  image: string;
  tall?: boolean;
}

const items: GalleryItem[] = [
  {
    id: 1,
    category: "Wykończenia",
    title: "Ściana dekoracyjna z podświetleniem LED – panorama górska",
    image: img3,
  },
  {
    id: 2,
    category: "Łazienki",
    title: "Luksusowa łazienka z czarnym marmurem, prysznicem i podświetleniem LED",
    image: img6,
    tall: true,
  },
  {
    id: 3,
    category: "Wykończenia",
    title: "Minimalistyczna klatka schodowa z liniowym oświetleniem LED",
    image: img7,
    tall: true,
  },
  {
    id: 4,
    category: "Łazienki",
    title: "Ekskluzywna strefa umywalkowa – marmurowy blat i złota armatura",
    image: "/images/2.jpeg",
    tall: true,
  },
  {
    id: 5,
    category: "Łazienki",
    title: "Kameralna łazienka na poddaszu – ciemny marmur i okrągłe lustro",
    image: "/images/4.jpeg",
    tall: true,
  },
  {
    id: 6,
    category: "Łazienki",
    title: "Nowoczesna łazienka – czarne płytki, drewno i natrysk walk-in",
    image: "/images/5.jpeg",
    tall: true,
  },
];

const categories: Category[] = ["Wszystkie", "Wykończenia", "Łazienki"];

export default function Portfolio() {
  const [active, setActive] = useState<Category>("Wszystkie");

  const filtered =
    active === "Wszystkie" ? items : items.filter((i) => i.category === active);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 md:mb-16"
        >
          <span className="block text-primary text-sm tracking-widest uppercase font-medium mb-4">
            Nasze realizacje
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-foreground font-medium leading-tight">
            Mówią same <br />
            <span className="text-primary italic">za siebie.</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              data-testid={`filter-${cat}`}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-200 border ${
                active === cat
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="break-inside-avoid group relative overflow-hidden cursor-pointer"
                data-testid={`gallery-item-${item.id}`}
              >
                <div className={`relative overflow-hidden ${item.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="block text-xs text-primary uppercase tracking-widest mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-white font-serif text-lg">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
