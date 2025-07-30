'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Leaf, Users, Lightbulb, Cpu, Layers, BrainCircuit } from 'lucide-react';

const timelineEvents = [
  { year: '2020', title: 'The Spark', description: 'EVCharge is founded with a vision to make EV charging simple and accessible for everyone.' },
  { year: '2022', title: 'First Network Live', description: 'Launched our first 100 smart chargers across California, featuring our proprietary network software.' },
  { year: '2023', title: 'Series A Funding', description: 'Secured $25M in funding to expand our operations nationwide and invest in R&D for next-gen hardware.' },
  { year: '2024', title: 'Global Expansion', description: 'Partnered with international energy providers to begin our expansion into European and Asian markets.' },
  { year: '2025', title: '1 Million Charges', description: 'Our network successfully delivered its one-millionth charging session, a major milestone for our team and users.' },
];

const values = [
    { icon: <Lightbulb size={24} />, title: "Innovation", description: "We are relentless in our pursuit of the next technological breakthrough that simplifies and enhances the EV experience." },
    { icon: <Leaf size={24} />, title: "Sustainability", description: "Our work is fundamentally dedicated to creating a healthier planet for future generations by enabling clean transport." },
    { icon: <Users size={24} />, title: "Community", description: "We are building more than a network; we're fostering a community of drivers, businesses, and partners." },
];

export default function AboutPage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end end"]
  });

  // This will animate the height of the progress line
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="pt-24 pb-24 bg-black text-white">
      {/* Header Section */}
      <section className="relative text-center py-32 px-6 overflow-hidden bg-gradient-to-b from-gray-900/50 to-black">
        <div className="absolute inset-0 z-0 opacity-10">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `radial-gradient(var(--primary) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-extrabold tracking-tighter text-balance text-white"
            >
              Engineering the <span className="animated-gradient-text">Future of Mobility</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-6 text-lg max-w-3xl mx-auto text-gray-300 text-balance"
            >
              We are more than a company; we are a catalyst for change. Our mission is to build the intelligent, reliable, and sustainable infrastructure required to power the electric revolution.
            </motion.p>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                className="text-4xl font-bold text-center mb-16 text-balance text-white">Our Philosophy</motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {values.map((value, i) => (
                      <motion.div 
                        key={value.title}
                        className="text-center p-8 rounded-2xl glass-card border-green-500/20 hover:border-primary transition-colors duration-300 hover:-translate-y-2"
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                      >
                          <div className="inline-block p-5 bg-green-900/50 rounded-full mb-6 text-primary shadow-[0_0_20px_var(--primary-glow)]">
                              {value.icon}
                          </div>
                          <h3 className="text-2xl font-semibold mb-2 text-white">{value.title}</h3>
                          <p className="text-gray-400 text-balance">{value.description}</p>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>

      {/* Vertical Timeline Section */}
      <section className="py-32 px-6" ref={timelineRef}>
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold text-center mb-24">Our Journey</motion.h2>
          <div className="relative">
            {/* The static background line */}
            <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-gray-800 rounded-full" />
            {/* The animated progress line */}
            <motion.div 
              className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-primary shadow-[0_0_15px_var(--primary-glow)] rounded-full"
              style={{ height: lineHeight }}
            />
            
            <div className="space-y-16">
            {timelineEvents.map((item, index) => (
              <motion.div 
                key={item.year}
                className="flex items-center w-full relative"
              >
                {/* Content Left */}
                <div className={`w-1/2 pr-12 ${index % 2 !== 0 ? 'invisible' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="p-6 rounded-lg glass-card text-right"
                  >
                    <p className="text-3xl font-bold text-primary">{item.year}</p>
                    <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                    <p className="text-gray-400 mt-2">{item.description}</p>
                  </motion.div>
                </div>

                {/* The center dot */}
                <motion.div 
                    className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gray-800 border-4 border-primary"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 'all' }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />
                
                {/* Content Right */}
                <div className={`w-1/2 pl-12 ${index % 2 === 0 ? 'invisible' : ''}`}>
                   <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="p-6 rounded-lg glass-card text-left"
                  >
                    <p className="text-3xl font-bold text-primary">{item.year}</p>
                    <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                    <p className="text-gray-400 mt-2">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
