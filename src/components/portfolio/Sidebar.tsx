import { useEffect, useState } from "react";
import {
  Home,
  User,
  Sparkles,
  Briefcase,
  Mail,
  Heart,
  Menu,
  X,
  Github,
  Instagram,
  Linkedin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const links = [
  { label: "Beranda", href: "#beranda", icon: Home },
  { label: "Tentang", href: "#tentang", icon: User },
  { label: "Tugas AI", href: "#tugas-ai", icon: Sparkles },
  { label: "Portofolio", href: "#portofolio", icon: Briefcase },
  { label: "Kontak", href: "#kontak", icon: Mail },
];

const socials = [
  { Icon: Instagram, label: "Instagram" },
  { Icon: Github, label: "GitHub" },
  { Icon: Linkedin, label: "LinkedIn" },
];

export function Sidebar() {
  const [open, setOpen] = useState(false); // mobile drawer
  const [collapsed, setCollapsed] = useState(false); // desktop collapsed
  const [active, setActive] = useState("#beranda");

  // Scroll spy
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 inset-x-0 z-40 flex items-center justify-between px-4 py-3 bg-background/70 backdrop-blur-xl border-b border-border/60">
        <a href="#beranda" className="flex items-center gap-2 font-semibold">
          <span className="grid place-items-center h-8 w-8 rounded-full bg-gradient-primary text-primary-foreground shadow-glow shrink-0">
            <Heart className="h-4 w-4" fill="currentColor" />
          </span>
          <span className="text-gradient-primary">Portofolio</span>
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen(true)}
          className="h-10 w-10 grid place-items-center rounded-full hover:bg-primary-soft"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="md:hidden fixed inset-0 z-40 bg-foreground/40 backdrop-blur-sm animate-fade-in-up"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen flex flex-col
          bg-card/80 backdrop-blur-2xl border-r border-border/60
          transition-all duration-500 ease-out
          ${collapsed ? "md:w-20" : "md:w-64"}
          ${open ? "w-72 translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* decorative glow */}
        <div className="pointer-events-none absolute -top-10 -left-10 h-48 w-48 rounded-full bg-primary-glow/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -right-10 h-48 w-48 rounded-full bg-accent/60 blur-3xl" />

        {/* Header Logo (Diperbaiki agar bebas potong dan konsisten) */}
        <div className="relative flex items-center justify-between px-5 pt-6 pb-4">
          <a
            href="#beranda"
            onClick={() => setOpen(false)}
            // Menghapus overflow-hidden dan menambahkan p-1 agar aman dari potongan bayangan
            className="flex items-center gap-3 font-semibold group focus:outline-none p-1"
          >
            <span className="shrink-0 grid place-items-center h-10 w-10 rounded-full bg-gradient-primary text-primary-foreground shadow-glow transition-transform group-hover:scale-105">
              <Heart className="h-5 w-5" fill="currentColor" />
            </span>
            {!collapsed && (
              <div className="flex flex-col">
                <span className="font-bold text-base leading-tight text-gradient-primary">
                  Portofolio
                </span>
                <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase leading-none mt-0.5">
                  Creative · AI
                </span>
              </div>
            )}
          </a>
          <button
            aria-label="Tutup"
            onClick={() => setOpen(false)}
            className="md:hidden h-9 w-9 grid place-items-center rounded-full hover:bg-primary-soft"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Profile chip */}
        {!collapsed && (
          <div className="relative mx-5 mb-4 rounded-2xl border border-border/60 bg-background/50 p-3 flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            <span className="text-xs font-medium">Open to Collaborate</span>
          </div>
        )}

        {/* Nav */}
        <nav className="relative flex-1 px-3 overflow-y-auto">
          <ul className="space-y-1">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`group relative flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition-all
                      ${
                        isActive
                          ? "bg-gradient-primary text-primary-foreground shadow-glow"
                          : "text-foreground/70 hover:text-primary hover:bg-primary-soft"
                      }
                      ${collapsed ? "md:justify-center md:px-0" : ""}
                    `}
                    title={collapsed ? l.label : undefined}
                  >
                    {isActive && !collapsed && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-primary-foreground/70" />
                    )}
                    <l.icon
                      className={`h-[18px] w-[18px] shrink-0 transition-transform group-hover:scale-110 ${
                        isActive ? "" : "text-primary"
                      }`}
                    />
                    {!collapsed && <span>{l.label}</span>}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="relative px-5 py-4 border-t border-border/60 space-y-3">
          {!collapsed && (
            <div className="flex gap-2">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid place-items-center h-9 w-9 rounded-xl bg-primary-soft text-primary hover:bg-gradient-primary hover:text-primary-foreground transition-all hover:-translate-y-0.5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
          <button
            onClick={() => setCollapsed((v) => !v)}
            className="hidden md:flex w-full items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-muted-foreground hover:text-primary hover:bg-primary-soft transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <>
                <ChevronLeft className="h-4 w-4" /> Ciutkan
              </>
            )}
          </button>
        </div>
      </aside>
    </>
  );
}