'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/verification', label: 'Vessel Verification' },
  { href: '/client-login', label: 'Client Login' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar-solid' : 'navbar-transparent'}`}>
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="GR Class Home">
          <span className="brand-mark">GR</span>
          <span>
            <strong>GR Class</strong>
            <small>Marine Safety & Compliance</small>
          </span>
        </Link>
        <nav>
          <ul className="nav-links">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
