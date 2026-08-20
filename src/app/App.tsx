import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Programs } from "./components/Programs";
import type { Program } from "./components/Programs";
import { ProgramDetail } from "./components/ProgramDetail";
import { Achievements } from "./components/Achievements";
import { Gallery } from "./components/Gallery";
import { GalleryFull } from "./components/GalleryFull";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

type Page = "home" | "program-detail" | "gallery-full";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const goToProgram = (program: Program) => {
    setSelectedProgram(program);
    setPage("program-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToContact = () => {
    setPage("home");
    setTimeout(() => {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const goHome = () => {
    setPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (page === "program-detail" && selectedProgram) {
    return (
      <>
        <Navbar />
        <ProgramDetail
          program={selectedProgram}
          onBack={() => { setPage("home"); setTimeout(() => document.querySelector("#programs")?.scrollIntoView({ behavior: "smooth" }), 100); }}
          onContact={goToContact}
        />
        <Footer />
      </>
    );
  }

  if (page === "gallery-full") {
    return (
      <>
        <Navbar />
        <GalleryFull onBack={goHome} />
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Programs onSelectProgram={goToProgram} />
      <Achievements />
      <Gallery onViewAll={() => { setPage("gallery-full"); window.scrollTo({ top: 0, behavior: "smooth" }); }} />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
