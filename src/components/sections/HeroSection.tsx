import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { useInView } from 'react-intersection-observer';
import { ArrowDown } from 'lucide-react';
import AnimatedText from '../common/AnimatedText';
import HeroCanvas from '../three/HeroCanvas';

const HeroSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const canvasRef = useRef<HTMLDivElement>(null);

  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* 3D Background */}
      <div 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
      >
        <Canvas>
          <HeroCanvas />
        </Canvas>
      </div>
      
      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-secondary mb-4 uppercase tracking-widest text-sm"
          >
            Web Developer & App Developer
          </motion.p>
          
          <AnimatedText 
            text="ASWIN KUMAR TA"
            el="h1"
            className="heading-xl text-gradient mb-6"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <p className="text-lg md:text-xl text-secondary max-w-2xl">
              A passionate developer and designer creating exceptional digital experiences. 
              Currently working at Zethub with 15 projects completed.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-primary text-background rounded-full font-medium inline-flex items-center justify-center hover:bg-primary-hover transition-colors interactive"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-transparent border border-primary text-primary rounded-full font-medium inline-flex items-center justify-center hover:bg-primary hover:text-background transition-colors interactive"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center"
        >
          <span className="text-secondary text-sm mb-2">Scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={20} className="text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;