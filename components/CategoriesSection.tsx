"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Package,
  Shirt,
  Cpu,
  Box,
  Printer,
  ShoppingBag,
  Zap,
  Shield,
  Snowflake,
  HardHat,
  Settings,
  Layers,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Packaging Solutions",
    description: "Custom boxes, bags, labels, and containers tailored to your brand",
    icon: Package,
    color: "from-blue-500 to-cyan-500",
    items: ["Custom Boxes", "Mylar Bags", "Labels & Stickers", "Bottles"],
    href: "#packaging",
    featured: true,
  },
  {
    title: "Sports & Gym Wear",
    description: "High-performance athletic apparel for professionals and enthusiasts",
    icon: Shirt,
    color: "from-purple-500 to-pink-500",
    items: ["Sports Clothing", "Gym Wear", "Track Suits", "Athletic Gear"],
    href: "#sports",
  },
  {
    title: "Street Fashion",
    description: "Trendy streetwear and casual clothing for modern lifestyles",
    icon: ShoppingBag,
    color: "from-orange-500 to-red-500",
    items: ["Street Wear", "Casual Wear", "Pajamas", "Loungewear"],
    href: "#streetwear",
  },
  {
    title: "Tactical & Military",
    description: "Professional-grade tactical gear and military equipment",
    icon: Shield,
    color: "from-green-500 to-emerald-500",
    items: ["Tactical Gear", "Camo Clothing", "Military Supplies", "Hunting Gear"],
    href: "#tactical",
  },
  {
    title: "Winter Collection",
    description: "Premium cold-weather clothing and heated accessories",
    icon: Snowflake,
    color: "from-cyan-500 to-blue-500",
    items: ["Winter Wear", "Heated Vests", "Gloves", "Balaclavas"],
    href: "#winter",
  },
  {
    title: "Industrial Machinery",
    description: "State-of-the-art packaging and printing equipment",
    icon: Cpu,
    color: "from-gray-500 to-gray-700",
    items: ["Printing Machines", "Sealing Equipment", "Filling Systems", "Packaging Lines"],
    href: "#machinery",
    featured: true,
  },
];

const CategoryCard = ({ category, index }: { category: typeof categories[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={cn(
        "relative group",
        category.featured ? "md:col-span-2" : ""
      )}
    >
      <Link href={category.href}>
        <div className="relative h-full p-8 rounded-3xl bg-navy-800/50 backdrop-blur-md border border-white/10 overflow-hidden hover:border-yellow-400/30 transition-all duration-500">
          {/* Background Gradient */}
          <div className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
            `bg-gradient-to-br ${category.color}`
          )} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent opacity-90" />

          {/* Content */}
          <div className="relative z-10">
            {/* Icon Container */}
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-md mb-6 group-hover:bg-white/20 transition-colors duration-300"
            >
              <category.icon className="w-8 h-8 text-yellow-400" />
            </motion.div>

            {/* Title & Description */}
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
              {category.title}
            </h3>
            <p className="text-white/70 mb-6 group-hover:text-white/90 transition-colors duration-300">
              {category.description}
            </p>

            {/* Items List */}
            <div className="space-y-2 mb-6">
              {category.items.slice(0, 3).map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-2 text-white/60"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 text-yellow-400 font-semibold group-hover:gap-4 transition-all duration-300">
              <span>Explore More</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl group-hover:bg-yellow-400/30 transition-colors duration-500" />
          <div className="absolute -left-10 -top-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl group-hover:bg-blue-400/30 transition-colors duration-500" />
        </div>
      </Link>
    </motion.div>
  );
};

export default function CategoriesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/20 backdrop-blur-md rounded-full mb-6"
          >
            <Layers className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-medium">Our Solutions</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
            Everything You Need,{" "}
            <span className="gradient-text">Fully Customized</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            From packaging to apparel, machinery to tactical gear – we customize everything
            to meet your exact specifications and exceed your expectations.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-white/70 mb-6 text-lg">
            Can't find what you're looking for?
          </p>
          <button className="group px-8 py-4 bg-yellow-400 text-navy-900 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/30 hover:scale-105">
            <span className="flex items-center gap-2">
              Contact Our Experts
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}