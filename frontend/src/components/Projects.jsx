import React, { useState } from 'react';
import { Eye, Heart } from 'lucide-react';
import { projects } from '../mock';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState(null);

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'video', label: 'Video Editing' },
    { id: 'poster', label: 'Poster Design' },
    { id: 'branding', label: 'Logo & Branding' },
    { id: 'web', label: 'Web Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-32 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            My Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A curated selection of projects showcasing creativity and attention to detail
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 fade-in-up" style={{ animationDelay: '0.2s' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat.id
                  ? 'bg-gray-900 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-lg hover:scale-105'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 fade-in-up cursor-pointer"
              style={{ animationDelay: `${0.1 * index}s` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hoveredId === project.id ? 'scale-110 brightness-75' : 'scale-100 brightness-100'
                  }`}
                />
                
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500 ${
                  hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  {/* Action icons */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                      <Eye size={18} className="text-white" />
                    </button>
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                      <Heart size={18} className="text-white" />
                    </button>
                  </div>

                  {/* View button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
                      View Project
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Bottom border animation */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;