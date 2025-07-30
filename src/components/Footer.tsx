import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[color:var(--card)] border-t border-[color:var(--border)] px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold">EV<span className="text-[color:var(--primary)]">Charge</span></h3>
          <p className="mt-2 text-sm text-[color:var(--muted)]">Charging the future, one vehicle at a time.</p>
        </div>
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="text-[color:var(--muted)] hover:text-white">About Us</Link></li>
            <li><Link href="/team" className="text-[color:var(--muted)] hover:text-white">Team</Link></li>
            <li><Link href="#" className="text-[color:var(--muted)] hover:text-white">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Support</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/contact" className="text-[color:var(--muted)] hover:text-white">Contact</Link></li>
            <li><Link href="#" className="text-[color:var(--muted)] hover:text-white">FAQ</Link></li>
            <li><Link href="#" className="text-[color:var(--muted)] hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
            <h4 className="font-semibold">Connect with Us</h4>
            {/* Add Social Icons here */}
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-[color:var(--border)] text-center text-sm text-[color:var(--muted)]">
        © {new Date().getFullYear()} EVCharge Inc. All rights reserved.
      </div>
    </footer>
  );
}