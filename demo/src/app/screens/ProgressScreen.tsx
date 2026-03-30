import { motion } from 'motion/react';
import { ArrowLeft, Trophy, Target, Clock, Flame } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useGameStore } from '../data/gameStore';
import BadgeComponent from '../components/BadgeComponent';
import * as Progress from '@radix-ui/react-progress';

export default function ProgressScreen() {
  const navigate = useNavigate();
  const { userProgress } = useGameStore();

  const xpPercentage = (userProgress.xp / userProgress.xpToNextLevel) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMDktMS43OTEgNC00IDRzLTQtMS43OTEtNC00IDEuNzkxLTQgNC00IDQgMS43OTEgNCA0ek0yMCA0NGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
      
      <div className="relative z-10 min-h-screen p-4 md:p-8">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center justify-between mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="bg-white/20 backdrop-blur-md text-white rounded-2xl px-6 py-3 flex items-center gap-2 hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </motion.button>
        </motion.div>

        {/* Profile Header */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-6xl shadow-2xl"
            >
              👤
            </motion.div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl text-white mb-2">Your Profile</h1>
              <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                <Trophy className="w-6 h-6 text-yellow-300" />
                <span className="text-2xl text-white">Level {userProgress.level}</span>
              </div>
              
              {/* XP Bar */}
              <div className="mb-2">
                <Progress.Root
                  className="relative overflow-hidden bg-white/20 rounded-full w-full h-6"
                  value={xpPercentage}
                >
                  <Progress.Indicator
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-full transition-transform duration-500 ease-out rounded-full"
                    style={{ transform: `translateX(-${100 - xpPercentage}%)` }}
                  />
                </Progress.Root>
              </div>
              <p className="text-white/80">
                {userProgress.xp} / {userProgress.xpToNextLevel} XP
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-6xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-6 shadow-xl"
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
              <Trophy className="w-12 h-12 text-white mx-auto mb-3" />
              <p className="text-white/80 text-sm text-center mb-2">Words Learned</p>
              <p className="text-4xl text-white text-center">{userProgress.wordsLearned}</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl p-6 shadow-xl"
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
              <Target className="w-12 h-12 text-white mx-auto mb-3" />
              <p className="text-white/80 text-sm text-center mb-2">Accuracy</p>
              <p className="text-4xl text-white text-center">{userProgress.accuracy}%</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-6 shadow-xl"
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
              <Flame className="w-12 h-12 text-white mx-auto mb-3" />
              <p className="text-white/80 text-sm text-center mb-2">Day Streak</p>
              <p className="text-4xl text-white text-center">{userProgress.streak}</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 shadow-xl"
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
              <Clock className="w-12 h-12 text-white mx-auto mb-3" />
              <p className="text-white/80 text-sm text-center mb-2">Time Played</p>
              <p className="text-4xl text-white text-center">{userProgress.timePlayed}m</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-6xl mx-auto"
        >
          <h2 className="text-3xl text-white mb-6 text-center">🏆 Your Badges</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {userProgress.badges.map((badge, index) => (
              <motion.div
                key={badge.id}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <BadgeComponent badge={badge} size="md" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coins Display */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className="fixed bottom-8 right-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl px-6 py-4 shadow-2xl"
        >
          <div className="flex items-center gap-3">
            <span className="text-4xl">💰</span>
            <div>
              <p className="text-white/80 text-sm">Total Coins</p>
              <p className="text-2xl text-white">{userProgress.coins}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
