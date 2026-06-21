import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "@assets/1_1779293287676.webp";
import img2 from "@assets/2_1779293287673.webp";
import img3 from "@assets/3_1779293287674.webp";
import img4 from "@assets/4_1779293287674.webp";
import img5 from "@assets/5_1779293287674.webp";
import img6 from "@assets/6_1779293287675.webp";
import img7 from "@assets/7_1779293287675.webp";
import img8 from "@assets/8_1779293287675.webp";


type Category = "Wszystkie" | "Wykończenia" | "Łazienki" | "Salony i Pokoje";

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
    title: "Prace wyburzeniowe i przygotowanie konstrukcji sufitu",
    image: img1,
    tall: true,
  },
  {
    id: 2,
    category: "Salony i Pokoje",
    title: "Wykończenie sypialni na poddaszu, ściana dekoracyjna",
    image: img2,
    tall: true,
  },
  {
    id: 3,
    category: "Salony i Pokoje",
    title: "Nowoczesna zabudowa ścian z podświetleniem LED",
    image: img3,
  },
  {
    id: 4,
    category: "Wykończenia",
    title: "Tynki dekoracyjne i przygotowanie wnęki TV",
    image: img4,
  },
  {
    id: 5,
    category: "Łazienki",
    title: "Układanie płytek drewnopodobnych i czarnych kafli geometrycznych",
    image: img5,
    tall: true,
  },
  {
    id: 6,
    category: "Łazienki",
    title: "Nowoczesny salon kąpielowy z podświetleniem LED i armaturą podtynkową",
    image: img6,
    tall: true,
  },
  {
    id: 7,
    category: "Wykończenia",
    title: "Minimalistyczne liniowe oświetlenie ledowe na klatce schodowej",
    image: img7,
  },
  {
    id: 8,
    category: "Salony i Pokoje",
    title: "Prace malarskie i montaż suchej zabudowy w salonie",
    image: img8,
  },
  {
    id: 9,
    category: "Łazienki",
    title: "Luksusowa łazienka z nowoczesną armaturą",
    image: "/images/1.jpeg",
    tall: true,
  },
  {
    id: 10,
    category: "Łazienki",
    title: "Strefa umywalkowa z dekoracyjną ścianą",
    image: "/images/2.jpeg",
    tall: true,
  },
  {
    id: 11,
    category: "Łazienki",
    title: "Przestronny natrysk walk-in z nowoczesnymi profilami",
    image: "/images/3.jpeg",
    tall: true,
  },
  {
    id: 12,
    category: "Wykończenia",
    title: "Kompleksowe wykończenie mieszkania deweloperskiego",
    image: "/images/4.jpeg",
    tall: true,
  },
  {
    id: 13,
    category: "Salony i Pokoje",
    title: "Sucha zabudowa z podświetleniem LED",
    image: "/images/5.jpeg",
    tall: true,
  },
  {
    id: 14,
    category: "Salony i Pokoje",
    title: "Kompleksowy remont salonu – konstrukcja i wykończenie",
    image: "/images/6.jpeg",
  },
  {
    id: 15,
    category: "Łazienki",
    title: "Detale strefy natryskowej z nowoczesną armaturą",
    image: "/images/7.jpeg",
    tall: true,
  },
];

const categories: Category[] = ["Wszystkie", "Wykończenia", "Łazienki", "Salony i Pokoje"];

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
