'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shirt, Activity, Shield, Snowflake, Flame, HardHat, Mountain, Heart, ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
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

export default function ApparelPage() {
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

  const apparelCategories = [
    {
      title: "Sports Clothing",
      icon: Activity,
      description: "High-performance sports apparel designed for athletes and fitness enthusiasts",
      features: ["Moisture-Wicking Fabrics", "Breathable Materials", "Custom Team Logos", "Performance Fit"],
      image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800"
    },
    {
      title: "Gym Clothing",
      icon: Activity,
      description: "Professional gym wear combining style with functionality for optimal workouts",
      features: ["Stretchable Fabric", "Anti-Odor Technology", "Compression Options", "Durability Tested"],
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800"
    },
    {
      title: "Street Wear",
      icon: Shirt,
      description: "Trendy urban fashion that makes a statement on the streets",
      features: ["Latest Designs", "Premium Cotton", "Custom Graphics", "Limited Editions"],
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800"
    },
    {
      title: "Pajamas & Sleep Wear",
      icon: Heart,
      description: "Comfortable loungewear and sleepwear for ultimate relaxation",
      features: ["Soft Materials", "Breathable Fabrics", "Stylish Designs", "All Seasons"],
      image: "https://images.unsplash.com/photo-1584233531152-189483731815?w=800"
    },
    {
      title: "Swim Wear",
      icon: Activity,
      description: "Premium swimwear designed for performance and style",
      features: ["Quick-Dry Fabric", "UV Protection", "Chlorine Resistant", "Trendy Designs"],
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800"
    },
    {
      title: "Track Suits",
      icon: Activity,
      description: "Professional track suits for training, sports, and casual wear",
      features: ["Men & Women Options", "Team Customization", "Premium Zippers", "Multiple Colors"],
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800"
    },
    {
      title: "Socks Collection",
      icon: Shirt,
      description: "Premium socks for sports, casual wear, and special occasions",
      features: ["Athletic Support", "Cushioned Soles", "Moisture Control", "Various Lengths"],
      image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=800"
    },
    {
      title: "Winter Wear",
      icon: Snowflake,
      description: "Warm and stylish winter clothing for extreme weather conditions",
      features: ["Insulated Jackets", "Thermal Layers", "Waterproof Options", "Fashion Forward"],
      image: "https://images.unsplash.com/photo-1513094735237-8f2714d57c13?w=800"
    },
    {
      title: "Tactical Gear",
      icon: Shield,
      description: "Military-grade tactical clothing for outdoor and professional use",
      features: ["Ripstop Fabric", "Multiple Pockets", "Camouflage Options", "Heavy-Duty Build"],
      image: "https://images.unsplash.com/photo-1616166119819-81c29638868e?w=800"
    },
    {
      title: "Camp & Hunting Gear",
      icon: Mountain,
      description: "Specialized outdoor apparel for camping and hunting adventures",
      features: ["Weather Resistant", "Silent Movement", "Scent Control", "Utility Design"],
      image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800"
    },
    {
      title: "Under Wear",
      icon: Shirt,
      description: "Premium undergarments for comfort and support all day long",
      features: ["Seamless Design", "Breathable Material", "Anti-Bacterial", "Size Range"],
      image: "https://images.unsplash.com/photo-1570382667048-23b581258f6a?w=800"
    },
    {
      title: "Heated Apparel",
      icon: Flame,
      description: "Revolutionary heated clothing with advanced temperature control",
      features: ["Battery Powered", "3 Heat Settings", "Washable", "Long Battery Life"],
      image: "https://images.unsplash.com/photo-1578761502020-6a909c8837ea?w=800"
    },
    {
      title: "Hats Collection",
      icon: HardHat,
      description: "Stylish headwear from casual caps to professional hats",
      features: ["Various Styles", "Custom Embroidery", "Adjustable Fit", "Premium Materials"],
      image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800"
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1920)',
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
                Premium <span style={{ color: '#FFD700' }}>Apparel</span> for Men & Women
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
                From sports wear to tactical gear, we provide high-quality custom apparel solutions
                for every occasion and lifestyle.
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
                  Browse Collection
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
                  Custom Design
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

        {/* Categories Grid */}
        <section style={{
          padding: isMobile ? '3rem 1rem' : '5rem 2rem',
          backgroundColor: '#020617'
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: isMobile ? '2rem' : '3rem'
            }}>
              {apparelCategories.map((category, index) => (
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
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.borderColor = '#FFD700';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 215, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.2)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Image */}
                  <div style={{
                    width: '100%',
                    height: isMobile ? '200px' : '250px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={category.image}
                      alt={category.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
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
                      background: 'linear-gradient(to bottom, transparent 50%, rgba(2, 6, 23, 0.9) 100%)'
                    }} />
                    <div style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      backgroundColor: 'rgba(2, 6, 23, 0.9)',
                      padding: '0.5rem',
                      borderRadius: '10px'
                    }}>
                      <category.icon size={24} color="#FFD700" />
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: isMobile ? '1.5rem' : '2rem' }}>
                    <h3 style={{
                      fontSize: isMobile ? '1.3rem' : '1.6rem',
                      fontWeight: 'bold',
                      marginBottom: '0.75rem',
                      color: '#FFD700',
                      fontFamily: `'${selectedFont.heading}', serif`
                    }}>
                      {category.title}
                    </h3>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.85)',
                      marginBottom: '1.5rem',
                      lineHeight: 1.6,
                      fontSize: isMobile ? '0.9rem' : '1rem',
                      fontFamily: `'${selectedFont.body}', sans-serif`
                    }}>
                      {category.description}
                    </p>

                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '0.5rem',
                      marginBottom: '1.5rem'
                    }}>
                      {category.features.map((feature, i) => (
                        <div key={i} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          fontSize: isMobile ? '0.8rem' : '0.85rem',
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontFamily: `'${selectedFont.body}', sans-serif`
                        }}>
                          <CheckCircle size={12} color="#FFD700" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      style={{
                        padding: isMobile ? '0.6rem 1.5rem' : '0.8rem 2rem',
                        backgroundColor: 'transparent',
                        color: '#FFD700',
                        border: '1px solid #FFD700',
                        borderRadius: '20px',
                        fontSize: isMobile ? '0.85rem' : '0.95rem',
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
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#FFD700';
                      }}
                    >
                      View Collection
                      <ArrowRight size={16} />
                    </button>
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
              Design Your <span style={{ color: '#FFD700' }}>Custom Apparel</span>
            </h2>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.2rem',
              lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '2rem',
              fontFamily: `'${selectedFont.body}', sans-serif`
            }}>
              Work with our design team to create unique apparel that represents your brand perfectly
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
                Start Designing
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
                View Catalog
              </motion.button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}