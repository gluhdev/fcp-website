"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Package, Phone, Mail, Globe } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Solutions",
    href: "#solutions",
    submenu: [
      { title: "Packaging", href: "#packaging" },
      { title: "Printing Machines", href: "#printing" },
      { title: "Wrapping Machines", href: "#wrapping" },
      { title: "Custom Boxes", href: "#boxes" },
      { title: "Bottles & Containers", href: "#bottles" },
    ],
  },
  {
    title: "Apparel",
    href: "#apparel",
    submenu: [
      { title: "Sports & Gym", href: "#sports" },
      { title: "Street Wear", href: "#streetwear" },
      { title: "Tactical Gear", href: "#tactical" },
      { title: "Winter Collection", href: "#winter" },
      { title: "Accessories", href: "#accessories" },
    ],
  },
  {
    title: "Machinery",
    href: "#machinery",
    submenu: [
      { title: "Packaging Equipment", href: "#pack-equip" },
      { title: "Sealing Machines", href: "#sealing" },
      { title: "Printing Equipment", href: "#print-equip" },
      { title: "Filling Systems", href: "#filling" },
    ],
  },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy-900/95 backdrop-blur-xl shadow-2xl"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-50"></div>
              <Package className="w-10 h-10 text-yellow-400 relative z-10" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white font-display">FCP</h1>
              <p className="text-xs text-gray-400 -mt-1">Full Custom Packaging</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.title)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-white/90 hover:text-yellow-400 transition-colors duration-300 font-medium"
                >
                  <span>{item.title}</span>
                  {item.submenu && (
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        hoveredItem === item.title && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.submenu && hoveredItem === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-navy-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 overflow-hidden"
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <motion.div
                          key={subItem.title}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 * subIndex }}
                        >
                          <Link
                            href={subItem.href}
                            className="block px-4 py-3 text-white/80 hover:text-yellow-400 hover:bg-white/5 transition-all duration-300"
                          >
                            {subItem.title}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:flex items-center space-x-4"
          >
            <button className="px-5 py-2 text-white/90 hover:text-yellow-400 transition-colors duration-300 font-medium">
              Sign In
            </button>
            <button className="px-6 py-2.5 bg-yellow-400 text-navy-900 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25 hover:scale-105">
              Get Quote
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 p-2"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 90, opacity: 1 }}
                  exit={{ rotate: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-20 bg-navy-900/98 backdrop-blur-xl z-40"
          >
            <nav className="container mx-auto px-4 py-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="mb-4"
                >
                  <Link
                    href={item.href}
                    className="block text-xl text-white/90 hover:text-yellow-400 transition-colors duration-300 font-medium py-3"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block text-white/60 hover:text-yellow-400 transition-colors duration-300 py-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 space-y-4"
              >
                <button className="w-full py-3 text-white/90 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300">
                  Sign In
                </button>
                <button className="w-full py-3 bg-yellow-400 text-navy-900 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 shadow-lg">
                  Get Quote
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}