const companies = [
  {
    name: "MongoDB.",
    logo: "/mongoDB.svg?width=200&height=200",
    role: "Frontend Developer Intern",
  },
  {
    name: "ITESM",
    logo: "/tec.png",
    role: "Software Engineering Intern",
  },
  {
    name: "Softtek",
    logo: "/softtek.png?width=180&height=90",
    role: "Full Stack Intern",
  },
];

export default function CompaniesSection() {
  return (
    <section className="bg-muted/100">
      <div className="container mx-auto px-4 md:px-5">
        <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center transition-transform duration-300 hover:scale-110"
              style={{ transition: "transform 0.3s", willChange: "transform" }}
            >
              <img
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                className={`object-contain w-full h-full transition-transform duration-300 hover:scale-110 ${
                  company.name === "Softtek"
                    ? "max-h-30 max-w-[150px]"
                    : "max-h-40 max-w-[220px]"
                }`}
                style={{ display: "block" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
