import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "Wszystko" | "Łazienki" | "Zabudowy G-K" | "Salony i Pokoje";

interface GalleryItem {
  id: number;
  category: Exclude<Category, "Wszystko">;
  title: string;
  image: string;
  tall?: boolean;
}

const items: GalleryItem[] = [
  {
    id: 1,
    category: "Łazienki",
    title: "Łazienka z gresu wielkoformatowego",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    tall: true,
  },
  {
    id: 2,
    category: "Salony i Pokoje",
    title: "Nowoczesny salon z zabudową TV",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  },
  {
    id: 3,
    category: "Zabudowy G-K",
    title: "Sufit podwieszany z oświetleniem",
    image: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?w=800&q=80",
    tall: true,
  },
  {
    id: 4,
    category: "Łazienki",
    title: "Minimalistyczna łazienka",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
  },
  {
    id: 5,
    category: "Salony i Pokoje",
    title: "Sypialnia z tapetą dekoracyjną",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&q=80",
    tall: true,
  },
  {
    id: 6,
    category: "Zabudowy G-K",
    title: "Zabudowa G-K z niszami",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    id: 7,
    category: "Łazienki",
    title: "Prysznic walk-in",
    image: "https://images.unsplash.com/photo-1620626011761-996317702782?w=800&q=80",
  },
  {
    id: 8,
    category: "Salony i Pokoje",
    title: "Kuchnia z wyspą",
    image: "https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=800&q=80",
    tall: true,
  },
  {
    id: 9,
    category: "Zabudowy G-K",
    title: "Adaptacja poddasza",
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80",
  },
];

const categories: Category[] = ["Wszystko", "Łazienki", "Zabudowy G-K", "Salony i Pokoje"];

export default function Portfolio() {
  const [active, setActive] = useState<Category>("Wszystko");

  const filtered =
    active === "Wszystko" ? items : items.filter((i) => i.category === active);

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
