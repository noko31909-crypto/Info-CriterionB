import { FolderOpen, BookOpen, HelpCircle, Trophy } from "lucide-react";

const steps = [
  {
    icon: FolderOpen,
    step: "1",
    title: "Choose a Category",
    desc: "Pick from Animals, Food, Nature, and more vocabulary topics.",
    gradient: "bg-gradient-hero",
  },
  {
    icon: BookOpen,
    step: "2",
    title: "Learn New Words",
    desc: "Study words with images, definitions, and examples.",
    gradient: "bg-gradient-green",
  },
  {
    icon: HelpCircle,
    step: "3",
    title: "Take a Quiz",
    desc: "Test your knowledge with fun multiple-choice questions.",
    gradient: "bg-gradient-blue",
  },
  {
    icon: Trophy,
    step: "4",
    title: "Track Your Score",
    desc: "See your progress and earn rewards as you improve.",
    gradient: "bg-gradient-warm",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 bg-muted/50" id="how">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-display text-center mb-4 text-foreground">
          How It Works
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16">
          Four simple steps to master English vocabulary
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="text-center group">
              <div className={`w-20 h-20 ${s.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-game`}>
                <s.icon className="h-9 w-9 text-primary-foreground" />
              </div>
              <div className="text-sm font-bold text-muted-foreground mb-2 font-display">
                STEP {s.step}
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
