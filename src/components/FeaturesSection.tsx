import { Grid3X3, Layers, Brain, BarChart3, TrendingUp } from "lucide-react";

const features = [
  { icon: Grid3X3, title: "Vocabulary Categories", desc: "Animals, Food, Nature and more themed word groups", color: "text-game-blue", bg: "bg-game-blue/10" },
  { icon: Layers, title: "Interactive Cards", desc: "Visual flashcards with images, audio and definitions", color: "text-game-green", bg: "bg-game-green/10" },
  { icon: Brain, title: "Quiz System", desc: "Multiple-choice quizzes that adapt to your level", color: "text-game-purple", bg: "bg-game-purple/10" },
  { icon: BarChart3, title: "Score Tracking", desc: "Real-time scoring and feedback after every quiz", color: "text-game-pink", bg: "bg-game-pink/10" },
  { icon: TrendingUp, title: "Progress System", desc: "Track your learning journey with visual progress bars", color: "text-accent", bg: "bg-accent/10" },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4" id="features">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-display text-center mb-4 text-foreground">
          Key Features
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16">
          Everything you need to make learning fun
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card rounded-2xl p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mb-4`}>
                <f.icon className={`h-6 w-6 ${f.color}`} />
              </div>
              <h3 className="text-lg font-bold font-display text-card-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
