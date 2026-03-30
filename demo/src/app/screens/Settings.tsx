import { motion } from 'motion/react';
import { ArrowLeft, Volume2, VolumeX, Globe, Zap } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useGameStore } from '../data/gameStore';
import * as Switch from '@radix-ui/react-switch';

export default function Settings() {
  const navigate = useNavigate();
  const { soundEnabled, language, difficulty, toggleSound, setLanguage, setDifficulty } = useGameStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
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
          <h1 className="text-5xl md:text-6xl text-white mb-4">⚙️ Settings</h1>
          <p className="text-xl text-white/90">Customize your experience</p>
        </motion.div>

        {/* Settings Cards */}
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Sound Setting */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {soundEnabled ? (
                  <Volume2 className="w-8 h-8 text-white" />
                ) : (
                  <VolumeX className="w-8 h-8 text-white" />
                )}
                <div>
                  <h3 className="text-white text-xl mb-1">Sound Effects</h3>
                  <p className="text-white/70 text-sm">Toggle game sounds</p>
                </div>
              </div>
              <Switch.Root
                checked={soundEnabled}
                onCheckedChange={toggleSound}
                className="w-16 h-8 bg-white/20 rounded-full relative data-[state=checked]:bg-green-500 transition-colors"
              >
                <Switch.Thumb className="block w-6 h-6 bg-white rounded-full transition-transform duration-200 translate-x-1 data-[state=checked]:translate-x-9" />
              </Switch.Root>
            </div>
          </motion.div>

          {/* Language Setting */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <Globe className="w-8 h-8 text-white" />
              <div>
                <h3 className="text-white text-xl mb-1">Language</h3>
                <p className="text-white/70 text-sm">Choose your learning language</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['English', 'Spanish', 'French', 'German'].map((lang) => (
                <motion.button
                  key={lang}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setLanguage(lang)}
                  className={`py-3 rounded-xl transition-colors ${
                    language === lang
                      ? 'bg-white text-purple-600'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {lang}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Difficulty Setting */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <Zap className="w-8 h-8 text-white" />
              <div>
                <h3 className="text-white text-xl mb-1">Difficulty</h3>
                <p className="text-white/70 text-sm">Adjust challenge level</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { level: 'easy', emoji: '😊', label: 'Easy' },
                { level: 'medium', emoji: '🤔', label: 'Medium' },
                { level: 'hard', emoji: '🔥', label: 'Hard' },
              ].map((diff) => (
                <motion.button
                  key={diff.level}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setDifficulty(diff.level as 'easy' | 'medium' | 'hard')}
                  className={`py-4 rounded-xl transition-colors ${
                    difficulty === diff.level
                      ? 'bg-white text-purple-600'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <div className="text-3xl mb-1">{diff.emoji}</div>
                  <div className="text-sm">{diff.label}</div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* About Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-xl"
          >
            <h3 className="text-white text-xl mb-3">📱 About WordQuest</h3>
            <p className="text-white/80 text-sm mb-4">
              Version 1.0.0
              <br />
              An educational game for learning English vocabulary through interactive gameplay.
            </p>
            <div className="space-y-2">
              <button className="w-full bg-white/20 hover:bg-white/30 text-white rounded-xl py-3 text-sm transition-colors">
                Privacy Policy
              </button>
              <button className="w-full bg-white/20 hover:bg-white/30 text-white rounded-xl py-3 text-sm transition-colors">
                Terms of Service
              </button>
              <button className="w-full bg-white/20 hover:bg-white/30 text-white rounded-xl py-3 text-sm transition-colors">
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
