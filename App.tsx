
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';
import AllProjects from './components/AllProjects';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Elements */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
        <div className="absolute top-[20%] right-[-5%] w-[35%] h-[35%] bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob [animation-delay:2s]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] bg-blue-500/10 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob [animation-delay:4s]"></div>
      </div>

      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
