import { useEffect, useState } from "react";
import { Heart, Menu, X } from "lucide-react";

const links = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Tugas AI", href: "#tugas-ai" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Kontak", href: "#kontak" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Bagian Logo yang sudah diperbaiki agar tidak terpotong */}
        <a href="#beranda" className="flex items-center gap-2.5 group focus:outline-none py-1">
          <span className="grid place-items-center h-10 w-10 rounded-full bg-gradient-primary text-primary-foreground shadow-soft shrink-0 transition-transform group-hover:scale-105">
            <Heart className="h-4 w-4" fill="currentColor" />
          </span>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight text-gradient-primary">
              Portofolio
            </span>
            <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase leading-none mt-0.5">
              Creative · AI
            </span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary-soft transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Menu"
          className="md:hidden h-10 w-10 grid place-items-center rounded-full hover:bg-primary-soft"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="px-6 pb-6 flex flex-col gap-1 bg-background/90 backdrop-blur-xl">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-medium hover:bg-primary-soft hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}