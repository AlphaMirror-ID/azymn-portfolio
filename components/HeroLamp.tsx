'use client';
import React from 'react';
import { motion } from 'framer-motion'; // Lebih umum menggunakan framer-motion
import { LampContainer } from '../components/ui/Lamp';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { MagicButton } from './ui/MagicButton';
import { FaWandMagicSparkles } from 'react-icons/fa6';

export function LampDemo() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="relative z-10 flex flex-col items-center justify-center px-4"
      >
        <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-prose text-center">
          FRONTEND DEVELOPER
        </h2>


        <TextGenerateEffect
          as="h1"
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
          words="Turning Ideas Into Interfaces That Work"
        />

        <p className="mt-4 md:tracking-wider text-sm md:text-lg lg:text-2xl max-w-prose text-center">
          I enjoy turning ideas into responsive and practical web experiences. My main focus is frontend development, while my experience across full-stack and software projects helps me understand the bigger picture behind what I build.
        </p>

        <a href="#projects" className="mt-10">
          <MagicButton
            title="See What I’ve Built"
            icon={<FaWandMagicSparkles />}
            position="right"
          />
        </a>
      </motion.div>
    </LampContainer>
  );
}
