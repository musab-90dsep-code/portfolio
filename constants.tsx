
import React from 'react';
import { 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  Layers, 
  Layout, 
  Smartphone, 
  Zap,
  FileCode,
  Server,
  Palette,
  Code,
  Move,
  GitMerge
} from 'lucide-react';
import { Project, Skill, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
];

export const SKILLS: Skill[] = [
  { name: 'React', icon: 'react', color: 'text-cyan-400' },
  { name: 'TypeScript', icon: 'typescript', color: 'text-blue-500' },
  { name: 'Node.js', icon: 'node', color: 'text-green-500' },
  { name: 'Tailwind CSS', icon: 'tailwind', color: 'text-teal-400' },
  { name: 'PostgreSQL', icon: 'database', color: 'text-blue-400' },
  { name: 'Python', icon: 'python', color: 'text-yellow-500' },
  { name: 'Framer Motion', icon: 'framer', color: 'text-purple-400' },
  { name: 'Git', icon: 'git', color: 'text-red-500' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: ' Online Academy',
    description: 'A modern Islamic educational platform designed to provide accessible Quranic and Islamic studies.',
    image: 'images/talimat.png',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    githubUrl: 'https://github.com/musab-90dsep-code/my-instutut',
    demoUrl: 'https://talimatinstitute.vercel.app/',
  },
  {
    id: 2,
    title: 'Ethereal Shop',
    description: 'Minimalist e-commerce platform with glassmorphic UI and seamless stripe integration.',
    image: 'https://picsum.photos/seed/shop/800/600',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    githubUrl: '#',
    demoUrl: 'https://splendorous-kitten-b5b5f4.netlify.app/',
  },
  {
    id: 3,
    title: 'Synapse AI',
    description: 'Integrated AI chat interface using Gemini API for advanced coding assistance.',
    image: 'https://picsum.photos/seed/ai/800/600',
    tags: ['TypeScript', 'Gemini API', 'Node'],
    githubUrl: '#',
    demoUrl: 'https://6977186cd5f1ae6a50bd13fb--incandescent-sherbet-b15630.netlify.app/',
  },
];

export const SkillIcon = ({ name, className }: { name: string, className?: string }) => {
  switch (name.toLowerCase()) {
    case 'react': return <Zap className={className} />;
    case 'typescript': return <FileCode className={className} />;
    case 'node.js': return <Server className={className} />;
    case 'tailwind css': return <Palette className={className} />;
    case 'postgresql': return <Database className={className} />;
    case 'python': return <Code className={className} />;
    case 'framer motion': return <Move className={className} />;
    case 'git': return <GitMerge className={className} />;
    default: return <Code2 className={className} />;
  }
};
