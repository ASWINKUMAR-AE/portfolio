import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseEnter = () => {
      setCursorVariant('default');
    };

    const mouseDown = () => {
      setCursorVariant('clicked');
    };

    const mouseUp = () => {
      setCursorVariant('default');
    };

    const mouseLeave = () => {
      setCursorVariant('hidden');
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseenter', mouseEnter);
    window.addEventListener('mouseleave', mouseLeave);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);

    // Add event listener to links, buttons, etc.
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => setCursorVariant('hover'));
      element.addEventListener('mouseleave', () => setCursorVariant('default'));
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseenter', mouseEnter);
      window.removeEventListener('mouseleave', mouseLeave);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', () => setCursorVariant('hover'));
        element.removeEventListener('mouseleave', () => setCursorVariant('default'));
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 24,
      width: 24,
      backgroundColor: 'rgb(255, 255, 255)',
      mixBlendMode: 'difference',
    },
    hover: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 64,
      width: 64,
      backgroundColor: 'rgb(255, 255, 255)',
      mixBlendMode: 'difference',
    },
    clicked: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 16,
      width: 16,
      backgroundColor: 'rgb(255, 255, 255)',
      mixBlendMode: 'difference',
    },
    hidden: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 0,
      width: 0,
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="custom-cursor"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: 'spring',
        mass: 0.3,
        damping: 28,
        stiffness: 700,
      }}
    />
  );
};

export default Cursor;