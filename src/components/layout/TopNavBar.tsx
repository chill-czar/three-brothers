"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function TopNavBar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/95 dark:bg-surface-dim/95 backdrop-blur-md shadow-sm transition-all duration-300" id="main-nav">
      <div className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image src="/logo.svg" alt="Three Brothers Logo" width={150} height={45} className="h-[45px] w-auto" />
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-label-lg text-label-lg transition-colors duration-300 ${
                  isActive
                    ? "text-primary dark:text-primary-fixed-dim border-b-2 border-primary dark:border-primary-fixed-dim pb-1 pointer-events-none"
                    : "text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed-dim"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        {/* Trailing Action */}
        <div className="hidden md:block">
          <button className="bg-primary hover:bg-surface-tint text-on-primary font-label-lg text-label-lg px-6 py-3 rounded-DEFAULT scale-95 active:scale-90 transition-all duration-300 shadow-md cursor-pointer">
            Book a Table
          </button>
        </div>
        {/* Mobile Menu Toggle */}
        <button aria-label="Toggle Menu" className="md:hidden text-primary p-2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </button>
      </div>
    </nav>
  );
}
