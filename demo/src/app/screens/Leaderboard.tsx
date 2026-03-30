import { motion } from 'motion/react';
import { ArrowLeft, Crown, Medal, Award } from 'lucide-react';
import { useNavigate } from 'react-router';
import { leaderboardData } from '../data/gameData';

export default function Leaderboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 relative overflow-hidden">
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

        {/* Title */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-7xl mb-4"
          >
            👑
          </motion.div>
          <h1 className="text-5xl md:text-6xl text-white mb-4">Leaderboard</h1>
          <p className="text-xl text-white/90">Top Players This Week</p>
        </motion.div>

        {/* Top 3 Podium */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-end justify-center gap-4 mb-12 max-w-3xl mx-auto"
        >
          {/* Second Place */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -10 }}
            className="flex-1 bg-gradient-to-br from-gray-300 to-gray-400 rounded-3xl p-6 pb-12 text-center relative"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <Medal className="w-16 h-16 text-gray-300 fill-gray-300" />
            </div>
            <div className="text-5xl mb-3 mt-4">{leaderboardData[1].avatar}</div>
            <h3 className="text-white text-xl mb-2">{leaderboardData[1].name}</h3>
            <p className="text-white/80 text-sm mb-2">Level {leaderboardData[1].level}</p>
            <p className="text-2xl text-white">{leaderboardData[1].score.toLocaleString()}</p>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-400 text-white rounded-full w-8 h-8 flex items-center justify-center">
              2
            </div>
          </motion.div>

          {/* First Place */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -10 }}
            className="flex-1 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-6 pb-16 text-center relative shadow-2xl"
          >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <Crown className="w-20 h-20 text-yellow-300 fill-yellow-300" />
            </div>
            <div className="text-6xl mb-3 mt-6">{leaderboardData[0].avatar}</div>
            <h3 className="text-white text-2xl mb-2">{leaderboardData[0].name}</h3>
            <p className="text-white/90 mb-2">Level {leaderboardData[0].level}</p>
            <p className="text-3xl text-white">{leaderboardData[0].score.toLocaleString()}</p>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl">
              1
            </div>
          </motion.div>

          {/* Third Place */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ y: -10 }}
            className="flex-1 bg-gradient-to-br from-orange-300 to-orange-400 rounded-3xl p-6 pb-10 text-center relative"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <Award className="w-16 h-16 text-orange-300 fill-orange-300" />
            </div>
            <div className="text-5xl mb-3 mt-4">{leaderboardData[2].avatar}</div>
            <h3 className="text-white text-xl mb-2">{leaderboardData[2].name}</h3>
            <p className="text-white/80 text-sm mb-2">Level {leaderboardData[2].level}</p>
            <p className="text-2xl text-white">{leaderboardData[2].score.toLocaleString()}</p>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-400 text-white rounded-full w-8 h-8 flex items-center justify-center">
              3
            </div>
          </motion.div>
        </motion.div>

        {/* Rest of Leaderboard */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="max-w-3xl mx-auto space-y-3"
        >
          {leaderboardData.slice(3).map((entry, index) => (
            <motion.div
              key={entry.rank}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className={`${
                entry.name === 'You'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 ring-4 ring-white'
                  : 'bg-white/10 backdrop-blur-md'
              } rounded-2xl p-4 flex items-center justify-between shadow-lg`}
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/20 rounded-xl w-12 h-12 flex items-center justify-center text-white">
                  {entry.rank}
                </div>
                <div className="text-4xl">{entry.avatar}</div>
                <div>
                  <h4 className="text-white text-lg">{entry.name}</h4>
                  <p className="text-white/70 text-sm">Level {entry.level}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl text-white">{entry.score.toLocaleString()}</p>
                <p className="text-white/70 text-sm">points</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Time Period Selector */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-2xl p-2 flex gap-2"
        >
          {['Today', 'Week', 'Month', 'All Time'].map((period) => (
            <motion.button
              key={period}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-xl transition-colors ${
                period === 'Week'
                  ? 'bg-white text-orange-500'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {period}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
