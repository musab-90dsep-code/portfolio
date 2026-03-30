import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
// Framer Motion ইম্পোর্ট করা হলো
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (formRef.current) {
      emailjs.sendForm(
        'service_o5ovgyj',
        'template_rflbgtp',
        formRef.current,
        'yAiuoBCnke8aeld2-'
      )
      .then((result) => {
          setLoading(false);
          setSubmitted(true);
      }, (error) => {
          setLoading(false);
          alert("দুঃখিত, মেসেজটি পাঠানো যায়নি। আবার চেষ্টা করুন।");
          console.error(error.text);
      });
    }
  };

  // --- Framer Motion ভেরিয়েন্টসমূহ ---
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* --- বাম দিকের কন্টেন্ট --- */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Let's <span className="text-gradient">Connect</span> and Create Something Great
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-slate-400 mb-12">
              Have a project in mind or just want to say hi? My inbox is always open. 
              I'm looking for new opportunities and collaborations.
            </motion.p>
            
            <div className="space-y-8">
              {/* Email Item */}
              <motion.div variants={fadeUp} whileHover={{ x: 10 }} className="flex items-center gap-6 group cursor-default">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Email Me</div>
                  <div className="text-lg font-bold text-white transition-colors group-hover:text-primary">musabbinsharif321@gmail.com</div>
                </div>
              </motion.div>

              {/* Phone Item */}
              <motion.div variants={fadeUp} whileHover={{ x: 10 }} className="flex items-center gap-6 group cursor-default">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Call Me</div>
                  <div className="text-lg font-bold text-white transition-colors group-hover:text-primary">01670555719</div>
                </div>
              </motion.div>

              {/* Location Item */}
              <motion.div variants={fadeUp} whileHover={{ x: 10 }} className="flex items-center gap-6 group cursor-default">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Find Me</div>
                  <div className="text-lg font-bold text-white transition-colors group-hover:text-primary">Dhaka, Bangladesh</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* --- ডান দিকের ফর্ম --- */}
          <motion.div 
            className="relative"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="glass p-10 md:p-14 rounded-[3rem] border-white/10 shadow-2xl relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  /* Success Message Animation */
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-20"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                      className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <Send size={40} />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-slate-400 mb-8">Thank you for reaching out. I'll get back to you soon.</p>
                    <button 
                      onClick={() => setSubmitted(false)} 
                      className="text-primary font-bold hover:underline transition-all"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  /* Form Animation */
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    ref={formRef} 
                    onSubmit={handleSubmit} 
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-400">Your Name</label>
                        <input 
                          name="from_name"
                          type="text" required
                          className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all hover:bg-slate-800/50"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-400">Your Email</label>
                        <input 
                          name="reply_to"
                          type="email" required
                          className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all hover:bg-slate-800/50"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-400">Subject</label>
                      <input 
                        name="subject"
                        type="text" required
                        className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all hover:bg-slate-800/50"
                        placeholder="Project Discussion"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-400">Message</label>
                      <textarea 
                        name="message"
                        rows={5} required
                        className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all resize-none hover:bg-slate-800/50"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={loading}
                      className="w-full py-5 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-black text-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <><Loader2 className="animate-spin" /> Processing...</>
                      ) : (
                        <><Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Send Message</>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;