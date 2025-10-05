import React from 'react';
import { contactInfo, software } from '../mock';

const About = () => {
  const keywords = ['design', 'edit', 'create'];

  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <img 
              src="https://images.unsplash.com/photo-1587522384446-64daf3e2689a" 
              alt="Creative workspace"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              About Me
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              I'm a freelance graphic designer and video editor with over 2 years of experience, 
              passionate about creating clean, impactful visuals that tell compelling stories.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With expertise in Adobe Creative Suite (Photoshop, Premiere Pro, Illustrator), CapCut, and Canva, 
              I focus on delivering designs that not only look beautiful but also serve their purpose effectively. 
              Every project is an opportunity to {' '}
              <span className="keyword-highlight">design</span> with intention, {' '}
              <span className="keyword-highlight">edit</span> with precision, and {' '}
              <span className="keyword-highlight">create</span> with passion.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Currently working at xbyte-studio Co. and serving clients globally from Kerala, India. 
              I specialize in poster design, video editing, social media ads, logo design, and flyer creation.
            </p>
            
            {/* Skills */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Software Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {software.map((tool, index) => (
                  <span 
                    key={tool}
                    className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors duration-300 fade-in-up"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600">St Mary's HSS Murickassery (2023-2026)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;