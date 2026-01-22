"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Package, ArrowRight, CheckCircle, Globe, Award, Users, ChevronLeft, ChevronRight, Play, Pause, Target, Zap, Shield, Mail, MapPin, Send, Menu, X, ChevronUp, ChevronDown, Building2, ShoppingBag, Factory, Heart, Briefcase, Sparkles } from "lucide-react";
import { HeaderFCP } from "@/components/ui/header";
import { Compare } from "@/components/ui/compare";
import { EditableText, useCMS, useContent } from "@/components/cms";

// Fixed font: Corporate (Merriweather + Open Sans)
const selectedFont = {
  heading: "Merriweather",
  body: "Open Sans"
};

const carouselItems = [
  {
    type: "image",
    src: "/hero-packaging.jpg",
    title: "Custom Packaging Solutions",
    subtitle: "Complete End-to-End Packaging Services",
    sectionId: "packaging-solutions"
  },
  {
    type: "image",
    src: "/hero-apparel.jpg",
    title: "Sports Apparel",
    subtitle: "High-Performance Athletic Wear",
    sectionId: "apparel-solutions"
  },
  {
    type: "image",
    src: "/hero-sports-equipment.jpg",
    title: "Custom Sports Equipment",
    subtitle: "Premium Sports Gear & Accessories",
    sectionId: "sport-equipment-solutions"
  },
  {
    type: "image",
    src: "/hero-neon.jpg",
    title: "Custom Neon Signs",
    subtitle: "Bright & Eye-Catching Brand Illumination",
    sectionId: "neon-signs-solutions"
  },
  {
    type: "image",
    src: "/hero-ppe.jpg",
    title: "Personal Protective Equipment",
    subtitle: "Custom Branded Safety Solutions",
    sectionId: "ppe-solutions"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState("restaurant");
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const { content } = useCMS();

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactEmail = content?.contact?.email || 'info@fullcustompackaging.com';

  const handleGetQuote = (product?: string) => {
    const subject = product ? `Quote Request: ${product}` : 'Quote Request';
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = formData.subject || 'Contact Form Message';
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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

  // Animation for step-by-step process
  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveProcessStep((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(stepInterval);
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
      <HeaderFCP selectedFont={selectedFont} />

      {/* Hero Section - Полностью адаптирован для мобильных */}
      <section style={{
        position: "relative",
        height: isMobile ? "calc(100svh - 64px)" : "100vh",
        minHeight: isMobile ? "500px" : "100vh",
        maxHeight: isMobile ? "calc(100svh - 64px)" : "none",
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
                backgroundPosition: "center center"
              }} />
            )}

            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(to bottom, rgba(2, 6, 23, 0.55), rgba(2, 6, 23, 0.75))"
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
                <EditableText
                  path={`pages.home.hero.slides.${currentSlide}.title`}
                  defaultValue={carouselItems[currentSlide].title}
                  as="span"
                />
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
                <EditableText
                  path={`pages.home.hero.slides.${currentSlide}.subtitle`}
                  defaultValue={carouselItems[currentSlide].subtitle}
                  as="span"
                />
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
                <button
                onClick={() => handleGetQuote()}
                style={{
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
                onClick={() => {
                  const sectionId = carouselItems[currentSlide].sectionId;
                  const element = document.getElementById(sectionId);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#FFD700";
                  e.currentTarget.style.color = "#FFD700";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                  e.currentTarget.style.color = "white";
                }}>
                  Product List
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
              <EditableText
                path="pages.home.about.description"
                defaultValue="Full Custom Packaging (FCP) is your premier partner for complete customization solutions. We specialize in producing unique packaging designs, sport equipment, signage and PPE products. With over 10 years of experience, we transform your ideas into reality with unmatched quality and precision."
                as="span"
                multiline
              />
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
              gap: isMobile ? "1rem" : "2rem"
            }}>
              {[
                { icon: Globe, id: "quality", defaultTitle: "Quality First" },
                { icon: Award, id: "service", defaultTitle: "Excellent Customer Service" },
                { icon: Users, id: "team", defaultTitle: "Expert Team" }
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
                    <EditableText
                      path={`pages.home.about.features.${item.id}.title`}
                      defaultValue={item.defaultTitle}
                      as="span"
                    />
                  </h3>
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
              Our <span style={{ color: "#FFD700" }}>Mission</span>
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
              <EditableText
                path="pages.home.mission.subtitle"
                defaultValue="Explore our comprehensive range of customization solutions designed to meet all your business needs"
                as="span"
                multiline
              />
            </p>

            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? "2rem" : "3rem"
            }}>
              {[
                {
                  id: "packaging",
                  defaultTitle: "Packaging Solutions",
                  defaultSubtitle: "Complete End-to-End Packaging Services",
                  defaultDescription: "Transform your packaging with our comprehensive solutions. We provide state-of-the-art printing machines for high-quality labels and packaging designs, automated filling systems for various products, professional wrapping machines, and custom boxes in all sizes and materials.",
                  defaultDetailedInfo: "Our packaging division specializes in creating unique packaging experiences that protect your products and enhance your brand. From eco-friendly options to luxury packaging, we handle everything from design to production.",
                  icon: "📦",
                  image: "/hero-packaging.jpg",
                  href: "/packaging",
                  features: ["Printing Machines", "Filling Equipment", "Wrapping Systems", "Custom Boxes", "Glass & Plastic Bottles", "Mylar Bags", "Labels & Stickers"],
                  stats: [
                    { label: "Products", value: "500+" },
                    { label: "Clients Served", value: "2000+" },
                    { label: "Countries", value: "50+" }
                  ]
                },
                {
                  id: "apparel",
                  defaultTitle: "Sports Apparel",
                  defaultSubtitle: "High-Performance Athletic Wear",
                  defaultDescription: "Elevate your athletic performance with our premium sports apparel. From moisture-wicking running gear and breathable gym wear to performance jerseys and training apparel, we provide custom athletic clothing designed for peak performance.",
                  defaultDetailedInfo: "Our sports apparel division specializes in creating high-performance athletic wear that combines cutting-edge fabric technology with custom branding. We use advanced moisture-wicking materials, ergonomic designs, and offer complete customization including sublimation printing, embroidery, and heat transfer options.",
                  icon: "🏃",
                  image: "/hero-apparel.jpg",
                  href: "/apparel",
                  features: ["Performance Jerseys", "Athletic Shorts", "Compression Wear", "Running Gear", "Gym Apparel", "Team Uniforms", "Training Wear", "Sports Accessories"],
                  stats: [
                    { label: "Athletic Styles", value: "500+" },
                    { label: "Performance Fabrics", value: "150+" },
                    { label: "MOQ", value: "25 pcs" }
                  ]
                },
                {
                  id: "sports-equipment",
                  defaultTitle: "Custom Sports Equipment",
                  defaultSubtitle: "Premium Sports Gear & Accessories",
                  defaultDescription: "Elevate your game with our custom sports equipment. From yoga mats and sports towels to pickleball paddles, balls, and athletic accessories, we provide high-quality gear tailored to your needs.",
                  defaultDetailedInfo: "Our sports equipment division specializes in creating custom branded sports gear. We work with premium materials and advanced customization techniques to deliver products that perform and look great.",
                  icon: "🏆",
                  image: "/hero-sports-equipment.jpg",
                  href: "/sports-equipment",
                  features: ["Yoga Mats", "Sports Towels", "Pickleball Paddles", "Tennis Balls", "Gym Bags", "Water Bottles", "Resistance Bands", "Custom Apparel"],
                  stats: [
                    { label: "Equipment Types", value: "100+" },
                    { label: "Custom Options", value: "Unlimited" },
                    { label: "Quality", value: "Premium" }
                  ]
                },
                {
                  id: "signage",
                  defaultTitle: "Custom Neon Signs",
                  defaultSubtitle: "Bright & Eye-Catching Brand Illumination",
                  defaultDescription: "Light up your brand with our custom neon signs. From vibrant LED neon to traditional glass tube designs, we create stunning illuminated signage that captures attention day and night.",
                  defaultDetailedInfo: "Our neon sign division specializes in creating custom illuminated signage that makes your brand shine. We use cutting-edge LED technology and traditional neon craftsmanship to deliver signs that are energy-efficient, durable, and absolutely stunning.",
                  icon: "💡",
                  image: "/hero-neon.jpg",
                  href: "/signage",
                  features: ["LED Neon Signs", "Traditional Neon", "Custom Designs", "Indoor & Outdoor", "Business Logos", "Event Signage", "Home Decor", "Restaurant Signs"],
                  stats: [
                    { label: "Custom Designs", value: "500+" },
                    { label: "Colors Available", value: "Unlimited" },
                    { label: "Warranty", value: "2 Years" }
                  ]
                },
                {
                  id: "ppe",
                  defaultTitle: "Personal Protective Equipment",
                  defaultSubtitle: "Custom Branded Safety Solutions",
                  defaultDescription: "Keep your team safe and professional with our custom PPE solutions. We provide high-quality protective equipment including masks, gloves, safety glasses, hard hats, vests, and more, all customizable with your branding.",
                  defaultDetailedInfo: "Our PPE division specializes in providing comprehensive safety solutions that don't compromise on branding. We source certified equipment and apply your custom logos and colors using durable, industry-compliant methods.",
                  icon: "🛡️",
                  image: "/hero-ppe.jpg",
                  href: "/ppe",
                  features: ["Safety Masks", "Protective Gloves", "Safety Glasses", "Hard Hats", "Hi-Vis Vests", "Face Shields", "Safety Boots", "Ear Protection"],
                  stats: [
                    { label: "PPE Items", value: "200+" },
                    { label: "Certified", value: "100%" },
                    { label: "Industries Served", value: "25+" }
                  ]
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  id={index === 0 ? "packaging-solutions" : index === 1 ? "apparel-solutions" : index === 2 ? "sport-equipment-solutions" : index === 3 ? "neon-signs-solutions" : index === 4 ? "ppe-solutions" : undefined}
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
                          <EditableText
                            path={`pages.home.categories.${category.id}.title`}
                            defaultValue={category.defaultTitle}
                            as="span"
                          />
                        </h3>
                        <p style={{
                          fontSize: isMobile ? "0.8rem" : "0.9rem",
                          color: "rgba(255, 255, 255, 0.6)",
                          fontFamily: `'${selectedFont.body}', sans-serif`,
                          lineHeight: 1.2
                        }}>
                          <EditableText
                            path={`pages.home.categories.${category.id}.subtitle`}
                            defaultValue={category.defaultSubtitle}
                            as="span"
                          />
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
                      <EditableText
                        path={`pages.home.categories.${category.id}.description`}
                        defaultValue={category.defaultDescription}
                        as="span"
                        multiline
                      />
                    </p>

                    <p style={{
                      fontSize: isMobile ? "0.8rem" : "0.85rem",
                      lineHeight: 1.4,
                      color: "rgba(255, 255, 255, 0.7)",
                      marginBottom: "1rem",
                      fontFamily: `'${selectedFont.body}', sans-serif`
                    }}>
                      <EditableText
                        path={`pages.home.categories.${category.id}.detailedInfo`}
                        defaultValue={category.defaultDetailedInfo}
                        as="span"
                        multiline
                      />
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
                        gridTemplateColumns: "repeat(2, 1fr)",
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
                        alignSelf: "flex-start",
                        marginLeft: "100px",
                        marginTop: "20px"
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
                      Explore
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
                    backgroundColor: "transparent"
                  }}>
                    {index === 0 ? (
                      // Compare slider for Packaging Solutions
                      <div style={{
                        width: "100%",
                        height: "100%",
                        position: "relative"
                      }}>
                        <Compare
                          firstImage="/packaging-1.jpg"
                          secondImage="/packaging-2.jpg"
                          slideMode="hover"
                          autoplay={true}
                          autoplayDuration={3000}
                        />
                      </div>
                    ) : index === 1 ? (
                      // Compare slider for Sports Apparel
                      <div style={{
                        width: "100%",
                        height: "100%",
                        position: "relative"
                      }}>
                        <Compare
                          firstImage="/apparel-1.jpg"
                          secondImage="/apparel-2.jpg"
                          slideMode="hover"
                          autoplay={true}
                          autoplayDuration={3000}
                        />
                      </div>
                    ) : index === 2 ? (
                      // Compare slider for Sports Equipment
                      <div style={{
                        width: "100%",
                        height: "100%",
                        position: "relative"
                      }}>
                        <Compare
                          firstImage="/equipment-1.jpg"
                          secondImage="/equipment-2.jpg"
                          slideMode="hover"
                          autoplay={true}
                          autoplayDuration={3000}
                        />
                      </div>
                    ) : index === 3 ? (
                      // Compare slider for Neon Signs
                      <div style={{
                        width: "100%",
                        height: "100%",
                        position: "relative"
                      }}>
                        <Compare
                          firstImage="/neon-1.jpg"
                          secondImage="/neon-2.jpg"
                          slideMode="hover"
                          autoplay={true}
                          autoplayDuration={3000}
                        />
                      </div>
                    ) : index === 4 ? (
                      // Compare slider for PPE
                      <div style={{
                        width: "100%",
                        height: "100%",
                        position: "relative"
                      }}>
                        <Compare
                          firstImage="/ppe-1.jpg"
                          secondImage="/ppe-2.jpg"
                          slideMode="hover"
                          autoplay={true}
                          autoplayDuration={3000}
                        />
                      </div>
                    ) : (
                      <>
                        <img
                          src={category.image}
                          alt={category.defaultTitle}
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

      {/* Custom Solutions Banner */}
      <section style={{
        padding: isMobile ? "0 1rem 3rem" : "0 2rem 4rem",
        backgroundColor: "#020617"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: "rgba(255, 215, 0, 0.1)",
              padding: isMobile ? "1.5rem" : "2rem",
              borderRadius: "15px",
              textAlign: "center",
              border: "2px solid rgba(255, 215, 0, 0.3)",
              backdropFilter: "blur(10px)"
            }}
          >
            <h3 style={{
              fontSize: isMobile ? "1.3rem" : "1.8rem",
              fontWeight: "bold",
              marginBottom: "0.75rem",
              color: "#FFD700",
              fontFamily: `'${selectedFont.heading}', serif`
            }}>
              Can't Find What You Need?
            </h3>
            <p style={{
              fontSize: isMobile ? "1rem" : "1.1rem",
              lineHeight: 1.7,
              color: "rgba(255, 255, 255, 0.9)",
              fontFamily: `'${selectedFont.body}', sans-serif`,
              maxWidth: "800px",
              margin: "0 auto 1.5rem"
            }}>
              We manufacture custom solutions for any product. If it's not on our list, just ask — we can create exactly what you need.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              style={{
                padding: isMobile ? "0.75rem 2rem" : "1rem 2.5rem",
                backgroundColor: "#FFD700",
                color: "#020617",
                border: "none",
                borderRadius: "50px",
                fontSize: isMobile ? "1rem" : "1.1rem",
                fontWeight: "bold",
                cursor: "pointer",
                fontFamily: `'${selectedFont.body}', sans-serif`,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
            >
              <Mail size={20} />
              Contact Us
            </motion.button>
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
                    height: "4px",
                    backgroundColor: "rgba(255, 215, 0, 0.2)",
                    borderRadius: "2px",
                    zIndex: 0,
                    overflow: "hidden"
                  }}>
                    {/* Animated progress line */}
                    <motion.div
                      animate={{
                        width: activeProcessStep === 0 ? "0%" : activeProcessStep === 1 ? "50%" : "100%"
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      style={{
                        height: "100%",
                        backgroundColor: "#FFD700",
                        borderRadius: "2px",
                        boxShadow: "0 0 10px #FFD700, 0 0 20px rgba(255, 215, 0, 0.5)"
                      }}
                    />
                  </div>
                )}

                <div style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  justifyContent: "center",
                  alignItems: isMobile ? "center" : "flex-start",
                  gap: isMobile ? "3rem" : "5rem",
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  margin: "0 auto"
                }}>
                  {[
                    {
                      step: "01",
                      title: "Consultation",
                      description: "Share your design and requirements",
                      details: "We analyze your needs, discuss quantities, timeline, and budget.",
                      icon: "💬"
                    },
                    {
                      step: "02",
                      title: "Production",
                      description: "Manufacturing with full support",
                      details: "We handle the entire production process while keeping you updated with progress reports and quality checks.",
                      icon: "⚙️"
                    },
                    {
                      step: "03",
                      title: "Delivery",
                      description: "On-time delivery & after-sales",
                      details: "Reliable logistics, proper packaging, and continued support after delivery to ensure your complete satisfaction.",
                      icon: "📦"
                    }
                  ].map((process, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      style={{
                        textAlign: "center",
                        flex: isMobile ? "none" : "1",
                        maxWidth: isMobile ? "100%" : "300px"
                      }}
                    >
                      {/* Step Number Circle */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        animate={{
                          backgroundColor: index <= activeProcessStep ? "#FFD700" : "rgba(255, 215, 0, 0.1)",
                          borderColor: index <= activeProcessStep ? "#FFD700" : "rgba(255, 215, 0, 0.3)",
                          boxShadow: index <= activeProcessStep ? "0 0 30px rgba(255, 215, 0, 0.5)" : "none"
                        }}
                        transition={{ duration: 0.5 }}
                        style={{
                          width: isMobile ? "100px" : "120px",
                          height: isMobile ? "100px" : "120px",
                          margin: "0 auto 1.5rem",
                          borderRadius: "50%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "3px solid",
                          cursor: "pointer"
                        }}
                      >
                        <div style={{ fontSize: "2rem", marginBottom: "0.25rem" }}>{process.icon}</div>
                        <motion.div
                          animate={{
                            color: index <= activeProcessStep ? "#020617" : "#FFD700"
                          }}
                          transition={{ duration: 0.5 }}
                          style={{
                            fontSize: isMobile ? "1.2rem" : "1.4rem",
                            fontWeight: "bold",
                            fontFamily: `'${selectedFont.heading}', serif`
                          }}
                        >
                          {process.step}
                        </motion.div>
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
                        minHeight: isMobile ? "auto" : "80px",
                        fontFamily: `'${selectedFont.body}', sans-serif`
                      }}>
                        {process.details}
                      </p>
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
                    desc: "10+ years of experience solving complex manufacturing challenges."
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
                Join other businesses that trust FCP for their production needs.
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
                  onClick={() => handleGetQuote()}
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
                  onClick={() => handleGetQuote('Consultation')}
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

      {/* Contact Section - Premium Design */}
      <section id="contact" style={{
        padding: isMobile ? "4rem 1rem" : "6rem 2rem",
        background: "linear-gradient(180deg, #020617 0%, #0a0f2e 50%, #020617 100%)",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Background decorations */}
        <div style={{
          position: "absolute",
          top: "20%",
          left: "-10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 215, 0, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)"
        }} />
        <div style={{
          position: "absolute",
          bottom: "10%",
          right: "-5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 215, 0, 0.06) 0%, transparent 70%)",
          filter: "blur(40px)"
        }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: isMobile ? "2.5rem" : "4rem" }}>
              <h2 style={{
                fontSize: isMobile ? "2rem" : "3.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                fontFamily: `'${selectedFont.heading}', serif`
              }}>
                Get In <span style={{ color: "#FFD700" }}>Touch</span>
              </h2>
              <div style={{
                width: "80px",
                height: "4px",
                backgroundColor: "#FFD700",
                margin: "0 auto 2rem",
                borderRadius: "2px"
              }} />
              <p style={{
                fontSize: isMobile ? "1rem" : "1.2rem",
                color: "rgba(255, 255, 255, 0.7)",
                maxWidth: "600px",
                margin: "0 auto",
                fontFamily: `'${selectedFont.body}', sans-serif`
              }}>
                Ready to start your project? We'd love to hear from you.
              </p>
            </div>

            {/* Main Content */}
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1.5fr",
              gap: isMobile ? "2rem" : "3rem",
              alignItems: "start"
            }}>
              {/* Left Side - Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "24px",
                  padding: isMobile ? "1.5rem" : "2.5rem",
                  border: "1px solid rgba(255, 215, 0, 0.15)",
                  backdropFilter: "blur(10px)"
                }}
              >
                <h3 style={{
                  fontSize: isMobile ? "1.5rem" : "1.8rem",
                  fontWeight: "bold",
                  marginBottom: "2rem",
                  color: "white",
                  fontFamily: `'${selectedFont.heading}', serif`
                }}>
                  Contact Information
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2rem" }}>
                  {[
                    { icon: Mail, label: "Email", text: "s@fullcustompackaging.com" },
                    { icon: MapPin, label: "Location", text: "Vancouver, BC • Canada" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "1rem",
                        backgroundColor: "rgba(255, 215, 0, 0.05)",
                        borderRadius: "16px",
                        border: "1px solid rgba(255, 215, 0, 0.1)",
                        cursor: "pointer",
                        transition: "all 0.3s"
                      }}
                    >
                      <div style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "rgba(255, 215, 0, 0.1)",
                        borderRadius: "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        border: "1px solid rgba(255, 215, 0, 0.3)"
                      }}>
                        <item.icon size={24} color="#FFD700" />
                      </div>
                      <div>
                        <p style={{
                          color: "rgba(255, 255, 255, 0.5)",
                          fontSize: "0.85rem",
                          marginBottom: "0.25rem",
                          fontFamily: `'${selectedFont.body}', sans-serif`
                        }}>
                          {item.label}
                        </p>
                        <p style={{
                          color: "white",
                          fontSize: isMobile ? "0.95rem" : "1.05rem",
                          fontWeight: "500",
                          fontFamily: `'${selectedFont.body}', sans-serif`
                        }}>
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Business Hours */}
                <div style={{
                  padding: "1.5rem",
                  background: "linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 215, 0, 0.2)"
                }}>
                  <h4 style={{
                    color: "#FFD700",
                    fontSize: "1rem",
                    fontWeight: "600",
                    marginBottom: "0.75rem",
                    fontFamily: `'${selectedFont.heading}', serif`
                  }}>
                    🕐 Business Hours
                  </h4>
                  <p style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    fontFamily: `'${selectedFont.body}', sans-serif`
                  }}>
                    Monday - Friday: 9:00 AM - 6:00 PM (PST)<br />
                    Weekend: By appointment
                  </p>
                </div>
              </motion.div>

              {/* Right Side - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "24px",
                  padding: isMobile ? "1.5rem" : "2.5rem",
                  border: "1px solid rgba(255, 215, 0, 0.15)",
                  backdropFilter: "blur(10px)"
                }}
              >
                <h3 style={{
                  fontSize: isMobile ? "1.5rem" : "1.8rem",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                  color: "white",
                  fontFamily: `'${selectedFont.heading}', serif`
                }}>
                  Send Us a Message
                </h3>
                <p style={{
                  color: "rgba(255, 255, 255, 0.6)",
                  marginBottom: "2rem",
                  fontSize: "0.95rem",
                  fontFamily: `'${selectedFont.body}', sans-serif`
                }}>
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                    gap: "1.25rem"
                  }}>
                    <div>
                      <label style={{
                        display: "block",
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: "0.9rem",
                        marginBottom: "0.5rem",
                        fontFamily: `'${selectedFont.body}', sans-serif`
                      }}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        style={{
                          width: "100%",
                          padding: "1rem 1.25rem",
                          backgroundColor: "rgba(255, 255, 255, 0.05)",
                          border: "2px solid rgba(255, 255, 255, 0.1)",
                          borderRadius: "14px",
                          color: "white",
                          fontSize: "1rem",
                          fontFamily: `'${selectedFont.body}', sans-serif`,
                          outline: "none",
                          transition: "all 0.3s",
                          boxSizing: "border-box"
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "#FFD700";
                          e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 215, 0, 0.15)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                    </div>
                    <div>
                      <label style={{
                        display: "block",
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: "0.9rem",
                        marginBottom: "0.5rem",
                        fontFamily: `'${selectedFont.body}', sans-serif`
                      }}>
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        style={{
                          width: "100%",
                          padding: "1rem 1.25rem",
                          backgroundColor: "rgba(255, 255, 255, 0.05)",
                          border: "2px solid rgba(255, 255, 255, 0.1)",
                          borderRadius: "14px",
                          color: "white",
                          fontSize: "1rem",
                          fontFamily: `'${selectedFont.body}', sans-serif`,
                          outline: "none",
                          transition: "all 0.3s",
                          boxSizing: "border-box"
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "#FFD700";
                          e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 215, 0, 0.15)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{
                      display: "block",
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: "0.9rem",
                      marginBottom: "0.5rem",
                      fontFamily: `'${selectedFont.body}', sans-serif`
                    }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      style={{
                        width: "100%",
                        padding: "1rem 1.25rem",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        border: "2px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "14px",
                        color: "white",
                        fontSize: "1rem",
                        fontFamily: `'${selectedFont.body}', sans-serif`,
                        outline: "none",
                        transition: "all 0.3s",
                        boxSizing: "border-box"
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#FFD700";
                        e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 215, 0, 0.15)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: "block",
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: "0.9rem",
                      marginBottom: "0.5rem",
                      fontFamily: `'${selectedFont.body}', sans-serif`
                    }}>
                      Your Message
                    </label>
                    <textarea
                      placeholder="Tell us about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      style={{
                        width: "100%",
                        padding: "1rem 1.25rem",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        border: "2px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "14px",
                        color: "white",
                        fontSize: "1rem",
                        resize: "vertical",
                        fontFamily: `'${selectedFont.body}', sans-serif`,
                        outline: "none",
                        transition: "all 0.3s",
                        boxSizing: "border-box"
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#FFD700";
                        e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 215, 0, 0.15)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: isMobile ? "1rem 2rem" : "1.2rem 2.5rem",
                      backgroundColor: "#FFD700",
                      color: "#020617",
                      border: "none",
                      borderRadius: "30px",
                      fontSize: isMobile ? "1rem" : "1.1rem",
                      fontWeight: "bold",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      fontFamily: `'${selectedFont.body}', sans-serif`,
                      marginTop: "0.5rem",
                      width: "100%"
                    }}
                  >
                    Send Message
                    <Send size={18} />
                  </motion.button>
                </form>
              </motion.div>
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
            © 2026 Full Custom Packaging. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}