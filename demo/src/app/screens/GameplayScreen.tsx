import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Volume2, VolumeX, Heart } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import { useState, useEffect } from 'react';
import TimerBar from '../components/TimerBar';
import RewardModal from '../components/RewardModal';
import { gameData, categories, Word } from '../data/gameData';
import { useGameStore } from '../data/gameStore';

export default function GameplayScreen() {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const { userProgress, soundEnabled, toggleSound, addXP, addCoins } = useGameStore();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showReward, setShowReward] = useState(false);
  const [questions, setQuestions] = useState<Array<{ word: Word; options: Word[] }>>([]);

  useEffect(() => {
    // Generate questions
    if (category && gameData[category as keyof typeof gameData]) {
      const words = gameData[category as keyof typeof gameData];
      const allWords = Object.values(gameData).flat();
      
      const generatedQuestions = words.slice(0, 5).map((word) => {
        const wrongAnswers = allWords
          .filter((w) => w.id !== word.id && w.category !== word.category)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3);
        
        const options = [word, ...wrongAnswers].sort(() => Math.random() - 0.5);
        return { word, options };
      });
      
      setQuestions(generatedQuestions);
    }
  }, [category]);

  const handleAnswer = (answer: Word) => {
    if (selectedAnswer) return;
    
    setSelectedAnswer(answer.id);
    const correct = answer.id === questions[currentQuestion].word.id;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 100);
    } else {
      setLives(lives - 1);
      if (lives - 1 === 0) {
        setTimeout(() => {
          navigate('/categories');
        }, 2000);
        return;
      }
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        const earnedCoins = Math.floor(score / 10);
        const earnedXP = score;
        addCoins(earnedCoins);
        addXP(earnedXP);
        setShowReward(true);
      }
    }, 1500);
  };

  const categoryInfo = categories.find((c) => c.id === category);

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMDktMS43OTEgNC00IDRzLTQtMS43OTEtNC00IDEuNzkxLTQgNC00IDQgMS43OTEgNCA0ek0yMCA0NGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
      
      <div className="relative z-10 min-h-screen p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/categories')}
            className="bg-white/20 backdrop-blur-md text-white rounded-2xl px-4 py-3 flex items-center gap-2 hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>

          <div className="flex items-center gap-4">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 text-white text-xl">
              🏆 {score}
            </div>
            <div className="flex gap-1">
              {[...Array(lives)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Heart className="w-8 h-8 text-red-500 fill-red-500" />
                </motion.div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleSound}
              className="bg-white/20 backdrop-blur-md rounded-xl p-3 text-white hover:bg-white/30 transition-colors"
            >
              {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Timer */}
        <div className="mb-6 max-w-3xl mx-auto">
          <TimerBar duration={15} key={currentQuestion} />
        </div>

        {/* Progress */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center mb-8"
        >
          <span className="bg-white/20 backdrop-blur-md rounded-full px-6 py-2 text-white text-lg">
            Question {currentQuestion + 1} / {questions.length}
          </span>
        </motion.div>

        {/* Question */}
        <motion.div
          key={currentQuestion}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center mb-12"
        >
          <motion.div
            className="text-8xl md:text-9xl mb-6"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 0.5 }}
          >
            {currentQ.word.emoji}
          </motion.div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">What is this?</h2>
          {categoryInfo && (
            <p className="text-xl text-white/80">Category: {categoryInfo.emoji} {categoryInfo.name}</p>
          )}
        </motion.div>

        {/* Answer Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {currentQ.options.map((option, index) => {
              const isSelected = selectedAnswer === option.id;
              const isCorrectAnswer = option.id === currentQ.word.id;
              
              let bgColor = 'bg-white/20 hover:bg-white/30';
              if (isSelected && isCorrect) {
                bgColor = 'bg-green-500 hover:bg-green-500';
              } else if (isSelected && !isCorrect) {
                bgColor = 'bg-red-500 hover:bg-red-500';
              } else if (selectedAnswer && isCorrectAnswer) {
                bgColor = 'bg-green-500 hover:bg-green-500';
              }

              return (
                <motion.button
                  key={option.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: isSelected ? [1, 1.05, 1] : 1, 
                    opacity: 1,
                    x: isSelected && !isCorrect ? [-5, 5, -5, 5, 0] : 0,
                  }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: selectedAnswer ? 1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswer(option)}
                  disabled={!!selectedAnswer}
                  className={`${bgColor} backdrop-blur-md text-white rounded-3xl py-8 px-6 text-2xl transition-all shadow-lg disabled:cursor-not-allowed`}
                >
                  {option.word}
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <RewardModal
        isOpen={showReward}
        onClose={() => navigate('/categories')}
        stars={lives}
        coins={Math.floor(score / 10)}
        xp={score}
        onNextLevel={() => {
          setShowReward(false);
          setCurrentQuestion(0);
          setScore(0);
          setLives(3);
          setSelectedAnswer(null);
          setIsCorrect(null);
        }}
      />
    </div>
  );
}
