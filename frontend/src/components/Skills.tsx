import { SectionHeader } from './About'
import type { SeasonTheme } from '../types'

const SKILL_GROUPS = [
  {
    title: 'Languages & Frontend',
    icon: '🖥',
    skills: [
      { name: 'Python', level: 92, note: '' },
      { name: 'Java', level: 85, note: '' },
      { name: 'TypeScript', level: 82, note: '' },
      { name: 'JavaScript', level: 85, note: '' },
      { name: 'React', level: 80, note: '' },
      { name: 'HTML / CSS', level: 88, note: '' },
    ],
  },
  {
    title: 'Backend & Frameworks',
    icon: '⚙️',
    skills: [
      { name: 'Spring Boot', level: 85, note: '' },
      { name: 'FastAPI / Flask', level: 88, note: '' },
      { name: 'REST APIs', level: 90, note: '' },
      { name: 'LangChain / LangGraph', level: 78, note: '' },
      { name: 'Material UI', level: 80, note: '' },
      { name: 'AWS Lambda + API Gateway', level: 88, note: '' },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: '☁️',
    skills: [
      { name: 'AWS (Lambda, EC2, S3, DynamoDB)', level: 90, note: 'ex-Amazon SDE' },
      { name: 'AWS CDK (TypeScript)', level: 85, note: '' },
      { name: 'CloudFormation / IaC', level: 85, note: '' },
      { name: 'Docker / Docker Compose', level: 88, note: '' },
      { name: 'Amazon ECS / EKS', level: 80, note: '' },
      { name: 'OCI (Oracle Cloud)', level: 75, note: 'certified' },
    ],
  },
  {
    title: 'DevOps, Databases & Testing',
    icon: '🛠',
    skills: [
      { name: 'AWS CodePipeline / CodeBuild', level: 85, note: '' },
      { name: 'Jenkins / GitHub Actions', level: 82, note: '' },
      { name: 'Terraform', level: 72, note: '' },
      { name: 'MySQL / DynamoDB / NoSQL', level: 85, note: '' },
      { name: 'Jest / PyTest', level: 80, note: '' },
      { name: 'Git / GitHub', level: 92, note: '' },
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
