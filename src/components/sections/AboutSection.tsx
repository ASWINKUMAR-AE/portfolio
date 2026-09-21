import React, { useState, useEffect } from 'react';
import { Globe, Smartphone, Palette, Award } from 'lucide-react';
import AnimatedText from '../common/AnimatedText';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = [
    {
      icon: <Globe size={32} />,
      title: 'Web Development',
      description: 'Creating responsive and performant websites with modern technologies and frameworks.'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'App Development',
      description: 'Building cross-platform mobile applications that provide excellent user experiences.'
    },
    {
      icon: <Palette size={32} />,
      title: 'Canva Design',
      description: 'Designing stunning visuals, presentations, and marketing materials.'
    },
    {
      icon: <Award size={32} />,
      title: 'Experience',
      description: '15 completed projects and growing, currently working at Zethub.'
    }
  ];

  const slideBottomToTop = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-secondary uppercase tracking-widest text-sm mb-2">
            About Me
          </p>
          <AnimatedText
            text="Who I Am & What I Do"
            el="h2"
            className="heading-lg text-gradient"
            once
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            variants={slideBottomToTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="heading-md mb-4">My Journey</h3>
            <p className="text-secondary mb-4">
              Hello! I'm Aswin Kumar TA, a passionate developer and designer with expertise in web development, 
              app development, and design. I specialize in creating digital experiences that are both beautiful 
              and functional.
            </p>
            <p className="text-secondary mb-6">
              Currently working at Zethub, I've successfully completed 15 projects across various domains. 
              I approach each project with creativity, attention to detail, and a focus on delivering solutions 
              that exceed client expectations.
            </p>
            <a
              href="#contact"
              className="px-6 py-2 bg-accent text-primary rounded-full font-medium inline-flex items-center justify-center hover:bg-accent-hover transition-colors interactive"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full"
            variants={slideBottomToTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <div key={index} className="glass p-6 rounded-lg">
                <div className="text-primary mb-4">{service.icon}</div>
                <h4 className="text-lg font-bold mb-2">{service.title}</h4>
                <p className="text-secondary text-sm">{service.description}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="glass p-8 rounded-xl"
          variants={slideBottomToTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="heading-md mb-6 text-center">Work Experience</h3>
          <div className="border-l-2 border-accent pl-8 py-4 relative">
            <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-5"></div>
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h4 className="text-xl font-bold">Developer & Designer</h4>
                <span className="text-secondary text-sm">2025 - Present</span>
              </div>
              <p className="text-primary mb-2">Zethub</p>
              <p className="text-secondary">
                Working on web and app development projects, implementing responsive designs, and
                creating user interfaces that enhance the overall user experience.
              </p>
            </div>
            <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-[105px]"></div>
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h4 className="text-xl font-bold">Student in Web Designing</h4>
                <span className="text-secondary text-sm">2022 - 2025</span>
              </div>
              <p className="text-primary mb-2">Tamil Nadu Polytechnic College, Madurai</p>
              <p className="text-secondary">
                Studied web designing and learned to design responsive websites and applications using HTML, CSS, and JavaScript.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
