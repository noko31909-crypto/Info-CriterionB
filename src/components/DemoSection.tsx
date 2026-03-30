import { ExternalLink, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const DemoSection = () => {
  return (
    <section className="py-24 px-4 bg-muted/50" id="demo">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-display text-center mb-4 text-foreground">
          Try the Demo
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16">
          Play the interactive game right here in your browser
        </p>

        {/* Game iframe */}
        <div className="bg-card rounded-3xl overflow-hidden shadow-card mb-10 border border-border">
          <div className="bg-muted/60 px-5 py-3 flex items-center gap-2 border-b border-border">
            <Gamepad2 className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-foreground font-display">WordQuest — Live Demo</span>
          </div>
          <iframe
            src="/demo/index.html"
            className="w-full"
            style={{ height: "600px", border: "none" }}
            title="WordQuest Game Demo"
            allow="autoplay"
          />
        </div>

        {/* Figma prototype link */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Want to see the full Figma prototype?</p>
          <Button
            size="lg"
            className="bg-gradient-hero text-primary-foreground font-display text-lg px-8 py-6 rounded-full shadow-game hover:scale-105 transition-transform"
            asChild
          >
            <a
              href="https://engine-spoke-06798425.figma.site/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-5 w-5" /> View Figma Prototype
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
