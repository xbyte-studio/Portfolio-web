import React from 'react';

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
              I'm a freelance graphic designer and video editor passionate about creating 
              clean, impactful visuals that tell compelling stories.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With a keen eye for detail and a love for minimalist aesthetics, I focus on 
              delivering designs that not only look beautiful but also serve their purpose 
              effectively. Every project is an opportunity to {' '}
              <span className="keyword-highlight">design</span> with intention, {' '}
              <span className="keyword-highlight">edit</span> with precision, and {' '}
              <span className="keyword-highlight">create</span> with passion.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Based in Kerala, India, I work with clients globally to bring their creative 
              visions to life through thoughtful design and seamless execution.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              {['Graphic Design', 'Video Editing', 'Brand Identity', 'Motion Graphics', 'UI/UX'].map((skill, index) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors duration-300"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;