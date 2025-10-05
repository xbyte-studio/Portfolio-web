import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../mock';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600">
            What clients say about working with me
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative bg-white rounded-3xl shadow-2xl p-12 fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* Stars */}
          <div className="flex justify-center mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="text-yellow-400 fill-current" size={24} />
            ))}
          </div>

          {/* Content */}
          <blockquote className="text-2xl text-gray-700 text-center mb-8 leading-relaxed italic">
            "{current.content}"
          </blockquote>

          {/* Author */}
          <div className="text-center">
            <p className="text-xl font-bold text-gray-900">{current.name}</p>
            <p className="text-gray-600">{current.role}</p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-gray-900 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;