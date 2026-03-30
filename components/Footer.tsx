
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-dark/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-2xl font-black text-white">
             Musab<span className="text-gradient">.</span>
          </div>
          
          <div className="flex gap-8">
            <a href="#home" className="text-sm text-slate-400 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-sm text-slate-400 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-sm text-slate-400 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="text-sm text-slate-500 flex items-center gap-2">
            Built with <Heart size={14} className="text-secondary fill-secondary" /> by Musab Khan
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-white/5">
          <p className="text-slate-600 text-xs tracking-widest uppercase font-bold">
            &copy; {new Date().getFullYear()} NovaPort Creative Agency. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
