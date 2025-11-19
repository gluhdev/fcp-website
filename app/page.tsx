"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Package, ArrowRight, CheckCircle, Globe, Award, Users, ChevronLeft, ChevronRight, Play, Pause, Target, Zap, Shield, Phone, Mail, MapPin, Send, Menu, X, Type, ChevronUp, ChevronDown, Building2, ShoppingBag, Factory, Heart, Briefcase, Sparkles } from "lucide-react";
import { HeaderFCP } from "@/components/ui/header";
import { FontPanel } from "@/components/ui/font-panel";
import { Compare } from "@/components/ui/compare";

const fontCombinations = [
  {
    id: 1,
    name: "Modern Bold",
    heading: "Bebas Neue",
    body: "Montserrat",
    description: "Bebas Neue + Montserrat"
  },
  {
    id: 2,
    name: "Elegant Classic",
    heading: "Playfair Display",
    body: "Poppins",
    description: "Playfair Display + Poppins"
  },
  {
    id: 3,
    name: "Tech Future",
    heading: "Space Grotesk",
    body: "Inter",
    description: "Space Grotesk + Inter"
  },
  {
    id: 4,
    name: "Industrial",
    heading: "Oswald",
    body: "Roboto",
    description: "Oswald + Roboto"
  },
  {
    id: 5,
    name: "Premium",
    heading: "Bodoni Moda",
    body: "Raleway",
    description: "Bodoni Moda + Raleway"
  },
  {
    id: 6,
    name: "Minimal Pro",
    heading: "Outfit",
    body: "DM Sans",
    description: "Outfit + DM Sans"
  },
  {
    id: 7,
    name: "Friendly",
    heading: "Sora",
    body: "Nunito Sans",
    description: "Sora + Nunito Sans"
  },
  {
    id: 8,
    name: "Creative",
    heading: "Anton",
    body: "Work Sans",
    description: "Anton + Work Sans"
  },
  {
    id: 9,
    name: "Classic Lux",
    heading: "Raleway",
    body: "Lato",
    description: "Raleway + Lato"
  },
  {
    id: 10,
    name: "Space Age",
    heading: "Orbitron",
    body: "Exo 2",
    description: "Orbitron + Exo 2"
  },
  {
    id: 11,
    name: "Corporate",
    heading: "Merriweather",
    body: "Open Sans",
    description: "Merriweather + Open Sans"
  },
  {
    id: 12,
    name: "Artistic",
    heading: "Abril Fatface",
    body: "Source Sans Pro",
    description: "Abril Fatface + Source Sans Pro"
  },
  {
    id: 13,
    name: "Editorial",
    heading: "Cormorant Garamond",
    body: "Fira Sans",
    description: "Cormorant Garamond + Fira Sans"
  },
  {
    id: 14,
    name: "Dynamic",
    heading: "Teko",
    body: "Rubik",
    description: "Teko + Rubik"
  },
  {
    id: 15,
    name: "Retro",
    heading: "Righteous",
    body: "Oxygen",
    description: "Righteous + Oxygen"
  },
  {
    id: 16,
    name: "Contemporary",
    heading: "Archivo Black",
    body: "Assistant",
    description: "Archivo Black + Assistant"
  },
  {
    id: 17,
    name: "Luxe",
    heading: "Cinzel",
    body: "Quattrocento Sans",
    description: "Cinzel + Quattrocento Sans"
  },
  {
    id: 18,
    name: "Bold Impact",
    heading: "Russo One",
    body: "Karla",
    description: "Russo One + Karla"
  },
  {
    id: 19,
    name: "Sophisticated",
    heading: "Josefin Sans",
    body: "Mulish",
    description: "Josefin Sans + Mulish"
  },
  {
    id: 20,
    name: "Professional",
    heading: "IBM Plex Serif",
    body: "IBM Plex Sans",
    description: "IBM Plex Serif + IBM Plex Sans"
  }
];

