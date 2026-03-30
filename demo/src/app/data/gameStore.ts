import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserProgress, badges } from './gameData';

interface GameState {
  userProgress: UserProgress;
  soundEnabled: boolean;
  language: string;
  difficulty: 'easy' | 'medium' | 'hard';
  addXP: (amount: number) => void;
  addCoins: (amount: number) => void;
  incrementWordsLearned: () => void;
  updateAccuracy: (correct: number, total: number) => void;
  incrementStreak: () => void;
  resetStreak: () => void;
  toggleSound: () => void;
  setLanguage: (lang: string) => void;
  setDifficulty: (diff: 'easy' | 'medium' | 'hard') => void;
  unlockBadge: (badgeId: string) => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      userProgress: {
        level: 5,
        xp: 1200,
        xpToNextLevel: 2000,
        wordsLearned: 47,
        accuracy: 87,
        timePlayed: 245,
        streak: 5,
        coins: 850,
        badges: badges,
      },
      soundEnabled: true,
      language: 'English',
      difficulty: 'medium',
      addXP: (amount) =>
        set((state) => {
          const newXP = state.userProgress.xp + amount;
          const newLevel =
            newXP >= state.userProgress.xpToNextLevel
              ? state.userProgress.level + 1
              : state.userProgress.level;
          const remainingXP =
            newXP >= state.userProgress.xpToNextLevel
              ? newXP - state.userProgress.xpToNextLevel
              : newXP;
          return {
            userProgress: {
              ...state.userProgress,
              xp: remainingXP,
              level: newLevel,
              xpToNextLevel: newLevel * 400,
            },
          };
        }),
      addCoins: (amount) =>
        set((state) => ({
          userProgress: {
            ...state.userProgress,
            coins: state.userProgress.coins + amount,
          },
        })),
      incrementWordsLearned: () =>
        set((state) => ({
          userProgress: {
            ...state.userProgress,
            wordsLearned: state.userProgress.wordsLearned + 1,
          },
        })),
      updateAccuracy: (correct, total) =>
        set((state) => ({
          userProgress: {
            ...state.userProgress,
            accuracy: Math.round((correct / total) * 100),
          },
        })),
      incrementStreak: () =>
        set((state) => ({
          userProgress: {
            ...state.userProgress,
            streak: state.userProgress.streak + 1,
          },
        })),
      resetStreak: () =>
        set((state) => ({
          userProgress: {
            ...state.userProgress,
            streak: 0,
          },
        })),
      toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
      setLanguage: (lang) => set({ language: lang }),
      setDifficulty: (diff) => set({ difficulty: diff }),
      unlockBadge: (badgeId) =>
        set((state) => ({
          userProgress: {
            ...state.userProgress,
            badges: state.userProgress.badges.map((badge) =>
              badge.id === badgeId ? { ...badge, unlocked: true } : badge
            ),
          },
        })),
    }),
    {
      name: 'wordquest-storage',
    }
  )
);
