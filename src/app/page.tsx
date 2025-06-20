import AboutSection from "./components/about";
import ContactForm from "./components/contactMe";
import ProjectCard from "./components/project-card";
import HeroBanner from "./components/hero-banner";
import CompaniesBanner from "./components/companies";
import Navbar2 from "./components/navbar2";
import Skills from "./components/skills";

// Example projects array (replace with your real data)
const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration.",
    image: "/fot.jpg?height=600&width=600",
    link: "https://github.com",
    tags: ["Next.js", "Prisma", "Stripe"],
  },
  {
    title: "Task Management App",
    description:
      "A real-time task management application with team collaboration features.",
    image: "/fot.jpg?height=600&width=600",
    link: "https://github.com",
    tags: ["React", "Node.js", "Socket.io"],
  },
  {
    title: "AI Chat Interface",
    description:
      "An AI-powered chat interface with natural language processing capabilities.",
    image: "/fot.jpg?height=600&width=600",
    link: "https://github.com",
    tags: ["OpenAI", "Next.js", "TailwindCSS"],
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and TailwindCSS.",
    image: "/fot.jpg?height=600&width=600",
    link: "https://github.com",
    tags: ["React", "TailwindCSS"],
  },
  {
    title: "Blog Platform",
    description: "A modern blog platform with markdown support.",
    image: "/fot.jpg?height=600&width=600",
    link: "https://github.com",
    tags: ["Next.js", "MDX"],
  },
  {
    title: "Weather App",
    description: "A weather forecast app using OpenWeatherMap API.",
    image: "/fot.jpg?height=600&width=600",
    link: "https://github.com",
    tags: ["React", "API"],
  },
  {
    title: "Finance Tracker",
    description: "A finance tracker for personal budgeting.",
    image: "/fot.jpg?height=600&width=600",
    link: "https://github.com",
    tags: ["React", "Redux"],
  },
  {
    title: "Recipe Finder",
    description: "Find recipes by ingredients using a public API.",
    image: "/fot.jpg?height=600&width=600",
    link: "https://github.com",
    tags: ["React", "API"],
  },
  {
    title: "Fitness App",
    description: "A fitness tracking app with workout plans.",
    image: "/fot.jpg?height=600&width=600",
    link: "https://github.com",
    tags: ["React Native", "Expo"],
  },
];

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
          className="py-20 md:py-32 scroll-mt-16 overflow-x-hidden"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">
                Featured Projects
              </h2>
              <div className="grid gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {projects.map((project, idx) => (
                  <ProjectCard key={idx} {...project} />
                ))}
              </div>
              <div className="flex flex-col items-center mt-12">
                <p className="mb-4 text-lg font-medium text-center">
                  For more projects:
                </p>
                <a
                  href="https://github.com/fermofou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M12 0C5.371 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577 0-.285-.011-1.04-.017-2.042-3.338.726-4.042-1.611-4.042-1.611-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.192.694.801.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  Visit my GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-20 md:py-32 bg-muted/30 scroll-mt-16 overflow-x-hidden"
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
