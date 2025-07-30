'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/team', label: 'Our Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 md:px-12 md:py-8 bg-black/30 backdrop-blur-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold">
          EV<span className="text-[color:var(--primary)]">Charge</span>
        </Link>
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative hover:text-[color:var(--primary)] transition-colors ${
                pathname === link.href ? 'text-[color:var(--primary)]' : ''
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[color:var(--primary)]" />
              )}
            </Link>
          ))}
        </nav>
        <Link 
          href="/contact" 
          className="bg-[color:var(--primary)] text-black px-5 py-3 rounded-full text-sm font-semibold hover:bg-sky-300 transition-colors"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}