'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function RevealTextScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Each word animates based on a different segment of the scroll progress
  const word1_x = useTransform(scrollYProgress, [0, 0.2], ['100%', '0%']);
  const word1_opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  
  const word2_x = useTransform(scrollYProgress, [0.2, 0.4], ['100%', '0%']);
  const word2_opacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);

  const word3_x = useTransform(scrollYProgress, [0.4, 0.6], ['100%', '0%']);
  const word3_opacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);

  // The last word fades out
  const word3_opacity_out = useTransform(scrollYProgress, [0.85, 1], [1, 0]);


  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center bg-background overflow-hidden">
        <div className="flex text-5xl md:text-8xl font-extrabold tracking-tighter text-foreground">
          <motion.h2 style={{ x: word1_x, opacity: word1_opacity }}>Simple.</motion.h2>
          <motion.h2 style={{ x: word2_x, opacity: word2_opacity }} className="ml-4">Fast.</motion.h2>
          <motion.h2 style={{ x: word3_x, opacity: word3_opacity_out }} className="ml-4 text-primary">Reliable.</motion.h2>
        </div>
      </div>
    </section>
  );
}