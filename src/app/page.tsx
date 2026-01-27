import Hero from "./components/Hero";
import About from "./components/About";
import CompanyProjects from "./components/Projects/CompanyProjects";
import PersonalProjects from "./components/Projects/PersonalProjects";
import Contact from "./components/Contact";
import Header from "./components/Header";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-slate-800 text-white">
      <Header />
      <Hero />
      <About />
      <CompanyProjects />
      <PersonalProjects />
      <Contact />
    </main>
  );
}
