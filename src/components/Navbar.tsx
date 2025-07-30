'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 md:px-12 md:py-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold">
          EV<span className="text-[color:var(--primary)]">Charge</span>
        </Link>
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
          <Link href="#services" className="hover:text-[color:var(--primary)] transition-colors">Services</Link>
          <Link href="#process" className="hover:text-[color:var(--primary)] transition-colors">Our Process</Link>
          <Link href="#contact" className="hover:text-[color:var(--primary)] transition-colors">Contact</Link>
        </nav>
        <Link 
          href="#contact" 
          className="bg-black text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}