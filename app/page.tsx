"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Package, ArrowRight, CheckCircle, Globe, Award, Users, ChevronLeft, ChevronRight, Play, Pause, Target, Zap, Shield, Phone, Mail, MapPin, Send, Menu, X, Type, ChevronUp, ChevronDown } from "lucide-react";
import { HeaderFCP } from "@/components/ui/header-fcp";

const fontCombinations = [
  {
    id: 1,
    name: "Modern Bold",
    heading: "Bebas Neue",
    body: "Montserrat",
    description: "Смелый и современный"
  },
  {
    id: 2,
    name: "Elegant Classic",
    heading: "Playfair Display",
    body: "Poppins",
    description: "Элегантный и премиальный"
  },
  {
    id: 3,
    name: "Tech Future",
    heading: "Space Grotesk",
    body: "Inter",
    description: "Технологичный и чистый"
  },
  {
    id: 4,
    name: "Industrial",
    heading: "Oswald",
    body: "Roboto",
    description: "Индустриальная мощь"
  },
  {
    id: 5,
    name: "Premium",
    heading: "Bodoni Moda",
    body: "Raleway",
    description: "Роскошь и стиль"
  },
  {
    id: 6,
    name: "Minimal Pro",
    heading: "Outfit",
    body: "DM Sans",
    description: "Минималистичный"
  },
  {
    id: 7,
    name: "Friendly",
    heading: "Sora",
    body: "Nunito Sans",
    description: "Дружелюбный бизнес"
  },
  {
    id: 8,
    name: "Creative",
    heading: "Anton",
    body: "Work Sans",
    description: "Креативный и яркий"
  },
  {
    id: 9,
    name: "Classic Lux",
    heading: "Raleway",
    body: "Lato",
    description: "Классическая элегантность"
  },
  {
    id: 10,
    name: "Space Age",
    heading: "Orbitron",
    body: "Exo 2",
    description: "Футуристичный"
  }
];

