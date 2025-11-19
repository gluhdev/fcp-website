'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, Cpu, Zap, Factory, Gauge, Wrench, Package, Printer, ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
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

export default function MachineryPage() {
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

  const machineryTypes = [
    {
      title: "Packaging Machines",
      icon: Package,
      description: "Advanced packaging machinery for automated production lines with high efficiency",
      features: ["Automatic Operation", "Variable Speed Control", "Multiple Size Options", "Easy Maintenance"],
      specs: ["Speed: 30-120 ppm", "Power: 220V/380V", "CE Certified"],
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800"
    },
    {
      title: "Sealing Machines",
      icon: Zap,
      description: "Professional heat sealing and vacuum sealing equipment for various packaging needs",
      features: ["Heat Sealing", "Vacuum Options", "Band Sealers", "Impulse Sealers"],
      specs: ["Seal Width: 2-10mm", "Temperature: 0-300°C", "Digital Controls"],
      image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800"
    },
    {
      title: "Cutting Machines",
      icon: Settings,
      description: "Precision cutting equipment for packaging materials, fabrics, and industrial applications",
      features: ["Laser Cutting", "Die Cutting", "Rotary Cutting", "CNC Control"],
      specs: ["Accuracy: ±0.1mm", "Max Width: 2000mm", "Auto-feed System"],
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800"
    },
    {
      title: "Textile Printing Machines",
      icon: Printer,
      description: "Digital and screen printing machines for fabric and textile customization",
      features: ["Digital Printing", "Screen Printing", "Sublimation", "DTG Technology"],
      specs: ["Resolution: 1440 DPI", "Print Width: 1.8m", "CMYK+White"],
      image: "https://images.unsplash.com/photo-1612878010854-1134f0dcc2f7?w=800"
    },
    {
      title: "Filling Machines",
      icon: Factory,
      description: "Automated filling systems for liquids, powders, and granular products",
      features: ["Volumetric Filling", "Gravity Feed", "Piston Filling", "Auger Systems"],
      specs: ["Capacity: 10-5000ml", "Accuracy: ±1%", "FDA Approved"],
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800"
    },
    {
      title: "Labeling Machines",
      icon: Gauge,
      description: "High-speed labeling equipment for bottles, boxes, and various product containers",
      features: ["Automatic Application", "Front & Back Labels", "Wrap-Around", "Top Labeling"],
      specs: ["Speed: 200 labels/min", "Label Size: 20-300mm", "PLC Control"],
      image: "https://images.unsplash.com/photo-1628260412297-a3377e45006f?w=800"
    },
    {
      title: "Industrial Automation",
      icon: Cpu,
      description: "Complete automation solutions including conveyor systems and robotic equipment",
      features: ["Conveyor Systems", "Robotic Arms", "PLC Programming", "IoT Integration"],
      specs: ["24/7 Operation", "Remote Monitoring", "Industry 4.0 Ready"],
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800"
    },
    {
      title: "Maintenance & Tools",
      icon: Wrench,
      description: "Essential tools and spare parts for machinery maintenance and optimization",
      features: ["Spare Parts", "Tool Kits", "Lubricants", "Training Support"],
      specs: ["OEM Parts", "24/7 Support", "Warranty Available"],
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800"
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1920)',
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
                Industrial <span style={{ color: '#FFD700' }}>Machinery</span>
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
                State-of-the-art industrial equipment and machinery solutions for packaging,
                textile printing, and automated production lines.
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
                  Request Quote
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
                  Download Catalog
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

        {/* Machinery Grid */}
        <section style={{
          padding: isMobile ? '3rem 1rem' : '5rem 2rem',
          backgroundColor: '#020617'
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(450px, 1fr))',
              gap: isMobile ? '3rem' : '4rem'
            }}>
              {machineryTypes.map((machine, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 215, 0, 0.2)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s'
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
                      src={machine.image}
                      alt={machine.title}
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
                      padding: '0.6rem',
                      borderRadius: '10px',
                      border: '1px solid #FFD700'
                    }}>
                      <machine.icon size={24} color="#FFD700" />
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: isMobile ? '1.5rem' : '2rem' }}>
                    <h3 style={{
                      fontSize: isMobile ? '1.4rem' : '1.8rem',
                      fontWeight: 'bold',
                      marginBottom: '0.75rem',
                      color: '#FFD700',
                      fontFamily: `'${selectedFont.heading}', serif`
                    }}>
                      {machine.title}
                    </h3>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.85)',
                      marginBottom: '1.5rem',
                      lineHeight: 1.6,
                      fontSize: isMobile ? '0.9rem' : '1rem',
                      fontFamily: `'${selectedFont.body}', sans-serif`
                    }}>
                      {machine.description}
                    </p>

                    {/* Features */}
                    <div style={{
                      marginBottom: '1.5rem',
                      paddingBottom: '1.5rem',
                      borderBottom: '1px solid rgba(255, 215, 0, 0.2)'
                    }}>
                      <h4 style={{
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        fontWeight: 'bold',
                        marginBottom: '0.75rem',
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontFamily: `'${selectedFont.body}', sans-serif`
                      }}>
                        Key Features:
                      </h4>
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '0.5rem'
                      }}>
                        {machine.features.map((feature, i) => (
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
                    </div>

                    {/* Specifications */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        fontWeight: 'bold',
                        marginBottom: '0.75rem',
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontFamily: `'${selectedFont.body}', sans-serif`
                      }}>
                        Specifications:
                      </h4>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.3rem'
                      }}>
                        {machine.specs.map((spec, i) => (
                          <span key={i} style={{
                            fontSize: isMobile ? '0.8rem' : '0.85rem',
                            color: 'rgba(255, 255, 255, 0.6)',
                            fontFamily: `'${selectedFont.body}', sans-serif`
                          }}>
                            • {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      style={{
                        padding: isMobile ? '0.7rem 1.5rem' : '0.9rem 2rem',
                        backgroundColor: 'transparent',
                        color: '#FFD700',
                        border: '2px solid #FFD700',
                        borderRadius: '25px',
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
                      Get Details
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
              Need Custom <span style={{ color: '#FFD700' }}>Machinery Solutions?</span>
            </h2>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.2rem',
              lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '2rem',
              fontFamily: `'${selectedFont.body}', sans-serif`
            }}>
              Our technical experts will help you find the perfect machinery for your production needs
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
                Schedule Consultation
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
                View All Equipment
              </motion.button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}