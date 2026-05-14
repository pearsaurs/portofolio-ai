import { ArrowRight, Sparkles } from "lucide-react";
import profile from "@/assets/profile.jpg";

export function Hero() {
  return (
    <section
      id="beranda"
      // min-h-screen memastikan layout otomatis full dari atas ke bawah tanpa memotong konten
      className="relative min-h-screen flex items-center pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden"
    >
      {/* mesh + grid background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-70" />
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary-glow/40 blur-3xl" />
      <div className="absolute top-40 -right-20 h-80 w-80 rounded-full bg-accent/60 blur-3xl" />

      {/* w-full ditambahkan agar grid merata di tengah layar */}
      <div className="relative w-full max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-medium mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Halo, selamat datang!
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Saya{" "}
            <span className="text-gradient-primary">Mutia Firda Damayanti</span>
          </h1>
          
          {/* Deskripsi dengan penambahan passion UI/UX, Desain Grafis, dan Video Editing */}
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Mahasiswa Teknik Informatika yang memadukan logika pemrograman dengan kreativitas visual. Saya sangat menikmati proses merancang{" "}
            <span className="text-foreground font-medium">UI/UX</span> yang intuitif, menciptakan karya lewat{" "}
            <span className="text-foreground font-medium">Desain Grafis</span>, serta menghidupkan cerita melalui{" "}
            <span className="text-foreground font-medium">Video Editing</span>.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#portofolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5"
            >
              Lihat Karya
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card font-medium hover:bg-primary-soft hover:border-primary/40 transition-all"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end animate-fade-in-up">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-[2.5rem] rotate-6 scale-95 blur-sm opacity-70" />
            <div className="absolute -inset-4 bg-primary-soft rounded-[3rem] -rotate-3" />
            <div className="relative h-72 w-72 md:h-96 md:w-96 rounded-[2.5rem] overflow-hidden shadow-soft border-4 border-background animate-float">
              <img
                src={profile}
                alt="Foto profil"
                width={768}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-soft flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium">Open to Collaborate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}