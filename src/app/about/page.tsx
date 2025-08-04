'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Leaf, Users, Lightbulb } from 'lucide-react';

// --- Data and Constants ---
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

const initialImages = [
    '/images/about/img1.jpg', '/images/about/img2.jpg', '/images/about/img3.jpg', '/images/about/img4.jpg'
];

// --- Main Page Component ---
export default function AboutPage() {
    const timelineRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress: timelineScroll } = useScroll({
        target: timelineRef,
        offset: ["start center", "end end"]
    });
    const lineHeight = useTransform(timelineScroll, [0, 1], ["0%", "100%"]);

    const [currentImages, setCurrentImages] = useState(initialImages);

    return (
        <div className="pt-24 pb-24 bg-black text-white">

            {/* --- Hero Section --- */}
            <section className="relative text-center py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(var(--primary) 0.5px, transparent 0.5px)`,
                            backgroundSize: '30px 30px',
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

            {/* --- Enhanced Technology Section --- */}
            <motion.section
                className="py-24 px-6 relative overflow-hidden"
                onViewportEnter={() => {
                    setCurrentImages(prevImages => [...prevImages].reverse());
                }}
                viewport={{ once: false, amount: 0.5 }}
            >
                {/* New background animation */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <motion.div
                        className="absolute top-1/2 left-1/2 w-[80vw] h-[80vw] bg-radial-gradient"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 0.15, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                    />
                </div>
                
                <div className="relative z-10 max-w-lg mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl font-bold mb-4 text-balance text-white"
                    >
                        The <span className="animated-gradient-text">Core</span> of Our Technology
                    </motion.h2>
                    <motion.p
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, amount: 0.5 }}
                         transition={{ duration: 0.7, delay: 0.1 }}
                         className="text-gray-400 mb-12 max-w-2xl mx-auto"
                    >
                        From custom hardware to intelligent software, our vertically integrated stack ensures <span className="text-primary font-medium">reliability</span> and a seamless user experience.
                    </motion.p>
                    
                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                        {currentImages.map((src) => (
                            <motion.div
                                key={src}
                                layout
                                transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
                                className="relative w-full aspect-square rounded-xl overflow-hidden shadow-2xl shadow-black/50"
                            >
                                <img src={src} alt="Technology showcase" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/40"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* --- Our Philosophy Section --- */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl font-bold text-center mb-16 text-balance text-white">Our Guiding Principles</motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, i) => (
                            <motion.div
                                key={value.title}
                                className="text-center p-8 rounded-2xl bg-gray-900/50 border border-green-500/20 hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:bg-gray-900"
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

            {/* --- Vertical Timeline Section --- */}
            <section className="py-32 px-6" ref={timelineRef}>
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl font-bold text-center mb-24">Our Journey So Far</motion.h2>
                    <div className="relative">
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gray-800" />
                        <motion.div
                            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-primary shadow-[0_0_15px_var(--primary-glow)]"
                            style={{ height: lineHeight }}
                        />
                        <div className="space-y-16">
                            {timelineEvents.map((item, index) => (
                                <div
                                    key={item.year}
                                    className={`relative flex items-center w-full ${
                                        index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                                >
                                    <div className="w-full md:w-1/2">
                                        <motion.div
                                            initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, amount: 0.6 }}
                                            transition={{ duration: 0.6, ease: 'easeOut' }}
                                            className={`p-6 rounded-lg bg-gray-900/50 border border-gray-800 ml-12 md:ml-0 ${
                                                index % 2 !== 0 ? 'md:mr-14' : 'md:ml-14'
                                            } ${
                                                index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                                            }`}
                                        >
                                            <p className="text-3xl font-bold text-primary">{item.year}</p>
                                            <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                                            <p className="text-gray-400 mt-2">{item.description}</p>
                                        </motion.div>
                                    </div>
                                    <div className="hidden md:block w-1/2"></div>
                                    <motion.div
                                        className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-gray-800 border-4 border-primary -translate-x-1/2"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true, amount: 'all' }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}