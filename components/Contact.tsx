import React, { useState, useRef } from 'react'; // useRef যোগ করা হয়েছে
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser'; // EmailJS ইমপোর্ট করা হয়েছে

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null); // ফর্ম রেফারেন্স
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (formRef.current) {
      // --- EmailJS কানেকশন শুরু ---
      emailjs.sendForm(
        'service_o5ovgyj',  // এখানে আপনার Service ID দিন
        'template_rflbgtp',  // এখানে আপনার Template ID দিন
        formRef.current,
        'yAiuoBCnke8aeld2-'    // এখানে আপনার Public Key দিন
      )
      .then((result) => {
          setLoading(false);
          setSubmitted(true);
      }, (error) => {
          setLoading(false);
          alert("দুঃখিত, মেসেজটি পাঠানো যায়নি। আবার চেষ্টা করুন।");
          console.error(error.text);
      });
      // --- EmailJS কানেকশন শেষ ---
    }
  };

  return (
    <section id="contact" className="py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Let's <span className="text-gradient">Connect</span> and Create Something Great
            </h2>
            {/* আপনার যোগাযোগের তথ্যগুলো এখানে থাকবে... */}
            <div className="space-y-8">
               <div className="flex items-center gap-6 group">
                 <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                   <Mail size={24} />
                 </div>
                 <div>
                   <div className="text-sm text-slate-500 mb-1">Email Me</div>
                   <div className="text-lg font-bold text-white">musabbinsharif321@gmail.com</div>
                 </div>
               </div>
               {/* Phone ও MapPin সেকশন আগের মতোই থাকবে */}
            </div>
          </div>

          <div className="relative">
            <div className="glass p-10 md:p-14 rounded-[3rem] border-white/10 shadow-2xl relative overflow-hidden">
              {submitted ? (
                <div className="text-center py-20 animate-fade-in">
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-slate-400 mb-8">Thank you for reaching out. I'll get back to you soon.</p>
                  <button onClick={() => setSubmitted(false)} className="text-primary font-bold hover:underline">
                    Send another message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-400">Your Name</label>
                      <input 
                        name="from_name" // Template-এর সাথে মিল রাখতে হবে
                        type="text" required
                        className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-400">Your Email</label>
                      <input 
                        name="reply_to" // Template-এর সাথে মিল রাখতে হবে
                        type="email" required
                        className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400">Subject</label>
                    <input 
                      name="subject"
                      type="text" required
                      className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all"
                      placeholder="Project Discussion"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400">Message</label>
                    <textarea 
                      name="message"
                      rows={5} required
                      className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <button 
                    disabled={loading}
                    className="w-full py-5 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-black text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {loading ? (
                      <><Loader2 className="animate-spin" /> Processing...</>
                    ) : (
                      <><Send size={20} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;