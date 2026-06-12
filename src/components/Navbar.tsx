"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Chi Sono", href: "#about" },
    { name: "Progetti", href: "#projects" },
    { name: "Esperienza", href: "#experience" },
    { name: "Blog", href: "/blog" },
    { name: "Contatti", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary tracking-tight uppercase italic">
          Rizz&apos;s <span className="text-accent">Evo</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <ThemeSwitcher />
          <Link
            href="#contact"
            className="bg-primary text-white px-5 py-2 rounded-full text-sm font-black hover:bg-accent transition-all shadow-lg shadow-primary/20"
          >
            Lavoriamo Insieme
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeSwitcher />
          <button className="text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border absolute w-full left-0 py-6 px-4 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-secondary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
