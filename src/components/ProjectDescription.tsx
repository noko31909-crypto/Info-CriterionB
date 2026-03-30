import { Lightbulb, Target, Sparkles, Puzzle } from "lucide-react";

const items = [
  {
    icon: Lightbulb,
    title: "What is it?",
    text: "A web-based educational game built on the Roblox platform that teaches English vocabulary through interactive play.",
    color: "text-game-blue",
    bg: "bg-game-blue/10",
  },
  {
    icon: Target,
    title: "The Problem",
    text: "Traditional vocabulary learning is boring and leads to low retention. Children lose interest quickly with textbooks and flashcards.",
    color: "text-game-pink",
    bg: "bg-game-pink/10",
  },
  {
    icon: Sparkles,
    title: "Why It Matters",
    text: "Game-based learning increases engagement by 60% and improves memory retention through active participation and rewards.",
    color: "text-game-green",
    bg: "bg-game-green/10",
  },
  {
    icon: Puzzle,
    title: "What Makes It Unique",
    text: "Combines Roblox-style gaming with structured vocabulary categories and an adaptive quiz system for maximum learning impact.",
    color: "text-game-purple",
    bg: "bg-game-purple/10",
  },
];

const ProjectDescription = () => {
  return (
    <section className="py-24 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-display text-center mb-4 text-foreground">
          About the Project
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Transforming how children learn English vocabulary through play
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-5`}>
                <item.icon className={`h-7 w-7 ${item.color}`} />
              </div>
              <h3 className="text-xl font-bold font-display text-card-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
