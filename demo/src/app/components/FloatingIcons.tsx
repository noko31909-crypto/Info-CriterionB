import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const icons = ['🐶', '🍎', '📦', '🌳', '🦁', '🍕', '⚽', '🌸', '🐱', '🍌', '📚', '☀️'];

export default function FloatingIcons() {
  const [iconElements, setIconElements] = useState<Array<{ id: number; icon: string; x: number; y: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const elements = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      icon: icons[i],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 15 + Math.random() * 10,
    }));
    setIconElements(elements);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {iconElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute text-4xl"
          initial={{ x: `${element.x}vw`, y: `${element.y}vh`, opacity: 0 }}
          animate={{
            y: [`${element.y}vh`, `${element.y - 100}vh`],
            opacity: [0, 0.6, 0.6, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {element.icon}
        </motion.div>
      ))}
    </div>
  );
}
