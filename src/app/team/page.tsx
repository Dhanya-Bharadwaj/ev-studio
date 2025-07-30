'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

// Expanded placeholder team data (up to 20 members)
const allTeamMembers = [
    { name: 'Dr. Aris Thorne', role: 'Chief Innovation Officer', img: '/images/team/p1.jpg' },
    { name: 'Lena Petrova', role: 'Head of Engineering', img: '/images/team/p2.jpg' },
    { name: 'Kenji Tanaka', role: 'Lead Software Architect', img: '/images/team/p3.jpg' },
    { name: 'Sofia Rossi', role: 'Director of Operations', img: '/images/team/p4.jpg' },
    { name: 'Marcus Cole', role: 'Hardware Engineering Lead', img: '/images/team/p5.jpg' },
    { name: 'Isabelle Laurent', role: 'Head of User Experience', img: '/images/team/p6.jpg' },
    { name: 'David Chen', role: 'Data Scientist', img: '/images/team/p7.jpg' },
    { name: 'Aisha Khan', role: 'Marketing Director', img: '/images/team/p8.jpg' },
    { name: 'Ben Carter', role: 'Lead Product Manager', img: '/images/team/p9.jpg' },
    { name: 'Chloe Garcia', role: 'Customer Success Lead', img: '/images/team/p10.jpg' },
    { name: 'Omar Al-Jamil', role: 'Senior Firmware Engineer', img: '/images/team/p11.jpg' },
    { name: 'Heidi Schmidt', role: 'Lead Industrial Designer', img: '/images/team/p12.jpg' },
    { name: 'Raj Patel', role: 'Cloud Infrastructure Lead', img: '/images/team/p13.jpg' },
    { name: 'Emily White', role: 'Legal Counsel', img: '/images/team/p14.jpg' },
    { name: 'Samuel Green', role: 'Financial Analyst', img: '/images/team/p15.jpg' },
    { name: 'Nina Simone', role: 'Public Relations Manager', img: '/images/team/p16.jpg' },
    { name: 'Leo Maxwell', role: 'Mobile App Developer', img: '/images/team/p17.jpg' },
    { name: 'Grace Kim', role: 'Quality Assurance Lead', img: '/images/team/p18.jpg' },
    { name: 'Tom Rivera', role: 'Supply Chain Manager', img: '/images/team/p19.jpg' },
    { name: 'Yasmin Kaur', role: 'Human Resources Director', img: '/images/team/p20.jpg' },
];

// Explicitly type the variants object with the 'Variants' type from framer-motion
const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05,
            ease: "easeOut"
        },
    }),
};

export default function TeamPage() {
    return (
        <main className="pt-32 pb-24 px-6">
            <section className="text-center max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
                    The People Powering Progress
                </h1>
                <p className="mt-6 text-lg max-w-2xl mx-auto text-[color:var(--muted)]">
                    We are a diverse team of engineers, designers, and strategists united by a single goal: to build a sustainable future for transportation.
                </p>
            </section>

            <section className="max-w-7xl mx-auto mt-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {allTeamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            className="text-left bg-[color:var(--card)] p-4 rounded-lg border border-[color:var(--border)] transition-transform duration-300 hover:scale-105 hover:border-[color:var(--primary)]"
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className="w-full aspect-square rounded-md overflow-hidden relative mb-4">
                                <Image src={member.img} alt={member.name} layout="fill" objectFit="cover" />
                            </div>
                            <h3 className="font-semibold text-lg">{member.name}</h3>
                            <p className="text-[color:var(--primary)] text-sm">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
