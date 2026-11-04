import Link from "next/link";
import { Menu } from "lucide-react";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "History",
    href: "/history",
  },
  {
    name: "Leadership",
    href: "/leadership",
  },
  {
    name: "Culture",
    href: "/culture",
  },
  {
    name: "Lithoko",
    href: "/lithoko",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-green-950 px-8 py-5 text-white shadow-lg">

      {/* Logo */}

      <Link
        href="/"
        className="text-2xl font-bold tracking-wide"
      >
        Bakholokoe Heritage
      </Link>

      {/* Desktop Navigation */}

      <div className="hidden gap-7 md:flex">

        {links.map((link, index) => (
          <Link
            key={index}
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

      {/* Mobile Menu */}

      <Menu
        size={30}
        className="md:hidden"
      />

    </nav>
  );
}