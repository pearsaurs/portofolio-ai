import { Brush, Sparkles, Layout, Video } from "lucide-react";

// Ikon disesuaikan agar cocok dengan masing-masing skill
const skills = [
  { name: "Design Graphic", value: 90, icon: Brush },
  { name: "UI/UX Design", value: 85, icon: Layout },
  { name: "Video Editing", value: 80, icon: Video },
];

export function About() {
  return (
    <section id="tentang" className="py-20 md:py-28 relative">
      {/* Container utama dengan grid yang seimbang */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Kolom Kiri: Teks & Statistik */}
        <div className="flex flex-col justify-center">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase block mb-2">
            Tentang Saya
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">
            Menciptakan <span className="text-gradient-primary">kesan</span> di
            setiap piksel dan logika.
          </h2>
          
          {/* Paragraf diperbaiki agar kalimatnya utuh dan mengalir */}
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Sebagai mahasiswa Teknik Informatika, saya memadukan pemikiran logis
            dengan passion mendalam di dunia kreatif. Saya sangat menikmati
            proses merancang <span className="text-foreground font-medium">UI/UX</span> yang intuitif, menciptakan eksplorasi visual melalui <span className="text-foreground font-medium">Desain Grafis</span>, serta menghidupkan cerita lewat <span className="text-foreground font-medium">Video Editing</span>. Bagi saya, teknologi terbaik adalah yang tidak hanya bekerja dengan baik, tetapi juga indah dan berkesan secara visual.
          </p>

          {/* Grid statistik */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { label: "Proyek", value: "12+" },
              { label: "Klien", value: "5+" },
              { label: "Sertifikat", value: "5" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-card border border-border p-4 text-center shadow-soft hover:border-primary/40 transition-all hover:-translate-y-0.5"
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient-primary">
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Kanan: Skill Bars (dibuat w-full agar mengisi penuh area kanannya) */}
        <div className="w-full space-y-6">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className="bg-card border border-border rounded-2xl p-5 shadow-soft hover:-translate-y-1 transition-all duration-300 w-full"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center h-10 w-10 rounded-xl bg-primary-soft text-primary shrink-0">
                    <s.icon className="h-4 w-4" />
                  </span>
                  <span className="font-semibold text-foreground/90">{s.name}</span>
                </div>
                <span className="text-sm font-bold text-primary">
                  {s.value}%
                </span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-primary-soft overflow-hidden">
                <div
                  className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                  style={{ width: `${s.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}