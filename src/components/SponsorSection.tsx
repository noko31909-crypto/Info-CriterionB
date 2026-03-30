import { MessageSquareQuote, GraduationCap, Heart, Zap } from "lucide-react";

const insights = [
  { icon: GraduationCap, text: "Educational value must come first — games should teach, not just entertain." },
  { icon: Heart, text: "Simplicity is key — children need intuitive interfaces they can navigate alone." },
  { icon: Zap, text: "Real impact happens when learning feels like play, not homework." },
];

const SponsorSection = () => {
  return (
    <section className="py-24 px-4 bg-muted/50" id="sponsor">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-display text-center mb-4 text-foreground">
          Sponsor Interview
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16">
          Insights from our project sponsor
        </p>
        <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card mb-10">
          <MessageSquareQuote className="h-10 w-10 text-primary mb-4" />
          <p className="text-lg text-card-foreground leading-relaxed italic">
            "The English Dictionary Adventure project demonstrates how technology can bridge the gap between education and entertainment. The team's approach to gamifying vocabulary learning addresses a real challenge faced by language teachers and students worldwide."
          </p>
          <p className="mt-4 font-bold font-display text-foreground">— Project Sponsor</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {insights.map((item, i) => (
            <div key={i} className="bg-card rounded-xl p-6 shadow-card text-center">
              <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
