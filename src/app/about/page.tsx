'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const timelineEvents = [
  { year: '2018', event: 'Company founded with a vision to revolutionize EV charging.' },
  { year: '2020', event: 'Launched our first smart home charger and network software.' },
  { year: '2022', event: 'Installed our 1,000th DC fast-charging station.' },
  { year: '2024', event: 'Reached 1 million unique charging sessions across the network.' },
];

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24 px-6">
      {/* Header Section */}
      <section className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter"
        >
          Our Journey to a <span className="animated-gradient">Greener Tomorrow</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg max-w-2xl mx-auto text-[color:var(--muted)]"
        >
          We believe in a future powered by clean energy. Our mission is to build the essential infrastructure that makes electric mobility accessible, reliable, and seamless for everyone.
        </motion.p>
      </section>

      {/* Timeline Section */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Milestones</h2>
          <div className="relative">
            {/* The vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-[color:var(--border)]" />
            
            {timelineEvents.map((item, index) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                className={`flex items-center w-full mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <p className="text-[color:var(--primary)] font-bold text-2xl">{item.year}</p>
                  <p className="text-[color:var(--muted)] mt-2">{item.event}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[color:var(--primary)] border-4 border-[color:var(--background)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}