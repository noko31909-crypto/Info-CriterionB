import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface TimerBarProps {
  duration: number;
  onComplete?: () => void;
  isPaused?: boolean;
}

export default function TimerBar({ duration, onComplete, isPaused = false }: TimerBarProps) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev - (100 / duration) * 0.1;
        if (newProgress <= 0) {
          clearInterval(interval);
          onComplete?.();
          return 0;
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [duration, onComplete, isPaused]);

  return (
    <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden backdrop-blur-sm">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-green-400 to-blue-500"
        style={{ width: `${progress}%` }}
        animate={{ backgroundColor: progress < 20 ? '#ef4444' : progress < 50 ? '#f59e0b' : '#10b981' }}
      />
    </div>
  );
}
