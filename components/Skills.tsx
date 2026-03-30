import React from 'react';
// Framer Motion ইম্পোর্ট করুন
import { motion } from 'framer-motion';
import { SKILLS, SkillIcon } from '../constants';

const Skills: React.FC = () => {
  // ১. সম্পূর্ণ সেকশন বা কন্টেইনারের জন্য এনিমেশন ভেরিয়েন্ট
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // চাইল্ড এলিমেন্টগুলোর (কার্ড) মধ্যে ০.১ সেকেন্ড দেরি করে এনিমেশন শুরু হবে
        staggerChildren: 0.1,
      },
    },
  };

  // ২. প্রতিটি স্কিল কার্ডের জন্য এনিমেশন ভেরিয়েন্ট
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, // কার্ডটি ৩০ পিক্সেল নিচ থেকে শুরু হবে
      scale: 0.8 // হালকা ছোট হয়ে শুরু হবে
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: 'easeOut' // স্মুথ এনিমেশন
      } 
    },
    // হোভার (মাউস নিলে) করার এনিমেশন
    hover: {
      scale: 1.05, // হালকা বড় হবে
      y: -10, // ১০ পিক্সেল উপরে উঠে আসবে
      transition: { duration: 0.3, ease: 'easeInOut' },
      // একটি হালকা ব্যাকগ্রাউন্ড গ্লো ইফেক্ট (বর্ডার কালার অনুযায়ী)
      boxShadow: "0px 10px 30px rgba(139, 92, 246, 0.2)"
    },
  };

  return (
    <section id="skills" className="py-32 bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* হেড সেকশনে সাধারণ মোশন এনিমেশন */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // ৫০% সেকশন দেখা গেলে এনিমেশন হবে
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Tools and technologies I use to bring ideas to life. I'm constantly learning new things to stay ahead.
          </p>
        </motion.div>

        {/* ৩. গ্রিড কন্টেইনারে মোশন ডিভ ব্যবহার এবং ভেরিয়েন্ট যুক্ত করা */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden" // শুরুতে লুকাতে হবে
          whileInView="visible" // স্ক্রিনে আসলে দেখা যাবে
          viewport={{ once: true, amount: 0.2 }} // ২০% গ্রিড দেখা গেলেই শুরু হবে
        >
          {SKILLS.map((skill, index) => (
            // ৪. প্রতিটি কার্ডকে মোশন ডিভ বানিয়ে ভেরিয়েন্ট যুক্ত করা
            <motion.div 
              key={index} 
              className="group glass p-8 rounded-3xl flex flex-col items-center justify-center cursor-pointer border-white/5 hover:border-primary/30"
              variants={cardVariants} // স্ট্যান্ডার্ড এনিমেশন
              whileHover="hover" // হোভার এনিমেশন
              // viewport constraint for staggering within the container
            >
              <div className={`mb-6 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 ${skill.color}`}>
                <SkillIcon name={skill.name} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
              <div className="w-full bg-slate-800 h-1 rounded-full mt-4 overflow-hidden relative">
                {/* ৫. প্রগ্রেস বার এনিমেশন (Framer Motion দিয়ে) */}
                <motion.div 
                  className={`h-full bg-gradient-to-r from-primary to-secondary rounded-full absolute left-0`}
                  initial={{ width: "0%" }} // শুরুতে ০%
                  whileInView={{ width: "100%" }} // স্ক্রিনে আসলে পূর্ণ হবে
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (index * 0.1), duration: 1.5, ease: 'easeInOut' }} // কার্ডের পর ধীরে ধীরে লোড হবে
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;