import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-10 md:py-15 bg-white dark:bg-gray-900">
      <div className="container mx-auto ">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="/pic2.jpeg?height=512&width=512"
                alt="Profile photo"
                className="w-128 h-128 rounded-full mx-auto mb-6 shadow-lg object-cover"
              />
              {/* Social links */}
              <div className="flex justify-center space-x-4 mb-12">
                <a href="https://github.com/fermofou" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-[#163b65] text-white border-white hover:bg-[#182037] hover:text-white"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/fernandomoranf"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-[#163b65] text-white border-white hover:bg-[#182037] hover:text-white"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </a>
                <a href="https://www.youtube.com/@fermofou" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-[#163b65] text-white border-white hover:bg-[#182037] hover:text-white"
                  >
                    <Youtube className="h-5 w-5" />
                    <span className="sr-only">Youtube</span>
                  </Button>
                </a>
                <a href="mailto:fermofou@gmail.com">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-[#163b65] text-white border-white hover:bg-[#182037] hover:text-white"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">Software Engineer</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm a Computer Science student with 1+ year of work experience,
                with a strong passion for learning new technologies and solving
                challenges. My interests span software design and development,
                artificial intelligence, machine learning, and automation.
              </p>
              <p className="text-gray-600 dark:text-gray-300 ">
                I'm currently interning at MongoDB and preparing to begin my 7th
                semester, during which I'll pursue a research stay focused on
                Automated Machine Learning and Neural Network development.
              </p>

              <h3 className="text-2xl font-semibold mb-4 py-5">Education</h3>
              <div className="space-y-4 w-full">
                <div className="border-l-4 border-[#163b65] pl-4">
                  <h4 className="font-medium">
                    Instituto Tecnológico y de Estudios Superiores de Monterrey
                    (ITESM)
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    2022 - Present
                  </p>
                  <div className="space-y-2">
                    <div>
                      <Badge variant="outline" className="mr-2">
                        Degree
                      </Badge>
                      B.S. in Computer Science and Technology
                    </div>
                    <div>
                      <Badge variant="outline" className="mr-2">
                        Award
                      </Badge>
                      50% Academic Talent Scholarship
                    </div>
                    <div>
                      <Badge variant="outline" className="mr-2">
                        Current GPA
                      </Badge>
                      4.0
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
