import type { ExperienceItem } from '../types'

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Your Company Name',
    role: 'Full-Stack Developer',
    period: '2024 – Present',
    current: true,
    description: [
      'Designing and shipping full-stack features across React frontends and Python/FastAPI backends.',
      'Containerising services with Docker, managing deployments on Kubernetes.',
      'Collaborating with product and design using agile/scrum methodology.',
      'Introducing TypeScript gradually into the frontend codebase to improve type safety.',
    ],
    tech: ['React', 'Python', 'FastAPI', 'Docker', 'Kubernetes', 'TypeScript', 'PostgreSQL'],
  },
  {
    company: 'Previous Company / Internship',
    role: 'Junior Developer',
    period: '2023 – 2024',
    current: false,
    description: [
      'Built RESTful APIs with Python and Flask; maintained legacy JavaScript frontends.',
      'Wrote unit and integration tests, improved coverage from ~40 % to 80 %.',
      'Assisted in migrating on-premise services to AWS (EC2, S3, RDS).',
    ],
    tech: ['Python', 'Flask', 'JavaScript', 'AWS', 'MySQL', 'Git'],
  },
]
