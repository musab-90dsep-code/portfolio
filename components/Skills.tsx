
import React from 'react';
import { SKILLS, SkillIcon } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Tools and technologies I use to bring ideas to life. I'm constantly learning new things to stay ahead.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {SKILLS.map((skill, index) => (
            <div 
              key={index} 
              className="group glass p-8 rounded-3xl flex flex-col items-center justify-center hover:bg-white/5 hover:-translate-y-2 transition-all duration-300 border-white/5 hover:border-primary/30"
            >
              <div className={`mb-6 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 ${skill.color}`}>
                <SkillIcon name={skill.name} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
              <div className="w-full bg-slate-800 h-1 rounded-full mt-4 overflow-hidden">
                <div className={`h-full bg-gradient-to-r from-primary to-secondary w-0 group-hover:w-full transition-all duration-1000`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
