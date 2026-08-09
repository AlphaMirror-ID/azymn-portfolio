'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills = [
    { name: 'React', color: 'from-blue-400 to-blue-600', icon: '/re.svg' },
    {
      name: 'Javascript',
      color: 'from-yellow-400 to-yellow-600',
      icon: '/js.svg',
    },
    {
      name: 'Tailwind CSS',
      color: 'from-cyan-400 to-cyan-600',
      icon: '/tail.svg',
    },
    { name: 'TypeScript', color: 'from-blue-500 to-blue-700', icon: '/ts.svg' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="w-full py-20 md:py-32 px-6 bg-transparent relative overflow-hidden"
      id="about"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <h2
          className={`heading mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          About <span className="text-cyan-500">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div
            className={`flex justify-center lg:justify-start order-2 lg:order-1 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="relative group">
              <div className="w-80 h-80 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 group-hover:shadow-3xl">
                <Image
                  src="/profile-photo.jpg"
                  alt="Aziyusman - Full Stack Developer Profile Photo"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Enhanced decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400/30 to-pink-500/30 rounded-full blur-xl animate-pulse delay-500"></div>

              {/* Floating particles */}
              <div className="absolute top-10 -right-8 w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-300"></div>
              <div className="absolute bottom-20 -left-6 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-700"></div>
              <div className="absolute top-32 -right-12 w-4 h-4 bg-cyan-700 rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`space-y-6 order-1 lg:order-2 transform transition-all duration-1000 delay-500 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
                Hi, I&apos;m
                <span className="animate-pulse">Aziyusman!</span>
              </h2>

              <div className="space-y-4">
                <p className="text-white/80 leading-relaxed transform transition-all duration-300 hover:text-white/90">
                  I'm a frontend developer focused on building web interfaces that are responsive, clear, and comfortable to use. I enjoy working on the details that make an interface feel simple and natural, from layout and interactions to performance and responsiveness.
                </p>

                <p className="text-white/80 leading-relaxed transform transition-all duration-300 hover:text-white/90">
                  Frontend development is where I want to grow, but my projects have also taken me beyond the frontend. I've worked on full-stack web applications using technologies such as PHP, Laravel, Node.js, and MySQL, as well as software projects involving APIs, databases, and AI.
                </p>

                <p className="text-white/80 leading-relaxed transform transition-all duration-300 hover:text-white/90">
                  I'm also interested in UI/UX and visual design, especially how design decisions translate into real interfaces. For me, every project is an opportunity to learn something new, refine my workflow, and turn an idea into something that actually works.
                </p>
              </div>
            </div>

            {/* Enhanced Tech Stack */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                Currently working with:
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`group relative px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/70 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:${skill.color} hover:text-white hover:border-transparent hover:shadow-lg`}
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    style={{
                      animationDelay: `${index * 200}ms`,
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        className="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
                      />

                      {skill.name}
                    </span>

                    {/* Skill tooltip */}
                    {hoveredSkill === index && (
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap opacity-0 animate-fade-in">
                        {skill.name}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/80"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};
