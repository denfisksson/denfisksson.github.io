import { Statistic, TechCategory, ExperienceItem, Project, SocialLink, PersonalInfo } from '@/types/content'

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Daniel López',
  role: 'SOFTWARE ENGINEER',
  email: 'dankolpz@icloud.com',
  location: 'Prague, Czech Republic 🇨🇿',
  bio: `I'm a passionate software engineer with over 10 years of experience building modern web applications. I specialize in creating performant, usable, and visually stunning user interfaces using React, Next.js, and TypeScript. I believe in a user-centered design approach and focus on delivering scalable, high-performing solutions that make a real impact.`,
  resumeUrl: '/resume.pdf'
}

export const HERO_STATS: Statistic[] = [
  { value: 'Tech Lead at eBay', label: 'Current Role' },
  { value: '10+', label: 'Years Experience' },
  { value: 'Mastering Modern Stack', label: 'Current Focus' }
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
      { name: 'Sass / Less' },
      { name: 'Bootstrap' },
      { name: 'Freemarker' },
      { name: 'Python' }
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
    title: 'AI Skills',
    items: [
      { name: 'Workflow Automation' },
      { name: 'Prompt Engineering' },
      { name: 'AI Assisted Development' },
      { name: 'AI Literacy' }
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
    company: 'eBay Inc. (Zeta Global)',
    companyUrl: 'https://www.ebay.com',
    position: 'Frontend Tech Lead',
    duration: '5 years 8 months',
    startDate: 'Jun 2020',
    endDate: 'Present',
    description: [
      'Led the Buyer Transactional portfolio migration to a modern design system, increasing revenue by 7%.',
      'Spearheaded a full codebase refactor using design-principle modularity, significantly improving maintainability and dev velocity.',
      'Mentors a 10-person team; developed custom support utilities and technical playbooks that streamlined internal workflows.',
      'Actively bridges the gap between engineering and stakeholders to ensure technical debt is prioritized alongside feature delivery.'
    ],
    technologies: ['Python', 'Javascript', 'Freemarker', 'CSS', 'HTML', 'REST API']
  },
  {
    id: 'exp-2',
    company: 'Wunderman Thompson (VML)',
    companyUrl: 'https://www.vml.com',
    position: 'Frontend Specialist',
    duration: '3 years 6 months',
    startDate: 'Oct 2016',
    endDate: 'Apr 2020',
    description: [
      'Automated Microsoft UK site updates, achieving an 80% increase in speed through custom scripts.',
      'Developed a full-stack internal HR application to automate holiday and sick leave tracking, replacing manual legacy systems.',
      'Founded a peer-to-peer knowledge guild, reducing cross-team blockers through structured programming support sessions.',
    ],
    technologies: ['Javascript', 'HTML', 'CSS / LESS', 'Python', 'Kubernetes']
  },
  {
    id: 'exp-3',
    company: 'Pixelfield s.r.o.',
    position: 'Full Stack UI Designer & Developer',
    duration: '3 months',
    startDate: 'Jul 2015',
    endDate: 'Oct 2015',
    description: [
      'Reduced web development friction by 40% by optimizing the design-to-code pipeline and delivery workflows.',
      'Successfully delivered custom solutions and support to several clients across various industries'
    ],
    technologies: ['Python', 'JavaScript', 'HTML', 'CSS', 'Figma', 'Jenkins', 'jQuery']
  },
  {
    id: 'exp-4',
    company: 'From The Bench Games',
    position: 'Graphic Designer Intern',
    duration: '3 months',
    startDate: 'Jan 2015',
    endDate: 'Apr 2015',
    description: [
    ],
    technologies: ['Figma', 'Photoshop', 'Wordpress']
  }
]

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    slug: 'baby-map',
    number: '_01',
    title: 'Baby Map',
    description: 'Telegram Bot that helps parents find nearby baby-friendly places like parks, cafes, and stores. Built with Python, Express, and the Telegram Bot API.',
    image: '', // Leave empty if no image available - will show number fallback
    technologies: ['Python', 'Express.js', 'Telegram Bot API'],
    liveUrl: 'https://t.me/BabyMap_Bot',
    githubUrl: 'https://github.com/denfisksson/baby-map-bot',
    featured: true,
    hasDetailPage: false // Set to true when you've written the case study
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/denfisksson/', icon: 'Github' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/daniel-lopez-paterna/', icon: 'Linkedin' }
]
