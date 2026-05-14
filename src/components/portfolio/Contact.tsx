import { useState, type FormEvent } from "react";
import { Github, Instagram, Linkedin, Mail, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="kontak" className="py-20 md:py-28 bg-gradient-soft">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Kontak
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Mari <span className="text-gradient-primary">berkolaborasi</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Punya proyek menarik atau sekadar ingin menyapa? Kirim pesan saja!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="bg-card border border-border rounded-2xl p-5 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-primary-soft text-primary">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-medium text-sm">mutiafirda14@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-5 shadow-soft">
              <p className="text-sm font-medium mb-3">Sosial Media</p>
              <div className="flex gap-2">
                {[
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Linkedin, label: "LinkedIn" },
                  { Icon: Github, label: "GitHub" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="grid place-items-center h-11 w-11 rounded-xl bg-primary-soft text-primary hover:bg-gradient-primary hover:text-primary-foreground transition-all hover:-translate-y-0.5"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 bg-card border border-border rounded-3xl p-6 shadow-soft space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground">
                  Nama
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  placeholder="Nama lengkap"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  placeholder="email@contoh.com"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">
                Pesan
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary resize-none"
                placeholder="Ceritakan ide atau proyek Anda..."
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5 disabled:opacity-80"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Terkirim!
                </>
              ) : (
                <>
                  Kirim Pesan <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
        </footer>
      </div>
    </section>
  );
}
