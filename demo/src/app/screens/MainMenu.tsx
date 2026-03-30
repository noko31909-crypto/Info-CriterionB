import { motion } from 'motion/react';
import { Play, Trophy, User, Settings as SettingsIcon, Flame, Crown, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router';
import FloatingIcons from '../components/FloatingIcons';
import { useGameStore } from '../data/gameStore';
import HelpModal from '../components/HelpModal';
import { useState } from 'react';

export default function MainMenu() {
  const navigate = useNavigate();
  const { userProgress } = useGameStore();
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 relative overflow-hidden">
      <FloatingIcons />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        {/* Top Bar */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute top-4 left-4 right-4 flex justify-between items-center"
        >
          <div className="bg-white/20 backdrop-blur-md rounded-2xl px-4 py-2 flex items-center gap-2">
            <Flame className="w-5 h-5 text-orange-400" />
            <span className="text-white">{userProgress.streak} Day Streak</span>
          </div>
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowHelp(true)}
              className="bg-white/20 backdrop-blur-md rounded-xl p-3 text-white hover:bg-white/30 transition-colors"
            >
              <HelpCircle className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/leaderboard')}
              className="bg-white/20 backdrop-blur-md rounded-xl p-3 text-white hover:bg-white/30 transition-colors"
            >
              <Crown className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/settings')}
              className="bg-white/20 backdrop-blur-md rounded-xl p-3 text-white hover:bg-white/30 transition-colors"
            >
              <SettingsIcon className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-7xl md:text-8xl text-white mb-4 drop-shadow-lg"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            🎮 WordQuest
          </motion.h1>
          <p className="text-xl md:text-2xl text-white/90">Master English Through Play</p>
        </motion.div>

        {/* Daily Challenge Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-6 mb-8 max-w-md w-full shadow-2xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white text-xl mb-1">🌟 Daily Challenge</h3>
              <p className="text-white/90 text-sm">Learn 10 new animal words</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white text-orange-500 rounded-xl px-6 py-2"
            >
              Start
            </motion.button>
          </div>
        </motion.div>

        {/* Main Buttons */}
        <div className="flex flex-col gap-4 w-full max-w-md">
          <motion.button
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/categories')}
            className="bg-white hover:bg-white/90 text-purple-600 rounded-3xl py-6 px-8 text-2xl flex items-center justify-center gap-4 shadow-2xl transition-all"
          >
            <Play className="w-8 h-8 fill-purple-600" />
            Play Now
          </motion.button>

          <div className="flex gap-4">
            <motion.button
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/progress')}
              className="flex-1 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-2xl py-4 px-6 flex items-center justify-center gap-3 shadow-lg transition-colors"
            >
              <User className="w-6 h-6" />
              Profile
            </motion.button>

            <motion.button
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/leaderboard')}
              className="flex-1 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-2xl py-4 px-6 flex items-center justify-center gap-3 shadow-lg transition-colors"
            >
              <Trophy className="w-6 h-6" />
              Leaderboard
            </motion.button>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-4 left-4 right-4 bg-white/20 backdrop-blur-md rounded-2xl p-4"
        >
          <div className="flex justify-around">
            <div className="text-center">
              <p className="text-white/70 text-sm">Level</p>
              <p className="text-white text-xl">{userProgress.level}</p>
            </div>
            <div className="text-center">
              <p className="text-white/70 text-sm">Words Learned</p>
              <p className="text-white text-xl">{userProgress.wordsLearned}</p>
            </div>
            <div className="text-center">
              <p className="text-white/70 text-sm">Coins</p>
              <p className="text-white text-xl">💰 {userProgress.coins}</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <HelpModal isOpen={showHelp} onClose={() => setShowHelp(false)} />
    </div>
  );
}