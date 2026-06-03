// ─────────────────────────────────────────────────────────────────────────────
// Edit freely — add goals, update status, or bump the year.
// status: 'planned' | 'in-progress' | 'done'
// type:   'professional' | 'personal'
// ─────────────────────────────────────────────────────────────────────────────

export type GoalStatus = 'planned' | 'in-progress' | 'done'
export type GoalType = 'professional' | 'personal'

export interface Goal {
  title: string
  description: string
  emoji: string
  status: GoalStatus
  type: GoalType
}

export const GOALS_YEAR = '2026'

export const GOALS: Goal[] = [
  // ── Professional ──────────────────────────────────────────────────────────
  {
    title: 'Kubernetes & CKA Cert',
    description: 'Deep-dive into K8s internals, cluster ops, and earn the Certified Kubernetes Administrator badge.',
    emoji: '⎈',
    status: 'in-progress',
    type: 'professional',
  },
  {
    title: 'AWS Solutions Architect – Professional',
    description: 'Upgrade from Foundations to the SAP-C02 level. Focus on multi-account, HA, and cost-optimised architectures.',
    emoji: '☁️',
    status: 'planned',
    type: 'professional',
  },
  {
    title: 'System Design Mastery',
    description: 'Work through large-scale distributed systems design — consistent hashing, CRDT, leader election, and beyond.',
    emoji: '🏗️',
    status: 'in-progress',
    type: 'professional',
  },
  {
    title: 'ML / AI Engineering Foundations',
    description: 'Move from "using LLM APIs" to understanding fine-tuning, embeddings, RAG pipelines, and eval frameworks.',
    emoji: '🤖',
    status: 'in-progress',
    type: 'professional',
  },
  {
    title: 'Go Programming Language',
    description: 'Learn Go well enough to write production-quality microservices and CLI tools.',
    emoji: '🐹',
    status: 'planned',
    type: 'professional',
  },
  {
    title: 'Open Source Contribution',
    description: 'Land at least one meaningful PR in a project I use daily — LangChain, FastAPI, or similar.',
    emoji: '🌐',
    status: 'planned',
    type: 'professional',
  },
  // ── Personal ──────────────────────────────────────────────────────────────
  {
    title: 'Daily Yoga Habit',
    description: 'Build a consistent 15-minute morning yoga practice. Target: 90-day streak before year end.',
    emoji: '🧘‍♀️',
    status: 'in-progress',
    type: 'personal',
  },
  {
    title: 'Cook a New Cuisine Monthly',
    description: 'One new cuisine or technique every month — broaden the kitchen repertoire beyond the comfort zone.',
    emoji: '🍳',
    status: 'in-progress',
    type: 'personal',
  },
  {
    title: 'Read 12 Books This Year',
    description: 'One book a month — mix of psychology, tech, and fiction. Track progress in the bookshelf.',
    emoji: '📚',
    status: 'in-progress',
    type: 'personal',
  },
  {
    title: 'Consistent Morning Routine',
    description: 'Lock in a 6 AM wake-up, yoga, journalling, and no phone for the first 30 minutes.',
    emoji: '🌅',
    status: 'in-progress',
    type: 'personal',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Cooking interests — edit cuisine/level/dishes freely
// level: 'comfortable' | 'learning' | 'exploring'
// ─────────────────────────────────────────────────────────────────────────────
export type CookLevel = 'comfortable' | 'learning' | 'exploring'

export interface Cuisine {
  name: string
  emoji: string
  level: CookLevel
  signature: string    // a dish you make well (or are working on)
  note?: string
}

export const CUISINES: Cuisine[] = [
  {
    name: 'Indian',
    emoji: '🫕',
    level: 'comfortable',
    signature: 'Dal Makhani & Biryani',
    note: 'Home base — could cook it with my eyes closed.',
  },
  {
    name: 'Italian',
    emoji: '🍝',
    level: 'learning',
    signature: 'Pasta Aglio e Olio',
    note: 'Working on making pasta from scratch.',
  },
  {
    name: 'Japanese',
    emoji: '🍜',
    level: 'exploring',
    signature: 'Homemade Miso Ramen',
    note: 'The broth is a 6-hour project. Worth it.',
  },
  {
    name: 'Mediterranean',
    emoji: '🥙',
    level: 'learning',
    signature: 'Shakshuka & Hummus',
    note: 'Obsessed with the simplicity of good olive oil.',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Yoga journey — update as you progress
// ─────────────────────────────────────────────────────────────────────────────
export interface YogaPose {
  name: string
  emoji: string
  status: 'comfortable' | 'working-on' | 'goal'
}

export const YOGA_JOURNEY = {
  level: 'Beginner' as const,
  started: 'Early 2026',
  practice: '10–15 min daily',
  style: 'Hatha & Yin',
  intention: 'Build flexibility, calm the mind, and start mornings with intention rather than a screen.',
}

export const YOGA_POSES: YogaPose[] = [
  { name: 'Mountain Pose',       emoji: '🏔️', status: 'comfortable' },
  { name: "Child's Pose",        emoji: '🙇‍♀️', status: 'comfortable' },
  { name: 'Cat-Cow',             emoji: '🐈', status: 'comfortable' },
  { name: 'Downward Dog',        emoji: '🐕', status: 'working-on' },
  { name: 'Warrior I & II',      emoji: '⚔️', status: 'working-on' },
  { name: 'Tree Pose',           emoji: '🌳', status: 'working-on' },
  { name: 'Pigeon Pose',         emoji: '🕊️', status: 'goal' },
  { name: 'Headstand',           emoji: '🙃', status: 'goal' },
]
