'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Lightbulb, BookOpen, Calendar, PenTool, Palette, Square, Megaphone, ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
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

export default function SignagePage() {
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

  const signageProducts = [
    {
      title: "Large Format Displays",
      icon: Monitor,
      description: "Professional large format displays and digital signage solutions for maximum impact",
      features: ["LED Screens", "LCD Displays", "Touch Screens", "Video Walls"],
      sizes: ["32\" - 98\"", "4K/8K Resolution", "Indoor/Outdoor"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
    },
    {
      title: "LED Light Signs",
      icon: Lightbulb,
      description: "Eye-catching LED illuminated signs with customizable designs and animations",
      features: ["Neon Style", "Channel Letters", "Light Boxes", "Edge-Lit Signs"],
      sizes: ["Custom Sizes", "RGB Colors", "Programmable"],
      image: "https://images.unsplash.com/photo-1606836591347-92fbbe0df5ab?w=800"
    },
    {
      title: "Banners & Posters",
      icon: Square,
      description: "High-quality vinyl banners and posters for indoor and outdoor advertising",
      features: ["Vinyl Banners", "Mesh Banners", "Fabric Banners", "Poster Prints"],
      sizes: ["Any Size", "Weather Resistant", "UV Protected"],
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800"
    },
    {
      title: "Business Cards",
      icon: Square,
      description: "Premium business cards with various finishes and custom designs",
      features: ["Spot UV", "Foil Stamping", "Embossing", "Die-Cutting"],
      sizes: ["Standard & Custom", "Various Thickness", "Special Finishes"],
      image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=800"
    },
    {
      title: "Notebooks & Journals",
      icon: BookOpen,
      description: "Custom branded notebooks and journals for corporate gifts and merchandise",
      features: ["Hardcover", "Softcover", "Spiral Bound", "Leather Bound"],
      sizes: ["A4, A5, A6", "Custom Pages", "Logo Printing"],
      image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800"
    },
    {
      title: "Custom Pens",
      icon: PenTool,
      description: "Branded writing instruments from basic to luxury pens with custom printing",
      features: ["Ballpoint", "Gel Pens", "Metal Pens", "Executive Sets"],
      sizes: ["Various Styles", "Laser Engraving", "Color Printing"],
      image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=800"
    },
    {
      title: "Calendars",
      icon: Calendar,
      description: "Custom calendars in various formats for promotional and corporate use",
      features: ["Wall Calendars", "Desk Calendars", "Pocket Calendars", "Planners"],
      sizes: ["Multiple Sizes", "Custom Design", "Full Color"],
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800"
    },
    {
      title: "Promotional Materials",
      icon: Megaphone,
      description: "Complete range of promotional items and marketing materials",
      features: ["Flyers", "Brochures", "Catalogs", "Stickers"],
      sizes: ["Custom Formats", "Various Papers", "Special Finishes"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800"
    },
    {
      title: "Window Graphics",
      icon: Palette,
      description: "Window decals, clings, and perforated vinyl for storefront advertising",
      features: ["Vinyl Decals", "Window Clings", "Perforated Vinyl", "Frosted Glass"],
      sizes: ["Custom Cut", "Full Coverage", "Removable Options"],
      image: "https://images.unsplash.com/photo-1570215171323-4ec328f3f5fa?w=800"
    }
  ];

  return (
    <>
      <HeaderFCP onFontPanelToggle={() => setIsFontPanelOpen(!isFontPanelOpen)} />
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920)',
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
                Signage & <span style={{ color: '#FFD700' }}>Display Solutions</span>
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
                From digital displays to branded stationery, we provide comprehensive
                signage and promotional solutions that make your brand stand out.
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
                  Get Started
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
                  View Portfolio
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

        {/* Products Grid */}
        <section style={{
          padding: isMobile ? '3rem 1rem' : '5rem 2rem',
          backgroundColor: '#020617'
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: isMobile ? '2rem' : '3rem'
            }}>
              {signageProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 215, 0, 0.2)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                    e.currentTarget.style.borderColor = '#FFD700';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 215, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.2)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Image */}
                  <div style={{
                    width: '100%',
                    height: isMobile ? '180px' : '220px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to bottom, transparent 40%, rgba(2, 6, 23, 0.95) 100%)'
                    }} />
                    <div style={{
                      position: 'absolute',
                      bottom: '15px',
                      left: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}>
                      <div style={{
                        backgroundColor: '#FFD700',
                        padding: '0.5rem',
                        borderRadius: '10px'
                      }}>
                        <product.icon size={20} color="#020617" />
                      </div>
                      <h3 style={{
                        fontSize: isMobile ? '1.1rem' : '1.3rem',
                        fontWeight: 'bold',
                        color: 'white',
                        fontFamily: `'${selectedFont.heading}', serif`
                      }}>
                        {product.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: isMobile ? '1.25rem' : '1.75rem' }}>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.85)',
                      marginBottom: '1.25rem',
                      lineHeight: 1.6,
                      fontSize: isMobile ? '0.9rem' : '0.95rem',
                      fontFamily: `'${selectedFont.body}', sans-serif`
                    }}>
                      {product.description}
                    </p>

                    {/* Features */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem'
                      }}>
                        {product.features.map((feature, i) => (
                          <span key={i} style={{
                            padding: '0.25rem 0.75rem',
                            backgroundColor: 'rgba(255, 215, 0, 0.1)',
                            border: '1px solid rgba(255, 215, 0, 0.3)',
                            borderRadius: '15px',
                            fontSize: isMobile ? '0.75rem' : '0.8rem',
                            color: '#FFD700',
                            fontFamily: `'${selectedFont.body}', sans-serif`
                          }}>
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Sizes/Specs */}
                    <div style={{
                      padding: '0.75rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '10px',
                      marginBottom: '1.25rem'
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '0.5rem'
                      }}>
                        {product.sizes.map((size, i) => (
                          <span key={i} style={{
                            fontSize: isMobile ? '0.75rem' : '0.8rem',
                            color: 'rgba(255, 255, 255, 0.6)',
                            fontFamily: `'${selectedFont.body}', sans-serif`,
                            textAlign: 'center'
                          }}>
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        padding: isMobile ? '0.6rem 1.25rem' : '0.75rem 1.75rem',
                        backgroundColor: 'transparent',
                        color: '#FFD700',
                        border: '1px solid #FFD700',
                        borderRadius: '20px',
                        fontSize: isMobile ? '0.85rem' : '0.9rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        width: '100%',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        fontFamily: `'${selectedFont.body}', sans-serif`,
                        transition: 'all 0.3s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#FFD700';
                        e.currentTarget.style.color = '#020617';
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#FFD700';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      Learn More
                      <ArrowRight size={14} />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
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
              Make Your Brand <span style={{ color: '#FFD700' }}>Visible</span>
            </h2>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.2rem',
              lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '2rem',
              fontFamily: `'${selectedFont.body}', sans-serif`
            }}>
              Let our design team create stunning signage and promotional materials that capture attention
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
                Start Your Project
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
                Request Samples
              </motion.button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}