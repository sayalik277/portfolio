import type { SeasonTheme } from '../types'
import { SectionHeader } from './About'
import {
  GOALS, GOALS_YEAR, CUISINES, YOGA_JOURNEY, YOGA_POSES,
} from '../data/goals'
import type { Goal, GoalStatus, CookLevel } from '../data/goals'

interface Props { theme: SeasonTheme }

const STATUS_LABEL: Record<GoalStatus, string> = {
  'planned':     '📋 Planned',
  'in-progress': '🔥 In Progress',
  'done':        '✅ Done',
}

const STATUS_COLOR: Record<GoalStatus, string> = {
  'planned':     'border-l-2',
  'in-progress': 'border-l-2',
  'done':        'border-l-2',
}

const COOK_LABEL: Record<CookLevel, string> = {
  'comfortable': '✅ Comfortable',
  'learning':    '📖 Learning',
  'exploring':   '🔍 Exploring',
}

const POSE_LABEL = {
  'comfortable':  '✅ Got it',
  'working-on':   '🔄 Working on',
  'goal':         '🎯 Goal',
}

export default function LifeStack({ theme }: Props) {
  const proGoals  = GOALS.filter(g => g.type === 'professional')
  const persGoals = GOALS.filter(g => g.type === 'personal')

  return (
    <section id="life-stack" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          theme={theme}
          tag="// life_stack"
          title="Life Stack"
        />
        <p className="mt-4 text-base max-w-xl" style={{ color: theme.textMuted }}>
          What I'm building this year — professionally and personally. Code, cuisines, and a yoga mat.
        </p>

        {/* ── 2026 Goals ──────────────────────────────────────────────── */}
        <div className="mt-16">
          <h3 className="font-serif text-xl font-bold mb-8 flex items-center gap-2"
            style={{ color: theme.textPrimary }}>
            <span>🎯</span>
            <span>{GOALS_YEAR} Goals</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Professional */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs px-2 py-1 rounded"
                  style={{ background: `${theme.primary}18`, color: theme.primary }}>
                  💼 Professional
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {proGoals.map((goal) => (
                  <GoalCard key={goal.title} goal={goal} theme={theme} />
                ))}
              </div>
            </div>

            {/* Personal */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs px-2 py-1 rounded"
                  style={{ background: `${theme.secondary}22`, color: theme.secondary }}>
                  🌱 Personal
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {persGoals.map((goal) => (
                  <GoalCard key={goal.title} goal={goal} theme={theme} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── In the Kitchen ──────────────────────────────────────────── */}
        <div className="mt-20">
          <h3 className="font-serif text-xl font-bold mb-2 flex items-center gap-2"
            style={{ color: theme.textPrimary }}>
            <span>🍳</span> In the Kitchen
          </h3>
          <p className="text-sm mb-8" style={{ color: theme.textMuted }}>
            Cooking is my offline debugging — patient, iterative, and deeply satisfying when it works.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CUISINES.map((c) => (
              <div
                key={c.name}
                className="p-5 rounded-2xl border flex flex-col gap-3 transition-all hover:scale-105 hover:-translate-y-0.5"
                style={{ background: theme.bgCard, borderColor: theme.border }}
              >
                <div className="text-3xl">{c.emoji}</div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: theme.textPrimary }}>
                    {c.name}
                  </div>
                  <div className="text-xs mt-0.5 px-1.5 py-0.5 rounded-full inline-block"
                    style={{
                      background: c.level === 'comfortable'
                        ? `${theme.accent}22`
                        : c.level === 'learning'
                        ? `${theme.primary}20`
                        : `${theme.secondary}20`,
                      color: c.level === 'comfortable'
                        ? theme.accent
                        : c.level === 'learning'
                        ? theme.primary
                        : theme.secondary,
                    }}>
                    {COOK_LABEL[c.level]}
                  </div>
                </div>
                <div className="text-xs font-medium" style={{ color: theme.textSecondary }}>
                  ✨ {c.signature}
                </div>
                {c.note && (
                  <div className="text-xs italic leading-relaxed" style={{ color: theme.textMuted }}>
                    "{c.note}"
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── On the Mat ──────────────────────────────────────────────── */}
        <div className="mt-20">
          <h3 className="font-serif text-xl font-bold mb-2 flex items-center gap-2"
            style={{ color: theme.textPrimary }}>
            <span>🧘‍♀️</span> On the Mat
          </h3>
          <p className="text-sm mb-8" style={{ color: theme.textMuted }}>
            A beginner finding stillness, one breath at a time.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Journey stats */}
            <div
              className="p-6 rounded-2xl border"
              style={{ background: theme.bgCard, borderColor: theme.border }}
            >
              <div className="text-4xl mb-4">🌿</div>
              <div className="grid grid-cols-2 gap-4 mb-5">
                {[
                  { label: 'Level',     value: YOGA_JOURNEY.level },
                  { label: 'Since',     value: YOGA_JOURNEY.started },
                  { label: 'Practice',  value: YOGA_JOURNEY.practice },
                  { label: 'Style',     value: YOGA_JOURNEY.style },
                ].map(item => (
                  <div key={item.label}>
                    <div className="text-xs uppercase tracking-widest mb-0.5"
                      style={{ color: theme.textMuted }}>
                      {item.label}
                    </div>
                    <div className="text-sm font-semibold" style={{ color: theme.primary }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed italic"
                style={{ color: theme.textSecondary }}>
                "{YOGA_JOURNEY.intention}"
              </p>
            </div>

            {/* Poses grid */}
            <div>
              <div className="text-xs font-mono mb-4" style={{ color: theme.textMuted }}>
                poses tracker
              </div>
              <div className="grid grid-cols-2 gap-2">
                {YOGA_POSES.map((pose) => (
                  <div
                    key={pose.name}
                    className="flex items-start gap-2.5 p-3 rounded-xl border transition-all hover:translate-x-0.5"
                    style={{
                      background: theme.bgCard,
                      borderColor: theme.border,
                      borderLeft: `3px solid ${
                        pose.status === 'comfortable' ? theme.accent :
                        pose.status === 'working-on'  ? theme.primary :
                        theme.secondary
                      }`,
                    }}
                  >
                    <span className="text-lg">{pose.emoji}</span>
                    <div>
                      <div className="text-xs font-medium leading-tight"
                        style={{ color: theme.textPrimary }}>
                        {pose.name}
                      </div>
                      <div className="text-xs mt-0.5" style={{ color: theme.textMuted }}>
                        {POSE_LABEL[pose.status]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function GoalCard({ goal, theme }: { goal: Goal; theme: SeasonTheme }) {
  return (
    <div
      className={`p-4 rounded-xl border transition-all hover:translate-x-1 ${STATUS_COLOR[goal.status]}`}
      style={{
        background: theme.bgCard,
        borderColor: theme.border,
        borderLeftColor:
          goal.status === 'done'        ? theme.accent :
          goal.status === 'in-progress' ? theme.primary :
          theme.border,
      }}
    >
      <div className="flex items-start gap-3">
        <span className="text-xl mt-0.5">{goal.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="text-sm font-semibold" style={{ color: theme.textPrimary }}>
              {goal.title}
            </span>
            <span
              className="text-xs px-1.5 py-0.5 rounded-full whitespace-nowrap"
              style={{
                background:
                  goal.status === 'done'        ? `${theme.accent}22` :
                  goal.status === 'in-progress' ? `${theme.primary}20` :
                  `${theme.border}60`,
                color:
                  goal.status === 'done'        ? theme.accent :
                  goal.status === 'in-progress' ? theme.primary :
                  theme.textMuted,
              }}
            >
              {STATUS_LABEL[goal.status]}
            </span>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: theme.textMuted }}>
            {goal.description}
          </p>
        </div>
      </div>
    </div>
  )
}
