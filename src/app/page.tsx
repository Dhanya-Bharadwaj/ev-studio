'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';

// Placeholder team data
const teamPreview = [
  { name: 'Dr. Aris Thorne', role: 'Chief Innovation Officer', img: '/images/team/p1.jpg' },
  { name: 'Lena Petrova', role: 'Head of Engineering', img: '/images/team/p2.jpg' },
  { name: 'Kenji Tanaka', role: 'Lead Software Architect', img: '/images/team/p3.jpg' },
  { name: 'Sofia Rossi', role: 'Director of Operations', img: '/images/team/p4.jpg' },
];

// --- NEW, MORE COMPLEX & ATTRACTIVE SVGs ---

const ScooterSVG = ({ className }: { className?: string }) => (
    // This SVG is drawn facing left, then flipped horizontally to face right.
    <svg viewBox="0 0 250 200" className={className} xmlns="http://www.w3.org/2000/svg">
        <g transform="scale(-1, 1) translate(-250, 0)">
            <g stroke="#F5F5F7" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                {/* Wheels */}
                <circle cx="60" cy="150" r="25" />
                <circle cx="190" cy="150" r="25" />
                <circle cx="60" cy="150" r="10" fill="#1A1A1A" stroke="none" />
                <circle cx="190" cy="150" r="10" fill="#1A1A1A" stroke="none" />

                {/* Main Body */}
                <path d="M 85 150 C 100 115, 130 115, 150 125 L 190 150" fill="#1A1A1A" stroke="#262626" />
                <path d="M 80 125 L 160 125 L 170 105 L 110 105 Z" fill="#F5F5F7" stroke="none" />
                
                {/* Seat */}
                <path d="M 140 105 L 180 105" strokeWidth="8" />

                {/* Handlebars & Front */}
                <path d="M 80 125 L 60 70 L 90 60" />
                <path d="M 75 60 H 105" strokeWidth="8" />
                
                {/* Front Light */}
                <path d="M 40 80 L 50 85" stroke="var(--primary)" strokeWidth="8" />
            </g>
        </g>
    </svg>
);

const ChargerSVG = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 150 250" className={className} xmlns="http://www.w3.org/2000/svg">
        <g>
            <rect x="10" y="230" width="130" height="20" rx="5" fill="#262626" />
            <path d="M 30 230 L 40 30 Q 75 10, 110 30 L 120 230 Z" fill="#1A1A1A" stroke="#262626" strokeWidth="3" />
            <rect x="50" y="50" width="50" height="70" rx="5" fill="#000" />
            {/* Animated charging bar on screen */}
            <motion.path d="M 55 100 L 95 100" stroke="var(--primary)" strokeWidth="4" strokeLinecap="round" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 5, ease: "easeInOut" }}
            />
            <path d="M 55 110 L 80 110" stroke="#8D8D8D" strokeWidth="3" strokeLinecap="round" />
            {/* Cable now emerges from the side */}
            <circle cx="110" cy="162" r="10" fill="#000" stroke="#8D8D8D" strokeWidth="2" />
        </g>
    </svg>
);

const ChargingCableSVG = ({ className }: { className?: string }) => (
    <motion.svg className={className} viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
            d="M 0,25 C 25,0 75,50 100,25"
            stroke="var(--primary)"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 4.5 }}
        />
    </motion.svg>
);

const RoadSVG = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 800 10" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="5" x2="800" y2="5" stroke="#262626" strokeWidth="10" />
        {/* Dashed lines for more detail */}
        <line x1="0" y1="5" x2="800" y2="5" stroke="#8D8D8D" strokeWidth="2" strokeDasharray="20 30" />
    </svg>
);

const BackgroundCityscapeSVG = ({className}: {className?: string}) => (
    <svg className={className} viewBox="0 0 1200 300" preserveAspectRatio="xMidYMax meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 300V200L50 180L100 220L150 150L200 250L250 200L300 230L350 180L400 260L450 220L500 280L550 200L600 250L650 180L700 240L750 190L800 270L850 210L900 250L950 170L1000 230L1050 190L1100 260L1150 200L1200 240V300H0Z" fill="#1A1A1A" />
    </svg>
);

const ElectricityBoltSVG = ({className}: {className?: string}) => (
    <motion.svg className={className} viewBox="0 0 50 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path d="M25 0 L25 20 L10 35 L35 50 L25 65 L40 80 L25 100" stroke="var(--primary)" strokeWidth="3"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.2 }}
        />
    </motion.svg>
);


