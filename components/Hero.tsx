
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const words = ['Frontend Engineer', 'UI/UX Enthusiast', 'Problem Solver', 'React Developer'];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typeSpeed = isDeleting ? 50 : 150;
    
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setDisplayText(currentWord.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex(prev => (prev + 1) % words.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 px-4 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full border border-primary/20 animate-pulse-slow">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-white mb-8 leading-[1.1]">
            Musab <span className="text-gradient">Khan</span>
          </h1>
          
          <div className="text-2xl md:text-4xl font-semibold text-slate-400 mb-8 h-12">
            I am a <span className="text-white border-r-2 border-primary pr-2">{displayText}</span>
          </div>
          
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Crafting digital experiences that merge cutting-edge technology with high-performance design. Specializing in building scalable React applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center">
            <a href="#projects" className="group flex items-center gap-2 px-8 py-4 rounded-full bg-white text-dark font-bold hover:bg-slate-200 transition-all transform hover:-translate-y-1 shadow-xl shadow-white/5">
              Explore Projects
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full glass text-white font-semibold hover:bg-white/10 transition-all transform hover:-translate-y-1">
              Let's Talk
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start">
            <a href="#" className="text-slate-500 hover:text-white transition-all transform hover:scale-125"><Github size={24} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-all transform hover:scale-125"><Linkedin size={24} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-all transform hover:scale-125"><Twitter size={24} /></a>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center relative">
          <div className="relative w-72 h-72 md:w-[500px] md:h-[500px] animate-float">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary hero-blob opacity-20 blur-3xl animate-pulse"></div>
            <div className="relative z-10 w-full h-full overflow-hidden hero-blob glass border-2 border-white/20 shadow-2xl">
              <img 
                src="images\image.jpg" 
                alt="Musab Khan" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 p-4 glass rounded-2xl animate-float [animation-delay:1s]">
              <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center text-cyan-400 font-bold">R</div>
            </div>
            <div className="absolute top-1/2 -left-8 p-4 glass rounded-2xl animate-float [animation-delay:2s]">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-500 font-bold">TS</div>
            </div>
            <div className="absolute -bottom-4 right-1/4 p-4 glass rounded-2xl animate-float [animation-delay:3.5s]">
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-500 font-bold">JS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
