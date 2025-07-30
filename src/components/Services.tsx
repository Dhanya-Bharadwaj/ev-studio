'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { id: 1, title: 'DC Fast Charging Stations', description: 'High-power charging solutions for commercial use, delivering speed and reliability to get drivers back on the road quickly.' },
  { id: 2, title: 'Level 2 Commercial Chargers', description: 'Ideal for workplaces, retail locations, and multi-unit residential buildings, offering convenient charging for longer dwell times.' },
  { id: 3, title: 'Smart Home Charging', description: 'Intelligent, connected Level 2 chargers for residential use, optimized for energy efficiency and smart home integration.' },
  { id: 4, title: 'Charging Network Software', description: 'A comprehensive platform for managing charging stations, payments, user access, and energy usage with real-time analytics.' },
];

const ChargerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12V6a2 2 0 0 1 2-2h4.5a2.5 2.5 0 0 1 0 5H7a2 2 0 0 0-2 2Z"/><path d="M5 12H3v6a2 2 0 0 0 2 2h2"/><path d="m19 12-2-4-2 4"/><path d="M15 12h6"/><path d="M12.5 4.5H14a2 2 0 0 1 2 2v2"/></svg>
);


export default function Services() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="services" 
      className="py-24 px-6 relative" 
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Mouse-following Icon */}
      <motion.div
        className="absolute top-0 left-0 text-[color:var(--primary)] pointer-events-none"
        animate={{
          x: mousePosition.x - 32, // Center the icon on the cursor
          y: mousePosition.y - 32,
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0.5,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <ChargerIcon />
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">A Full-Spectrum EV Solution</h2>
        <div className="border-t border-gray-300">
          {services.map((service) => (
            <div key={service.id} className="border-b border-gray-300 cursor-pointer" onClick={() => setOpenId(openId === service.id ? null : service.id)}>
              <div className="w-full flex justify-between items-center py-8 text-left">
                <span className="text-xl md:text-3xl font-medium">{service.title}</span>
                <motion.div animate={{ rotate: openId === service.id ? 45 : 0 }} className="text-3xl">+</motion.div>
              </div>
              <AnimatePresence>
                {openId === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}
                    exit={{ height: 0, opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 max-w-2xl text-[color:var(--muted)] text-lg">{service.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}