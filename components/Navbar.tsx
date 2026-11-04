
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "History", href: "/history" },
  { name: "Leadership", href: "/leadership" },
  { name: "Culture", href: "/culture" },
  { name: "Lithoko", href: "/lithoko" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-green-950 text-white shadow-lg">

      <div className="flex items-center justify-between px-6 py-5 md:px-8">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="text-xl font-bold tracking-wide sm:text-2xl"
        >
          Bakholokoe Heritage
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-yellow-400"
            >
              {link.name}
            </Link>
          ))}

          {/* Admin Portal */}
          <Link
            href="/admin/login"
            className="rounded-full border border-yellow-400 px-4 py-2 text-sm font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-green-950"
          >
            Admin Portal
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 transition hover:bg-green-900 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-green-950 px-6 pb-6 md:hidden">
          <div className="flex flex-col">

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/10 py-4 transition hover:text-yellow-400"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/admin/login"
              onClick={() => setIsOpen(false)}
              className="mt-5 w-fit rounded-full border border-yellow-400 px-5 py-2 font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-green-950"
            >
              Admin Portal
            </Link>

          </div>
        </div>
      )}

    </nav>
  );
}
