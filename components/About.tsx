
import React from 'react';
import { User, Rocket, Coffee, Award, Code } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Rocket size={24} />, label: 'Projects Completed', value: '15+' },
    { icon: <Code size={24} />, label: 'Hours of Coding', value: '500+' },
    { icon: <Award size={24} />, label: 'courses', value: '3' },
    { icon: <User size={24} />, label: 'happy clients', value: '5+' },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Passion for building <br />
              <span className="text-gradient">Impactful Solutions</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              “A passionate frontend developer focused on building modern, responsive web applications.”. 
              My journey is fueled by a deep-seated curiosity about technology and a commitment to creating 
              systems that are as elegant as they are efficient.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              From building complex data-driven applications to crafting pixel-perfect user interfaces, 
              I focus on scalability and maintainability. My goal is to bridge the gap between human needs 
              and technical possibilities.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="glass p-6 rounded-2xl hover:border-primary/50 transition-colors group">
                  <div className="text-primary mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass p-2 rounded-[2.5rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
               <img 
                 src="images/image.jpg" 
                 alt="Workspace" 
                 className="w-full h-auto rounded-[2rem] shadow-inner opacity-80"
               />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
