"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/verification", label: "Verify" },
  { href: "/client-login", label: "Client Portal" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-solid" : "navbar-transparent"}`}>
      <div className="container nav-inner">
        <Link className="brand" href="/">
          <span>GR</span> Class
        </Link>
        <nav>
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
