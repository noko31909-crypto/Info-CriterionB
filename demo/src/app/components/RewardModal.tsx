import { motion, AnimatePresence } from 'motion/react';
import { X, Star, Trophy, Coins } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

interface RewardModalProps {
  isOpen: boolean;
  onClose: () => void;
  stars: number;
  coins: number;
  xp: number;
  onNextLevel?: () => void;
}

export default function RewardModal({ isOpen, onClose, stars, coins, xp, onNextLevel }: RewardModalProps) {
  useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [isOpen]);

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
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 50 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl p-8 max-w-md w-full shadow-2xl relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="text-center mb-6"
            >
              <Trophy className="w-20 h-20 text-yellow-300 mx-auto mb-4" />
              <h2 className="text-4xl text-white mb-2">Level Complete!</h2>
              <p className="text-white/90">Amazing work! Keep it up!</p>
            </motion.div>

            {/* Stars */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center gap-4 mb-6"
            >
              {[1, 2, 3].map((star) => (
                <motion.div
                  key={star}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + star * 0.1 }}
                >
                  <Star
                    className={`w-12 h-12 ${
                      star <= stars ? 'text-yellow-300 fill-yellow-300' : 'text-white/30'
                    }`}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Rewards */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <div className="flex justify-around">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-center"
                >
                  <Coins className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                  <p className="text-2xl text-white">+{coins}</p>
                  <p className="text-white/70 text-sm">Coins</p>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-center"
                >
                  <Star className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                  <p className="text-2xl text-white">+{xp}</p>
                  <p className="text-white/70 text-sm">XP</p>
                </motion.div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="flex-1 bg-white/20 hover:bg-white/30 text-white rounded-xl py-3 transition-colors backdrop-blur-sm"
              >
                Close
              </motion.button>
              {onNextLevel && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onNextLevel}
                  className="flex-1 bg-white hover:bg-white/90 text-purple-600 rounded-xl py-3 transition-colors"
                >
                  Next Level
                </motion.button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
