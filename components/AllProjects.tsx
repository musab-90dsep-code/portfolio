
import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Link } from 'react-router-dom';

const AllProjects: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(PROJECTS.flatMap((p) => p.tags)));

  const filteredProjects = selectedTag
    ? PROJECTS.filter((p) => p.tags.includes(selectedTag))
    : PROJECTS;

  return (
    <section id="all-projects" className="py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              All <span className="text-gradient">Creations</span>
            </h2>
            <p className="text-slate-400">Here are all of my projects.</p>
          </div>
          <Link to="/" className="flex items-center gap-2 text-primary font-bold hover:text-white transition-colors group">
            Back to Home
            <ArrowUpRight size={20} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !selectedTag
                ? 'bg-primary text-white'
                : 'bg-white/10 text-slate-300 hover:bg-primary/50'
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTag === tag
                  ? 'bg-primary text-white'
                  : 'bg-white/10 text-slate-300 hover:bg-primary/50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative glass rounded-[2.5rem] overflow-hidden hover:border-primary/50 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-6">
                   <a href={project.githubUrl} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark hover:scale-110 transition-transform">
                     <Github size={22} />
                   </a>
                   <a href={project.demoUrl}
                   target="_blank" 
                   rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                     <ExternalLink size={22} />
                   </a>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full bg-white/5 text-slate-400 border border-white/10 group-hover:border-primary/30 group-hover:text-primary transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>
                <div className="flex items-center justify-between">
                   <span className="text-xs text-slate-600 font-medium">Case Study available</span>
                   <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary transition-all">
                      <ArrowUpRight size={16} />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
