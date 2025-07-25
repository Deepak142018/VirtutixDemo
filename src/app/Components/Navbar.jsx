'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#home">
              {/* Replace this with your logo image */}
              <span className="font-bold text-lg">Virtutix</span>
              {/* Example with image: */}
              {/* <Image src="/logo.png" alt="Logo" width={120} height={40} /> */}
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="#home" className="hover:text-blue-600">Home</Link>
            <Link href="#about" className="hover:text-blue-600">About</Link>
            <Link href="#services" className="hover:text-blue-600">Services</Link>
            <Link href="#gallery" className="hover:text-blue-600">Projects</Link>
            <Link href="#contact" className="hover:text-blue-600">Contact</Link>
            
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="#home" className="block text-sm hover:text-blue-600">Home</Link>
          <Link href="#about" className="block text-sm hover:text-blue-600">About</Link>
          <Link href="#services" className="block text-sm hover:text-blue-600">Services</Link>
          <Link href="#gallery" className="block text-sm hover:text-blue-600">Gallery</Link>
          <Link href="#contact" className="block text-sm hover:text-blue-600">Contact</Link>
          <Link href="#terms" className="block text-sm hover:text-blue-600">Terms</Link>
        </div>
      )}
    </header>
  );
}
