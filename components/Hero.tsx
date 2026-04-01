import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, ArrowRight, Instagram } from 'lucide-react';
// Framer Motion ইম্পোর্ট করুন
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const words = [
    'Full Stack Developer',
    'Problem Solver',
    'Python & Django Expert',
    'PostgreSQL Database Architect',
    'React & Next.js Specialist',
    'Frontend Engineer'
  ];
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

  // এনিমেশন ভেরিয়েন্টসমূহ
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // ফ্লোটিং এনিমেশন (ব্যাজগুলোর জন্য)
  const floatAnimation = (duration: number) => ({
    y: [0, -15, 0],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut"
    }
  });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 px-4 overflow-hidden relative">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* বাম দিকের কন্টেন্ট */}
        <motion.div 
          className="text-center lg:text-left order-2 lg:order-1 relative z-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full border border-primary/20 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
          >
            <span className="w-2 h-2 bg-primary rounded-full mr-2 shadow-[0_0_5px_#10b981]"></span>
            Available for new opportunities
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl xl:text-8xl font-black tracking-tight text-white mb-6 leading-[1.1]"
          >
            Musab <span className="text-gradient">Khan</span>
          </motion.h1>

          <motion.div 
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-semibold text-slate-400 mb-6 h-10 md:h-12 flex items-center justify-center lg:justify-start gap-2"
          >
            <span>I am a</span>
            <span className="text-white border-r-2 border-primary pr-2 animate-pulse">{displayText}</span>
          </motion.div>

          <motion.p 
            variants={fadeInUp}
            className="text-lg text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed tracking-wide"
          >
            Crafting digital experiences that merge cutting-edge technology with high-performance design. Specializing in building scalable React and Django applications.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center"
          >
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Explore Projects
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
            
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05, borderColor: "rgba(16,185,129,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full glass text-white font-semibold hover:bg-white/10 transition-all"
            >
              Let's Talk
            </motion.a>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="mt-12 flex items-center gap-8 justify-center lg:justify-start"
          >
            {[
              { icon: Github, href: "https://github.com/musab-90dsep-code", color: "hover:text-white" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/musabkhan321", color: "hover:text-[#0A66C2]" },
              { icon: Twitter, href: "https://x.com/MUSABBINSH57074", color: "hover:text-[#1DA1F2]" },
              { icon: Instagram, href: "https://www.instagram.com/musab_90dsep", color: "hover:text-[#E1306C]" }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, rotate: 10 }}
                className={`text-slate-500 ${social.color} transition-colors duration-300`}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* ডান দিকের ইমেজ এবং ফ্লোটিং ব্যাজ */}
        <div className="order-1 lg:order-2 flex justify-center relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-72 h-72 md:w-[500px] md:h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary hero-blob opacity-30 blur-[60px] animate-pulse"></div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative z-10 w-full h-full overflow-hidden hero-blob glass border border-white/10 hover:border-primary/40 shadow-2xl transition-all duration-500 group"
            >
              <img
                src="/images/my-image.jpeg"
                alt="Musab Khan"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500"></div>
            </motion.div>

            {/* Floating Badges with Framer Motion */}
            <motion.div 
              animate={floatAnimation(3)}
              className="absolute -top-4 -right-4 p-4 glass rounded-2xl shadow-[0_0_15px_rgba(34,211,238,0.2)]"
            >
              <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center text-cyan-400 font-bold drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">R</div>
            </motion.div>

            <motion.div 
              animate={floatAnimation(4)}
              className="absolute top-1/2 -left-8 p-4 glass rounded-2xl shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-500 font-bold drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]">TS</div>
            </motion.div>

            <motion.div 
              animate={floatAnimation(3.5)}
              className="absolute -bottom-4 right-1/4 p-4 glass rounded-2xl shadow-[0_0_15px_rgba(249,115,22,0.2)]"
            >
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-500 font-bold drop-shadow-[0_0_5px_rgba(249,115,22,0.8)]">JS</div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
