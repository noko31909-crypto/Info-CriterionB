import { User, Code } from "lucide-react";

const team = [
  {
    icon: User,
    name: "Makhamedzhanov Nabi",
    role: "Team Lead",
    desc: "Led the project, coordinated development and managed the overall direction.",
    gradient: "bg-gradient-hero",
  },
  {
    icon: Code,
    name: "Almasuly Alpamys",
    role: "Developer",
    desc: "Built the website and implemented the quiz logic and game functionality.",
    gradient: "bg-gradient-blue",
  },
];

const TeamSection = () => {
  return (
    <section className="py-24 px-4" id="team">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-display text-center mb-4 text-foreground">
          About the Team
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-6">
          The people behind English Dictionary Adventure
        </p>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          We believe that every child deserves to learn in a way that feels like play. Our motivation is to make English vocabulary accessible and enjoyable for young learners everywhere.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {team.map((m) => (
            <div key={m.role} className="bg-card rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-shadow duration-300 text-center">
              <div className={`w-16 h-16 ${m.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <m.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold font-display text-card-foreground">{m.name}</h3>
              <p className="text-sm text-primary font-semibold mb-2">{m.role}</p>
              <p className="text-muted-foreground text-sm">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
