import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Code, User } from "lucide-react";

const personalInfo = {
  bio: "Passionate full-stack developer with 3+ years of experience building scalable web applications. I love solving complex problems and learning new technologies.",
  location: "San Francisco, CA",
  experience: "3+ years",
};

const internships = [
  {
    company: "Tech Startup Inc.",
    role: "Software Engineering Intern",
    duration: "Summer 2023",
    description:
      "Developed React components and REST APIs, improving user engagement by 25%",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    company: "Digital Solutions Co.",
    role: "Frontend Developer Intern",
    duration: "Summer 2022",
    description:
      "Built responsive web interfaces and collaborated with design team on UI/UX improvements",
    technologies: ["Vue.js", "TailwindCSS", "Figma"],
  },
];

const currentProjects = [
  {
    name: "AI-Powered Analytics Dashboard",
    status: "In Development",
    description:
      "Building a real-time analytics platform with machine learning insights",
    technologies: ["Next.js", "Python", "TensorFlow", "D3.js"],
  },
  {
    name: "Open Source Component Library",
    status: "Active",
    description:
      "Contributing to a React component library used by 10k+ developers",
    technologies: ["React", "TypeScript", "Storybook", "Jest"],
  },
];

export default function AboutInfo() {
  return (
    <div className="mt-16 space-y-8">
      {/* Personal Info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            About Me
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{personalInfo.bio}</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div>
              <span className="font-medium">Location:</span>{" "}
              {personalInfo.location}
            </div>
            <div>
              <span className="font-medium">Experience:</span>{" "}
              {personalInfo.experience}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Internships */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            Previous Internships
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {internships.map((internship, index) => (
            <div key={index} className="border-l-2 border-primary/20 pl-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="font-semibold">{internship.role}</h3>
                <Badge variant="outline">{internship.duration}</Badge>
              </div>
              <p className="text-primary font-medium mb-2">
                {internship.company}
              </p>
              <p className="text-muted-foreground mb-3">
                {internship.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {internship.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Current Projects */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Current Projects
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="border-l-2 border-green-500/20 dark:border-green-400/20 pl-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="font-semibold">{project.name}</h3>
                <Badge
                  variant="outline"
                  className="text-green-600 dark:text-green-400 border-green-600 dark:border-green-400"
                >
                  {project.status}
                </Badge>
              </div>
              <p className="text-muted-foreground mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
