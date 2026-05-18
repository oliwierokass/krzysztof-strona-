import { Link } from "wouter";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-foreground border-t border-white/10 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <Link href="/" className="font-serif text-2xl font-bold text-background tracking-tight">
              Krzysztof<span className="text-primary">.</span>
            </Link>
            <p className="text-white/30 text-sm mt-2 font-light">
              Kompleksowe Wykończenia Wnętrz · Małopolska
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm text-white/40">
            <a href="#about" className="hover:text-primary transition-colors">O nas</a>
            <a href="#services" className="hover:text-primary transition-colors">Usługi</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Realizacje</a>
            <a href="#contact" className="hover:text-primary transition-colors">Kontakt</a>
          </nav>

          <p className="text-white/20 text-xs font-light">
            &copy; {year} Krzysztof Kompleksowe Wykończenia Wnętrz
          </p>
        </div>
      </div>
    </footer>
  );
}
