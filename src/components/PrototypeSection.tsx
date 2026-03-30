import screenMenu from "@/assets/screen-menu.jpg";
import screenLearning from "@/assets/screen-learning.jpg";
import screenQuiz from "@/assets/screen-quiz.jpg";
import screenScore from "@/assets/screen-score.jpg";

const screens = [
  { src: screenMenu, label: "Main Menu", desc: "Category selection and game navigation" },
  { src: screenLearning, label: "Learning Screen", desc: "Interactive vocabulary cards with images" },
  { src: screenQuiz, label: "Quiz Screen", desc: "Multiple-choice vocabulary testing" },
  { src: screenScore, label: "Score Screen", desc: "Results and performance feedback" },
];

const PrototypeSection = () => {
  return (
    <section className="py-24 px-4 bg-muted/50" id="prototype">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-display text-center mb-4 text-foreground">
          Prototype Preview
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16">
          Designed in Figma — key screens from the game
        </p>
        <div className="grid sm:grid-cols-2 gap-8">
          {screens.map((s) => (
            <div key={s.label} className="group">
              <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300">
                <img
                  src={s.src}
                  alt={s.label}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold font-display text-card-foreground">{s.label}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrototypeSection;
