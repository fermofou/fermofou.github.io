import { Button } from "@/components/ui/button";
import AboutInfo from "./components/about";
import ContactForm from "./components/contactMe";
import ProjectCard from "./components/project-card";
import HeroSection from "./components/hero";
import CompaniesSection from "./components/companies";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block text-lg">
                FerMoran
              </span>
            </a>
            <nav className="flex items-center space-x-8 text-sm font-medium">
              <a
                href="#about"
                className="transition-colors hover:text-foreground/80 hover:scale-105 transform duration-200"
              >
                About
              </a>
              <a
                href="#skills"
                className="transition-colors hover:text-foreground/80 hover:scale-105 transform duration-200"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="transition-colors hover:text-foreground/80 hover:scale-105 transform duration-200"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="transition-colors hover:text-foreground/80 hover:scale-105 transform duration-200"
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <Link to="/FernandoMoranCV.pdf" target="_blank">
              <Button
                variant="outline"
                className="hover:scale-105 transform duration-200"
              >
                Resume
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <HeroSection />

        <CompaniesSection />
        <section id="about" className="py-20 md:py-32 scroll-mt-16">
          <div className="container px-4 md:px-6">
            <div className="animate-fade-in-up">
              <AboutInfo />
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="py-20 md:py-32 bg-muted/30 scroll-mt-16"
        >
          <div className="container px-4 md:px-6">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">
                Skills & Technologies
              </h2>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 md:py-32 scroll-mt-16">
          <div className="container px-4 md:px-6">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">
                Featured Projects
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "0.1s" }}
                >
                  <ProjectCard
                    title="E-commerce Platform"
                    description="A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration."
                    image="/placeholder.svg?height=400&width=600"
                    link="https://github.com"
                    tags={["Next.js", "Prisma", "Stripe"]}
                  />
                </div>
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <ProjectCard
                    title="Task Management App"
                    description="A real-time task management application with team collaboration features."
                    image="/placeholder.svg?height=400&width=600"
                    link="https://github.com"
                    tags={["React", "Node.js", "Socket.io"]}
                  />
                </div>
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  <ProjectCard
                    title="AI Chat Interface"
                    description="An AI-powered chat interface with natural language processing capabilities."
                    image="/placeholder.svg?height=400&width=600"
                    link="https://github.com"
                    tags={["OpenAI", "Next.js", "TailwindCSS"]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-20 md:py-32 bg-muted/30 scroll-mt-16"
        >
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background/95">
        <div className="container flex flex-col gap-2 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2025 Fernando Morán. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-6 sm:gap-8">
            <a
              className="text-xs hover:underline underline-offset-4 transition-colors"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-xs hover:underline underline-offset-4 transition-colors"
              href="#"
            >
              Privacy
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
