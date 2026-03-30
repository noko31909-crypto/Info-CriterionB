import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { Gamepad2, Eye } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Roblox-inspired game world"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold font-display text-primary-foreground mb-4 drop-shadow-lg">
          English Dictionary Adventure
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 font-body mb-10 max-w-2xl mx-auto">
          Learn English through a fun interactive game inspired by Roblox
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-hero text-primary-foreground font-display text-lg px-8 py-6 rounded-full shadow-game hover:scale-105 transition-transform"
            asChild
          >
            <a href="https://engine-spoke-06798425.figma.site/" target="_blank" rel="noopener noreferrer">
              <Eye className="mr-2 h-5 w-5" /> View Prototype
            </a>
          </Button>
          <Button
            size="lg"
            className="bg-gradient-green text-secondary-foreground font-display text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform"
            asChild
          >
            <a href="#demo">
              <Gamepad2 className="mr-2 h-5 w-5" /> Try Demo
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
