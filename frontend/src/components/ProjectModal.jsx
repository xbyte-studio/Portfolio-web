import React from 'react';
import { X, Calendar, User, ExternalLink } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fadeIn"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors z-10"
          >
            <X size={20} />
          </button>

          {/* Image */}
          <div className="relative h-96 overflow-hidden rounded-t-3xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="flex items-center space-x-3 text-sm text-gray-500 mb-4">
              <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full font-medium capitalize">
                {project.category}
              </span>
              <div className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>{project.year}</span>
              </div>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {project.title}
            </h2>

            <div className="flex items-center space-x-2 text-gray-600 mb-6">
              <User size={18} />
              <span>Client: {project.client}</span>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Project Details */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h3 className="font-semibold text-gray-900 mb-2">Category</h3>
                <p className="text-gray-600 capitalize">{project.category}</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h3 className="font-semibold text-gray-900 mb-2">Year</h3>
                <p className="text-gray-600">{project.year}</p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Close
              </button>
              <a
                href={`https://www.xbyte-studio.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105"
              >
                <span>Visit Portfolio</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;