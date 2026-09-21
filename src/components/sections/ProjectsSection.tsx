import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import AnimatedText from '../common/AnimatedText';

// Project data
const projects = [

  {
    id: 6,
    title: 'Elite Hotel',
    category: 'Web Development',
    description: 'Elite Hotel is an online booking website where customers can make a booking, view the rooms, and cancel or modify their bookings.',
    image: './image/p4.png',
        technologies: ['Vue', 'AOS', 'Bootstrap', 'PHP','MySQL'],
    liveLink: 'https://zenithenggsolutions.com/',
  },
  {
    id: 5,
    title: 'ZET HUB',
    category: 'Web Development',
    description: 'Creating the ZET HUB profile page where users can view and update their profiles, and view the events they have attended.',
    image: './image/p5.png',
        technologies: ['Vue', 'AOS', 'Bootstrap', 'PHP','MySQL'],
    liveLink: 'https://zethub.in/',
  },
  {
    id: 1,
    title: 'AE Editor',
    category: 'Web Development',
    description: 'A web-based online free editor with syntax highlighting, code completion, and code refactoring.',
    image: './image/p1.png',
    technologies: ['Vue',  'AOS aniamtion','Bootstrap', 'Stripe'],
    liveLink: 'https://ae-editor.vercel.app/',
  },
  {
    id: 4,
    title: 'Zenith Engineering Solutions',
    category: 'Web Development',
    description: 'Creation of the profile page for Zenith Engineering Solutions in the ZetHub team platform.',
    image: './image/p3.png',
        technologies: ['React', 'AOS', 'Bootstrap', 'Node.js'],
    liveLink: 'https://zenithenggsolutions.com/',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A web-based online free editor with syntax highlighting, code completion, and code refactoring.',
    image: './image/p2.png',
    technologies: ['PHP', 'JAVASCRIPT', 'MySQL'],
  },
  {
    id: 3,
    title: 'Visiting card for ZETHUB',
    category: 'Canva Design',
    description: 'Design and creation of a unique visiting card for ZETHUB, showcasing the brand\'s identity and values.',
    image: './image/c1.png',
    technologies: ['Canva', 'Illustrator', 'Photoshop'],
  },

  {
    id: 5,
    title: 'Creation of the visiting card',
    category: 'Canva Design',
    description: 'Design and creation of a unique visiting card showcasing the brand\'s identity and values.',
    image: './image/c2.png',
    technologies: ['Canva', 'Photoshop'],
    liveLink: '#',
  },
];

// Filter categories
const categories = [
  'All',
  'Web Development',
  'Canva Design',
];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle animated grayscale background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.03 } : { opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center filter grayscale -z-10"
      />
      
      <div ref={ref} className="section-container">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-secondary uppercase tracking-widest text-sm mb-2"
          >
            My Portfolio
          </motion.p>
          <AnimatedText
            text="Featured Projects"
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
            Explore my latest projects showcasing my expertise in web development and design.
          </motion.p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors interactive ${
                activeCategory === category
                  ? 'bg-primary text-background'
                  : 'bg-accent text-secondary hover:text-primary'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="glass rounded-xl overflow-hidden group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-3">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-primary rounded-full text-background hover:bg-primary-hover transition-colors interactive"
                        aria-label="View live project"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-accent rounded-full text-primary hover:bg-accent-hover transition-colors interactive"
                        aria-label="View code on GitHub"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs text-secondary uppercase tracking-wider">{project.category}</span>
                <h3 className="text-xl font-bold mt-1 mb-2">{project.title}</h3>
                <p className="text-secondary text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-accent text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;