export default function HomePage() {
  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 },
    },
  };

  const textItemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.7 },
    },
  };

  return (
    <main>
      <section className="h-screen relative flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-[#10021c] to-black">
        <motion.div
          className="text-center z-20 px-4 mb-64"
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={textItemVariants} className="text-5xl md:text-8xl font-extrabold tracking-tighter">
            The Future of Energy,
          </motion.h1>
          <motion.h1 variants={textItemVariants} className="text-5xl md:text-8xl font-extrabold tracking-tighter animated-gradient">
            Delivered.
          </motion.h1>
        </motion.div>

        <div className="absolute inset-0 z-10">
            <motion.div 
                className="absolute bottom-0 left-0 w-full"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 0.5, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
            >
                <BackgroundCityscapeSVG className="w-full" />
            </motion.div>

            <motion.div
                className="absolute bottom-[20%] left-0 w-full h-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <RoadSVG className="w-full h-full" />
            </motion.div>

            {/* Charger is back on the RIGHT */}
            <motion.div
                className="absolute right-[20%] bottom-[20%] w-40 md:w-48"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
            >
                <ChargerSVG />
            </motion.div>

            {/* Scooter is back on the LEFT and moves RIGHT */}
            <motion.div
                className="absolute left-[10%] bottom-[20%] w-56 md:w-64"
                initial={{ y: -800, opacity: 0 }}
                animate={{
                    y: 0,
                    x: [0, 0, 'calc(50vw - 15rem)'], // Moves right
                    opacity: 1,
                }}
                transition={{
                    y: { type: 'spring', damping: 12, stiffness: 100, duration: 1, delay: 1.5 },
                    x: { times: [0, 0.7, 1], duration: 1.5, ease: 'easeInOut', delay: 3 },
                    opacity: { duration: 0.5, delay: 1.5 },
                }}
            >
                <ScooterSVG className="scooter-float" />
            </motion.div>

            {/* Cable now starts from the charger on the right and is flipped */}
            <div className="absolute right-[calc(20%_+_3rem)] bottom-[35%] w-[calc(30vw_-_5rem)] h-16 transform -scale-x-100">
                <ChargingCableSVG className="w-full h-full" />
            </div>

            {/* New electricity charging effect */}
            <motion.div 
                className="absolute left-[calc(10%_+_50vw_-_15rem_+_10rem)] bottom-[35%] w-8 h-8 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5.5 }}
            >
                <ElectricityBoltSVG className="w-full h-full transform -rotate-90" />
            </motion.div>
        </div>
      </section>

      {/* The rest of the page remains unchanged */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Pioneering the Charge Forward.</h2>
                <p className="mt-6 text-lg text-[color:var(--muted)]">EVCharge is more than a network; we&apos;re an ecosystem dedicated to accelerating the transition to sustainable transport. We design, build, and operate the most reliable and user-friendly charging infrastructure in the world.</p>
                <Link href="/about" className="mt-8 inline-flex items-center gap-2 font-semibold text-[color:var(--primary)] hover:text-sky-300">
                    Learn More About Our Mission <ArrowRight size={20} />
                </Link>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full h-96 relative rounded-lg overflow-hidden"
            >
              <Image src="/images/about-image.jpg" alt="EVCharge engineers at work" fill className="object-cover" />
            </motion.div>
        </div>
      </section>
      
      <section className="py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
          Connecting worlds, <span className="animated-gradient">one charge at a time.</span>
        </h2>
      </section>

      <section className="py-32 px-6 bg-[color:var(--card)] border-y border-[color:var(--border)]">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Find Us Everywhere</h2>
            <p className="mt-4 text-lg text-[color:var(--muted)] max-w-2xl mx-auto">Our network is expanding daily. Find a charging point on your route.</p>
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-16 relative w-full max-w-4xl mx-auto aspect-video bg-black rounded-lg border border-[color:var(--border)]"
            >
                <p className="absolute inset-0 flex items-center justify-center text-[color:var(--muted)]">Interactive Map Visualization</p>
                <MapPin className="text-[color:var(--primary)] absolute" style={{top: '30%', left: '25%'}}/>
                <MapPin className="text-[color:var(--primary)] absolute" style={{top: '50%', left: '50%'}}/>
                <MapPin className="text-white absolute" style={{top: '45%', left: '70%'}}/>
                <MapPin className="text-white absolute" style={{top: '65%', left: '35%'}}/>
                <MapPin className="text-[color:var(--primary)] absolute" style={{top: '25%', left: '80%'}}/>
            </motion.div>
        </div>
      </section>

      <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The Minds Behind the Mission</h2>
            <p className="mt-4 text-lg text-[color:var(--muted)] max-w-2xl mx-auto">Meet some of the brilliant people powering our progress.</p>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {teamPreview.map((member, i) => (
                    <motion.div 
                        key={member.name} 
                        className="text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                        <div className="w-full aspect-square rounded-full overflow-hidden mx-auto relative mb-4">
                           <Image src={member.img} alt={member.name} fill className="object-cover" />
                        </div>
                        <h3 className="font-semibold text-lg">{member.name}</h3>
                        <p className="text-[color:var(--primary)] text-sm">{member.role}</p>
                    </motion.div>
                ))}
            </div>
            <Link href="/team" className="mt-16 inline-flex items-center gap-2 font-semibold text-white bg-[color:var(--primary)] text-black px-6 py-3 rounded-full hover:bg-sky-300 transition-colors">
                Meet The Entire Team
            </Link>
          </div>
      </section>
    </main>
  );
}
