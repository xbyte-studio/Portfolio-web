import React from 'react';
import { Video, Image, Sparkles, Globe, ArrowRight } from 'lucide-react';
import { services } from '../mock';

const iconMap = {
  Video: Video,
  Image: Image,
  Sparkles: Sparkles,
  Globe: Globe
};

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive creative solutions tailored to bring your vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-500 fade-in-up cursor-pointer"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 mb-6 bg-gray-900 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Icon className="text-white" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-sm font-semibold text-blue-600 mb-4">
                  {service.price}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-gray-900 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Hover shadow effect */}
                <div className="absolute inset-0 rounded-3xl shadow-none group-hover:shadow-2xl transition-shadow duration-500 -z-10" />
                
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 -z-10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;