"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Package,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Send,
  ArrowUp,
} from "lucide-react";
import Link from "next/link";

const footerLinks = {
  solutions: [
    { name: "Custom Packaging", href: "#packaging" },
    { name: "Printing Services", href: "#printing" },
    { name: "Machinery Supply", href: "#machinery" },
    { name: "Apparel & Fashion", href: "#apparel" },
    { name: "Tactical Equipment", href: "#tactical" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Process", href: "#process" },
    { name: "Case Studies", href: "#cases" },
    { name: "Careers", href: "#careers" },
    { name: "Blog", href: "#blog" },
  ],
  support: [
    { name: "Contact Us", href: "#contact" },
    { name: "Help Center", href: "#help" },
    { name: "FAQs", href: "#faqs" },
    { name: "Shipping Info", href: "#shipping" },
    { name: "Returns", href: "#returns" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-navy-950 pt-20 pb-8">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-50"></div>
                  <Package className="w-10 h-10 text-yellow-400 relative z-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-display">FCP</h3>
                  <p className="text-xs text-gray-400">Full Custom Packaging</p>
                </div>
              </div>
              <p className="text-white/60 mb-6 max-w-sm">
                Your trusted partner for complete customization solutions. From packaging to apparel,
                we bring your vision to life with precision and excellence.
              </p>

              {/* Newsletter */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Subscribe to Our Newsletter</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-navy-800 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                  <button className="px-4 py-2 bg-yellow-400 text-navy-900 rounded-lg hover:bg-yellow-300 transition-colors">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center hover:bg-yellow-400/20 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white hover:text-yellow-400" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Solutions Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4">Solutions</h4>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-yellow-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Company Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-yellow-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Support Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-yellow-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-white/10 mb-8"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <p className="text-white/60 text-sm">Call Us</p>
              <p className="text-white font-semibold">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <p className="text-white/60 text-sm">Email Us</p>
              <p className="text-white font-semibold">info@fcpackaging.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <p className="text-white/60 text-sm">Visit Us</p>
              <p className="text-white font-semibold">123 Business Ave, NY 10001</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/40 text-sm mb-4 md:mb-0"
          >
            © 2024 Full Custom Packaging. All rights reserved.
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-6 text-sm"
          >
            <Link href="#privacy" className="text-white/40 hover:text-yellow-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="text-white/40 hover:text-yellow-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#cookies" className="text-white/40 hover:text-yellow-400 transition-colors">
              Cookie Policy
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-yellow-400 text-navy-900 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-300 transition-colors z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}