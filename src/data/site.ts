// Everything on the site lives here. The content is drawn from the existing
// portfolio, the SS-Portfolio repository and public/resume.pdf. No metrics or
// links are included unless they exist in one of those sources.

export const site = {
  name: 'Sanidhya Singh',
  firstName: 'Sanidhya',
  lastName: 'Singh',
  initials: 'SS',
  role: 'Full-stack developer and AI product builder',
  location: 'Jabalpur, India',
  timezone: 'Asia/Kolkata',
  email: 'ssanidhya75@gmail.com',
  github: 'https://github.com/sanidhya091',
  linkedin: 'https://www.linkedin.com/in/sanidhya-singh-2aa6b7273/',
  portfolio: 'https://sanidhya-singh.vercel.app/',
  resume: '/resume.pdf',
  resumeFilename: 'Sanidhya_Singh_Resume.pdf',
  educationLine: 'B.Tech CSE · Data Science · 2027',
  headline: 'Building thoughtful software experiences with code, creativity and AI.',
  intro:
    'I build full-stack applications, explore emerging AI technologies and turn ideas into functional digital products.',
  contactNote:
    'I am open to internships, early-career full-stack roles and collaborations on products worth building. Email is the quickest way to reach me.',
  titles: ['Full Stack Developer', 'AI Product Builder', 'Software Developer', 'SaaS Builder'],
  marquee: [
    'React',
    'Next.js',
    'TypeScript',
    'Python',
    'FastAPI',
    'Java',
    'Spring Boot',
    'Supabase',
    'PostgreSQL',
    'Groq API',
    'Clerk',
    'Tailwind CSS',
  ],
}

export const socials = [
  { label: 'GitHub', href: site.github, display: 'github.com/sanidhya091' },
  { label: 'LinkedIn', href: site.linkedin, display: 'in/sanidhya-singh' },
  { label: 'Email', href: `mailto:${site.email}`, display: site.email },
  { label: 'Earlier portfolio', href: site.portfolio, display: 'sanidhya-singh.vercel.app' },
]

export interface Project {
  slug: string
  title: string
  category: string
  year: string
  status: string
  badge?: string
  size: 'large' | 'small'
  summary: string
  cover?: string
  coverAlt?: string
  stack: string[]
  live?: string
  github?: string
  overview: string[]
  features: { title: string; body: string }[]
}

