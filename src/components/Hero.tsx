'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

// By explicitly typing itemVariants with the Variants type from Framer Motion,
// we resolve the TypeScript error.
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-poster.jpg" // A poster image for faster initial load and for devices that don't autoplay
        >
          {/* Provide multiple sources for better browser compatibility */}
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <motion.div
        className="text-center px-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
          The Future of Energy,
        </motion.h1>
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-[color:var(--primary)] mb-6">
          Delivered Today.
        </motion.h1>
        <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-10">
          We&apos;re building a nationwide network of ultra-fast, reliable EV charging stations, making sustainable transportation accessible to everyone.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link href="/#process" className="inline-block bg-[color:var(--primary)] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-colors duration-300">
            How It Works
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
