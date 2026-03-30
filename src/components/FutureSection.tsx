import { Plus, Volume2, Users, Cpu } from "lucide-react";

const improvements = [
  { icon: Plus, title: "More Categories", desc: "Expand to include Colors, Body Parts, Clothes, Sports and more." },
  { icon: Volume2, title: "Voice Pronunciation", desc: "Add native speaker audio for every word to improve pronunciation." },
  { icon: Users, title: "Multiplayer Mode", desc: "Compete with friends in real-time vocabulary battles." },
  { icon: Cpu, title: "AI Recommendations", desc: "Smart learning paths that adapt to each student's progress." },
];

const FutureSection = () => {
  return (
    <section className="py-24 px-4 bg-muted/50" id="future">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-display text-center mb-4 text-foreground">
          Future Improvements
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16">
          What's next for English Dictionary Adventure
        </p>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {improvements.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-7 shadow-card flex gap-5 items-start hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold font-display text-card-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
