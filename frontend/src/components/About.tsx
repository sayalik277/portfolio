import type { SeasonTheme } from '../types'

const BOOKS = [
  { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', emoji: '🧠' },
  { title: 'The Psychology of Money', author: 'Morgan Housel', emoji: '💰' },
  { title: 'Atomic Habits', author: 'James Clear', emoji: '⚡' },
  { title: 'Clean Code', author: 'Robert C. Martin', emoji: '🛠' },
  { title: 'The Phoenix Project', author: 'Kim, Behr & Spafford', emoji: '🔥' },
  { title: 'Deep Work', author: 'Cal Newport', emoji: '🎯' },
]

const TRAITS = [
  { label: 'Ambivert', desc: 'Energised by deep 1:1 conversations; recharges with a good book.', emoji: '🌗' },
  { label: 'Psych Reader', desc: 'Studies cognitive biases to write better code and work better with teams.', emoji: '🧩' },
  { label: 'Cloud Thinker', desc: 'Designs systems with resilience first — infra is just code.', emoji: '☁️' },
  { label: 'Lifelong Learner', desc: 'Currently mastering React patterns & TypeScript-first backends.', emoji: '📚' },
]

interface Props { theme: SeasonTheme }

export default function About({ theme }: Props) {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader theme={theme} tag="// about_me" title="A bit about who I am" />

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Left — bio */}
          <div>
            <p className="text-lg leading-relaxed mb-6" style={{ color: theme.textSecondary }}>
              I'm a{' '}
              <Highlight theme={theme}>Full-Stack Developer</Highlight> with 2 years of experience,
              learning React and TypeScript while building real things. I find equal satisfaction in
              understanding code architecture and human psychology — the two aren't that different.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: theme.textSecondary }}>
              My superpower is{' '}
              <Highlight theme={theme}>reading people as well as documentation</Highlight>. Growing
              up as an ambivert taught me when to listen, when to speak, and when to just ship it.
            </p>
            <p className="text-base leading-relaxed" style={{ color: theme.textSecondary }}>
              Off-screen: I have a reading habit that borders on obsessive, an unhealthy relationship
              with terminal themes, and a deep love for a perfectly brewed cup of coffee ☕.
            </p>

            {/* Trait cards */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {TRAITS.map(t => (
                <div
                  key={t.label}
                  className="p-4 rounded-xl border transition-all hover:scale-105"
                  style={{
                    background: theme.bgCard,
                    borderColor: theme.border,
                  }}
                >
                  <div className="text-xl mb-1">{t.emoji}</div>
                  <div className="text-sm font-semibold mb-1" style={{ color: theme.primary }}>
                    {t.label}
                  </div>
                  <div className="text-xs leading-snug" style={{ color: theme.textMuted }}>
                    {t.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — bookshelf */}
          <div>
            <h3
              className="font-serif text-xl font-bold mb-6 flex items-center gap-2"
              style={{ color: theme.textPrimary }}
            >
              <span>📖</span> Currently on my shelf
            </h3>
            <div className="flex flex-col gap-3">
              {BOOKS.map((book, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl border transition-all hover:translate-x-1"
                  style={{
                    background: theme.bgCard,
                    borderColor: theme.border,
                    borderLeft: `3px solid ${theme.primary}`,
                  }}
                >
                  <span className="text-2xl">{book.emoji}</span>
                  <div>
                    <div className="text-sm font-medium" style={{ color: theme.textPrimary }}>
                      {book.title}
                    </div>
                    <div className="text-xs opacity-60" style={{ color: theme.textMuted }}>
                      {book.author}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Highlight({ theme, children }: { theme: SeasonTheme; children: React.ReactNode }) {
  return (
    <span
      className="font-semibold"
      style={{ color: theme.primary }}
    >
      {children}
    </span>
  )
}

export function SectionHeader({
  theme,
  tag,
  title,
}: {
  theme: SeasonTheme
  tag: string
  title: string
}) {
  return (
    <div>
      <span className="font-mono text-sm" style={{ color: theme.primary }}>
        {tag}
      </span>
      <h2
        className="font-serif text-3xl md:text-4xl font-bold mt-1"
        style={{ color: theme.textPrimary }}
      >
        {title}
      </h2>
      <div
        className="mt-3 h-0.5 w-16 rounded-full"
        style={{ background: `linear-gradient(90deg, ${theme.gradientFrom}, ${theme.gradientTo})` }}
      />
    </div>
  )
}
