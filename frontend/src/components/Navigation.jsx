import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Albin K.
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">Work</button>
            <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            <Link 
              to="/admin" 
              className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors">About</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors">Work</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors">Services</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors">Contact</button>
            <Link to="/admin" className="block w-full text-center py-2 px-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">Admin</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;