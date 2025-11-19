'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Package, Box, Droplet, ShoppingBag, Tag, Printer, ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
import { HeaderFCP } from '@/components/ui/header';
import { FontPanel } from '@/components/ui/font-panel';

const fontCombinations = [
  { id: 1, name: "Modern Bold", heading: "Bebas Neue", body: "Montserrat", description: "Bebas Neue + Montserrat" },
  { id: 2, name: "Elegant Classic", heading: "Playfair Display", body: "Poppins", description: "Playfair Display + Poppins" },
  { id: 3, name: "Tech Future", heading: "Space Grotesk", body: "Inter", description: "Space Grotesk + Inter" },
  { id: 4, name: "Industrial", heading: "Oswald", body: "Roboto", description: "Oswald + Roboto" },
  { id: 5, name: "Premium", heading: "Bodoni Moda", body: "Raleway", description: "Bodoni Moda + Raleway" },
  { id: 6, name: "Minimal Pro", heading: "Outfit", body: "DM Sans", description: "Outfit + DM Sans" },
  { id: 7, name: "Friendly", heading: "Sora", body: "Nunito Sans", description: "Sora + Nunito Sans" },
  { id: 8, name: "Creative", heading: "Anton", body: "Work Sans", description: "Anton + Work Sans" },
  { id: 9, name: "Classic Lux", heading: "Raleway", body: "Lato", description: "Raleway + Lato" },
  { id: 10, name: "Space Age", heading: "Orbitron", body: "Exo 2", description: "Orbitron + Exo 2" },
  { id: 11, name: "Corporate", heading: "Merriweather", body: "Open Sans", description: "Merriweather + Open Sans" },
  { id: 12, name: "Artistic", heading: "Abril Fatface", body: "Source Sans Pro", description: "Abril Fatface + Source Sans Pro" },
  { id: 13, name: "Editorial", heading: "Cormorant Garamond", body: "Fira Sans", description: "Cormorant Garamond + Fira Sans" },
  { id: 14, name: "Dynamic", heading: "Teko", body: "Rubik", description: "Teko + Rubik" },
  { id: 15, name: "Retro", heading: "Righteous", body: "Oxygen", description: "Righteous + Oxygen" },
  { id: 16, name: "Contemporary", heading: "Archivo Black", body: "Assistant", description: "Archivo Black + Assistant" },
  { id: 17, name: "Luxe", heading: "Cinzel", body: "Quattrocento Sans", description: "Cinzel + Quattrocento Sans" },
  { id: 18, name: "Bold Impact", heading: "Russo One", body: "Karla", description: "Russo One + Karla" },
  { id: 19, name: "Sophisticated", heading: "Josefin Sans", body: "Mulish", description: "Josefin Sans + Mulish" },
  { id: 20, name: "Professional", heading: "IBM Plex Serif", body: "IBM Plex Sans", description: "IBM Plex Serif + IBM Plex Sans" }
];

