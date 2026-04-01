import React from 'react';
import { User, Rocket, Award, Code } from 'lucide-react';
// Framer Motion ইম্পোর্ট করা হলো
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const stats = [
    { icon: <Rocket size={24} />, label: 'Projects Completed', value: '15+' },
    { icon: <Code size={24} />, label: 'Hours of Coding', value: '500+' },
    { icon: <Award size={24} />, label: 'Courses', value: '3' },
    { icon: <User size={24} />, label: 'Happy Clients', value: '5+' },
  ];

  // --- Framer Motion ভেরিয়েন্টসমূহ ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 } // একের পর এক আসার জন্য
    }
  };

  const statItem = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.4 } 
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- বাম দিকের কন্টেন্ট (টেক্সট ও স্ট্যাটস) --- */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // ৩০% স্ক্রিনে আসলেই এনিমেশন শুরু হবে
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white">
              Passion for building <br />
              <span className="text-gradient">Impactful Solutions</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-lg text-slate-400 leading-relaxed">
                “I am a passionate Full-Stack Web Developer focused on building modern, responsive, and scalable web applications. My journey in technology is driven by curiosity and a commitment to writing clean, maintainable code.”
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                From crafting intuitive frontend interfaces with React to designing secure backend systems using Django and PostgreSQL, I focus on performance, scalability, and real-world usability. My goal is to bridge the gap between business needs and technical solutions.
              </p>
            </motion.div>
            
            {/* স্ট্যাটস গ্রিড */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={staggerContainer}
            >
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  variants={statItem}
                  whileHover={{ y: -5, borderColor: "rgba(16, 185, 129, 0.5)" }} // হোভার ইফেক্ট
                  className="glass p-6 rounded-2xl transition-colors group cursor-default"
                >
                  <div className="text-primary mb-3 group-hover:scale-110 transition-transform origin-left">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* --- ডান দিকের ইমেজ --- */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }} // ডান দিক থেকে আসবে
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              whileHover={{ rotate: 0, scale: 1.02 }}
              initial={{ rotate: -3 }}
              className="w-full glass p-2 rounded-[2.5rem] overflow-hidden transition-all duration-500 shadow-2xl"
            >
               <img 
                 src="images/about.jpeg" 
                 alt="Workspace" 
                 className="w-full rounded-[2rem] shadow-inner opacity-90 object-cover aspect-square lg:aspect-auto"
               />
            </motion.div>
            
            {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-[60px] -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
