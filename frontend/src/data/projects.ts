import type { Project } from '../types'

export const PROJECTS: Project[] = [
  // ── Featured ─────────────────────────────────────────────────────────────
  {
    id: 'ai-learning-ledger',
    title: 'AI Learning Ledger',
    description: 'Multi-agent AI platform that turns any learning goal into structured tasks and interactive coding exercises.',
    longDescription:
      'Built with Claude-powered LangGraph agents (Researcher → Exercise Generator → Validator), this platform decomposes a single learning goal into bite-sized tasks and runnable exercises. Features real-time WebSocket progress updates, a Monaco code editor with AI feedback, SQLite persistence, and a full Docker + Kubernetes deployment setup.',
    tech: ['Python', 'FastAPI', 'LangGraph', 'React', 'TypeScript', 'SQLite', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com/sayalik277/AI_Learning_Ledger',
    featured: true,
    status: 'live',
    year: '2025',
  },
  {
    id: 'mini-social',
    title: 'Mini Social Media App',
    description: 'Full-stack social media platform with a React frontend and Python REST backend — containerised with Docker.',
    longDescription:
      'A full-stack social network built from scratch. The React frontend handles feeds, profiles, and interactions. The Python backend (MVC architecture with Controllers, Services, and Models) exposes a REST API. Both services are Dockerised for consistent local and cloud deployment. A hands-on project that cemented my understanding of full-stack architecture and container workflows.',
    tech: ['React', 'JavaScript', 'Python', 'Flask', 'Docker', 'REST API', 'CSS'],
    githubUrl: 'https://github.com/sayalik277/Mini_Social_FrontEnd',
    featured: true,
    status: 'live',
    year: '2025',
  },
  // ── Other ─────────────────────────────────────────────────────────────────
  {
    id: 'portfolio',
    title: 'Dev Portfolio (this site)',
    description: 'Seasonal-themed interactive portfolio with visitor tracking, live scrum board, and admin panel.',
    longDescription:
      'The site you are on right now. React + TypeScript (Vite) frontend, Python FastAPI backend, SQLite for persistence. The colour palette shifts automatically with the season (spring / summer / fall / winter). Visitors can sign a guestbook; the portfolio owner sees all visits and manages the Kanban board via a token-protected admin panel.',
    tech: ['React', 'TypeScript', 'Vite', 'Python', 'FastAPI', 'Tailwind CSS', 'SQLite'],
    githubUrl: 'https://github.com/sayalik277/portfolio',
    featured: false,
    status: 'live',
    year: '2026',
  },
  {
    id: 'aws-hands-on',
    title: 'AWS CDK Hands-On',
    description: 'Infrastructure-as-code experiments with AWS CDK v2 and TypeScript — provisioning real AWS resources.',
    longDescription:
      'Hands-on exploration of AWS Cloud Development Kit (CDK) v2 using TypeScript. Covers CDK stack design, CloudFormation synthesis, CodeBuild pipeline integration (buildspec.yml), and Jest-based infrastructure testing. A practical starting point for type-safe cloud infra automation — the foundation for future production IaC work.',
    tech: ['AWS CDK', 'TypeScript', 'AWS', 'CloudFormation', 'CodeBuild', 'Jest'],
    githubUrl: 'https://github.com/sayalik277/AWS-Hands-on',
    featured: false,
    status: 'live',
    year: '2023',
  },
  {
    id: 'mini-social-backend',
    title: 'Mini Social — Backend',
    description: 'Python REST API powering the Mini Social app: MVC structure, business-logic services, and Docker support.',
    longDescription:
      'The server-side counterpart to Mini Social FrontEnd. Written in Python with an MVC pattern — Controllers handle routing, Services contain business logic, Models define data structures. Includes a Dockerfile for containerised deployment and a requirements.txt for reproducible installs.',
    tech: ['Python', 'Flask', 'REST API', 'Docker', 'MVC'],
    githubUrl: 'https://github.com/sayalik277/Mini_Social_BackEnd',
    featured: false,
    status: 'live',
    year: '2025',
  },
  {
    id: 'js-beginner',
    title: 'JavaScript Fundamentals',
    description: 'Hands-on exercises covering core JavaScript concepts — DOM, events, functions, and basic HTML/CSS.',
    longDescription:
      'A collection of beginner JavaScript exercises that formed the foundation of my frontend journey. Covers DOM manipulation, event listeners, functions, loops, and basic HTML/CSS layouts. A record of where it all started.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/sayalik277/JavaScript-Beginner-Level',
    featured: false,
    status: 'archived',
    year: '2022',
  },
]
