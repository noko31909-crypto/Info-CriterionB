import { Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display font-bold text-lg text-background mb-3">
              English Dictionary Adventure
            </h3>
            <p className="text-background/60 text-sm leading-relaxed">
              A student project combining game-based learning with English vocabulary education.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold text-background mb-3">Contact</h4>
            <a href="mailto:team@example.com" className="flex items-center gap-2 text-background/60 text-sm hover:text-background transition-colors">
              <Mail className="h-4 w-4" /> team@example.com
            </a>
          </div>
          <div>
            <h4 className="font-display font-bold text-background mb-3">Links</h4>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-background/60 text-sm hover:text-background transition-colors">
              <Github className="h-4 w-4" /> View on GitHub
            </a>
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 text-center">
          <p className="text-background/40 text-sm flex items-center justify-center gap-1">
            Made with <Heart className="h-3.5 w-3.5 text-game-pink" /> by the English Dictionary Adventure Team © 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
