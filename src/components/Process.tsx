'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Icons for each step
const LocateIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const ConnectIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-5"/><path d="M9 17H7A5 5 0 0 1 7 7h10a5 5 0 0 1 0 10h-2"/><path d="M15 17h2"/><path d="M12 7V2"/><path d="m10 5 2-3 2 3"/></svg>;
const PowerUpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l6-6-4 6h8a2 2 0 0 1 2 2v4"/><path d="M18 9h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2"/><path d="M6 15H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/></svg>;


const steps = [
  { id: 1, title: 'Locate a Station', description: 'Use our mobile app to find thousands of available chargers near you, with real-time status and navigation.', icon: <LocateIcon /> },
  { id: 2, title: 'Connect & Authenticate', description: 'Simply plug the connector into your vehicle. Authenticate your session with a quick tap in the app or on the station screen.', icon: <ConnectIcon /> },
  { id: 3, title: 'Power Up & Go', description: 'Monitor your charging progress and receive a notification when complete. We handle the billing seamlessly.', icon: <PowerUpIcon /> }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section id="process" ref={containerRef} className="relative h-[300vh] py-24">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Simple 3-Step Process</h2>
        <p className="text-lg text-[color:var(--muted)] max-w-2xl mb-16">Charging your EV should be as simple as fueling a traditional car. We&apos;ve designed our network to be intuitive and hassle-free.</p>

        <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl mx-auto">
          {/* Left Side - Illustrations */}
          <div className="w-full md:w-1/2 h-80 relative">
            {steps.map((step, index) => {
              const start = index / steps.length;
              const end = (index + 1) / steps.length;
              const opacity = useTransform(scrollYProgress, [start, (start + end) / 2, end], [0, 1, 0]);
              
              return (
                <motion.div
                  key={step.id}
                  style={{ opacity }}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  <div className="text-[color:var(--primary)]">{step.icon}</div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side - Text Content & Progress Bar */}
          <div className="w-full md:w-1/2 relative">
             <div className="absolute top-0 left-4 h-full w-1 bg-gray-200" />
              <motion.div 
                className="absolute top-0 left-4 h-full w-1 bg-[color:var(--primary)] origin-top"
                style={{ scaleY: scrollYProgress }}
              />
            <div className="relative pl-12 space-y-24">
              {steps.map((step, index) => {
                const start = index / steps.length;
                const end = start + (1 / steps.length) * 0.8;
                const opacity = useTransform(scrollYProgress, [start - 0.1, start, end, end + 0.1], [0.3, 1, 1, 0.3]);

                return (
                  <motion.div key={step.id} style={{ opacity }} className="text-left">
                    <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-[color:var(--muted)]">{step.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}