export default function PackagingPage() {
  const [selectedFont, setSelectedFont] = useState(fontCombinations[0]);
  const [isFontPanelOpen, setIsFontPanelOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const packagingSolutions = [
    {
      title: "Printing Machines",
      icon: Printer,
      description: "State-of-the-art printing technology for high-quality labels and packaging designs",
      features: ["Digital & Offset Printing", "UV Coating Options", "Embossing & Foiling", "Variable Data Printing"],
      image: "https://images.unsplash.com/photo-1612878010854-1134f0dcc2f7?w=800"
    },
    {
      title: "Filling Machines",
      icon: Droplet,
      description: "Automated filling systems for liquids, powders, and granular products",
      features: ["Volumetric Filling", "Weight-Based Systems", "Multi-Head Options", "Clean Room Compatible"],
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800"
    },
    {
      title: "Wrapping Machines",
      icon: Package,
      description: "Professional wrapping solutions for products of all sizes and shapes",
      features: ["Shrink Wrapping", "Flow Wrapping", "Stretch Wrapping", "Automated Systems"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800"
    },
    {
      title: "Boxes",
      icon: Box,
      description: "Custom boxes in various materials, sizes, and designs for your products",
      features: ["Corrugated Boxes", "Rigid Boxes", "Die-Cut Options", "Custom Printing"],
      image: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?w=800"
    },
    {
      title: "Bottles: Glass & Plastic",
      icon: Droplet,
      description: "Premium glass and plastic bottles for beverages, cosmetics, and chemicals",
      features: ["Various Sizes", "Custom Shapes", "Color Options", "Tamper-Proof Caps"],
      image: "https://images.unsplash.com/photo-1624390965170-9df7dc963e4f?w=800"
    },
    {
      title: "Mylar Bags",
      icon: ShoppingBag,
      description: "High-barrier mylar bags for maximum product freshness and protection",
      features: ["Smell-Proof", "Child-Resistant", "Stand-Up Pouches", "Custom Sizing"],
      image: "https://images.unsplash.com/photo-1607827448387-a67db1383b59?w=800"
    },
    {
      title: "Labels & Stickers",
      icon: Tag,
      description: "Professional labels and stickers with custom designs and finishes",
      features: ["Waterproof Options", "Thermal Labels", "Security Features", "QR Code Integration"],
      image: "https://images.unsplash.com/photo-1628260412297-a3377e45006f?w=800"
    }
  ];

  return (
    <>
      <HeaderFCP onFontToggle={() => setIsFontPanelOpen(!isFontPanelOpen)} isMobile={isMobile} />
      <FontPanel
        isOpen={isFontPanelOpen}
        onClose={() => setIsFontPanelOpen(false)}
        fontCombinations={fontCombinations}
        selectedFont={selectedFont}
        onSelectFont={setSelectedFont}
        isMobile={isMobile}
      />

      <main style={{ paddingTop: '80px', backgroundColor: '#020617', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section style={{
          padding: isMobile ? '3rem 1rem' : '5rem 2rem',
          background: 'linear-gradient(135deg, #020617 0%, #0a0f2e 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1
          }} />

          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 style={{
                fontSize: isMobile ? '2.5rem' : '4rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                textAlign: 'center',
                fontFamily: `'${selectedFont.heading}', serif`,
                color: 'white'
              }}>
                Packaging <span style={{ color: '#FFD700' }}>Solutions</span>
              </h1>
              <p style={{
                fontSize: isMobile ? '1rem' : '1.3rem',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.9)',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto',
                fontFamily: `'${selectedFont.body}', sans-serif`
              }}>
                Complete packaging solutions from printing to labeling.
                We provide state-of-the-art machinery and materials to meet all your packaging needs.
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                marginTop: '2rem',
                flexWrap: 'wrap'
              }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: isMobile ? '0.8rem 2rem' : '1rem 2.5rem',
                    backgroundColor: '#FFD700',
                    color: '#020617',
                    border: 'none',
                    borderRadius: '30px',
                    fontSize: isMobile ? '0.95rem' : '1.1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontFamily: `'${selectedFont.body}', sans-serif`
                  }}
                >
                  Get Quote
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: isMobile ? '0.8rem 2rem' : '1rem 2.5rem',
                    backgroundColor: 'transparent',
                    color: '#FFD700',
                    border: '2px solid #FFD700',
                    borderRadius: '30px',
                    fontSize: isMobile ? '0.95rem' : '1.1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontFamily: `'${selectedFont.body}', sans-serif`
                  }}
                >
                  View Catalog
                </motion.button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              cursor: 'pointer'
            }}
          >
            <ChevronDown size={30} color="#FFD700" />
          </motion.div>
        </section>

        {/* Solutions Grid */}
        <section style={{
          padding: isMobile ? '3rem 1rem' : '5rem 2rem',
          backgroundColor: '#020617'
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            {packagingSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  marginBottom: '4rem',
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                  gap: isMobile ? '2rem' : '4rem',
                  alignItems: 'center'
                }}
              >
                {/* Content */}
                <div style={{ order: isMobile ? 1 : index % 2 === 0 ? 1 : 2 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: 'rgba(255, 215, 0, 0.1)',
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid #FFD700'
                    }}>
                      <solution.icon size={30} color="#FFD700" />
                    </div>
                    <h2 style={{
                      fontSize: isMobile ? '1.8rem' : '2.5rem',
                      fontWeight: 'bold',
                      fontFamily: `'${selectedFont.heading}', serif`,
                      color: 'white'
                    }}>
                      {solution.title}
                    </h2>
                  </div>

                  <p style={{
                    fontSize: isMobile ? '0.95rem' : '1.1rem',
                    lineHeight: 1.8,
                    color: 'rgba(255, 255, 255, 0.85)',
                    marginBottom: '2rem',
                    fontFamily: `'${selectedFont.body}', sans-serif`
                  }}>
                    {solution.description}
                  </p>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: '1rem',
                    marginBottom: '2rem'
                  }}>
                    {solution.features.map((feature, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <CheckCircle size={18} color="#FFD700" />
                        <span style={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          fontSize: isMobile ? '0.9rem' : '1rem',
                          fontFamily: `'${selectedFont.body}', sans-serif`
                        }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: isMobile ? '0.7rem 1.8rem' : '0.9rem 2.2rem',
                      backgroundColor: 'transparent',
                      color: '#FFD700',
                      border: '2px solid #FFD700',
                      borderRadius: '25px',
                      fontSize: isMobile ? '0.9rem' : '1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontFamily: `'${selectedFont.body}', sans-serif`,
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#FFD700';
                      e.currentTarget.style.color = '#020617';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#FFD700';
                    }}
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </motion.button>
                </div>

                {/* Image */}
                <motion.div
                  style={{ order: isMobile ? 2 : index % 2 === 0 ? 2 : 1 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div style={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 215, 0, 0.2)'
                  }}>
                    <img
                      src={solution.image}
                      alt={solution.title}
                      style={{
                        width: '100%',
                        height: isMobile ? '250px' : '400px',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          padding: isMobile ? '3rem 1rem' : '5rem 2rem',
          backgroundColor: '#0a0f2e'
        }}>
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: isMobile ? '2rem' : '3rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              fontFamily: `'${selectedFont.heading}', serif`,
              color: 'white'
            }}>
              Ready to Transform Your <span style={{ color: '#FFD700' }}>Packaging?</span>
            </h2>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.2rem',
              lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '2rem',
              fontFamily: `'${selectedFont.body}', sans-serif`
            }}>
              Contact our experts today for a customized packaging solution that meets your specific needs
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: isMobile ? '0.9rem 2.5rem' : '1.2rem 3rem',
                  backgroundColor: '#FFD700',
                  color: '#020617',
                  border: 'none',
                  borderRadius: '30px',
                  fontSize: isMobile ? '1rem' : '1.2rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontFamily: `'${selectedFont.body}', sans-serif`
                }}
              >
                Request Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: isMobile ? '0.9rem 2.5rem' : '1.2rem 3rem',
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                  borderRadius: '30px',
                  fontSize: isMobile ? '1rem' : '1.2rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontFamily: `'${selectedFont.body}', sans-serif`
                }}
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}