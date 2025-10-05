import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundImage: 'url(https://images.unsplash.com/photo-1625146852357-7f99bf9913ae)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="hero-title mb-6">
          Hi, I'm <span className="gradient-text">Albin Kochumadathil</span>
        </h1>
        <p className="hero-subtitle mb-12">
          Freelance Graphic Designer & Video Editor
        </p>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 fade-in-up" style={{ animationDelay: '0.6s' }}>
          Creating stunning visuals and compelling stories through design and motion.
          Based in Kerala, India.
        </p>
        
        <button 
          onClick={scrollToProjects}
          className="group inline-flex items-center space-x-2 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl fade-in-up"
          style={{ animationDelay: '0.9s' }}
        >
          <span>View My Work</span>
          <ChevronDown className="group-hover:translate-y-1 transition-transform duration-300" size={20} />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;