'use client';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const RoboticArmSVG = () => (
    <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 140 H160" stroke="#262626" strokeWidth="4" />
        <rect x="70" y="110" width="60" height="30" rx="5" fill="#1A1A1A" stroke="#262626" strokeWidth="2" />
        <motion.g initial={{ rotate: -10 }} animate={{ rotate: 10 }} transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}>
            <path d="M100 110 L120 60" stroke="#8D8D8D" strokeWidth="4" />
            <path d="M120 60 L80 40" stroke="#8D8D8D" strokeWidth="4" />
            <path d="M80 40 L90 20" stroke="#00BFFF" strokeWidth="4" />
            <circle cx="120" cy="60" r="5" fill="#F5F5F7" />
            <circle cx="80" cy="40" r="5" fill="#F5F5F7" />
        </motion.g>
    </svg>
);


export default function Hero() {
  return (
    <motion.section 
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-32 pb-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-extrabold tracking-tighter">
        The Future of Energy,
      </motion.h1>
      <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-extrabold tracking-tighter text-primary">
        Delivered.
      </motion.h1>
      <motion.p variants={itemVariants} className="mt-6 max-w-2xl text-lg text-muted">
        We build the next generation of intelligent, reliable, and sustainable EV charging infrastructure for a world in motion.
      </motion.p>
      <motion.div variants={itemVariants} className="mt-16 w-full max-w-2xl h-64">
        <RoboticArmSVG />
      </motion.div>
    </motion.section>
  );
}