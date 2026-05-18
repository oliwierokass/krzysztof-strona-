import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    scope: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="block text-primary text-sm tracking-widest uppercase font-medium mb-4">
              Kontakt
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-background font-medium leading-tight mb-8">
              Zacznijmy <br />
              <span className="text-primary italic">od rozmowy.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed font-light mb-12">
              Powiedz nam o swoim projekcie. Bezpłatna wycena, konkretne terminy, 
              zero zobowiązań. Działamy na terenie całego województwa małopolskiego.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-primary" />
                </div>
                <div>
                  <span className="block text-xs text-white/40 uppercase tracking-widest mb-1">Telefon</span>
                  <a href="tel:+48000000000" className="text-background font-medium hover:text-primary transition-colors">
                    +48 000 000 000
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-primary" />
                </div>
                <div>
                  <span className="block text-xs text-white/40 uppercase tracking-widest mb-1">Email</span>
                  <a href="mailto:kontakt@krzysztof-remonty.pl" className="text-background font-medium hover:text-primary transition-colors">
                    kontakt@krzysztof-remonty.pl
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin size={16} className="text-primary" />
                </div>
                <div>
                  <span className="block text-xs text-white/40 uppercase tracking-widest mb-1">Obszar działania</span>
                  <span className="text-background/80 font-light leading-relaxed">
                    Działamy na terenie całego województwa małopolskiego<br />
                    <span className="text-primary/80 text-sm">Limanowa · Nowy Sącz · Kraków i okolice</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-start justify-center py-16">
                <div className="w-12 h-12 border border-primary flex items-center justify-center mb-8">
                  <Send size={20} className="text-primary" />
                </div>
                <h3 className="font-serif text-3xl text-background mb-4">Dziękujemy!</h3>
                <p className="text-white/50 font-light text-lg">
                  Odezwiemy się wkrótce. Zazwyczaj odpowiadamy w ciągu 24 godzin.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", phone: "", scope: "" }); }}
                  className="mt-8 text-sm text-primary hover:text-primary/70 transition-colors underline underline-offset-4"
                >
                  Wyślij kolejne zapytanie
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs text-white/40 uppercase tracking-widest mb-2">
                    Imię i nazwisko
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jan Kowalski"
                    data-testid="input-name"
                    className="w-full bg-white/5 border border-white/10 px-5 py-4 text-background placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors font-light"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs text-white/40 uppercase tracking-widest mb-2">
                    Numer telefonu
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+48 000 000 000"
                    data-testid="input-phone"
                    className="w-full bg-white/5 border border-white/10 px-5 py-4 text-background placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors font-light"
                  />
                </div>
                <div>
                  <label htmlFor="scope" className="block text-xs text-white/40 uppercase tracking-widest mb-2">
                    Zakres prac
                  </label>
                  <textarea
                    id="scope"
                    name="scope"
                    required
                    value={formData.scope}
                    onChange={handleChange}
                    placeholder="Opisz krótko co chcesz wykonać – np. remont łazienki, wykończenie mieszkania deweloperskiego..."
                    rows={5}
                    data-testid="textarea-scope"
                    className="w-full bg-white/5 border border-white/10 px-5 py-4 text-background placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors font-light resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  data-testid="button-submit"
                  className="w-full rounded-none h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-base tracking-wide border-none"
                >
                  Zgłoś się po darmową wycenę
                </Button>
                <p className="text-white/30 text-xs text-center font-light">
                  Odpowiadamy zazwyczaj w ciągu 24 godzin. Bez zobowiązań.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
