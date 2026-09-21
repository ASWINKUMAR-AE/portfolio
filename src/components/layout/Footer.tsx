import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <a href="#home" className="flex items-center space-x-2 mb-4 interactive">
              <Code size={24} className="text-primary" />
              <span className="font-heading font-bold text-lg tracking-tight">ASWIN.DEV</span>
            </a>
            <p className="text-secondary text-sm max-w-md text-center md:text-left">
              Creating exceptional digital experiences through web development, app development, and design.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            {/* <div className="flex space-x-4 mb-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-accent rounded-full text-secondary hover:text-primary hover:bg-accent-hover transition-colors interactive"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div> */}
            <p className="text-secondary text-sm">
              &copy; {currentYear} Aswin Kumar TA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;