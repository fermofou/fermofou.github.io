const companies = [
  {
    name: "ITESM",
    logo: "/tec.svg?height=60&width=120",
    role: "Computer Science Student",
  },
  {
    name: "MongoDB.",
    logo: "/mongoDB.svg?height=60&width=120",
    role: "Frontend Developer Intern",
  },
  {
    name: "Softtek",
    logo: "/softtek.png?height=60&width=120",
    role: "Full Stack Intern",
  },
];

export default function CompaniesSection() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="group flex flex-col items-center space-y-2 animate-fade-in-up hover:scale-105 transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-24 h-12 md:w-32 md:h-16 transition-all duration-300">
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  className="object-contain"
                />
              </div>
              <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs font-medium">{company.name}</p>
                <p className="text-xs text-muted-foreground">{company.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
