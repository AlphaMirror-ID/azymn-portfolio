'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: 'Web Developer (Fulltime)',
    company: 'LEAD English Online',
    date: 'Jan 2025 – July 2025',
    desc: 'Customized UI and functionality using HTML, CSS, JavaScript, and plugin integrations. Built an online TOEFL/TOEIC/IELTS exam system using LearnDash, extended with PHP & JS.',
  },
  {
    id: 2,
    title: 'Freelance Web Developer',
    company: 'LEAD English Online',
    date: 'Oct 2024 – Dec 2024',
    desc: 'Designed and developed landing pages and online course sales pages using WordPress, WooCommerce, and Xendit. Focused on responsive layouts and seamless UX.',
  },
  {
    id: 3,
    title: 'UI/UX & Frontend (Intern)',
    company: 'Lingkar Rasio Teknologi',
    date: 'Aug 2025 – Sep 2025',
    desc: 'Worked on a web-based project for a laptop service business. Translated design concepts into responsive web pages focusing on usability and visual consistency.',
  },
];

export function ExperienceGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section ref={containerRef} className="relative py-32 bg-transparent overflow-hidden" id="timeline">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="mb-20">
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-white text-center tracking-tighter">
            My <span className="text-cyan-400">Experience</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, i) => {
            const yOffset = useTransform(scrollYProgress, [0, 1], [100 + (i * 50), -100 - (i * 50)]);
            
            return (
              <motion.div
                key={exp.id}
                style={{ y: yOffset }}
                className="glass rounded-3xl p-8 relative overflow-hidden group hover:border-cyan-400 transition-colors duration-500"
              >
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl group-hover:bg-cyan-400/40 transition-all duration-500"></div>
                
                <span className="font-mono text-cyan-400 text-sm tracking-widest">{exp.date}</span>
                <h3 className="font-heading text-2xl font-bold text-white mt-4 mb-1">{exp.title}</h3>
                <p className="text-white-200 font-semibold mb-6">{exp.company}</p>
                <p className="text-white-200/80 text-sm leading-relaxed">{exp.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative background lines */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </div>
    </section>
  );
}
