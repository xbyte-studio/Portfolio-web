import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Briefcase, TrendingUp } from 'lucide-react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    { icon: Award, value: 98, label: 'Client Satisfaction', suffix: '%' },
    { icon: Users, value: 150, label: 'Happy Clients', suffix: '+' },
    { icon: Briefcase, value: 200, label: 'Projects Completed', suffix: '+' },
    { icon: TrendingUp, value: 95, label: 'Success Rate', suffix: '%' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={statsRef} className="py-32 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Proven Track Record
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Numbers that speak louder than words
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon: Icon, value, label, suffix, delay, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.min(Math.floor(increment * currentStep), value));
      } else {
        clearInterval(timer);
        setCount(value);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div
      className="group relative p-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Icon */}
      <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
        <Icon className="text-white" size={32} />
      </div>

      {/* Counter */}
      <div className="mb-3">
        <span className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          {count}{suffix}
        </span>
      </div>

      {/* Label */}
      <p className="text-gray-300 text-lg">{label}</p>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 -z-10" />
    </div>
  );
};

export default Stats;