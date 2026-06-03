import { SectionHeader } from './About'
import type { SeasonTheme } from '../types'

const SKILL_GROUPS = [
  {
    title: 'Frontend',
    icon: '🖥',
    skills: [
      { name: 'React', level: 65, note: 'actively learning' },
      { name: 'TypeScript', level: 70, note: 'growing daily' },
      { name: 'JavaScript', level: 82, note: '' },
      { name: 'Tailwind CSS', level: 80, note: '' },
      { name: 'HTML / CSS', level: 88, note: '' },
      { name: 'Vite', level: 72, note: '' },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Python', level: 88, note: '' },
      { name: 'FastAPI', level: 85, note: '' },
      { name: 'REST APIs', level: 85, note: '' },
      { name: 'SQLAlchemy', level: 78, note: '' },
      { name: 'TypeScript (BE)', level: 45, note: 'on the roadmap' },
      { name: 'LangGraph / AI Agents', level: 70, note: '' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      { name: 'Docker', level: 80, note: '' },
      { name: 'Kubernetes', level: 68, note: '' },
      { name: 'AWS (EC2, S3, RDS)', level: 65, note: '' },
      { name: 'CI/CD Pipelines', level: 60, note: '' },
      { name: 'AWS CDK', level: 40, note: 'learning' },
    ],
  },
  {
    title: 'Tools & Practices',
    icon: '🛠',
    skills: [
      { name: 'Git / GitHub', level: 88, note: '' },
      { name: 'Agile / Scrum', level: 82, note: '' },
      { name: 'PostgreSQL / SQLite', level: 78, note: '' },
      { name: 'WebSockets', level: 72, note: '' },
      { name: 'VS Code', level: 90, note: 'with 50+ extensions' },
    ],
  },
]

interface Props { theme: SeasonTheme }

export default function Skills({ theme }: Props) {
  return (
    <section
      id="skills"
      className="py-24 px-6"
      style={{ background: theme.bgSecondary }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader theme={theme} tag="// skills" title="What I work with" />

        <div className="grid sm:grid-cols-2 gap-8 mt-16">
          {SKILL_GROUPS.map(group => (
            <div
              key={group.title}
              className="p-6 rounded-2xl border transition-all hover:shadow-lg"
              style={{
                background: theme.bgCard,
                borderColor: theme.border,
              }}
            >
              <h3
                className="font-serif text-lg font-bold mb-5 flex items-center gap-2"
                style={{ color: theme.textPrimary }}
              >
                <span>{group.icon}</span> {group.title}
              </h3>
              <div className="flex flex-col gap-3">
                {group.skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium" style={{ color: theme.textPrimary }}>
                        {skill.name}
                        {skill.note && (
                          <span className="ml-2 text-xs opacity-50" style={{ color: theme.textMuted }}>
                            {skill.note}
                          </span>
                        )}
                      </span>
                      <span className="text-xs font-mono" style={{ color: theme.primary }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ background: theme.bgSecondary }}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${theme.gradientFrom}, ${theme.gradientTo})`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
