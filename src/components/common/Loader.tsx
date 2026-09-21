import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const Loader: React.FC = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [0.8, 1.2, 1],
          opacity: 1,
        }}
        transition={{ 
          duration: 1.2,
          times: [0, 0.6, 1],
          ease: "easeInOut"
        }}
        className="mb-8"
      >
        <Code size={64} className="text-primary" />
      </motion.div>
      
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-2xl md:text-3xl font-heading font-bold mb-4"
      >
        ASWIN KUMAR TA
      </motion.h1>
      
      <div className="w-48 h-1 bg-surface overflow-hidden rounded-full">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ 
            duration: 1.5,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-4 text-secondary text-sm uppercase tracking-widest"
      >
        Developer & Designer
      </motion.p>
    </motion.div>
  );
};

export default Loader;