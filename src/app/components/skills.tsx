import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReactIcon from "@/icons/react.svg?react";
import CppIcon from "@/icons/cpp.svg?react";
import DockerIcon from "@/icons/docker.svg?react";
import GithubIcon from "@/icons/github.svg?react";
import FastApiIcon from "@/icons/fastapi.svg?react";
import JSIcon from "@/icons/js.svg?react";
import GoLogo from "@/icons/go.svg?react";
import NodeIcon from "@/icons/nodejs.svg?react";
import PythonIcon from "@/icons/python.svg?react";
import FlaskLogo from "@/icons/flask.svg?react";
import CShIcon from "@/icons/cSharp.svg?react";
import { RiNextjsFill } from "react-icons/ri";
import { SiTensorflow, SiPytorch, SiScikitlearn } from "react-icons/si";

const iconClass = "h-24 w-24";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C++", icon: <CppIcon className={iconClass} /> },
      { name: "Python", icon: <PythonIcon className={iconClass} /> },
      { name: "JavaScript", icon: <JSIcon className={iconClass} /> },
      { name: "Go", icon: <GoLogo className={iconClass} /> },
      { name: "C#", icon: <CShIcon className={iconClass} /> },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "React", icon: <ReactIcon className={iconClass} /> },
      { name: "Next.js", icon: <RiNextjsFill className={iconClass} /> },
      { name: "Node.js", icon: <NodeIcon className={iconClass} /> },
      { name: "FastApi", icon: <FastApiIcon className={iconClass} /> },
      { name: "Flask", icon: <FlaskLogo className={iconClass} /> },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: <CppIcon className={iconClass} /> },
      { name: "MySQL", icon: <CppIcon className={iconClass} /> },
      { name: "PostgreSQL", icon: <CppIcon className={iconClass} /> },
      { name: "Redis", icon: <CppIcon className={iconClass} /> },
      { name: "Firebase", icon: <CppIcon className={iconClass} /> },
    ],
  },
  {
    category: "Cloud Computing & Networks",
    skills: [
      { name: "Docker", icon: <DockerIcon className={iconClass} /> },
      { name: "AWS", icon: <CppIcon className={iconClass} /> },
      { name: "Git", icon: <CppIcon className={iconClass} /> },
      { name: "GitHub", icon: <GithubIcon className={iconClass} /> },
      { name: "Linux", icon: <CppIcon className={iconClass} /> },
    ],
  },
  {
    category: "AI and Machine Learning",
    skills: [
      { name: "OpenAI", icon: <CppIcon className={iconClass} /> },
      { name: "TensorFlow", icon: <SiTensorflow className={iconClass} /> },
      { name: "PyTorch", icon: <SiPytorch className={iconClass} /> },
      { name: "Scikit-learn", icon: <SiScikitlearn className={iconClass} /> },
    ],
  },
  {
    category: "Mobile Development",
    skills: [
      { name: "Swift", icon: <CppIcon className={iconClass} /> },
      { name: "ReactNative", icon: <CppIcon className={iconClass} /> },
      { name: "Flutter", icon: <CppIcon className={iconClass} /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="pt-4">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">
        Skills & Technologies
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, categoryIndex) => (
          <Card
            key={category.category}
            className="animate-fade-in-up hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm h-96"
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-semibold text-center">
                {category.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-6 justify-items-center">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center group animate-fade-in-up hover:scale-110 transition-all duration-300"
                    style={{
                      animationDelay: `${
                        categoryIndex * 0.1 + skillIndex * 0.05
                      }s`,
                    }}
                  >
                    <div className="relative w-24 h-24 mb-2 flex items-center justify-center group-hover:drop-shadow-lg transition-all duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
