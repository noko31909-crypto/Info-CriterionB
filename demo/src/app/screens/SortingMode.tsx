import { motion } from 'motion/react';
import { ArrowLeft, Check, X } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { gameData, categories, Word } from '../data/gameData';
import { useGameStore } from '../data/gameStore';
import RewardModal from '../components/RewardModal';

interface DragItem {
  word: Word;
}

function DraggableWord({ word, onDrop }: { word: Word; onDrop: () => void }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'word',
    item: { word },
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        onDrop();
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <motion.div
      ref={drag}
      whileHover={{ scale: 1.05 }}
      className={`bg-white rounded-2xl p-4 shadow-lg cursor-move ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      <div className="text-4xl text-center mb-2">{word.emoji}</div>
      <p className="text-center text-gray-800">{word.word}</p>
    </motion.div>
  );
}

function DropZone({
  category,
  onDrop,
  droppedWords,
}: {
  category: { id: string; name: string; emoji: string; color: string };
  onDrop: (word: Word) => void;
  droppedWords: Word[];
}) {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'word',
    drop: (item: DragItem) => {
      onDrop(item.word);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <motion.div
      ref={drop}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={`bg-gradient-to-br ${category.color} rounded-3xl p-6 min-h-[300px] relative ${
        isOver ? 'ring-4 ring-white' : ''
      }`}
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl" />
      <div className="relative z-10">
        <div className="text-center mb-4">
          <div className="text-5xl mb-2">{category.emoji}</div>
          <h3 className="text-white text-2xl">{category.name}</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mt-4">
          {droppedWords.map((word) => (
            <motion.div
              key={word.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-white/20 backdrop-blur-md rounded-xl p-3 text-center"
            >
              <div className="text-3xl mb-1">{word.emoji}</div>
              <p className="text-white text-sm">{word.word}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SortingGameContent() {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const { addXP, addCoins } = useGameStore();
  
  const [availableWords, setAvailableWords] = useState<Word[]>([]);
  const [droppedWords, setDroppedWords] = useState<{ [key: string]: Word[] }>({
    animals: [],
    food: [],
    objects: [],
    nature: [],
  });
  const [score, setScore] = useState(0);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [showReward, setShowReward] = useState(false);
  const [feedback, setFeedback] = useState<{ correct: boolean; message: string } | null>(null);

  useEffect(() => {
    // Get random words from all categories
    const allWords = Object.values(gameData).flat();
    const randomWords = allWords.sort(() => Math.random() - 0.5).slice(0, 12);
    setAvailableWords(randomWords);
  }, []);

  const handleDrop = (word: Word, targetCategory: string) => {
    // Remove from available words
    setAvailableWords(availableWords.filter((w) => w.id !== word.id));
    
    // Check if correct
    const isCorrect = word.category === targetCategory;
    
    if (isCorrect) {
      setDroppedWords({
        ...droppedWords,
        [targetCategory]: [...droppedWords[targetCategory], word],
      });
      setScore(score + 50);
      setFeedback({ correct: true, message: '✓ Correct!' });
    } else {
      setWrongAttempts(wrongAttempts + 1);
      setAvailableWords([...availableWords, word]);
      setFeedback({ correct: false, message: '✗ Try Again!' });
    }
    
    setTimeout(() => setFeedback(null), 1000);
    
    // Check if game is complete
    if (availableWords.length === 1 && isCorrect) {
      const earnedCoins = Math.floor(score / 5);
      const earnedXP = score;
      addCoins(earnedCoins);
      addXP(earnedXP);
      setTimeout(() => setShowReward(true), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 relative overflow-hidden">
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
            Back
          </motion.button>

          <div className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 text-white text-xl">
            🏆 {score}
          </div>
        </div>

        {/* Title */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl text-white mb-2">🎯 Sorting Challenge</h1>
          <p className="text-xl text-white/90">Drag words to the correct category</p>
        </motion.div>

        {/* Feedback */}
        {feedback && (
          <motion.div
            initial={{ scale: 0, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0 }}
            className={`fixed top-24 left-1/2 transform -translate-x-1/2 z-50 ${
              feedback.correct ? 'bg-green-500' : 'bg-red-500'
            } text-white px-8 py-4 rounded-2xl shadow-2xl text-xl`}
          >
            {feedback.message}
          </motion.div>
        )}

        {/* Available Words */}
        <div className="mb-8 max-w-6xl mx-auto">
          <h3 className="text-white text-2xl mb-4 text-center">Available Words</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {availableWords.map((word) => (
              <DraggableWord
                key={word.id}
                word={word}
                onDrop={() => {}}
              />
            ))}
          </div>
        </div>

        {/* Drop Zones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {categories.map((cat) => (
            <DropZone
              key={cat.id}
              category={cat}
              onDrop={(word) => handleDrop(word, cat.id)}
              droppedWords={droppedWords[cat.id]}
            />
          ))}
        </div>

        {/* Progress */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md rounded-2xl px-8 py-4 text-white"
        >
          Words Remaining: {availableWords.length} / 12
        </motion.div>
      </div>

      <RewardModal
        isOpen={showReward}
        onClose={() => navigate('/categories')}
        stars={3 - Math.floor(wrongAttempts / 3)}
        coins={Math.floor(score / 5)}
        xp={score}
        onNextLevel={() => navigate('/categories')}
      />
    </div>
  );
}

export default function SortingMode() {
  return (
    <DndProvider backend={HTML5Backend}>
      <SortingGameContent />
    </DndProvider>
  );
}