const carouselItems = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?w=1920&h=1080&fit=crop",
    title: "Custom Packaging Solutions",
    subtitle: "We Customize Everything"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920",
    title: "Premium Quality Materials",
    subtitle: "Exceeding Your Expectations"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1565206077212-4eb48d41f54b?w=1920",
    title: "Industrial Excellence",
    subtitle: "State-of-the-Art Equipment"
  },
  {
    type: "video",
    src: "https://cdn.coverr.co/videos/coverr-industrial-printing-machine-4864/1080p.mp4",
    title: "Advanced Printing Technology",
    subtitle: "Precision in Every Detail"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920",
    title: "Custom Apparel Solutions",
    subtitle: "Fashion Meets Function"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedFont, setSelectedFont] = useState(fontCombinations[0]);
  const [isFontPanelOpen, setIsFontPanelOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState("restaurant");

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, currentSlide]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div style={{
      backgroundColor: "#020617",
      minHeight: "100vh",
      color: "white",
      fontFamily: `'${selectedFont.body}', sans-serif`,
      overflowX: "hidden",
      width: "100%",
      maxWidth: "100vw",
      position: "relative"
    }}>
      {/* New Font Panel Component */}
      <FontPanel
        isOpen={isFontPanelOpen}
        onClose={() => setIsFontPanelOpen(false)}
        fontCombinations={fontCombinations}
        selectedFont={selectedFont}
        onSelectFont={setSelectedFont}
        isMobile={isMobile}
      />


      <HeaderFCP selectedFont={selectedFont} onFontPanelToggle={() => setIsFontPanelOpen(!isFontPanelOpen)} />

      {/* Hero Section - Полностью адаптирован для мобильных */}
      <section style={{
        position: "relative",
        height: isMobile ? "70vh" : "100vh",
        overflow: "hidden",
        marginTop: "64px"
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#020617"
            }}
          >
            {carouselItems[currentSlide].type === "video" ? (
              <video
                autoPlay
                muted
                loop
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              >
                <source src={carouselItems[currentSlide].src} type="video/mp4" />
              </video>
            ) : (
              <div style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${carouselItems[currentSlide].src})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }} />
            )}

            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(to bottom, rgba(2, 6, 23, 0.7), rgba(2, 6, 23, 0.9))"
            }} />

            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              zIndex: 10,
              width: isMobile ? "90%" : "auto",
              padding: isMobile ? "0 1rem" : "0"
            }}>
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{
                  fontSize: isMobile ? "2rem" : "4.5rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  lineHeight: 1.1,
                  fontFamily: `'${selectedFont.heading}', serif`
                }}
              >
                {carouselItems[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{
                  fontSize: isMobile ? "1rem" : "1.5rem",
                  color: "#FFD700",
                  marginBottom: "2rem",
                  fontFamily: `'${selectedFont.body}', sans-serif`
                }}
              >
                {carouselItems[currentSlide].subtitle}
              </motion.p>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                  flexDirection: isMobile ? "column" : "row",
                  alignItems: "center"
                }}
              >
                <button style={{
                  padding: isMobile ? "0.75rem 2rem" : "1rem 2.5rem",
                  backgroundColor: "#FFD700",
                  color: "#020617",
                  border: "none",
                  borderRadius: "50px",
                  fontSize: isMobile ? "0.95rem" : "1.1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "all 0.3s",
                  fontFamily: `'${selectedFont.body}', sans-serif`,
                  width: isMobile ? "200px" : "auto",
                  justifyContent: "center"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFC700";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFD700";
                  e.currentTarget.style.transform = "translateY(0)";
                }}>
                  Get Started <ArrowRight size={20} />
                </button>
                <button style={{
                  padding: isMobile ? "0.75rem 2rem" : "1rem 2.5rem",
                  backgroundColor: "transparent",
                  color: "white",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "50px",
                  fontSize: isMobile ? "0.95rem" : "1.1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  fontFamily: `'${selectedFont.body}', sans-serif`,
                  width: isMobile ? "200px" : "auto"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#FFD700";
                  e.currentTarget.style.color = "#FFD700";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                  e.currentTarget.style.color = "white";
                }}>
                  View Portfolio
                </button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls - Адаптированы для мобильных */}
        <div style={{
          position: "absolute",
          bottom: isMobile ? "20px" : "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: isMobile ? "0.5rem" : "1rem",
          alignItems: "center",
          zIndex: 20
        }}>
          <button
            onClick={prevSlide}
            style={{
              width: isMobile ? "36px" : "48px",
              height: isMobile ? "36px" : "48px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 215, 0, 0.2)";
              e.currentTarget.style.borderColor = "#FFD700";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
            }}
          >
            <ChevronLeft size={isMobile ? 18 : 24} color="white" />
          </button>

          <div style={{ display: "flex", gap: "0.5rem" }}>
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                style={{
                  width: currentSlide === index ? (isMobile ? "24px" : "32px") : (isMobile ? "8px" : "10px"),
                  height: isMobile ? "8px" : "10px",
                  borderRadius: "5px",
                  backgroundColor: currentSlide === index ? "#FFD700" : "rgba(255, 255, 255, 0.3)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s"
                }}
              />
            ))}
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            style={{
              width: isMobile ? "36px" : "48px",
              height: isMobile ? "36px" : "48px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 215, 0, 0.2)";
              e.currentTarget.style.borderColor = "#FFD700";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
            }}
          >
            {isPlaying ? <Pause size={isMobile ? 16 : 20} color="white" /> : <Play size={isMobile ? 16 : 20} color="white" />}
          </button>

          <button
            onClick={nextSlide}
            style={{
              width: isMobile ? "36px" : "48px",
              height: isMobile ? "36px" : "48px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 215, 0, 0.2)";
              e.currentTarget.style.borderColor = "#FFD700";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
            }}
          >
            <ChevronRight size={isMobile ? 18 : 24} color="white" />
          </button>
        </div>
      </section>

      {/* About Section - Полностью адаптирован для мобильных */}
      <section id="about" style={{
        padding: isMobile ? "3rem 1rem" : "5rem 2rem",
        backgroundColor: "#0a0f2e"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{
              fontSize: isMobile ? "2rem" : "3.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              textAlign: "center",
              fontFamily: `'${selectedFont.heading}', serif`
            }}>
              About <span style={{ color: "#FFD700" }}>FCP</span>
            </h2>
            <div style={{
              width: "80px",
              height: "4px",
              backgroundColor: "#FFD700",
              margin: "0 auto 3rem",
              borderRadius: "2px"
            }} />
            <p style={{
              fontSize: isMobile ? "0.95rem" : "1.2rem",
              lineHeight: 1.7,
              color: "rgba(255, 255, 255, 0.9)",
              textAlign: "center",
              marginBottom: "3rem",
              fontFamily: `'${selectedFont.body}', sans-serif`
            }}>
              Full Custom Packaging (FCP) is your premier partner for complete customization solutions.
              We specialize in creating unique packaging designs, premium apparel, and providing
              state-of-the-art machinery solutions. With over 15 years of experience, we transform
              your ideas into reality with unmatched quality and precision.
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
              gap: isMobile ? "1rem" : "2rem"
            }}>
              {[
                { icon: Globe, title: "Global Reach", desc: "Serving clients in 50+ countries" },
                { icon: Award, title: "Quality First", desc: "ISO certified production standards" },
                { icon: Users, title: "Expert Team", desc: "200+ skilled professionals" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    padding: isMobile ? "1.5rem" : "2rem",
                    borderRadius: "15px",
                    textAlign: "center",
                    border: "1px solid rgba(255, 215, 0, 0.2)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.borderColor = "#FFD700";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(255, 215, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "rgba(255, 215, 0, 0.2)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <item.icon size={isMobile ? 40 : 48} color="#FFD700" style={{ margin: "0 auto 1rem" }} />
                  <h3 style={{
                    fontSize: isMobile ? "1.2rem" : "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                    fontFamily: `'${selectedFont.heading}', serif`
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: isMobile ? "0.9rem" : "1rem",
                    fontFamily: `'${selectedFont.body}', sans-serif`
                  }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section - 5 Main Categories */}
      <section id="services" style={{
        padding: isMobile ? "3rem 1rem" : "5rem 2rem",
        backgroundColor: "#020617"
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{
              fontSize: isMobile ? "2rem" : "3.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              textAlign: "center",
              fontFamily: `'${selectedFont.heading}', serif`
            }}>
              Our <span style={{ color: "#FFD700" }}>Solutions</span>
            </h2>
            <div style={{
              width: "80px",
              height: "4px",
              backgroundColor: "#FFD700",
              margin: "0 auto 1rem",
              borderRadius: "2px"
            }} />
            <p style={{
              fontSize: isMobile ? "0.95rem" : "1.2rem",
              lineHeight: 1.7,
              color: "rgba(255, 255, 255, 0.9)",
              textAlign: "center",
              marginBottom: "3rem",
              fontFamily: `'${selectedFont.body}', sans-serif`,
              maxWidth: "800px",
              margin: "0 auto 3rem"
            }}>
              Explore our comprehensive range of customization solutions designed to meet all your business needs
            </p>

            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? "2rem" : "3rem"
            }}>
              {[
                {
                  title: "Packaging Solutions",
                  subtitle: "Complete End-to-End Packaging Services",
                  description: "Transform your packaging with our comprehensive solutions. We provide state-of-the-art printing machines for high-quality labels and packaging designs, automated filling systems for various products, professional wrapping machines, and custom boxes in all sizes and materials.",
                  detailedInfo: "Our packaging division specializes in creating unique packaging experiences that protect your products and enhance your brand. From eco-friendly options to luxury packaging, we handle everything from design to production.",
                  icon: "📦",
                  image: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?w=1200&h=600&fit=crop",
                  href: "/packaging",
                  features: ["Printing Machines", "Filling Equipment", "Wrapping Systems", "Custom Boxes", "Glass & Plastic Bottles", "Mylar Bags", "Labels & Stickers"],
                  stats: [
                    { label: "Products", value: "500+" },
                    { label: "Clients Served", value: "2000+" },
                    { label: "Countries", value: "50+" }
                  ]
                },
                {
                  title: "Apparel for Men & Women",
                  subtitle: "Premium Clothing & Fashion Solutions",
                  description: "Discover our extensive range of custom apparel solutions. From high-performance sports wear and gym clothing to tactical gear and winter collections, we provide quality garments for every need and occasion.",
                  detailedInfo: "Our apparel division combines fashion with functionality. We use premium materials, advanced manufacturing techniques, and offer complete customization including embroidery, printing, and branding options.",
                  icon: "👕",
                  image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1200&h=600&fit=crop",
                  href: "/apparel",
                  features: ["Sports & Gym Wear", "Street Fashion", "Tactical Gear", "Winter Collection", "Heated Apparel", "Swim Wear", "Track Suits", "Accessories"],
                  stats: [
                    { label: "Styles", value: "1000+" },
                    { label: "Materials", value: "200+" },
                    { label: "MOQ", value: "50 pcs" }
                  ]
                },
                {
                  title: "Machinery & Supplies",
                  subtitle: "Industrial Equipment & Automation",
                  description: "Power your production with our industrial machinery solutions. We offer packaging equipment, sealing systems, cutting machines, textile printing technology, and fully automated production lines.",
                  detailedInfo: "Our machinery division provides cutting-edge equipment with installation, training, and ongoing support. All machines come with warranties and are certified to international standards.",
                  icon: "⚙️",
                  image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1200&h=600&fit=crop",
                  href: "/machinery",
                  features: ["Packaging Machines", "Sealing Equipment", "Cutting Systems", "Printing Technology", "Filling Machines", "Automation Solutions", "Spare Parts", "Maintenance"],
                  stats: [
                    { label: "Machine Types", value: "150+" },
                    { label: "Brands", value: "30+" },
                    { label: "Service Centers", value: "15" }
                  ]
                },
                {
                  title: "Signage & Display",
                  subtitle: "Visual Marketing & Branding Solutions",
                  description: "Make your brand visible with our professional signage solutions. From large format LED displays to custom business cards, we create impactful visual marketing materials that capture attention.",
                  detailedInfo: "Our signage division combines traditional and digital solutions. We use the latest printing technologies, premium materials, and offer complete design services to ensure your brand stands out.",
                  icon: "🎯",
                  image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
                  href: "/signage",
                  features: ["LED Displays", "Light Signs", "Banners & Posters", "Business Cards", "Notebooks & Pens", "Calendars", "Window Graphics", "Vehicle Wraps"],
                  stats: [
                    { label: "Sign Types", value: "200+" },
                    { label: "Print Options", value: "100+" },
                    { label: "Same Day", value: "Available" }
                  ]
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    borderRadius: "25px",
                    overflow: "hidden",
                    border: "1px solid rgba(255, 215, 0, 0.15)",
                    transition: "all 0.4s",
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : index % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
                    alignItems: "center",
                    marginBottom: isMobile ? "2rem" : "3rem"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.borderColor = "rgba(255, 215, 0, 0.4)";
                    e.currentTarget.style.boxShadow = "0 30px 60px rgba(255, 215, 0, 0.15)";
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "rgba(255, 215, 0, 0.15)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
                  }}
                >
                  {/* Content Section */}
                  <div style={{
                    padding: isMobile ? "1.5rem" : "2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    order: isMobile ? 2 : index % 2 === 0 ? 1 : 2
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "1rem"
                    }}>
                      <div style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "rgba(255, 215, 0, 0.1)",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                        border: "2px solid rgba(255, 215, 0, 0.3)",
                        flexShrink: 0
                      }}>
                        {category.icon}
                      </div>
                      <div>
                        <h3 style={{
                          fontSize: isMobile ? "1.3rem" : "1.6rem",
                          fontWeight: "bold",
                          color: "#FFD700",
                          fontFamily: `'${selectedFont.heading}', serif`,
                          marginBottom: "0.15rem",
                          lineHeight: 1.2
                        }}>
                          {category.title}
                        </h3>
                        <p style={{
                          fontSize: isMobile ? "0.8rem" : "0.9rem",
                          color: "rgba(255, 255, 255, 0.6)",
                          fontFamily: `'${selectedFont.body}', sans-serif`,
                          lineHeight: 1.2
                        }}>
                          {category.subtitle}
                        </p>
                      </div>
                    </div>

                    <p style={{
                      fontSize: isMobile ? "0.85rem" : "0.95rem",
                      lineHeight: 1.5,
                      color: "rgba(255, 255, 255, 0.9)",
                      marginBottom: "0.75rem",
                      fontFamily: `'${selectedFont.body}', sans-serif`
                    }}>
                      {category.description}
                    </p>

                    <p style={{
                      fontSize: isMobile ? "0.8rem" : "0.85rem",
                      lineHeight: 1.4,
                      color: "rgba(255, 255, 255, 0.7)",
                      marginBottom: "1rem",
                      fontFamily: `'${selectedFont.body}', sans-serif`
                    }}>
                      {category.detailedInfo}
                    </p>

                    {/* Features List */}
                    <div style={{
                      marginBottom: "1rem"
                    }}>
                      <h4 style={{
                        fontSize: isMobile ? "1rem" : "1.2rem",
                        fontWeight: "bold",
                        color: "white",
                        marginBottom: "1rem",
                        fontFamily: `'${selectedFont.heading}', serif`
                      }}>
                        What We Offer:
                      </h4>
                      <div style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                        gap: "0.75rem"
                      }}>
                        {category.features.slice(0, 6).map((feature, i) => (
                          <div key={i} style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem"
                          }}>
                            <CheckCircle size={14} color="#FFD700" />
                            <span style={{
                              color: "rgba(255, 255, 255, 0.85)",
                              fontSize: isMobile ? "0.8rem" : "0.85rem",
                              fontFamily: `'${selectedFont.body}', sans-serif`,
                              lineHeight: 1.3
                            }}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>


                    {/* CTA Button */}
                    <a
                      href={category.href}
                      style={{
                        padding: isMobile ? "1rem 2rem" : "1.2rem 2.5rem",
                        backgroundColor: "#FFD700",
                        color: "#020617",
                        border: "none",
                        borderRadius: "30px",
                        fontSize: isMobile ? "1rem" : "1.1rem",
                        fontWeight: "bold",
                        cursor: "pointer",
                        transition: "all 0.3s",
                        textAlign: "center",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.75rem",
                        fontFamily: `'${selectedFont.body}', sans-serif`,
                        alignSelf: "flex-start"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 10px 25px rgba(255, 215, 0, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      Explore {category.title}
                      <ArrowRight size={20} />
                    </a>
                  </div>

                  {/* Image Section */}
                  <div style={{
                    position: "relative",
                    overflow: "hidden",
                    height: isMobile ? "300px" : "400px",
                    order: isMobile ? 1 : index % 2 === 0 ? 2 : 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: index === 0 ? "transparent" : "rgba(2, 6, 23, 0.5)"
                  }}>
                    {index === 0 ? (
                      // Compare slider for Packaging Solutions
                      <div style={{
                        width: "100%",
                        height: "100%",
                        position: "relative"
                      }}>
                        <Compare
                          firstImage="/generated-image-november-18.png"
                          secondImage="/image-34.png"
                          slideMode="hover"
                          autoplay={true}
                          autoplayDuration={3000}
                        />
                      </div>
                    ) : (
                      <>
                        <img
                          src={category.image}
                          alt={category.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            position: "absolute",
                            top: 0,
                            left: 0
                          }}
                        />
                      </>
                    )}
                    <div style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "linear-gradient(135deg, rgba(2, 6, 23, 0.4) 0%, rgba(2, 6, 23, 0.8) 100%)"
                    }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Help Business - Enhanced Step-by-Step Process */}
      <section id="help-business" style={{
        padding: isMobile ? "3rem 1rem" : "6rem 2rem",
        backgroundColor: "#0a0f2e",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Background decoration */}
        <div style={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 215, 0, 0.05) 0%, transparent 70%)",
          filter: "blur(40px)"
        }} />

        <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Header Section */}
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{
                fontSize: isMobile ? "2rem" : "3.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                fontFamily: `'${selectedFont.heading}', serif`
              }}>
                How We Help <span style={{ color: "#FFD700" }}>Your Business</span>
              </h2>
              <div style={{
                width: "80px",
                height: "4px",
                backgroundColor: "#FFD700",
                margin: "0 auto 2rem",
                borderRadius: "2px"
              }} />
              <p style={{
                fontSize: isMobile ? "1rem" : "1.3rem",
                lineHeight: 1.8,
                color: "rgba(255, 255, 255, 0.9)",
                maxWidth: "900px",
                margin: "0 auto",
                fontFamily: `'${selectedFont.body}', sans-serif`
              }}>
                We don't just supply products – we become your manufacturing partner. While you handle the design,
                we provide complete production expertise, recommendations, and support to bring your vision to life.
              </p>
            </div>

            {/* Our Approach Section */}
            <div style={{
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              borderRadius: "25px",
              padding: isMobile ? "2rem" : "3rem",
              marginBottom: "4rem",
              border: "1px solid rgba(255, 215, 0, 0.15)"
            }}>
              <h3 style={{
                fontSize: isMobile ? "1.5rem" : "2rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
                color: "#FFD700",
                fontFamily: `'${selectedFont.heading}', serif`
              }}>
                Our Unique Approach
              </h3>
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                gap: "2rem"
              }}>
                <div>
                  <h4 style={{
                    fontSize: isMobile ? "1.1rem" : "1.3rem",
                    fontWeight: "bold",
                    marginBottom: "0.75rem",
                    color: "white",
                    fontFamily: `'${selectedFont.heading}', serif`
                  }}>
                    🎯 Production Expertise
                  </h4>
                  <p style={{
                    fontSize: isMobile ? "0.9rem" : "1rem",
                    lineHeight: 1.7,
                    color: "rgba(255, 255, 255, 0.8)",
                    fontFamily: `'${selectedFont.body}', sans-serif`
                  }}>
                    We analyze your requirements and recommend the best materials, techniques, and processes
                    for optimal quality and cost-efficiency.
                  </p>
                </div>
                <div>
                  <h4 style={{
                    fontSize: isMobile ? "1.1rem" : "1.3rem",
                    fontWeight: "bold",
                    marginBottom: "0.75rem",
                    color: "white",
                    fontFamily: `'${selectedFont.heading}', serif`
                  }}>
                    🔧 Technical Support
                  </h4>
                  <p style={{
                    fontSize: isMobile ? "0.9rem" : "1rem",
                    lineHeight: 1.7,
                    color: "rgba(255, 255, 255, 0.8)",
                    fontFamily: `'${selectedFont.body}', sans-serif`
                  }}>
                    Our engineers work with your designs to ensure manufacturability, suggest improvements,
                    and solve technical challenges.
                  </p>
                </div>
                <div>
                  <h4 style={{
                    fontSize: isMobile ? "1.1rem" : "1.3rem",
                    fontWeight: "bold",
                    marginBottom: "0.75rem",
                    color: "white",
                    fontFamily: `'${selectedFont.heading}', serif`
                  }}>
                    🤝 Full Partnership
                  </h4>
                  <p style={{
                    fontSize: isMobile ? "0.9rem" : "1rem",
                    lineHeight: 1.7,
                    color: "rgba(255, 255, 255, 0.8)",
                    fontFamily: `'${selectedFont.body}', sans-serif`
                  }}>
                    From initial consultation to final delivery, we're with you every step, providing
                    updates, samples, and quality assurance.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Business Type Selector */}
            <div style={{
              backgroundColor: "rgba(255, 215, 0, 0.05)",
              borderRadius: "30px",
              padding: isMobile ? "2rem 1rem" : "3rem",
              marginBottom: "4rem",
              border: "2px solid rgba(255, 215, 0, 0.2)"
            }}>
              <h3 style={{
                fontSize: isMobile ? "1.5rem" : "2rem",
                fontWeight: "bold",
                marginBottom: "2rem",
                textAlign: "center",
                color: "#FFD700",
                fontFamily: `'${selectedFont.heading}', serif`
              }}>
                Select Your Business Type
              </h3>

              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
                gap: isMobile ? "1rem" : "1.5rem",
                marginBottom: "3rem"
              }}>
                {[
                  { id: "restaurant", icon: "🍽️", label: "Restaurant & Cafe" },
                  { id: "retail", icon: "🛍️", label: "Retail Store" },
                  { id: "manufacturing", icon: "🏭", label: "Manufacturing" },
                  { id: "healthcare", icon: "🏥", label: "Healthcare" },
                  { id: "ecommerce", icon: "📦", label: "E-Commerce" },
                  { id: "corporate", icon: "🏢", label: "Corporate" }
                ].map((business) => (
                  <motion.button
                    key={business.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedBusiness(business.id)}
                    style={{
                      backgroundColor: selectedBusiness === business.id ? "rgba(255, 215, 0, 0.2)" : "rgba(255, 255, 255, 0.05)",
                      border: selectedBusiness === business.id ? "2px solid #FFD700" : "2px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "15px",
                      padding: isMobile ? "1rem" : "1.5rem",
                      cursor: "pointer",
                      transition: "all 0.3s",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.5rem"
                    }}
                  >
                    <div style={{ fontSize: isMobile ? "2rem" : "2.5rem" }}>{business.icon}</div>
                    <span style={{
                      color: selectedBusiness === business.id ? "#FFD700" : "white",
                      fontSize: isMobile ? "0.85rem" : "1rem",
                      fontWeight: selectedBusiness === business.id ? "bold" : "normal",
                      fontFamily: `'${selectedFont.body}', sans-serif`,
                      textAlign: "center"
                    }}>
                      {business.label}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* Dynamic Content Based on Selection */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedBusiness}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundColor: "rgba(2, 6, 23, 0.8)",
                    borderRadius: "20px",
                    padding: isMobile ? "1.5rem" : "2.5rem",
                    border: "1px solid rgba(255, 215, 0, 0.3)"
                  }}
                >
                  {selectedBusiness === "restaurant" && (
                    <div>
                      <h4 style={{
                        fontSize: isMobile ? "1.3rem" : "1.8rem",
                        fontWeight: "bold",
                        marginBottom: "1rem",
                        color: "#FFD700",
                        fontFamily: `'${selectedFont.heading}', serif`
                      }}>
                        Solutions for Restaurants & Cafes
                      </h4>
                      <p style={{
                        fontSize: isMobile ? "0.95rem" : "1.1rem",
                        lineHeight: 1.7,
                        color: "rgba(255, 255, 255, 0.9)",
                        marginBottom: "1.5rem",
                        fontFamily: `'${selectedFont.body}', sans-serif`
                      }}>
                        Transform your restaurant's brand with custom packaging that enhances customer experience and builds loyalty.
                      </p>
                      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: "1rem", marginBottom: "1.5rem" }}>
                        {[
                          "Custom takeout boxes with your logo",
                          "Eco-friendly packaging options",
                          "Branded napkins and utensils",
                          "Menu design and printing",
                          "Delivery bag customization",
                          "Seasonal packaging campaigns"
                        ].map((item, idx) => (
                          <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <CheckCircle size={16} color="#FFD700" />
                            <span style={{ color: "white", fontSize: isMobile ? "0.9rem" : "1rem", fontFamily: `'${selectedFont.body}', sans-serif` }}>{item}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          style={{
                            padding: isMobile ? "0.75rem 1.5rem" : "1rem 2rem",
                            backgroundColor: "#FFD700",
                            color: "#020617",
                            border: "none",
                            borderRadius: "10px",
                            fontSize: isMobile ? "0.95rem" : "1.1rem",
                            fontWeight: "bold",
                            cursor: "pointer",
                            fontFamily: `'${selectedFont.body}', sans-serif`
                          }}
                        >
                          Get Restaurant Solutions
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          style={{
                            padding: isMobile ? "0.75rem 1.5rem" : "1rem 2rem",
                            backgroundColor: "transparent",
                            color: "#FFD700",
                            border: "2px solid #FFD700",
                            borderRadius: "10px",
                            fontSize: isMobile ? "0.95rem" : "1.1rem",
                            fontWeight: "bold",
                            cursor: "pointer",
                            fontFamily: `'${selectedFont.body}', sans-serif`
                          }}
                        >
                          View Portfolio
                        </motion.button>
                      </div>
                    </div>
                  )}

                  {selectedBusiness === "retail" && (
                    <div>
                      <h4 style={{
                        fontSize: isMobile ? "1.3rem" : "1.8rem",
                        fontWeight: "bold",
                        marginBottom: "1rem",
                        color: "#FFD700",
                        fontFamily: `'${selectedFont.heading}', serif`
                      }}>
                        Solutions for Retail Stores
                      </h4>
                      <p style={{
                        fontSize: isMobile ? "0.95rem" : "1.1rem",
                        lineHeight: 1.7,
                        color: "rgba(255, 255, 255, 0.9)",
                        marginBottom: "1.5rem",
                        fontFamily: `'${selectedFont.body}', sans-serif`
                      }}>
                        Elevate your retail experience with premium packaging and signage that drives sales and customer satisfaction.
                      </p>
                      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: "1rem", marginBottom: "1.5rem" }}>
                        {[
                          "Shopping bags with custom branding",
                          "Product display solutions",
                          "Window and in-store signage",
                          "Gift wrapping options",
                          "Loyalty cards and programs",
                          "Seasonal promotional materials"
                        ].map((item, idx) => (
                          <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <CheckCircle size={16} color="#FFD700" />
                            <span style={{ color: "white", fontSize: isMobile ? "0.9rem" : "1rem", fontFamily: `'${selectedFont.body}', sans-serif` }}>{item}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          style={{
                            padding: isMobile ? "0.75rem 1.5rem" : "1rem 2rem",
                            backgroundColor: "#FFD700",
                            color: "#020617",
                            border: "none",
                            borderRadius: "10px",
                            fontSize: isMobile ? "0.95rem" : "1.1rem",
                            fontWeight: "bold",
                            cursor: "pointer",
                            fontFamily: `'${selectedFont.body}', sans-serif`
                          }}
                        >
                          Get Retail Solutions
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          style={{
                            padding: isMobile ? "0.75rem 1.5rem" : "1rem 2rem",
                            backgroundColor: "transparent",
                            color: "#FFD700",
                            border: "2px solid #FFD700",
                            borderRadius: "10px",
                            fontSize: isMobile ? "0.95rem" : "1.1rem",
                            fontWeight: "bold",
                            cursor: "pointer",
                            fontFamily: `'${selectedFont.body}', sans-serif`
                          }}
                        >
                          See Examples
                        </motion.button>
                      </div>
                    </div>
                  )}

                  {selectedBusiness === "manufacturing" && (
                    <div>
                      <h4 style={{
                        fontSize: isMobile ? "1.3rem" : "1.8rem",
                        fontWeight: "bold",
                        marginBottom: "1rem",
                        color: "#FFD700",
                        fontFamily: `'${selectedFont.heading}', serif`
                      }}>
                        Solutions for Manufacturing
                      </h4>
                      <p style={{
                        fontSize: isMobile ? "0.95rem" : "1.1rem",
                        lineHeight: 1.7,
                        color: "rgba(255, 255, 255, 0.9)",
                        marginBottom: "1.5rem",
                        fontFamily: `'${selectedFont.body}', sans-serif`
                      }}>
                        Optimize your production with industrial machinery and packaging solutions designed for efficiency and scale.
                      </p>
                      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: "1rem", marginBottom: "1.5rem" }}>
                        {[
                          "Automated packaging machinery",
                          "Bulk packaging materials",
                          "Industrial labeling systems",
                          "Quality control equipment",
                          "Warehouse signage solutions",
                          "Safety and compliance materials"
                        ].map((item, idx) => (
                          <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <CheckCircle size={16} color="#FFD700" />
                            <span style={{ color: "white", fontSize: isMobile ? "0.9rem" : "1rem", fontFamily: `'${selectedFont.body}', sans-serif` }}>{item}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          style={{
                            padding: isMobile ? "0.75rem 1.5rem" : "1rem 2rem",
                            backgroundColor: "#FFD700",
                            color: "#020617",
                            border: "none",
                            borderRadius: "10px",
                            fontSize: isMobile ? "0.95rem" : "1.1rem",
                            fontWeight: "bold",
                            cursor: "pointer",
                            fontFamily: `'${selectedFont.body}', sans-serif`
                          }}
                        >
                          Industrial Solutions
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          style={{
                            padding: isMobile ? "0.75rem 1.5rem" : "1rem 2rem",
                            backgroundColor: "transparent",
                            color: "#FFD700",
                            border: "2px solid #FFD700",
                            borderRadius: "10px",
                            fontSize: isMobile ? "0.95rem" : "1.1rem",
                            fontWeight: "bold",
                            cursor: "pointer",
                            fontFamily: `'${selectedFont.body}', sans-serif`
                          }}
                        >
                          Request Quote
                        </motion.button>
                      </div>
                    </div>
                  )}

                  {(selectedBusiness === "healthcare" || selectedBusiness === "ecommerce" || selectedBusiness === "corporate") && (
                    <div>
                      <h4 style={{
                        fontSize: isMobile ? "1.3rem" : "1.8rem",
                        fontWeight: "bold",
                        marginBottom: "1rem",
                        color: "#FFD700",
                        fontFamily: `'${selectedFont.heading}', serif`
                      }}>
                        Custom Solutions for {
                          selectedBusiness === "healthcare" ? "Healthcare" :
                          selectedBusiness === "ecommerce" ? "E-Commerce" :
                          "Corporate Businesses"
                        }
                      </h4>
                      <p style={{
                        fontSize: isMobile ? "0.95rem" : "1.1rem",
                        lineHeight: 1.7,
                        color: "rgba(255, 255, 255, 0.9)",
                        marginBottom: "1.5rem",
                        fontFamily: `'${selectedFont.body}', sans-serif`
                      }}>
                        We provide specialized solutions tailored to your industry's unique requirements and compliance standards.
                      </p>
                      <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          style={{
                            padding: isMobile ? "0.75rem 1.5rem" : "1rem 2rem",
                            backgroundColor: "#FFD700",
                            color: "#020617",
                            border: "none",
                            borderRadius: "10px",
                            fontSize: isMobile ? "0.95rem" : "1.1rem",
                            fontWeight: "bold",
                            cursor: "pointer",
                            fontFamily: `'${selectedFont.body}', sans-serif`
                          }}
                        >
                          Discuss Your Needs
                        </motion.button>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Step-by-Step Process */}
            <div style={{ marginBottom: "4rem" }}>
              <h3 style={{
                fontSize: isMobile ? "1.8rem" : "2.5rem",
                fontWeight: "bold",
                marginBottom: "3rem",
                textAlign: "center",
                color: "white",
                fontFamily: `'${selectedFont.heading}', serif`
              }}>
                Our Step-by-Step Process
              </h3>

              <div style={{ position: "relative" }}>
                {/* Connection Line */}
                {!isMobile && (
                  <div style={{
                    position: "absolute",
                    top: "60px",
                    left: "50px",
                    right: "50px",
                    height: "2px",
                    background: "linear-gradient(90deg, #FFD700 0%, #FFD700 25%, rgba(255, 215, 0, 0.3) 25%, rgba(255, 215, 0, 0.3) 50%, rgba(255, 215, 0, 0.3) 50%, rgba(255, 215, 0, 0.3) 75%, rgba(255, 215, 0, 0.3) 75%, rgba(255, 215, 0, 0.3) 100%)",
                    zIndex: 0
                  }} />
                )}

                <div style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
                  gap: isMobile ? "3rem" : "2rem",
                  position: "relative",
                  zIndex: 1
                }}>
                  {[
                    {
                      step: "01",
                      title: "Consultation",
                      description: "Share your design and requirements",
                      details: "We analyze your needs, discuss quantities, timeline, and budget. Our experts review your designs for manufacturability.",
                      icon: "💬",
                      tasks: ["Requirements Analysis", "Feasibility Study", "Budget Planning", "Timeline Setup"]
                    },
                    {
                      step: "02",
                      title: "Recommendations",
                      description: "Receive expert production advice",
                      details: "Based on your requirements, we recommend optimal materials, production methods, and cost-saving opportunities.",
                      icon: "📋",
                      tasks: ["Material Selection", "Process Optimization", "Cost Analysis", "Quality Standards"]
                    },
                    {
                      step: "03",
                      title: "Production",
                      description: "Manufacturing with full support",
                      details: "We handle the entire production process while keeping you updated with progress reports and quality checks.",
                      icon: "⚙️",
                      tasks: ["Sample Creation", "Quality Control", "Progress Updates", "Testing & Validation"]
                    },
                    {
                      step: "04",
                      title: "Delivery",
                      description: "On-time delivery & after-sales",
                      details: "Reliable logistics, proper packaging, and continued support after delivery to ensure your complete satisfaction.",
                      icon: "📦",
                      tasks: ["Packaging & Shipping", "Tracking Support", "After-Sales Service", "Feedback Collection"]
                    }
                  ].map((process, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      style={{ textAlign: "center" }}
                    >
                      {/* Step Number Circle */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        style={{
                          width: isMobile ? "100px" : "120px",
                          height: isMobile ? "100px" : "120px",
                          margin: "0 auto 1.5rem",
                          backgroundColor: index === 0 ? "#FFD700" : "rgba(255, 215, 0, 0.1)",
                          borderRadius: "50%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          border: `3px solid ${index === 0 ? "#FFD700" : "rgba(255, 215, 0, 0.3)"}`,
                          cursor: "pointer",
                          transition: "all 0.3s"
                        }}
                      >
                        <div style={{ fontSize: "2rem", marginBottom: "0.25rem" }}>{process.icon}</div>
                        <div style={{
                          fontSize: isMobile ? "1.2rem" : "1.4rem",
                          fontWeight: "bold",
                          color: index === 0 ? "#020617" : "#FFD700",
                          fontFamily: `'${selectedFont.heading}', serif`
                        }}>
                          {process.step}
                        </div>
                      </motion.div>

                      {/* Title & Description */}
                      <h4 style={{
                        fontSize: isMobile ? "1.2rem" : "1.4rem",
                        fontWeight: "bold",
                        marginBottom: "0.5rem",
                        color: "white",
                        fontFamily: `'${selectedFont.heading}', serif`
                      }}>
                        {process.title}
                      </h4>
                      <p style={{
                        fontSize: isMobile ? "0.9rem" : "1rem",
                        color: "#FFD700",
                        marginBottom: "1rem",
                        fontFamily: `'${selectedFont.body}', sans-serif`
                      }}>
                        {process.description}
                      </p>
                      <p style={{
                        fontSize: isMobile ? "0.85rem" : "0.95rem",
                        lineHeight: 1.6,
                        color: "rgba(255, 255, 255, 0.7)",
                        marginBottom: "1.5rem",
                        minHeight: isMobile ? "auto" : "80px",
                        fontFamily: `'${selectedFont.body}', sans-serif`
                      }}>
                        {process.details}
                      </p>

                      {/* Task List */}
                      <div style={{
                        backgroundColor: "rgba(255, 255, 255, 0.02)",
                        borderRadius: "15px",
                        padding: "1rem",
                        border: "1px solid rgba(255, 215, 0, 0.1)"
                      }}>
                        {process.tasks.map((task, i) => (
                          <div key={i} style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            marginBottom: i < process.tasks.length - 1 ? "0.5rem" : 0
                          }}>
                            <CheckCircle size={14} color="#FFD700" />
                            <span style={{
                              fontSize: isMobile ? "0.8rem" : "0.85rem",
                              color: "rgba(255, 255, 255, 0.8)",
                              fontFamily: `'${selectedFont.body}', sans-serif`
                            }}>
                              {task}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Choose FCP Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background: "linear-gradient(135deg, rgba(255, 215, 0, 0.15) 0%, rgba(255, 215, 0, 0.05) 100%)",
                borderRadius: "25px",
                padding: isMobile ? "2rem" : "3rem",
                border: "1px solid rgba(255, 215, 0, 0.3)",
                marginBottom: "3rem"
              }}
            >
              <h3 style={{
                fontSize: isMobile ? "1.5rem" : "2rem",
                fontWeight: "bold",
                marginBottom: "2rem",
                textAlign: "center",
                color: "#FFD700",
                fontFamily: `'${selectedFont.heading}', serif`
              }}>
                Why Businesses Choose FCP
              </h3>

              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                gap: "2rem"
              }}>
                {[
                  {
                    title: "No Hidden Costs",
                    desc: "Transparent pricing with detailed quotes. No surprises, no hidden fees."
                  },
                  {
                    title: "Quality Assurance",
                    desc: "Multi-stage quality checks ensure every product meets your standards."
                  },
                  {
                    title: "Flexible MOQs",
                    desc: "From small batches to large orders, we accommodate your needs."
                  },
                  {
                    title: "Fast Turnaround",
                    desc: "Efficient production processes ensure timely delivery without compromise."
                  },
                  {
                    title: "Technical Expertise",
                    desc: "15+ years of experience solving complex manufacturing challenges."
                  },
                  {
                    title: "Global Shipping",
                    desc: "Reliable logistics network delivering to 50+ countries worldwide."
                  }
                ].map((item, index) => (
                  <div key={index} style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start"
                  }}>
                    <div style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "rgba(255, 215, 0, 0.2)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}>
                      <Shield size={20} color="#FFD700" />
                    </div>
                    <div>
                      <h4 style={{
                        fontSize: isMobile ? "1rem" : "1.2rem",
                        fontWeight: "bold",
                        marginBottom: "0.5rem",
                        color: "white",
                        fontFamily: `'${selectedFont.heading}', serif`
                      }}>
                        {item.title}
                      </h4>
                      <p style={{
                        fontSize: isMobile ? "0.85rem" : "0.95rem",
                        lineHeight: 1.6,
                        color: "rgba(255, 255, 255, 0.8)",
                        fontFamily: `'${selectedFont.body}', sans-serif`
                      }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{
                textAlign: "center",
                padding: isMobile ? "2rem" : "3rem",
                backgroundColor: "rgba(2, 6, 23, 0.5)",
                borderRadius: "25px",
                border: "2px solid #FFD700"
              }}
            >
              <h3 style={{
                fontSize: isMobile ? "1.8rem" : "2.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                fontFamily: `'${selectedFont.heading}', serif`,
                color: "#FFD700"
              }}>
                Ready to Start Manufacturing?
              </h3>
              <p style={{
                fontSize: isMobile ? "1rem" : "1.2rem",
                lineHeight: 1.7,
                color: "rgba(255, 255, 255, 0.9)",
                marginBottom: "2rem",
                maxWidth: "700px",
                margin: "0 auto 2rem",
                fontFamily: `'${selectedFont.body}', sans-serif`
              }}>
                Join 2000+ businesses that trust FCP for their production needs.
                Let's turn your designs into reality with our expertise and support.
              </p>
              <div style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap"
              }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: isMobile ? "1rem 2.5rem" : "1.2rem 3rem",
                    backgroundColor: "#FFD700",
                    color: "#020617",
                    border: "none",
                    borderRadius: "30px",
                    fontSize: isMobile ? "1rem" : "1.2rem",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontFamily: `'${selectedFont.body}', sans-serif`
                  }}
                >
                  Get Started Today
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: isMobile ? "1rem 2.5rem" : "1.2rem 3rem",
                    backgroundColor: "transparent",
                    color: "white",
                    border: "2px solid white",
                    borderRadius: "30px",
                    fontSize: isMobile ? "1rem" : "1.2rem",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontFamily: `'${selectedFont.body}', sans-serif`
                  }}
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Полностью адаптирован для мобильных */}
      <section id="contact" style={{
        padding: isMobile ? "3rem 1rem" : "5rem 2rem",
        backgroundColor: "#020617"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{
              fontSize: isMobile ? "2rem" : "3.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              textAlign: "center",
              fontFamily: `'${selectedFont.heading}', serif`
            }}>
              Get In <span style={{ color: "#FFD700" }}>Touch</span>
            </h2>
            <div style={{
              width: "80px",
              height: "4px",
              backgroundColor: "#FFD700",
              margin: "0 auto 3rem",
              borderRadius: "2px"
            }} />

            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? "2rem" : "3rem"
            }}>
              <div>
                <h3 style={{
                  fontSize: isMobile ? "1.3rem" : "1.8rem",
                  fontWeight: "bold",
                  marginBottom: "1.5rem",
                  color: "#FFD700",
                  fontFamily: `'${selectedFont.heading}', serif`
                }}>
                  Contact Information
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {[
                    { icon: Phone, text: "+1 (555) 123-4567" },
                    { icon: Mail, text: "info@fullcustompackaging.com" },
                    { icon: MapPin, text: "123 Business Ave, Suite 100, New York, NY 10001" }
                  ].map((item, index) => (
                    <div key={index} style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem"
                    }}>
                      <div style={{
                        width: isMobile ? "36px" : "40px",
                        height: isMobile ? "36px" : "40px",
                        backgroundColor: "rgba(255, 215, 0, 0.1)",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}>
                        <item.icon size={isMobile ? 18 : 20} color="#FFD700" />
                      </div>
                      <p style={{
                        color: "rgba(255, 255, 255, 0.9)",
                        fontSize: isMobile ? "0.9rem" : "1rem",
                        fontFamily: `'${selectedFont.body}', sans-serif`,
                        lineHeight: 1.5
                      }}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{
                  fontSize: isMobile ? "1.3rem" : "1.8rem",
                  fontWeight: "bold",
                  marginBottom: "1.5rem",
                  color: "#FFD700",
                  fontFamily: `'${selectedFont.heading}', serif`
                }}>
                  Send Us a Message
                </h3>
                <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    style={{
                      padding: isMobile ? "0.75rem" : "1rem",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: isMobile ? "0.9rem" : "1rem",
                      fontFamily: `'${selectedFont.body}', sans-serif`
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    style={{
                      padding: isMobile ? "0.75rem" : "1rem",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: isMobile ? "0.9rem" : "1rem",
                      fontFamily: `'${selectedFont.body}', sans-serif`
                    }}
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    style={{
                      padding: isMobile ? "0.75rem" : "1rem",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "10px",
                      color: "white",
                      fontSize: isMobile ? "0.9rem" : "1rem",
                      resize: "vertical",
                      fontFamily: `'${selectedFont.body}', sans-serif`
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      padding: isMobile ? "0.75rem" : "1rem",
                      backgroundColor: "#FFD700",
                      color: "#020617",
                      border: "none",
                      borderRadius: "10px",
                      fontSize: isMobile ? "1rem" : "1.1rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      transition: "all 0.3s",
                      fontFamily: `'${selectedFont.body}', sans-serif`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#FFC700";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#FFD700";
                    }}
                  >
                    Send Message <Send size={isMobile ? 16 : 18} />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Адаптирован для мобильных */}
      <footer style={{
        backgroundColor: "#0a0f2e",
        padding: isMobile ? "2rem 1rem" : "3rem 2rem",
        borderTop: "1px solid rgba(255, 215, 0, 0.2)"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <p style={{
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: isMobile ? "0.85rem" : "0.95rem",
            fontFamily: `'${selectedFont.body}', sans-serif`
          }}>
            © 2024 Full Custom Packaging. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}