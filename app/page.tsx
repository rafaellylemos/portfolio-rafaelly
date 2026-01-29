import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import { CoursesSection } from "@/components/courses-section";
import { CommandMenu } from "@/components/commandMenu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <CommandMenu />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <CoursesSection />
      <Contact />
    </main>
  );
}