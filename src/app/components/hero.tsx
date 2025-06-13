import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Cover Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/fot.jpg?height=1080&width=1920"
          alt="Cover background"
          className="object-cover opacity-10 dark:opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container px-4 md:px-6 text-center">
        <div className="animate-fade-in-up">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img
                  src="/placeholder.svg?height=160&width=160"
                  alt="John Doe"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background animate-pulse" />
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4 mb-8">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
              Fernando Morán
            </h1>
            <p
              className="text-xl md:text-2xl text-muted-foreground animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Software Engineer
            </p>
            <p
              className="mx-auto max-w-[600px] text-gray-500 md:text-lg dark:text-gray-400 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Building digital experiences with modern technologies. Focused on
              creating elegant solutions to complex problems.
            </p>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center space-x-4 mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Link to="https://github.com/fermofou" target="_blank">
              <Button
                variant="outline"
                size="icon"
                className="hover:scale-110 transform duration-200"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              to="https://www.linkedin.com/in/fernandomoranf"
              target="_blank"
            >
              <Button
                variant="outline"
                size="icon"
                className="hover:scale-110 transform duration-200"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link to="https://twitter.com" target="_blank">
              <Button
                variant="outline"
                size="icon"
                className="hover:scale-110 transform duration-200"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link to="mailto:fermofou@gmail.com">
              <Button
                variant="outline"
                size="icon"
                className="hover:scale-110 transform duration-200"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a href="#projects">
              <Button
                size="lg"
                className="hover:scale-105 transform duration-200"
              >
                View My Work
              </Button>
            </a>
            <a href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="hover:scale-105 transform duration-200"
              >
                Get in Touch
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about">
            <ChevronDown className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
