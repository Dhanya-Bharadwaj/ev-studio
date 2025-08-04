'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

// --- DATA UPDATED WITH EXPANDED BIODATA ---
const allTeamMembers = [
    { name: 'Dr. Aris Thorne', role: 'Chief Innovation Officer', img: '/images/team/p1.jpg', bio: 'Dr. Thorne masterfully bridges the gap between software and hardware, turning ambitious concepts into tangible realities. He is driven by a passion for pioneering next-generation transportation solutions.' },
    { name: 'Lena Petrova', role: 'Head of Engineering', img: '/images/team/p2.jpg', bio: 'Lena leads our multidisciplinary engineering teams with precision and a commitment to excellence. Her expertise ensures our projects are not only innovative but also robust, scalable, and delivered on time.' },
    { name: 'Kenji Tanaka', role: 'Lead Software Architect', img: '/images/team/p3.jpg', bio: 'Kenji is the mastermind behind our platform\'s scalable and resilient architecture. He specializes in microservices and distributed systems, ensuring our tech can handle future growth with seamless performance.' },
    { name: 'Sofia Rossi', role: 'Director of Operations', img: '/images/team/p4.jpg', bio: 'Sofia orchestrates the complex logistics and processes that keep our organization running smoothly. She is dedicated to optimizing workflows and fostering a culture of efficiency and collaboration.' },
    { name: 'Marcus Cole', role: 'Hardware Engineering Lead', img: '/images/team/p5.jpg', bio: 'Marcus leads the charge in creating our groundbreaking hardware, from initial prototype to final production. He has a keen eye for detail and a passion for integrating cutting-edge sensor technology.' },
    { name: 'Isabelle Laurent', role: 'Head of User Experience', img: '/images/team/p6.jpg', bio: 'Isabelle is a staunch advocate for the user, ensuring every interaction is intuitive, accessible, and delightful. Her research and design philosophy puts human needs at the center of our products.' },
    { name: 'David Chen', role: 'Data Scientist', img: '/images/team/p7.jpg', bio: 'David transforms complex datasets into actionable insights that guide our strategic decisions. He specializes in machine learning models that optimize performance and predict future trends.' },
    { name: 'Aisha Khan', role: 'Marketing Director', img: '/images/team/p8.jpg', bio: 'Aisha crafts the compelling narratives that connect our brand with the world. She leads our marketing efforts with creative strategies that drive growth and build a loyal community.' },
    { name: 'Ben Carter', role: 'Lead Product Manager', img: '/images/team/p3.jpg', bio: 'Ben is the voice of the customer within our walls, guiding product development from ideation to launch. He meticulously defines features that solve real-world problems for our users.' },
    { name: 'Chloe Garcia', role: 'Customer Success Lead', img: '/images/team/p4.jpg', bio: 'Chloe is dedicated to building strong, lasting relationships with our customers. She leads her team to provide exceptional support and ensures customer feedback shapes our future development.' },
    { name: 'Omar Al-Jamil', role: 'Senior Firmware Engineer', img: '/images/team/p1.jpg', bio: 'Omar specializes in writing the low-level code that powers our hardware. His expertise in embedded systems ensures our devices are reliable, efficient, and secure.' },
    { name: 'Heidi Schmidt', role: 'Lead Industrial Designer', img: '/images/team/p2.jpg', bio: 'Heidi shapes the physical form of our products, blending aesthetic appeal with ergonomic function. She believes that great design should not only look good but feel right.' },
    { name: 'Raj Patel', role: 'Cloud Infrastructure Lead', img: '/images/team/p3.jpg', bio: 'Raj manages and optimizes the cloud infrastructure that is the backbone of our services. He is an expert in automation and security, ensuring our platform is always available and protected.' },
    { name: 'Emily White', role: 'Legal Counsel', img: '/images/team/p6.jpg', bio: 'Emily provides expert legal guidance, navigating the complex regulatory landscape of the tech industry. She protects our intellectual property and ensures our business practices are sound.' },
    { name: 'Samuel Green', role: 'Financial Analyst', img: '/images/team/p5.jpg', bio: 'Samuel analyzes financial data to inform our business strategy and drive sustainable growth. His meticulous models and forecasts are crucial for our long-term planning.' },
    { name: 'Nina Simone', role: 'Public Relations Manager', img: '/images/team/p2.jpg', bio: 'Nina manages our public image and media relations, ensuring our story is told accurately and effectively. She builds key relationships with journalists and industry stakeholders.' },
    { name: 'Leo Maxwell', role: 'Mobile App Developer', img: '/images/team/p7.jpg', bio: 'Leo develops the sleek, user-friendly mobile applications that connect our users to our ecosystem. He is proficient in both iOS and Android development, creating seamless cross-platform experiences.' },
    { name: 'Grace Kim', role: 'Quality Assurance Lead', img: '/images/team/p8.jpg', bio: 'Grace is our champion for quality, ensuring every product release meets the highest standards. She develops and implements rigorous automated and manual testing strategies.' },
    { name: 'Tom Rivera', role: 'Supply Chain Manager', img: '/images/team/p1.jpg', bio: 'Tom oversees our end-to-end supply chain, from sourcing components to final delivery. He is committed to building a resilient and ethical supply network.' },
    { name: 'Yasmin Kaur', role: 'Human Resources Director', img: '/images/team/p4.jpg', bio: 'Yasmin leads our people strategy, focusing on talent development and fostering an inclusive, high-performance culture. She believes that our team is our most valuable asset.' },
];

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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                    {allTeamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            className="group text-left bg-[color:var(--card)] p-3 rounded-lg border border-[color:var(--border)] transition-transform duration-300 hover:scale-105 hover:border-[color:var(--primary)]"
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className="w-full aspect-square rounded-md overflow-hidden relative mb-4">
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-opacity duration-300 group-hover:opacity-40"
                                />
                                <div className="absolute inset-0 p-4 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <h4 className="font-bold text-base text-[color:var(--primary)]">{member.role}</h4>
                                    <p className="text-sm mt-2">{member.bio}</p>
                                </div>
                            </div>

                            <div className="transition-opacity duration-300 group-hover:opacity-0">
                                <h3 className="font-semibold text-lg">{member.name}</h3>
                                <p className="text-[color:var(--primary)] text-sm">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}