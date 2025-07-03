import AboutSection from "./components/about";
import ContactForm from "./components/contactMe";
import HeroBanner from "./components/hero-banner";
import CompaniesBanner from "./components/companies";
import Navbar2 from "./components/navbar2";
import Skills from "./components/skills";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar2 />
      <main>
        <section
          id="hero"
          className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="w-full h-full flex items-center justify-center">
            <HeroBanner />
          </div>
        </section>

        <CompaniesBanner />

        {/* About Section */}
        <section id="about" className=" Sscroll-mt-16 overflow-x-hidden">
          <AboutSection />
        </section>

        <section
          id="skills"
          className="bg-muted/100 scroll-mt-16 overflow-x-hidden"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="animate-fade-in-up">
              <Skills />
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="py-10 md:py-15 scroll-mt-16 overflow-x-hidden"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">
                Featured Projects
              </h2>
              <Projects />
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="py-10 md:py-15 bg-muted/100 scroll-mt-16 overflow-x-hidden"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="mx-auto max-w-2xl animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background/95 overflow-x-hidden">
        <div className="container flex flex-col gap-2 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 mx-auto">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2025 Fernando Morán. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-6 sm:gap-8"></nav>
        </div>
      </footer>
    </div>
  );
}
