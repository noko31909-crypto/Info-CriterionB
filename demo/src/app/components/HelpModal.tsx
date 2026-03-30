import { motion, AnimatePresence } from 'motion/react';
import { X, Gamepad2, Target, Trophy } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HelpModal({ isOpen, onClose }: HelpModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl text-white">📚 How to Play</h2>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Multiple Choice */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Gamepad2 className="w-8 h-8 text-green-300" />
                  <h3 className="text-white text-xl">Multiple Choice Mode</h3>
                </div>
                <ul className="text-white/90 space-y-2 text-sm">
                  <li>• Choose the correct word for the emoji shown</li>
                  <li>• You have 15 seconds per question</li>
                  <li>• 3 lives - lose one for each wrong answer</li>
                  <li>• Earn 100 points per correct answer</li>
                </ul>
              </div>

              {/* Sorting Mode */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-blue-300" />
                  <h3 className="text-white text-xl">Sorting Mode</h3>
                </div>
                <ul className="text-white/90 space-y-2 text-sm">
                  <li>• Drag words to their correct categories</li>
                  <li>• Sort 12 words correctly to win</li>
                  <li>• Wrong sorts don't lose points</li>
                  <li>• Earn 50 points per correct sort</li>
                </ul>
              </div>

              {/* Rewards */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className="w-8 h-8 text-yellow-300" />
                  <h3 className="text-white text-xl">Rewards & Progress</h3>
                </div>
                <ul className="text-white/90 space-y-2 text-sm">
                  <li>• Earn XP to level up your profile</li>
                  <li>• Collect coins for completing levels</li>
                  <li>• Unlock badges for achievements</li>
                  <li>• Maintain daily streaks for bonuses</li>
                  <li>• Compete on the leaderboard</li>
                </ul>
              </div>

              {/* Tips */}
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6">
                <h3 className="text-white text-xl mb-3">💡 Pro Tips</h3>
                <ul className="text-white/90 space-y-2 text-sm">
                  <li>• Play daily to maintain your streak 🔥</li>
                  <li>• Try both game modes for maximum learning</li>
                  <li>• Focus on accuracy over speed</li>
                  <li>• Complete all categories to become a Word Master!</li>
                </ul>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="w-full bg-white hover:bg-white/90 text-purple-600 rounded-2xl py-4 mt-6 transition-colors"
            >
              Got it! Let's Play
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
