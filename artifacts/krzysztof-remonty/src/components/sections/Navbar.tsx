import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "O nas", href: "#about" },
    { name: "Usługi", href: "#services" },
    { name: "Realizacje", href: "#portfolio" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground z-50">
            Krzysztof<span className="text-primary">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button asChild variant={isScrolled ? "default" : "secondary"} className="rounded-none">
              <a href="#contact">Darmowa wycena</a>
            </Button>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className={`md:hidden z-50 p-2 ${
              isScrolled || mobileMenuOpen ? "text-foreground" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center animate-in fade-in duration-200">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button asChild size="lg" className="rounded-none mt-4">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Darmowa wycena</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
