'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="pt-32 pb-24 px-6">
            <section className="text-center max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
                    Let&apos;s Connect
                </h1>
                <p className="mt-6 text-lg max-w-2xl mx-auto text-[color:var(--muted)]">
                    Have a question, a project idea, or just want to say hello? We’d love to hear from you.
                </p>
            </section>

            <motion.section 
                className="max-w-5xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 bg-[color:var(--card)] border border-[color:var(--border)] rounded-xl p-8 md:p-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                {/* Left Side: Info */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-bold">Contact Information</h2>
                    <div>
                        <div className="flex items-center gap-4">
                            <Mail className="text-[color:var(--primary)]" />
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <a href="mailto:hello@evcharge.com" className="text-[color:var(--muted)] hover:text-white">hello@evcharge.com</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-4">
                            <Phone className="text-[color:var(--primary)]" />
                            <div>
                                <h3 className="font-semibold">Phone</h3>
                                <p className="text-[color:var(--muted)]">+1 (555) 123-4567</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-4">
                            <MapPin className="text-[color:var(--primary)]" />
                            <div>
                                <h3 className="font-semibold">Office</h3>
                                <p className="text-[color:var(--muted)]">123 Electric Ave, San Francisco, CA 94107</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                        <input type="text" id="name" className="w-full bg-black border border-[color:var(--border)] rounded-md p-3 focus:ring-1 focus:ring-[color:var(--primary)] outline-none" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                        <input type="email" id="email" className="w-full bg-black border border-[color:var(--border)] rounded-md p-3 focus:ring-1 focus:ring-[color:var(--primary)] outline-none" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                        <textarea id="message" rows={5} className="w-full bg-black border border-[color:var(--border)] rounded-md p-3 focus:ring-1 focus:ring-[color:var(--primary)] outline-none"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[color:var(--primary)] text-black font-semibold py-3 rounded-md hover:bg-sky-300 transition-colors">
                        Send Message
                    </button>
                </form>
            </motion.section>
        </main>
    );
}