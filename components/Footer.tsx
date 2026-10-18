'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MagicButton } from './ui/MagicButton';
import { FaLocationArrow, FaArrowUp, FaDownload } from 'react-icons/fa';
import { socialMedia } from '@/data';
import { LanyardComponent } from './ui/Lanyard';

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    // Mount ahead of time when user scrolls anywhere within 1000px of footer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldMount(true);
          observer.disconnect();
        }
      },
      { rootMargin: '1000px 0px', threshold: 0 }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    // Also mount in background after initial load (1.5s) so it's already rendered
    const timer = setTimeout(() => {
      setShouldMount(true);
    }, 1500);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className="w-full px-6 pt-10 pb-10 mt-10 md:pt-10 md:pb-10 bg-transparent relative overflow-hidden"
      id="contact"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* CTA Section */}
          <div className="flex flex-col items-start space-y-4">
            <div className="space-y-3">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                Let&apos;s build something{' '}
                <span className="text-cyan-400 font-bold italic">great</span> together.
              </h2>

              <p className="text-sm md:text-base text-white-200/80 max-w-lg leading-relaxed">
                Whether you have an idea or just want to say hi, feel free to
                reach out. I&apos;m open to meaningful collaboration and interesting
                side-projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="mailto:aziyusman18@gmail.com">
                <MagicButton
                  title="Say Hello"
                  icon={<FaLocationArrow />}
                  position="right"
                  otherClasses="!text-xs !px-4 !py-2 !gap-2"
                />
              </a>
              <a href="/Aziyusman-CV.pdf" download>
                <MagicButton
                  title="Resume"
                  icon={<FaDownload />}
                  position="right"
                  otherClasses="!text-xs !px-4 !py-2 !gap-2"
                />
              </a>
            </div>

            {/* Quick Contact Info */}
            <div className="space-y-2 pt-6">
              <div className="flex items-center gap-2 text-white-200">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
                <span className="text-xs font-semibold tracking-wide">Open to new opportunities</span>
              </div>
              <div className="text-xs text-white-200/60 font-mono tracking-wider pl-4">
                Based in Bandung, Indonesia 🇮🇩
              </div>
            </div>
          </div>

          {/* Lanyard + Social Media Section */}
          <div className="flex flex-col items-center lg:items-end space-y-6">
            <div className="w-full max-w-md glass rounded-3xl p-6 transition-all duration-500 hover:border-cyan-400/50 relative group">
              <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 relative">
                {shouldMount ? (
                  <LanyardComponent position={[0, 0, 20]} gravity={[0, -40, 0]} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-2 border-cyan-400/20 border-t-cyan-400 animate-spin" />
                  </div>
                )}
              </div>

              {/* Social Media Links */}
              <div className="flex items-center justify-center gap-4 relative z-10">
                {socialMedia.map(info => (
                  <a
                    key={info.id}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-2xl border border-white/10 hover:border-cyan-400 bg-white/5 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group/social shadow-lg"
                  >
                    <img
                      src={info.img}
                      alt={`${info.name || info.id} logo`}
                      className="w-5 h-5 opacity-70 group-hover/social:opacity-100 transition-opacity duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 mb-8 relative">
          <div className="absolute inset-0 bg-cyan-400/20 blur-xl h-px w-full"></div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent relative z-10"></div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6">
          <div className="text-center md:text-left">
            <p className="text-xs font-mono text-white-200/60 tracking-wider">
              &copy; {new Date().getFullYear()} Aziyusman. All rights reserved.
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-widest uppercase text-white-200/80 hover:text-cyan-400 transition-all duration-300 hover:bg-white/5 rounded-full border border-white/10 hover:border-cyan-400/50 relative overflow-hidden"
          >
            <span className="relative z-10">Back to top</span>
            <FaArrowUp className="w-3 h-3 group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-300 relative z-10" />
            <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-colors duration-300"></div>
          </button>
        </div>
      </div>
    </footer>
  );
};