'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const Shapes = () => {
  return (
    <>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-3, 1, -2]}>
          <torusKnotGeometry args={[1, 0.3, 128, 32]} />
          <MeshDistortMaterial color="#06b6d4" distort={0.4} speed={2} roughness={0.2} metalness={0.8} />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[4, -1, -3]}>
          <sphereGeometry args={[1.5, 64, 64]} />
          <MeshDistortMaterial color="#1d4ed8" distort={0.6} speed={3} roughness={0.1} metalness={0.9} />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={1} floatIntensity={3}>
        <mesh position={[-2, -1.8, -1]}>
          <octahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial color="#06b6d4" distort={0.1} speed={1} roughness={0.3} metalness={0.9} wireframe />
        </mesh>
      </Float>

      <ambientLight intensity={2} />
      <directionalLight position={[2, 5, 2]} intensity={4} color="#ffffff" />
      <pointLight position={[-2, -2, -2]} intensity={2} color="#06b6d4" />
    </>
  );
};

export const ImmersiveHero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black-100 flex items-center justify-center">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Shapes />
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="flex flex-col items-center text-center space-y-6"
        >
          <div className="glass px-6 py-2 rounded-full inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-white-200">Frontend Developer</span>
          </div>

          <h1 className="font-heading text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none text-white drop-shadow-2xl">
            AZIYUSMAN
          </h1>

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl md:text-3xl text-white-100 max-w-2xl font-light"
          >
            Breaking Boundaries.<br/> Building <span className="text-cyan-400 font-bold italic">Experiences.</span>
          </motion.h2>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-widest text-white-200 font-mono">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white-200 to-transparent"></div>
      </motion.div>

      {/* Smooth bottom gradient transition */}
      <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-black-100 via-black-100/50 to-transparent pointer-events-none z-10" />
    </section>
  );
};
