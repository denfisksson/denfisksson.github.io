export interface Statistic {
  value: string
  label: string
}

export interface Technology {
  name: string
  icon?: string
  proficiency?: number
}

export interface TechCategory {
  title: string
  items: Technology[]
}

export interface ExperienceItem {
  id: string
  company: string
  companyUrl?: string
  position: string
  duration: string
  startDate: string
  endDate: string | 'Present'
  description: string[]
  technologies: string[]
}

export interface Project {
  id: string
  slug: string
  number: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  hasDetailPage?: boolean
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface PersonalInfo {
  name: string
  role: string
  email: string
  location: string
  bio: string
  resumeUrl: string
}
