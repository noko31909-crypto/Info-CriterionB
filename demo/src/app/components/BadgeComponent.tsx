import { motion } from 'motion/react';
import { Badge } from '../data/gameData';

interface BadgeComponentProps {
  badge: Badge;
  size?: 'sm' | 'md' | 'lg';
}

export default function BadgeComponent({ badge, size = 'md' }: BadgeComponentProps) {
  const sizes = {
    sm: 'w-16 h-16 text-2xl',
    md: 'w-20 h-20 text-3xl',
    lg: 'w-28 h-28 text-5xl',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      className={`relative ${sizes[size]}`}
    >
      <div
        className={`
          w-full h-full rounded-full 
          ${badge.unlocked ? 'bg-gradient-to-br from-yellow-400 to-orange-500' : 'bg-gray-400'}
          flex items-center justify-center
          shadow-lg relative overflow-hidden
        `}
      >
        {badge.unlocked && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
          />
        )}
        <span className={badge.unlocked ? '' : 'grayscale opacity-50'}>{badge.emoji}</span>
      </div>
      <p className="text-center text-xs mt-2 text-white/90">{badge.name}</p>
    </motion.div>
  );
}
