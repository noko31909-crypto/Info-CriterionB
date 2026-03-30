export interface Word {
  id: string;
  word: string;
  category: string;
  emoji: string;
}

export interface GameData {
  animals: Word[];
  food: Word[];
  objects: Word[];
  nature: Word[];
}

export const gameData: GameData = {
  animals: [
    { id: '1', word: 'Lion', category: 'animals', emoji: '🦁' },
    { id: '2', word: 'Elephant', category: 'animals', emoji: '🐘' },
    { id: '3', word: 'Dog', category: 'animals', emoji: '🐶' },
    { id: '4', word: 'Cat', category: 'animals', emoji: '🐱' },
    { id: '5', word: 'Rabbit', category: 'animals', emoji: '🐰' },
    { id: '6', word: 'Tiger', category: 'animals', emoji: '🐯' },
    { id: '7', word: 'Bear', category: 'animals', emoji: '🐻' },
    { id: '8', word: 'Panda', category: 'animals', emoji: '🐼' },
    { id: '9', word: 'Monkey', category: 'animals', emoji: '🐵' },
    { id: '10', word: 'Zebra', category: 'animals', emoji: '🦓' },
  ],
  food: [
    { id: '11', word: 'Pizza', category: 'food', emoji: '🍕' },
    { id: '12', word: 'Apple', category: 'food', emoji: '🍎' },
    { id: '13', word: 'Banana', category: 'food', emoji: '🍌' },
    { id: '14', word: 'Burger', category: 'food', emoji: '🍔' },
    { id: '15', word: 'Ice Cream', category: 'food', emoji: '🍦' },
    { id: '16', word: 'Cake', category: 'food', emoji: '🍰' },
    { id: '17', word: 'Cookie', category: 'food', emoji: '🍪' },
    { id: '18', word: 'Watermelon', category: 'food', emoji: '🍉' },
    { id: '19', word: 'Strawberry', category: 'food', emoji: '🍓' },
    { id: '20', word: 'Donut', category: 'food', emoji: '🍩' },
  ],
  objects: [
    { id: '21', word: 'Ball', category: 'objects', emoji: '⚽' },
    { id: '22', word: 'Book', category: 'objects', emoji: '📚' },
    { id: '23', word: 'Pencil', category: 'objects', emoji: '✏️' },
    { id: '24', word: 'Chair', category: 'objects', emoji: '🪑' },
    { id: '25', word: 'Clock', category: 'objects', emoji: '⏰' },
    { id: '26', word: 'Phone', category: 'objects', emoji: '📱' },
    { id: '27', word: 'Camera', category: 'objects', emoji: '📷' },
    { id: '28', word: 'Backpack', category: 'objects', emoji: '🎒' },
    { id: '29', word: 'Key', category: 'objects', emoji: '🔑' },
    { id: '30', word: 'Gift', category: 'objects', emoji: '🎁' },
  ],
  nature: [
    { id: '31', word: 'Tree', category: 'nature', emoji: '🌳' },
    { id: '32', word: 'Flower', category: 'nature', emoji: '🌸' },
    { id: '33', word: 'Sun', category: 'nature', emoji: '☀️' },
    { id: '34', word: 'Moon', category: 'nature', emoji: '🌙' },
    { id: '35', word: 'Star', category: 'nature', emoji: '⭐' },
    { id: '36', word: 'Cloud', category: 'nature', emoji: '☁️' },
    { id: '37', word: 'Rainbow', category: 'nature', emoji: '🌈' },
    { id: '38', word: 'Mountain', category: 'nature', emoji: '⛰️' },
    { id: '39', word: 'Ocean', category: 'nature', emoji: '🌊' },
    { id: '40', word: 'Leaf', category: 'nature', emoji: '🍃' },
  ],
};

export interface CategoryInfo {
  id: string;
  name: string;
  emoji: string;
  color: string;
  progress: number;
}

export const categories: CategoryInfo[] = [
  { id: 'animals', name: 'Animals', emoji: '🐶', color: 'from-blue-500 to-purple-500', progress: 70 },
  { id: 'food', name: 'Food', emoji: '🍎', color: 'from-orange-500 to-red-500', progress: 45 },
  { id: 'objects', name: 'Objects', emoji: '📦', color: 'from-green-500 to-teal-500', progress: 30 },
  { id: 'nature', name: 'Nature', emoji: '🌳', color: 'from-emerald-500 to-lime-500', progress: 60 },
];

export interface UserProgress {
  level: number;
  xp: number;
  xpToNextLevel: number;
  wordsLearned: number;
  accuracy: number;
  timePlayed: number;
  streak: number;
  coins: number;
  badges: Badge[];
}

export interface Badge {
  id: string;
  name: string;
  emoji: string;
  unlocked: boolean;
}

export const badges: Badge[] = [
  { id: 'animal_master', name: 'Animal Master', emoji: '🐯', unlocked: true },
  { id: 'food_expert', name: 'Food Expert', emoji: '🍕', unlocked: false },
  { id: 'speed_demon', name: 'Speed Demon', emoji: '⚡', unlocked: true },
  { id: 'perfect_score', name: 'Perfect Score', emoji: '💯', unlocked: false },
  { id: 'streak_warrior', name: 'Streak Warrior', emoji: '🔥', unlocked: true },
  { id: 'nature_lover', name: 'Nature Lover', emoji: '🌿', unlocked: false },
];

export interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
  level: number;
  avatar: string;
}

export const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, name: 'WordMaster', score: 15420, level: 28, avatar: '🏆' },
  { rank: 2, name: 'SpeedLearner', score: 14850, level: 26, avatar: '⚡' },
  { rank: 3, name: 'BrainPower', score: 13990, level: 25, avatar: '🧠' },
  { rank: 4, name: 'You', score: 12340, level: 22, avatar: '👤' },
  { rank: 5, name: 'QuickThinker', score: 11200, level: 20, avatar: '💡' },
  { rank: 6, name: 'StudyBuddy', score: 10500, level: 19, avatar: '📚' },
  { rank: 7, name: 'SmartKid', score: 9800, level: 18, avatar: '🎓' },
  { rank: 8, name: 'LangLover', score: 9200, level: 17, avatar: '💬' },
];
