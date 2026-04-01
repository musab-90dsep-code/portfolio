import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';
// Framer Motion ইম্পোর্ট করা হলো
import { motion } from 'framer-motion';

const Projects: React.FC = () => {

  // --- Framer Motion ভেরিয়েন্টসমূহ ---
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 } // কার্ডগুলো ০.২ সেকেন্ড পর পর আসবে
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    // সামান্য padding (py-20) যোগ করেছি যেন দেখতে ভালো লাগে, আপনার দরকার না হলে মুছে দিতে পারেন
    <section id="projects" className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* হেডার অংশ */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headerVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-slate-400">Selected work that highlights my skills in architecture and design.</p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headerVariants}
          >
            {/* "View All Work" link */}
            <Link to="/projects" className="flex items-center gap-2 text-primary font-bold hover:text-white transition-colors group">
             View All Work
             <ArrowUpRight size={20} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* প্রোজেক্ট গ্রিড */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // ১০% স্ক্রিনে আসলেই এনিমেশন শুরু হবে
        >
          {PROJECTS.slice(0, 3).map((project) => (
            <motion.div 
              key={project.id} 
              variants={cardVariants}
              className="group bg-[#0f172a] rounded-2xl overflow-hidden border border-slate-800 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              
              {/* Image Area */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[11px] font-medium px-3 py-1.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-4 mt-auto pt-5 border-t border-slate-800">
                   <a href={project.githubUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold transition-colors">
                     <Github size={16} />
                     Code
                   </a>
                   <a href={project.demoUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-semibold transition-colors shadow-lg shadow-emerald-500/20">
                     <ExternalLink size={16} />
                     Live Demo
                   </a>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
