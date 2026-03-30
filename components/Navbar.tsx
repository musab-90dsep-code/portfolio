import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
// Framer Motion ইম্পোর্ট করা হলো
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // সম্পূর্ণ ন্যাভবারকে motion.nav করা হলো যাতে পেজ লোড হলে উপর থেকে নেমে আসে
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/80 backdrop-blur-md py-4 border-b border-white/10 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo - Upgraded to Developer Style <Musab /> */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-white tracking-wider cursor-pointer group flex items-center"
          >
            <span className="text-slate-500 mr-1 opacity-70 group-hover:text-primary transition-colors">&lt;</span>
            Musab
            <span className="text-slate-500 ml-1 opacity-70 group-hover:text-primary transition-colors">/&gt;</span>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-300 hover:text-white transition-all relative group py-2"
              >
                {link.name}
                {/* Hover Underline Animation */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
            
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all flex items-center gap-2"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white p-2 focus:outline-none bg-white/5 rounded-lg border border-white/10"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Content with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col items-center space-y-6">
              {NAV_LINKS.map((link, index) => (
                <motion.a 
                  key={link.name} 
                  href={link.href} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-white hover:scale-110 transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                href="#contact" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-lg mt-4"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;