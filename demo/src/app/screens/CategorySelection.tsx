import { motion } from 'motion/react';
import { ArrowLeft, Gamepad2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../data/gameData';
import FloatingIcons from '../components/FloatingIcons';

export default function CategorySelection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <FloatingIcons />
      
      <div className="relative z-10 min-h-screen p-4 md:p-8">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center justify-between mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="bg-white/20 backdrop-blur-md text-white rounded-2xl px-6 py-3 flex items-center gap-2 hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </motion.button>
          
          <div className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 text-white">
            Choose a Category
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl text-white mb-4">
            📚 Select Your Path
          </h1>
          <p className="text-xl text-white/90">Choose a category to start learning</p>
        </motion.div>

        {/* Category Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <CategoryCard
                category={category}
                onClick={() => {
                  // Show game mode selection
                  const mode = window.confirm(
                    'Choose game mode:\n\nOK = Multiple Choice\nCancel = Sorting Mode'
                  );
                  navigate(mode ? `/play/${category.id}` : `/sorting/${category.id}`);
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Game Modes Info */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Gamepad2 className="w-6 h-6 text-green-300" />
              <h3 className="text-white text-xl">Multiple Choice</h3>
            </div>
            <p className="text-white/80 text-sm">
              Test your knowledge with timed questions. Pick the correct answer from 4 options!
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Gamepad2 className="w-6 h-6 text-blue-300" />
              <h3 className="text-white text-xl">Sorting Mode</h3>
            </div>
            <p className="text-white/80 text-sm">
              Drag and drop words into the correct categories. Perfect your sorting skills!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
