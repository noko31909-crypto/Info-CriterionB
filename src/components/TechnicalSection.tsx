import { Figma, Globe, Code2, Cpu } from "lucide-react";

const tools = [
  { icon: Figma, name: "Figma", desc: "UI/UX design and prototyping", gradient: "bg-gradient-hero" },
  { icon: Globe, name: "HTML / CSS", desc: "Website structure and styling", gradient: "bg-gradient-blue" },
  { icon: Code2, name: "JavaScript", desc: "Game logic and interactivity", gradient: "bg-gradient-warm" },
  { icon: Cpu, name: "Roblox Studio", desc: "Game environment and 3D world", gradient: "bg-gradient-green" },
];

const TechnicalSection = () => {
  return (
    <section className="py-24 px-4" id="tech">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-display text-center mb-4 text-foreground">
          Technical Details
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16">
          Tools and technologies behind the project
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tools.map((t) => (
            <div key={t.name} className="text-center">
              <div className={`w-16 h-16 ${t.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-game`}>
                <t.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold font-display text-foreground">{t.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{t.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-card rounded-2xl p-8 shadow-card max-w-3xl mx-auto">
          <h3 className="text-xl font-bold font-display text-card-foreground mb-4">System Logic</h3>
          <p className="text-muted-foreground leading-relaxed">
            The game follows a structured flow: users select a vocabulary category, which loads a curated set of words with images and definitions. The learning module presents interactive flashcards. After studying, the quiz engine generates randomized multiple-choice questions. Scores are calculated in real-time and stored to track long-term progress across sessions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;
