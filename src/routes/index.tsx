import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "@/components/portfolio/Sidebar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { TugasAI } from "@/components/portfolio/TugasAI";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Portofolio — Mahasiswa Teknik Informatika" },
      {
        name: "description",
        content:
          "Portofolio mahasiswa Teknik Informatika dengan passion di UI/UX Design dan Artificial Intelligence.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <main className="md:ml-64 pt-16 md:pt-0 transition-[margin] duration-500">
        <Hero />
        <About />
        <TugasAI />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}
