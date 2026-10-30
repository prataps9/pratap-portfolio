export const profile = {
  name: 'Pratap Singh Sisodiya',
  title: 'Full Stack & Generative AI Engineer',
  location: 'Rajasthan, India',
  email: '',
  phone: '+91-9256569039',
  website: 'https://pratapsisodiya.in',
  github: 'https://github.com/prataps9',
}

export const links = [
  { label: 'LinkedIn', url: '' },
  { label: 'LeetCode', url: '' },
  { label: 'InvozenBilling', url: '' },
  { label: 'MeteorBot', url: '' },
  { label: 'My Timeline', url: '' },
]

export const education = [
  {
    school: 'Indian Institute of Technology, Patna',
    degree: 'Master of Computer Applications (MCA)',
    period: '2026 – 2028 (Expected)',
  },
]

export const experience = [
  {
    company: 'Freelance / Independent',
    role: 'Full Stack & AI Engineer',
    period: 'Jun 2026 – Present',
    place: 'Remote',
    points: [
      'Designed and launched three production SaaS products – InvozenBilling, MeteorBot, and My Timeline – serving real users and iterating based on feedback.',
      'Managed end-to-end delivery: product design, full-stack development, cloud infrastructure, and growth, while pursuing MCA at IIT Patna.',
    ],
  },
  {
    company: 'Krunk AI',
    role: 'Full Stack Engineer Intern',
    period: 'Feb 2026 – May 2026',
    place: 'Remote, Part-time',
    points: [
      'Enhanced the Engineered Leads Dashboard UX, built a PWA, and automated deployments with CI/CD, reducing manual steps by 60%.',
      'Architected production-ready AI agent conversation systems using LangChain, LangGraph, FastAPI, and RAG-style vector search over lead data.',
    ],
  },
  {
    company: 'Axuore Tech',
    role: 'Software Engineer Intern (Full Stack and Gen AI)',
    period: 'Nov 2025 – Feb 2026',
    place: 'Remote',
    points: [
      'Led front-end development of Fixora’s web and mobile UI, ensuring scalable architecture and coordinating a team of 4 interns.',
      'Integrated AI-driven features using LangChain and Azure OpenAI, improving response accuracy and reducing latency.',
    ],
  },
  {
    company: 'Yardstick',
    role: 'Full Stack Engineer Intern',
    period: 'Jun 2025 – Aug 2025',
    place: 'Remote, Part-time',
    points: [
      'Developed and deployed a full-stack Educational AI web application on AWS ECS, serving real users across web and mobile (PWA).',
      'Automated CI/CD with GitHub Actions and AWS ECS, cutting release cycles by 40%.',
    ],
  },
]

export const projects = [
  {
    name: 'InvozenBilling',
    subtitle: 'Invoicing SaaS',
    year: '2026',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'WhatsApp API'],
    points: [
      'GSTN-compliant invoicing platform for Indian SMBs with auto CGST/SGST/IGST tax calculation, GSTR-1/3B report exports, and WhatsApp-based payment reminders – serving 10,000+ businesses.',
      'Integrated Razorpay UPI payment links with webhook-driven invoice status updates, reducing payment follow-up time by 60%.',
      'Multi-tenant accountant collaboration portal with role-based access control (RBAC) and a mobile-first, offline-capable PWA UI using service workers.',
    ],
  },
  {
    name: 'MeteorBot',
    subtitle: 'AI Meeting Assistant',
    year: '2026',
    stack: ['Next.js', 'LangChain', 'RAG', 'Whisper', 'Google Calendar API'],
    points: [
      'Real-time audio transcription via OpenAI Whisper, automated structured summaries, and action-item extraction – reducing post-meeting overhead by 70%.',
      'RAG pipeline with vector embeddings for natural language querying over historical meeting transcripts, supporting semantic search across 100+ hours of content.',
      'Google Calendar API integration for automated scheduling, reminders, and one-click transcript attachment to events.',
    ],
  },
  {
    name: 'My Timeline',
    subtitle: 'Smart Project Management Platform',
    year: '2026',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebSockets', 'Redis'],
    points: [
      'Project management SaaS with Kanban boards, Gantt-style timeline views, and calendar mode – real-time multi-user collaboration via WebSockets with sub-100ms latency.',
      'Workspace and team management with JWT-based auth, granular role permissions, and email-based team invitations.',
      'Interactive analytics dashboards with task velocity charts, burndown graphs, and deadline heatmaps.',
    ],
  },
]

export const skills = {
  'Languages': ['TypeScript', 'JavaScript (ES6+)', 'Python', 'SQL', 'Bash'],
  'Frontend & Mobile': ['React', 'Next.js', 'React Native', 'Expo', 'Flutter', 'Tailwind CSS'],
  'Backend': ['Node.js', 'Express.js', 'FastAPI', 'Django', 'Django REST Framework', 'Prisma', 'Drizzle ORM'],
  'Generative AI': ['LangChain', 'LangGraph', 'CrewAI', 'Azure OpenAI', 'FAISS', 'RAG', 'Prompt Engineering'],
  'Cloud & DevOps': ['AWS (EC2, ECS, S3)', 'Microsoft Azure', 'Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'Linux'],
  'Databases': ['PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'ChromaDB'],
  'Tools': ['Git', 'Postman', 'Jest', 'Selenium'],
}

export const certifications = [
  { name: 'Azure Administrator Associate (AZ-104)', date: 'Nov 2025' },
  { name: 'Azure Fundamentals (AZ-900)', date: 'Jun 2025' },
  { name: 'AWS Solutions Architect – Associate (SAA-C03)', date: 'Jul 2024' },
  { name: 'GitHub Foundations', date: 'Apr 2025' },
]
