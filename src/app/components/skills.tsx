import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C++", icon: "cpp.svg" },
      { name: "Python", icon: "python.svg" },
      { name: "JavaScript", icon: "js.svg" },
      { name: "Go", icon: "go.svg" },
      { name: "C#", icon: "cSharp.svg" },
      { name: "Bash", icon: "bash.svg" },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "React", icon: "react.svg" },
      { name: "Next.js", icon: "next-js.svg" },
      { name: "Node.js", icon: "nodejs.svg" },
      { name: "FastApi", icon: "fastapi.svg" },
      { name: "Flask", icon: "flask.svg" },
    ],
  },
  {
    category: "Cloud Platforms",
    skills: [
      { name: "AWS", icon: "aws.svg" },
      { name: "Google Cloud", icon: "google-cloud.svg" },
      { name: "Azure", icon: "azure.svg" },
      { name: "Digital Ocean", icon: "digitalocean.svg" },
      { name: "Vercel", icon: "vercel.svg" },
    ],
  },
  {
    category: "DevOps & Tooling",
    skills: [
      { name: "Docker", icon: "docker.svg" },
      { name: "Kubernetes", icon: "kubernets.svg" },
      { name: "Linux", icon: "Tux.svg" },
      { name: "Git /GitHub", icon: "github.svg" },
      { name: "Power Automate", icon: "powerAutomate.svg" },
    ],
  },
  {
    category: "AI and Machine Learning",
    skills: [
      { name: "OpenAI", icon: "openai.svg" },
      { name: "TensorFlow", icon: "tensorflow.svg" },
      { name: "PyTorch", icon: "pytorch.svg" },
      { name: "Scikit-learn", icon: "Scikit_learn.svg" },
      { name: "AutoML", icon: "automl.svg" },
    ],
  },
  {
    category: "Mobile Development",
    skills: [
      { name: "Swift", icon: "swift.svg" },
      { name: "ReactNative", icon: "react-native.svg" },
      { name: "Unity", icon: "unity.svg" },
      { name: "Expo", icon: "expo.svg" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: "mongoDB.svg" },
      { name: "PostgreSQL", icon: "postgresql.svg" },
      { name: "MySQL", icon: "mysql.svg" },
      { name: "Redis", icon: "redis.svg" },
      { name: "Firebase", icon: "firebase.svg" },
    ],
  },
];

export default function Skills() {
  const getCardClasses = (category: string) => {
    if (category === "Databases") {
      return "md:col-span-2 md:px-8 md:h-60 mb-16 md:mb-15";
    }
    return "";
  };

  const renderSkills = (skills: any[], category: string) => {
    if (category === "Databases") {
      return (
        <>
          {/* Large screens: single row with 5 columns */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-6 justify-items-center">
            {skills.map((skill, skillIndex) => (
              <div
                key={skill.name}
                className="flex flex-col items-center group animate-fade-in-up hover:scale-110 transition-all duration-300"
                style={{
                  animationDelay: `${skillIndex * 0.05}s`,
                }}
              >
                <div className="relative mb-2 flex items-center justify-center group-hover:drop-shadow-lg transition-all duration-300">
                  <img
                    src={`/icons/${skill.icon}`}
                    alt={skill.name}
                    className="w-25 h-25 object-contain justify-center"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* Medium and small screens: normal 3-column layout with last row centered */}
          <div className="lg:hidden space-y-6">
            {/* First 3 items */}
            <div className="grid grid-cols-3 gap-6 justify-items-center">
              {skills.slice(0, 3).map((skill, skillIndex) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center group animate-fade-in-up hover:scale-110 transition-all duration-300"
                  style={{
                    animationDelay: `${skillIndex * 0.05}s`,
                  }}
                >
                  <div className="relative mb-2 flex items-center justify-center group-hover:drop-shadow-lg transition-all duration-300">
                    <img
                      src={`/icons/${skill.icon}`}
                      alt={skill.name}
                      className="w-25 h-25 object-contain justify-center"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Last 2 items centered */}
            <div className="flex justify-center items-center gap-12">
              {skills.slice(3).map((skill, skillIndex) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center group animate-fade-in-up hover:scale-110 transition-all duration-300"
                  style={{
                    animationDelay: `${(3 + skillIndex) * 0.05}s`,
                  }}
                >
                  <div className="relative mb-2 flex items-center justify-center group-hover:drop-shadow-lg transition-all duration-300">
                    <img
                      src={`/icons/${skill.icon}`}
                      alt={skill.name}
                      className="w-25 h-25 object-contain justify-center"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }

    // Normal logic for all other categories
    const skillsPerRow = 3;
    const totalRows = Math.ceil(skills.length / skillsPerRow);
    const lastRowStart = (totalRows - 1) * skillsPerRow;
    const lastRowItems = skills.length - lastRowStart;
    const isLastRowIncomplete = lastRowItems < skillsPerRow;

    // Split skills into complete rows and last row
    const completeRowsSkills = skills.slice(0, lastRowStart);
    const lastRowSkills = skills.slice(lastRowStart);

    return (
      <div className="space-y-6">
        {/* Complete rows */}
        {completeRowsSkills.length > 0 && (
          <div className="grid grid-cols-3 gap-6 justify-items-center">
            {completeRowsSkills.map((skill, skillIndex) => (
              <div
                key={skill.name}
                className="flex flex-col items-center group animate-fade-in-up hover:scale-110 transition-all duration-300"
                style={{
                  animationDelay: `${skillIndex * 0.05}s`,
                }}
              >
                <div className="relative mb-2 flex items-center justify-center group-hover:drop-shadow-lg transition-all duration-300">
                  <img
                    src={`/icons/${skill.icon}`}
                    alt={skill.name}
                    className="w-25 h-25 object-contain justify-center"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Last row - centered with even spacing */}
        {isLastRowIncomplete && (
          <div className="flex justify-center items-center gap-12">
            {lastRowSkills.map((skill, skillIndex) => (
              <div
                key={skill.name}
                className="flex flex-col items-center group animate-fade-in-up hover:scale-110 transition-all duration-300"
                style={{
                  animationDelay: `${(lastRowStart + skillIndex) * 0.05}s`,
                }}
              >
                <div className="relative mb-2 flex items-center justify-center group-hover:drop-shadow-lg transition-all duration-300">
                  <img
                    src={`/icons/${skill.icon}`}
                    alt={skill.name}
                    className="w-25 h-25 object-contain justify-center"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Complete last row */}
        {!isLastRowIncomplete && lastRowSkills.length > 0 && (
          <div className="grid grid-cols-3 gap-6 justify-items-center">
            {lastRowSkills.map((skill, skillIndex) => (
              <div
                key={skill.name}
                className="flex flex-col items-center group animate-fade-in-up hover:scale-110 transition-all duration-300"
                style={{
                  animationDelay: `${(lastRowStart + skillIndex) * 0.05}s`,
                }}
              >
                <div className="relative mb-2 flex items-center justify-center group-hover:drop-shadow-lg transition-all duration-300">
                  <img
                    src={`/icons/${skill.icon}`}
                    alt={skill.name}
                    className="w-25 h-25 object-contain justify-center"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="pt-4">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">
        Skills & Technologies
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 justify-center">
        {skillCategories.map((category, categoryIndex) => (
          <Card
            key={category.category}
            className={`animate-fade-in-up hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm h-96 pb-4 ${getCardClasses(
              category.category
            )}  `}
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-semibold text-center">
                {category.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderSkills(category.skills, category.category)}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
