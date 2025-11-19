"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Award, Users, Package, Globe, Star, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    icon: Package,
    value: 50000,
    suffix: "+",
    label: "Products Customized",
    color: "text-yellow-400",
  },
  {
    icon: Users,
    value: 1200,
    suffix: "+",
    label: "Happy Clients",
    color: "text-blue-400",
  },
  {
    icon: Globe,
    value: 45,
    suffix: "",
    label: "Countries Served",
    color: "text-green-400",
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Years of Excellence",
    color: "text-purple-400",
  },
];

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const [value, setValue] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        onUpdate: (value) => setValue(Math.floor(value)),
      });

      return () => controls.stop();
    }
  }, [from, to, duration, isInView]);

  return <span ref={ref}>{value.toLocaleString()}</span>;
}

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/20 backdrop-blur-md rounded-full mb-6"
            >
              <TrendingUp className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-medium">About FCP</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              We Don't Just Supply,
              <span className="block text-yellow-400 mt-2">We Customize Everything</span>
            </h2>

            <p className="text-lg text-white/70 mb-6">
              Full Custom Packaging (FCP) is your one-stop solution for all customization needs.
              From innovative packaging solutions to premium apparel and cutting-edge machinery,
              we bring your vision to life with unmatched precision and quality.
            </p>

            <p className="text-lg text-white/70 mb-8">
              Our commitment to excellence and customer satisfaction has made us a trusted partner
              for businesses worldwide. We believe that every product should tell your brand's
              unique story, and we're here to make that happen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="px-6 py-3 bg-yellow-400 text-navy-900 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25">
                  Learn More About Us
                </button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                  View Our Process
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="relative group"
              >
                <div className="p-6 rounded-2xl bg-navy-800/50 backdrop-blur-md border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex p-3 rounded-xl bg-white/10 backdrop-blur-md mb-4 group-hover:bg-white/20 transition-colors duration-300"
                  >
                    <stat.icon className={cn("w-6 h-6", stat.color)} />
                  </motion.div>

                  {/* Value */}
                  <div className={cn("text-3xl font-bold mb-2", stat.color)}>
                    <Counter from={0} to={stat.value} />
                    {stat.suffix}
                  </div>

                  {/* Label */}
                  <p className="text-white/60 text-sm">{stat.label}</p>

                  {/* Decorative Element */}
                  <div className="absolute -right-2 -top-2 w-20 h-20 bg-yellow-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-20 border-t border-white/10"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Trusted by Industry Leaders</h3>
            <p className="text-white/60">Companies worldwide rely on our expertise</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="w-32 h-16 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              >
                <span className="text-white/60 font-semibold">Partner {i}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}