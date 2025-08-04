'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
// Import the 'Variants' type from framer-motion
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Navigation links data
const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/team', label: 'Our Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  // Get the current path to highlight the active link
  const pathname = usePathname();
  // State to control the mobile menu's open/closed status
  const [isOpen, setIsOpen] = useState(false);
  // State to ensure the component is mounted on the client before rendering client-side specific UI
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // After the component mounts, set isMounted to true.
    // This ensures that client-side only components are not rendered during SSR.
    setIsMounted(true);
  }, []);


  // Animation variants for the mobile menu panel.
  // Explicitly typing the object with the 'Variants' type fixes the issue.
  const menuVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -20 // Start 20px above its final position
    },
    visible: {
      opacity: 1,
      y: 0, // Animate to its final position
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    exit: {
      opacity: 0,
      y: -20, // Animate out by moving 20px up
      transition: { duration: 0.2, ease: 'easeInOut' }
    },
  };

  return (
    // The main header container. Padding has been removed from here.
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm">
      {/* The inner container now handles the padding, which prevents content from being pushed off-screen. */}
      <div className="flex justify-between items-center max-w-7xl mx-auto p-6 md:px-12 md:py-8">
        <Link href="/" className="text-2xl font-bold" onClick={() => setIsOpen(false)}>
          EV<span className="text-sky-400">Charge</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative hover:text-sky-400 transition-colors ${
                pathname === link.href ? 'text-sky-400' : ''
              }`}
            >
              {link.label}
              {/* Underline animation for the active link */}
              {pathname === link.href && (
                <motion.span
                  layoutId="underline" // This ID tells Framer Motion to animate this element between different links
                  className="absolute left-0 -bottom-1 w-full h-0.5 bg-sky-400"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop "Get a Quote" Button */}
        <Link
          href="/contact"
          className="hidden md:block bg-sky-400 text-black px-5 py-3 rounded-full text-sm font-semibold hover:bg-sky-300 transition-colors"
        >
          Get a Quote
        </Link>

        {/* Mobile Menu Button - Render only on the client to avoid hydration issues */}
        <div className="md:hidden">
          {isMounted && (
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Panel - Render only on the client */}
      {isMounted && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md shadow-lg"
            >
              <nav className="flex flex-col items-center justify-center p-8 space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-sky-400 ${
                      pathname === link.href ? 'text-sky-400' : 'text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-sky-400 text-black px-5 py-3 rounded-full text-md font-semibold hover:bg-sky-300 transition-colors mt-4"
                >
                  Get a Quote
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </header>
  );
}
