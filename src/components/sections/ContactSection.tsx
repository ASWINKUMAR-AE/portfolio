import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin } from 'lucide-react';
import AnimatedText from '../common/AnimatedText';

const ContactSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      info: 'aswinkumarta2006@gmail.com',
      link: 'mailto:aswinkumarta2006@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      info: '93611 09518',
      link: 'tel:+11234567890',
    },
    {
      icon: <MapPin size={24} />,
      title: 'MADURAI',
      info: 'Tamil nadu, India',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-surface relative overflow-hidden">
      {/* Animated grayscale background */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={inView ? { 
          opacity: 0.03,
          scale: 1,
          transition: { 
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1] 
          }
        } : { 
          opacity: 0,
          scale: 1.05 
        }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center filter grayscale -z-10"
      />

      <div ref={ref} className="section-container">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-secondary uppercase tracking-widest text-sm mb-2"
          >
            Get In Touch
          </motion.p>
          <AnimatedText
            text="Contact Me"
            el="h2"
            className="heading-lg text-gradient"
            once
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-secondary max-w-2xl mx-auto"
          >
            Feel free to reach out through any of these contact methods.
          </motion.p>
        </div>

        {/* Centered contact cards */}
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex items-center">
                  <div className="p-3 bg-accent rounded-lg mr-4 text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-secondary hover:text-primary transition-colors interactive"
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-secondary">{item.info}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass p-6 rounded-xl mt-8"
          >
            <h3 className="text-lg font-medium mb-4 text-center">Working Hours</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-secondary">Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary">Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary">Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;