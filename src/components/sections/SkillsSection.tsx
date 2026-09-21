import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedText from '../common/AnimatedText';

interface SkillItemProps {
  name: string;
  level: number;
  delay: number;
  inView: boolean;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level, delay, inView }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-primary font-medium">{name}</span>
        <span className="text-secondary text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-surface rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillsLeft = [
    { name: 'HTML & CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
  ];

  const skillsRight = [
    { name: 'UI/UX Design', level: 88 },
    { name: 'Canva', level: 95 },
    { name: 'Responsive Design', level: 92 },
    { name: 'Mobile Development', level: 78 },
  ];

  const techStack = [
    'React', 'Node.js', 'Express', 'MongoDB', 'Firebase',
    'TypeScript', 'NextJS', 'Redux', 'TailwindCSS', 'React Native',
    'Git', 'Figma', 'Canva', 'Illustrator'
  ];

  return (
    <section id="skills" className="py-24 bg-surface">
      <div ref={ref} className="section-container">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-secondary uppercase tracking-widest text-sm mb-2"
          >
            My Skills
          </motion.p>
          <AnimatedText
            text="What I Bring to the Table"
            el="h2"
            className="heading-lg text-gradient"
            once
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="heading-md mb-6">Development Skills</h3>
            {skillsLeft.map((skill, index) => (
              <SkillItem
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={0.2 + index * 0.1}
                inView={inView}
              />
            ))}
          </motion.div>

          {/* Changed x animation direction from right to left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="heading-md mb-6">Design Skills</h3>
            {skillsRight.map((skill, index) => (
              <SkillItem
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={0.4 + index * 0.1}
                inView={inView}
              />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="heading-md mb-6 text-center">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                className="px-4 py-2 bg-accent rounded-full text-sm font-medium"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
