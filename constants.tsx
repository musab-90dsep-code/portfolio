import React from 'react';
// Lucide-react থেকে শুধু প্রয়োজনীয় আইকনগুলো রাখা হয়েছে (fallback এর জন্য)
import { Code2 } from 'lucide-react';

// React Icons থেকে অরিজিনাল ব্র্যান্ড লোগো ইম্পোর্ট করা হয়েছে
import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiPostgresql, 
  SiPython, 
  SiFramer, 
  SiGit,
  SiFirebase,
  SiDjango,
  SiCloudinary
} from 'react-icons/si';

import { Project, Skill, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
];

export const SKILLS: Skill[] = [
  { name: 'React', icon: 'react', color: 'text-[#61DAFB]' },
  { name: 'TypeScript', icon: 'typescript', color: 'text-[#3178C6]' },
  { name: 'Node.js', icon: 'node', color: 'text-[#339933]' },
  { name: 'Django', icon: 'django', color: 'text-[#0055FF]' }, // Git এর বদলে Django যোগ করা হয়েছে
  { name: 'Tailwind CSS', icon: 'tailwind', color: 'text-[#06B6D4]' },
  { name: 'PostgreSQL', icon: 'database', color: 'text-[#4169E1]' },
  { name: 'Python', icon: 'python', color: 'text-[#3776AB]' },
  { name: 'Framer Motion', icon: 'framer', color: 'text-[#0055FF]' },
];

export const PROJECTS: Project[] = [
  {
    id: 1, 
    title: 'ERP Manager Business Suite (PWA)',
    description: 'A comprehensive full-stack ERP solution for streamlined business operations, featuring real-time inventory tracking, automated invoicing, and financial management.',
    image: '/images/erp.png', 
    tags: ['NextJs', 'TypeScript', 'Tailwind CSS', 'Django'],
    githubUrl: '#', 
    demoUrl: 'https://erp-zeta-green.vercel.app/',
},
 
  {
    id: 2,
    title: 'Kowmi Madrasa ',
    description: 'A modern introductory website for a Qawmi Madrasa, showcasing their academic programs, and institutional details with a clean, responsive design.',
    image: '/images/madrasa.png',
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'Django', 'PostgreSQL', 'Cloudinary'],
    githubUrl: '#',
    demoUrl: 'https://www.markazulfikri.shop/',
  },
   {
    id: 3,
    title: 'Online Academy',
    description: 'A modern Islamic educational platform designed to provide accessible Quranic and Islamic studies.',
    image: '/images/talimat.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    githubUrl: 'https://github.com/musab-90dsep-code/my-instutut',
    demoUrl: 'https://talimatinstitute.vercel.app/',
  },
  
    {
  id: 4,
  title: 'Personal Portfolio',
  description: 'A high-fidelity developer portfolio designed to merge cutting-edge technology with high-performance design.',
  image: '/images/project.png',
  tags: ['React', 'TypeScript', 'Gemini API', 'Framer Motion', 'Tailwind CSS'],
  githubUrl: 'https://github.com/musab-90dsep-code/portfolio', 
  demoUrl: 'https://portfolio-blond-tau-29.vercel.app/',
},
];

/**
 * Skill লোগো ম্যাপার
 * এখানে 'react-icons' এর আসল লোগোগুলো ব্যবহার করা হয়েছে
 */
const iconMap: Record<string, React.ElementType> = {
  'react': SiReact,
  'typescript': SiTypescript,
  'node.js': SiNodedotjs,
  'tailwind css': SiTailwindcss,
  'postgresql': SiPostgresql,
  'python': SiPython,
  'framer motion': SiFramer,
  'git': SiGit,
  'firebase': SiFirebase,
  'django': SiDjango,
  'cloudinary': SiCloudinary
};

export const SkillIcon = ({ name, className }: { name: string, className?: string }) => {
  const IconComponent = iconMap[name.toLowerCase()] || Code2;
  
  return <IconComponent className={className} />;
};
