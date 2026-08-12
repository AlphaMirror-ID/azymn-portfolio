'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '@/data';
import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa6';
import { BackgroundGrid } from './BackgroundGrid';

export const HorizontalProjects = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-transparent" id="projects">
      <BackgroundGrid side="left" />
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Title Indicator */}
        <div className="absolute top-12 md:top-16 left-1/2 -translate-x-1/2 z-20 w-full text-center mix-blend-difference px-4">
          <h2 className="heading text-white">
            Some highlights from my <span className="text-cyan-500">latest projects</span>
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-10 md:gap-20 px-20 pt-28 md:pt-36 pb-20 items-center">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative h-[50vh] w-[80vw] md:h-[60vh] md:w-[45vw] shrink-0 overflow-hidden rounded-3xl glass p-4 transition-transform duration-500 hover:scale-[1.02]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                {/* Background image / placeholder */}
                <div className="absolute inset-0 bg-black-200">
                   <Image 
                     src={project.img} 
                     alt={project.title}
                     fill
                     className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105"
                   />
                </div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 bg-gradient-to-t from-black-100 via-black-100/50 to-transparent">
                  <div className="flex flex-col gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-cyan-400 font-mono text-xs md:text-sm uppercase tracking-widest">
                      0{index + 1} — {project.role}
                    </span>
                    <h3 className="font-heading text-2xl md:text-4xl font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-white-200 text-sm md:text-base line-clamp-2 max-w-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.des}
                    </p>
                    
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center -space-x-3">
                        {project.iconLists.map((icon, index) => (
                          <div key={index} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20">
                            <img src={icon} alt="tech icon" className="w-4 h-4" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
