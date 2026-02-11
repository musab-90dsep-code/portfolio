
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export interface NavLink {
  name: string;
  href: string;
}
