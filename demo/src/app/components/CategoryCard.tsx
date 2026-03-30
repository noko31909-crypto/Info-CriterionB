import { motion } from 'motion/react';
import { CategoryInfo } from '../data/gameData';

interface CategoryCardProps {
  category: CategoryInfo;
  onClick: () => void;
}

export default function CategoryCard({ category, onClick }: CategoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      whileTap={{ scale: 0.95 }}
      className="relative cursor-pointer"
      onClick={onClick}
    >
      <div className={`bg-gradient-to-br ${category.color} rounded-3xl p-8 shadow-xl backdrop-blur-lg relative overflow-hidden`}>
        {/* Glass effect overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
        
        <div className="relative z-10">
          <div className="text-6xl mb-4 text-center">{category.emoji}</div>
          <h3 className="text-2xl text-white text-center mb-4">{category.name}</h3>
          
          {/* Progress bar */}
          <div className="bg-white/30 rounded-full h-3 overflow-hidden">
            <motion.div
              className="bg-white h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${category.progress}%` }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
          <p className="text-white/90 text-center mt-2 text-sm">{category.progress}% Complete</p>
        </div>
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        />
      </div>
    </motion.div>
  );
}
