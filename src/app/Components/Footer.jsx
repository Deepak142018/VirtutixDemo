"use client";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-10 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Virtutix</h3>
          <p className="text-sm leading-relaxed">
            Empowering businesses with cutting-edge technology solutions in data, analytics, cloud, and security.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-white transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-white transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:text-white transition" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#home">Home</Link></li>
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#gallery">Projects</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#services">Website Design</Link></li>
            <li><Link href="#services">Data Analytics</Link></li>
            <li><Link href="#services">BI Dashboards</Link></li>
            <li><Link href="#services">Cloud & Big Data</Link></li>
            <li><Link href="#services">IoT & Automation</Link></li>
            <li><Link href="#services">Data Security</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <p className="flex items-center gap-2 text-sm">
            <FaPhoneAlt className="text-indigo-400" />
            <a href="tel:+918660106697">+91 9848022338</a>
          </p>
          <p className="flex items-center gap-2 text-sm mt-2">
            <FaEnvelope className="text-indigo-400" />
            <a href="mailto:info@virtutix.com">info@virtutix.com</a>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Virtutix. All rights reserved.
      </div>
    </footer>
  );
}