export const projects: Project[] = [
  {
    slug: 'codesense',
    title: 'CodeSense',
    category: 'AI developer tools',
    year: '2025',
    status: 'Deployed',
    size: 'large',
    summary:
      'An AI code review platform that reads a snippet and returns severity-ranked feedback — critical issues, warnings and suggestions — in seconds.',
    cover: '/images/codesense.png',
    coverAlt: 'CodeSense landing page showing a Python snippet and its severity-coloured review',
    stack: ['Next.js 14', 'TypeScript', 'Supabase', 'Clerk v7', 'Groq API', 'LLaMA 3.3 70B'],
    live: 'https://code-sense-rho.vercel.app/',
    github: 'https://github.com/sanidhya091/CodeSense',
    overview: [
      'CodeSense takes a code snippet, sends it through the Groq API on top of LLaMA 3.3 70B, and returns feedback sorted by severity, so the thing most likely to break something is the first thing you read.',
      'It is built as a complete product rather than a demo: Clerk handles authentication, review history persists in Supabase behind row-level security, and the editor detects the language before the review prompt is built. The result is a loop you can stay in — paste, review, fix, review again.',
    ],
    features: [
      {
        title: 'Severity, not noise',
        body: 'Feedback is split into critical, warning and suggestion, with colour coding that makes the priority obvious at a glance.',
      },
      {
        title: 'Automatic language detection',
        body: 'The editor works out what it is looking at before a single token is sent for review, so the prompt is grounded in the right syntax.',
      },
      {
        title: 'Review history',
        body: 'Every review is stored in Supabase (Postgres) against the signed-in user, with row-level security doing the access control.',
      },
      {
        title: 'Auth that gets out of the way',
        body: 'Clerk v7 sessions mean the product works from the first visit without a hand-rolled login flow.',
      },
    ],
  },
  {
    slug: 'anveshak',
    title: 'Anveshak',
    category: 'Space data · Visualisation',
    year: '2025',
    status: 'Hackathon build',
    badge: 'NASA Space Apps Challenge 2025',
    size: 'small',
    summary:
      'A map-first way to explore NASA planetary imagery, with AI similarity search across multiple datasets.',
    stack: ['Python', 'FastAPI', 'FAISS', 'timm', 'Svelte', 'Leaflet.js', 'NASA Trek APIs'],
    github: 'https://github.com/sanidhya091/nasa-space-apps-anveshak',
    overview: [
      'Built for NASA Space Apps Challenge 2025, Anveshak is a map-first interface for planetary data: choose a dataset, explore the surface, and look for features that resemble the one you are already looking at.',
      'The backend is FastAPI, with a custom pipeline into the NASA Trek APIs. Similarity search runs on FAISS and feature extraction on timm, while the frontend is Svelte and Leaflet.js so panning the map feels like panning a map, not scrubbing a chart.',
    ],
    features: [
      {
        title: 'Interactive NASA imagery',
        body: 'A map-based explorer for browsing planetary surface imagery instead of scrolling through raw files.',
      },
      {
        title: 'Multiple datasets',
        body: 'The platform works across several planetary datasets, each with its own imagery and metadata.',
      },
      {
        title: 'Similarity search',
        body: 'FAISS indexes extracted features so a region can be compared against the rest of a dataset.',
      },
      {
        title: 'Feature extraction',
        body: 'timm handles the vision model work that turns imagery into something searchable.',
      },
    ],
  },
  {
    slug: 'invoiceai',
    title: 'InvoiceAI',
    category: 'AI · SaaS',
    year: '2025',
    status: 'Deployed',
    size: 'small',
    summary:
      'Invoice management with AI-written line items, one-click PDF export and real authentication.',
    cover: '/images/invoiceai.png',
    coverAlt: 'InvoiceAI dashboard showing revenue, sent invoices and a recent invoice table',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Clerk v7', 'Groq API', 'Tailwind CSS'],
    live: 'https://ai-invoice-hazel.vercel.app/',
    github: 'https://github.com/sanidhya091/AI-Invoice',
    overview: [
      'InvoiceAI is an invoice manager for the part of invoicing nobody enjoys: writing the line items. It covers the full lifecycle — create, edit, export — and uses the Groq API to draft item descriptions that read like a person wrote them.',
      'Authentication runs through Clerk v7, data lives in PostgreSQL, and invoices export to PDF for the half of the process that still happens outside a browser.',
    ],
    features: [
      {
        title: 'Invoice CRUD',
        body: 'Create, edit and delete invoices with a dashboard that keeps the current state of the business visible.',
      },
      {
        title: 'AI item descriptions',
        body: 'Describe the work in a few words and let the Groq API turn it into a line item worth sending.',
      },
      {
        title: 'PDF export',
        body: 'Invoices leave the app as a document that can be emailed to a client without reformatting.',
      },
      {
        title: 'Accounts and access',
        body: 'Clerk v7 handles sign-in so invoices stay attached to the right person.',
      },
    ],
  },
  {
    slug: 'lost-and-found',
    title: 'Lost & Found Portal',
    category: 'Full stack · Campus',
    year: '2024',
    status: 'Deployed',
    size: 'large',
    summary:
      'A campus portal for reporting and searching lost items, with authentication and listing management.',
    cover: '/images/lostandfound.png',
    coverAlt: 'Lost and Found Portal landing page with search, community and quick tips sections',
    stack: ['Java', 'Servlets', 'JDBC', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    live: 'https://found-it-finder.vercel.app/',
    github: 'https://github.com/sanidhya091/lost-and-found-portal-new',
    overview: [
      'A campus portal for the small, annoying problem of losing things: report what went missing, search what other people have found, and keep every listing in one place instead of in group chats.',
      'Built on Java Servlets and JDBC over MySQL, it was one of my first end-to-end applications and the project that taught me how much of a product lives outside the happy path — sessions, form validation, and an admin side for keeping listings honest.',
    ],
    features: [
      {
        title: 'Report an item',
        body: 'A structured form for lost and found listings, so details stay searchable instead of scattered.',
      },
      {
        title: 'Search listings',
        body: 'Look through reported items by the details that actually help identify them.',
      },
      {
        title: 'Authentication',
        body: 'Session-based accounts keep listings tied to the person who reported them.',
      },
      {
        title: 'Item management',
        body: 'Owners can update or remove a listing once something has been returned.',
      },
    ],
  },
]

export const bySlug = (slug: string) => projects.find((project) => project.slug === slug)

export interface BuildingProject {
  name: string
  tagline: string
  status: string
  category: string
  description: string
  features: string[]
  stack: string[]
  visual: 'queue' | 'oddly'
}

// Statuses are the ones shown on the existing portfolio and repo. QueueLess is
// in active development as an MVP; Oddly has a finished frontend and a backend
// still in progress. Neither is claimed to be launched.
export const building: BuildingProject[] = [
  {
    name: 'QueueLess',
    tagline: 'Know the queue. Skip the uncertainty.',
    status: 'MVP in development',
    category: 'Mobile · Real-time · Smart city',
    description:
      'A real-time queue management app for the places in India where waiting is part of the process — government offices, hospitals, passport offices, banks, RTOs and popular food counters. QueueLess lets people see the queue before they leave the house.',
    features: [
      'Location-based discovery',
      'Live queue reports',
      'Estimated waiting times',
      'Historical queue patterns',
      'Map and directions',
      'Community updates',
    ],
    stack: [
      'React Native',
      'Expo',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'React Navigation',
      'MapLibre',
      'Expo Location',
    ],
    visual: 'queue',
  },
  {
    name: 'Oddly',
    tagline: 'A discovery engine for the uniquely curious.',
    status: 'Frontend complete · Backend in progress',
    category: 'AI · Recommendations',
    description:
      'Oddly recommends books, music, films and experiences by mood rather than genre. Take a vibe quiz, chat with the AI, or simply describe how you feel, and it finds things you would never have thought to search for.',
    features: [
      'Mood-first recommendations',
      'AI conversation',
      'Books, music, films, experiences',
      'Vibe quiz',
    ],
    stack: ['React', 'Spring Boot', 'MongoDB Atlas', 'Claude API', 'Last.fm', 'TMDB'],
    visual: 'oddly',
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend',
    items: ['Python', 'FastAPI', 'Java', 'Spring Boot', 'Node.js', 'REST APIs', 'Kafka'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'Supabase', 'MongoDB', 'H2'],
  },
  {
    title: 'AI & machine learning',
    items: ['Groq API', 'LLaMA 3.3 70B', 'FAISS', 'timm', 'Claude API', 'AI integrations'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Firebase', 'Maven', 'Vercel'],
  },
]

export const alsoInStack = [
  'Next.js',
  'Clerk',
  'Row Level Security',
  'Svelte',
  'Leaflet.js',
  'NASA APIs',
  'Expo',
  'React Native',
  'MapLibre',
  'Spring Data JPA',
]

export const education = {
  degree: 'B.Tech in Computer Science Engineering',
  focus: 'Specialisation in Data Science',
  school: 'Gyan Ganga Institute of Technology and Sciences, Jabalpur',
  affiliation: 'Affiliated to RGPV, Bhopal',
  period: '2023 – 2027',
  coursework: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Web Technologies', 'Data Science Fundamentals'],
  schoolHistory: 'Little Kingdom Sr. Sec. School · 2023',
}

export const simulations = [
  {
    org: 'JPMorgan Chase',
    title: 'Software Engineering Simulation',
    period: 'Mar 2026',
    detail:
      'Integrated Apache Kafka into a Spring Boot microservice, then built REST endpoints and verified them with Maven test suites.',
  },
  {
    org: 'Siemens Mobility',
    title: 'Project Manager Simulation',
    period: 'Mar 2026',
    detail: 'Set up strategic KPIs and Excel dashboards for rail infrastructure reporting.',
  },
  {
    org: 'Commonwealth Bank',
    title: 'Tech Explorer Simulation',
    period: 'Jan 2026',
    detail:
      'Cross-functional work across software engineering, cybersecurity and data science, including requirements for a banking app.',
  },
  {
    org: 'NASA Space Apps Challenge',
    title: 'Certificate of Participation',
    period: 'Jan 2026',
    detail: 'Jabalpur edition, hosted by GGITS. Anveshak was the challenge submission.',
  },
]

export const aboutParagraphs = [
  'I am a Computer Science Engineering student at Gyan Ganga Institute of Technology and Sciences in Jabalpur, specialising in Data Science. Most of what I know has come from building things that need to work: an AI code reviewer, an invoice tool, a planetary data explorer, and a queue tracker for the places where waiting is a fact of life.',
  'I like the whole arc of a product — the interface, the API behind it, the schema, and the part where a model actually earns its place instead of being decoration. When something breaks while I am building, that is usually where the most useful learning happens.',
  'I am especially interested in SaaS tools that remove friction from ordinary tasks. Right now I am going deeper into Spring Boot, microservices and applied machine learning, and I would rather ship a small, honest product than a large, unfinished one.',
]
