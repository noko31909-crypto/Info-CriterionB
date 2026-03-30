import { motion } from 'motion/react';
import { Home, Search } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-pink-500 to-purple-500 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-9xl mb-8"
        >
          🔍
        </motion.div>
        <h1 className="text-6xl text-white mb-4">404</h1>
        <p className="text-2xl text-white/90 mb-8">Oops! Page not found</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="bg-white text-purple-600 rounded-2xl px-8 py-4 text-xl flex items-center gap-3 mx-auto"
        >
          <Home className="w-6 h-6" />
          Back to Home
        </motion.button>
      </motion.div>
    </div>
  );
}
