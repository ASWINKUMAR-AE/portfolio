import React, { useState, useEffect, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/common/Loader';
import Cursor from './components/common/Cursor';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <>
      {!isMobile && <Cursor />}
      
      <AnimatePresence>
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <>
            <Navbar />
            <main>
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading projects...</div>}>
                <ProjectsSection />
              </Suspense>
              <ContactSection />
            </main>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;