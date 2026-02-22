import { Statistic, TechCategory, ExperienceItem, Project, SocialLink, PersonalInfo } from '@/types/content'

export const PERSONAL_INFO: PersonalInfo = {
  name: 'John Doe',
  role: 'FRONTEND DEVELOPER',
  email: 'john.doe@example.com',
  location: 'San Francisco, CA',
  bio: `I'm a passionate frontend developer with over 3 years of experience building modern web applications. I specialize in creating performant, accessible, and visually stunning user interfaces using React, Next.js, and TypeScript. I believe in a user-centered design approach and focus on delivering scalable, high-performing solutions that make a real impact.`,
  resumeUrl: '/resume.pdf'
}

export const HERO_STATS: Statistic[] = [
  { value: '3+', label: 'Years Experience' },
  { value: '15+', label: 'Projects Completed' },
  { value: '10K+', label: 'Hours Coding' }
]

export const TECH_STACK: TechCategory[] = [
  {
    title: 'Frontend',
    items: [
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Redux' },
      { name: 'Tailwind CSS' },
      { name: 'GSAP' },
      { name: 'Framer Motion' },
      { name: 'Sass' },
      { name: 'Bootstrap' }
    ]
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Python' },
      { name: 'FastAPI' }
    ]
  },
  {
    title: 'Database',
    items: [
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'MySQL' },
      { name: 'Redis' },
      { name: 'Prisma' }
    ]
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'Vercel' },
      { name: 'AWS' },
      { name: 'Figma' }
    ]
  }
]

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'Tech Innovations Inc.',
    position: 'Senior Frontend Developer',
    duration: '1 year 2 months',
    startDate: 'Dec 2024',
    endDate: 'Present',
    description: [
      'Led development of responsive web applications using React and Next.js',
      'Implemented complex animations using Framer Motion and GSAP',
      'Mentored junior developers and conducted code reviews',
      'Optimized application performance resulting in 40% faster load times'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP']
  },
  {
    id: 'exp-2',
    company: 'Digital Solutions Co.',
    position: 'Frontend Developer',
    duration: '1 year 1 month',
    startDate: 'Oct 2023',
    endDate: 'Nov 2024',
    description: [
      'Developed and maintained multiple client-facing web applications',
      'Collaborated with designers to implement pixel-perfect UI components',
      'Integrated RESTful APIs and managed application state with Redux',
      'Participated in agile development processes and sprint planning'
    ],
    technologies: ['React', 'Redux', 'JavaScript', 'CSS Modules', 'Jest']
  },
  {
    id: 'exp-3',
    company: 'WebDev Agency',
    position: 'Frontend Engineer',
    duration: '11 months',
    startDate: 'Oct 2022',
    endDate: 'Sep 2023',
    description: [
      'Built responsive websites and web applications for various clients',
      'Implemented modern frontend architectures and best practices',
      'Worked closely with backend teams to integrate APIs',
      'Ensured cross-browser compatibility and accessibility standards'
    ],
    technologies: ['React', 'JavaScript', 'Sass', 'Bootstrap', 'Webpack']
  },
  {
    id: 'exp-4',
    company: 'StartupLab',
    position: 'Junior Frontend Developer',
    duration: '9 months',
    startDate: 'Jan 2022',
    endDate: 'Oct 2022',
    description: [
      'Assisted in developing user interface components',
      'Participated in code reviews and learned industry best practices',
      'Fixed bugs and improved existing codebases',
      'Collaborated with cross-functional teams on feature development'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Git']
  }
]

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    number: '_01',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management, secure payment processing via Stripe, and an intuitive admin dashboard for product management.',
    image: '/images/projects/project-1.jpg',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/johndoe/ecommerce',
    featured: true
  },
  {
    id: 'proj-2',
    number: '_02',
    title: 'Task Management App',
    description: 'Collaborative task management application with drag-and-drop functionality, real-time updates, and team collaboration features built with React and Firebase.',
    image: '/images/projects/project-2.jpg',
    technologies: ['React', 'Redux', 'Firebase', 'Material-UI', 'DnD Kit'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/johndoe/taskapp',
    featured: true
  },
  {
    id: 'proj-3',
    number: '_03',
    title: 'AI Resume Analyzer',
    description: 'AI-powered resume analysis tool using GPT-4 to provide intelligent feedback on resumes, suggest improvements, and optimize for ATS systems.',
    image: '/images/projects/project-3.jpg',
    technologies: ['Next.js', 'GPT-4 API', 'PostgreSQL', 'Prisma', 'shadcn/ui'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/johndoe/resume-analyzer',
    featured: true
  },
  {
    id: 'proj-4',
    number: '_04',
    title: 'Real Estate Marketplace',
    description: 'Modern real estate listing platform with advanced search filters, interactive map integration, and property comparison tools for home buyers and sellers.',
    image: '/images/projects/project-4.jpg',
    technologies: ['React', 'Redux', 'Google Maps API', 'Tailwind CSS', 'Express'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/johndoe/realestate',
    featured: false
  },
  {
    id: 'proj-5',
    number: '_05',
    title: 'Consulting Finance Website',
    description: 'Professional corporate website for a financial consulting firm featuring dynamic content management, client testimonials, and integrated contact forms.',
    image: '/images/projects/project-5.jpg',
    technologies: ['HTML5', 'CSS/SCSS', 'JavaScript', 'jQuery', 'PHP'],
    liveUrl: 'https://example.com',
    featured: false
  },
  {
    id: 'proj-6',
    number: '_06',
    title: 'DevLinks Profile Manager',
    description: 'Developer link aggregator platform with drag-and-drop link ordering, custom theming, and shareable profile pages for developers to showcase their online presence.',
    image: '/images/projects/project-6.jpg',
    technologies: ['Next.js', 'TypeScript', 'Formik', 'React DnD', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/johndoe/devlinks',
    featured: false
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/johndoe', icon: 'Github' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/daniel-lopez-paterna/', icon: 'Linkedin' },
  { platform: 'Twitter', url: 'https://twitter.com/johndoe', icon: 'Twitter' }
]