const carouselItems = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1573641287741-f7df0c1ae157?w=1920&h=1080&fit=crop",
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
      {/* Font Switcher Panel - Оптимизирован для мобильных */}
      <div style={{
        position: "fixed",
        top: isMobile ? "auto" : "50%",
        bottom: isMobile ? "0" : "auto",
        right: isFontPanelOpen ? "0" : (isMobile ? "-100%" : "-320px"),
        transform: isMobile ? (isFontPanelOpen ? "translateY(0)" : "translateY(100%)") : "translateY(-50%)",
        backgroundColor: "rgba(2, 6, 23, 0.98)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 215, 0, 0.3)",
        borderRadius: isMobile ? "20px 20px 0 0" : "20px 0 0 20px",
        padding: isMobile ? "1rem" : "1.5rem",
        width: isMobile ? "100%" : "320px",
        maxHeight: isMobile ? "70vh" : "auto",
        overflowY: isMobile ? "auto" : "visible",
        zIndex: 100,
        transition: "all 0.3s ease",
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
        pointerEvents: isFontPanelOpen ? "auto" : "none"
      }}>
        {/* Toggle Button - Адаптирован для мобильных */}
        <button
          onClick={() => setIsFontPanelOpen(!isFontPanelOpen)}
          style={{
            position: "absolute",
            left: isMobile ? "50%" : "-50px",
            top: isMobile ? "-50px" : "50%",
            transform: isMobile ? "translateX(-50%)" : "translateY(-50%)",
            backgroundColor: "#FFD700",
            color: "#020617",
            border: "none",
            borderRadius: isMobile ? "10px 10px 0 0" : "10px 0 0 10px",
            padding: isMobile ? "0.75rem 2rem" : "1rem 0.75rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.85rem",
            fontWeight: "600",
            writingMode: isMobile ? "horizontal-tb" : "vertical-rl",
            textOrientation: "mixed",
            pointerEvents: "auto",
            zIndex: 101
          }}
        >
          <Type size={20} />
          FONTS
        </button>

        <h3 style={{
          fontSize: isMobile ? "1rem" : "1.2rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          color: "#FFD700",
          fontFamily: `'${selectedFont.heading}', serif`
        }}>
          Выберите шрифт
        </h3>
        <div style={{
          display: "grid",
          gap: "0.5rem",
          maxHeight: isMobile ? "50vh" : "auto",
          overflowY: isMobile ? "auto" : "visible"
        }}>
          {fontCombinations.map((font) => (
            <button
              key={font.id}
              onClick={() => setSelectedFont(font)}
              style={{
                padding: isMobile ? "0.75rem" : "1rem",
                backgroundColor: selectedFont.id === font.id ? "rgba(255, 215, 0, 0.2)" : "rgba(255, 255, 255, 0.05)",
                border: `1px solid ${selectedFont.id === font.id ? "#FFD700" : "rgba(255, 255, 255, 0.1)"}`,
                borderRadius: "10px",
                cursor: "pointer",
                transition: "all 0.2s",
                textAlign: "left"
              }}
              onMouseEnter={(e) => {
                if (selectedFont.id !== font.id) {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (selectedFont.id !== font.id) {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                }
              }}
            >
              <div style={{ fontFamily: `'${font.heading}', serif`, fontSize: isMobile ? "1rem" : "1.1rem", color: "white" }}>
                {font.name}
              </div>
              <div style={{ fontFamily: `'${font.body}', sans-serif`, fontSize: isMobile ? "0.75rem" : "0.85rem", color: "rgba(255, 255, 255, 0.7)", marginTop: "0.25rem" }}>
                {font.description}
              </div>
            </button>
          ))}
        </div>
      </div>

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

      {/* Services Section - Полностью адаптирован для мобильных */}
      <section id="services" style={{
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
              Our <span style={{ color: "#FFD700" }}>Services</span>
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
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(350px, 1fr))",
              gap: isMobile ? "1.5rem" : "2rem"
            }}>
              {[
                {
                  title: "Custom Packaging",
                  description: "Boxes, labels, bags, and specialized packaging solutions tailored to your brand",
                  features: ["Custom Designs", "Eco-Friendly Options", "Fast Production"],
                  icon: "📦",
                  image: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?w=800&h=600&fit=crop"
                },
                {
                  title: "Premium Apparel",
                  description: "Sports wear, tactical gear, winter clothing with your custom branding",
                  features: ["High-Quality Materials", "Custom Embroidery", "Bulk Orders"],
                  icon: "👕",
                  image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&h=600&fit=crop"
                },
                {
                  title: "Industrial Machinery",
                  description: "State-of-the-art equipment for production and manufacturing needs",
                  features: ["Latest Technology", "Installation Support", "Maintenance"],
                  icon: "⚙️",
                  image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&h=600&fit=crop"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "20px",
                    padding: isMobile ? "1.5rem" : "2rem",
                    border: "1px solid rgba(255, 215, 0, 0.2)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.borderColor = "#FFD700";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(255, 215, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "rgba(255, 215, 0, 0.2)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Image Section */}
                  <div style={{
                    width: "100%",
                    height: isMobile ? "150px" : "200px",
                    marginBottom: "1.5rem",
                    borderRadius: "15px",
                    overflow: "hidden",
                    position: "relative"
                  }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                    <div style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      backgroundColor: "rgba(2, 6, 23, 0.8)",
                      padding: "0.5rem",
                      borderRadius: "10px",
                      fontSize: isMobile ? "1.5rem" : "2rem"
                    }}>
                      {service.icon}
                    </div>
                  </div>
                  <h3 style={{
                    fontSize: isMobile ? "1.3rem" : "1.8rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color: "#FFD700",
                    fontFamily: `'${selectedFont.heading}', serif`
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    marginBottom: "1.5rem",
                    lineHeight: 1.6,
                    fontSize: isMobile ? "0.9rem" : "1rem",
                    fontFamily: `'${selectedFont.body}', sans-serif`
                  }}>
                    {service.description}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {service.features.map((feature, i) => (
                      <li key={i} style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.5rem",
                        fontSize: isMobile ? "0.85rem" : "0.95rem",
                        fontFamily: `'${selectedFont.body}', sans-serif`
                      }}>
                        <CheckCircle size={isMobile ? 14 : 16} color="#FFD700" />
                        <span style={{ color: "rgba(255, 255, 255, 0.9)" }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button style={{
                    marginTop: "1.5rem",
                    padding: isMobile ? "0.6rem 1.5rem" : "0.75rem 2rem",
                    backgroundColor: "transparent",
                    color: "#FFD700",
                    border: "1px solid #FFD700",
                    borderRadius: "25px",
                    fontSize: isMobile ? "0.85rem" : "0.95rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    width: "100%",
                    fontFamily: `'${selectedFont.body}', sans-serif`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#FFD700";
                    e.currentTarget.style.color = "#020617";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#FFD700";
                  }}>
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Help Business - Полностью адаптирован для мобильных */}
      <section id="help-business" style={{
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
              How We Help <span style={{ color: "#FFD700" }}>Your Business</span>
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
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
              gap: isMobile ? "1.5rem" : "2rem"
            }}>
              {[
                {
                  icon: Target,
                  title: "Complete Customization",
                  description: "We customize everything to match your brand identity perfectly"
                },
                {
                  icon: Zap,
                  title: "Fast Turnaround",
                  description: "Quick production and delivery without compromising quality"
                },
                {
                  icon: Shield,
                  title: "Quality Guarantee",
                  description: "100% satisfaction guarantee on all our products and services"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    textAlign: "center",
                    padding: isMobile ? "1.5rem" : "2rem"
                  }}
                >
                  <div style={{
                    width: isMobile ? "60px" : "80px",
                    height: isMobile ? "60px" : "80px",
                    margin: "0 auto 1.5rem",
                    backgroundColor: "rgba(255, 215, 0, 0.1)",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid rgba(255, 215, 0, 0.3)",
                    transition: "all 0.3s"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 215, 0, 0.2)";
                    e.currentTarget.style.borderColor = "#FFD700";
                    e.currentTarget.style.transform = "rotate(5deg) scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 215, 0, 0.1)";
                    e.currentTarget.style.borderColor = "rgba(255, 215, 0, 0.3)";
                    e.currentTarget.style.transform = "rotate(0) scale(1)";
                  }}>
                    <item.icon size={isMobile ? 30 : 40} color="#FFD700" />
                  </div>
                  <h3 style={{
                    fontSize: isMobile ? "1.2rem" : "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    fontFamily: `'${selectedFont.heading}', serif`
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    lineHeight: 1.6,
                    fontSize: isMobile ? "0.9rem" : "1rem",
                    fontFamily: `'${selectedFont.body}', sans-serif`
                  }}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              style={{
                marginTop: "3rem",
                padding: isMobile ? "2rem 1.5rem" : "3rem",
                background: "linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.05))",
                borderRadius: "20px",
                border: "1px solid rgba(255, 215, 0, 0.3)",
                textAlign: "center"
              }}
            >
              <h3 style={{
                fontSize: isMobile ? "1.5rem" : "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                fontFamily: `'${selectedFont.heading}', serif`
              }}>
                Ready to Transform Your Business?
              </h3>
              <p style={{
                color: "rgba(255, 255, 255, 0.9)",
                marginBottom: "2rem",
                fontSize: isMobile ? "0.95rem" : "1.1rem",
                fontFamily: `'${selectedFont.body}', sans-serif`
              }}>
                Join hundreds of satisfied clients who trust FCP for their customization needs
              </p>
              <button style={{
                padding: isMobile ? "0.75rem 2rem" : "1rem 3rem",
                backgroundColor: "#FFD700",
                color: "#020617",
                border: "none",
                borderRadius: "50px",
                fontSize: isMobile ? "1rem" : "1.2rem",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.3s",
                fontFamily: `'${selectedFont.body}', sans-serif`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FFC700";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FFD700";
                e.currentTarget.style.transform = "scale(1)";
              }}>
                Start Your Project
              </button>
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