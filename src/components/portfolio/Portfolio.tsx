import { ExternalLink } from "lucide-react";

// Array dikosongkan sementara. Nanti tinggal diisi lagi jika proyek sudah siap.
const projects: Array<{
  img: string;
  title: string;
  desc: string;
  tag: string;
}> = [];

export function Portfolio() {
  return (
    <section id="portofolio" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Portofolio
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Karya yang <span className="text-gradient-primary">membanggakan</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Beberapa proyek UI/UX dan Design Graphic  pilihan yang pernah saya
            kerjakan.
          </p>
        </div>

        {projects.length === 0 ? (
          /* Tampilan placeholder opsional jika portofolio masih kosong */
          <div className="text-center py-12 border border-dashed border-border rounded-3xl bg-card/50">
            <p className="text-sm text-muted-foreground italic">
              Proyek sedang dalam tahap pembaruan. Segera hadir!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group relative bg-card border border-border rounded-3xl overflow-hidden shadow-soft hover:-translate-y-1 hover:border-primary/40 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-primary-soft">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={768}
                    height={576}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary-soft text-primary">
                    {p.tag}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold flex items-center gap-2 group-hover:text-primary transition-colors">
                    {p.title}
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}