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
      description: "State-of-the-art printing technology for high-quality labels and packaging designs. Our printing machines deliver exceptional quality with speeds up to 300 meters per minute. Perfect for large-scale production with minimal waste and maximum efficiency.",
      detailedInfo: "Our range of printing machines includes digital, flexographic, and offset printing solutions. Each machine is equipped with advanced color management systems, automatic registration control, and inline quality inspection. We offer both water-based and UV-curable ink systems to meet different production requirements.",
      features: ["Digital & Offset Printing", "UV Coating Options", "Embossing & Foiling", "Variable Data Printing"],
      specs: ["Speed: 50-300 m/min", "Width: 330-1650mm", "Resolution: up to 2400 DPI", "Colors: CMYK + 4 special"],
      images: [
        "https://images.unsplash.com/photo-1612878010854-1134f0dcc2f7?w=800",
        "https://images.unsplash.com/photo-1564054074885-e5a7c93671d7?w=800",
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800",
        "https://images.unsplash.com/photo-1606986628253-05620e91f3d4?w=800"
      ]
    },
    {
      title: "Filling Machines",
      icon: Droplet,
      description: "Automated filling systems for liquids, powders, and granular products. Our machines ensure precise filling with minimal product waste, suitable for food, pharmaceutical, and chemical industries.",
      detailedInfo: "From small-scale semi-automatic fillers to fully automated production lines, our filling machines handle various viscosities and product types. Features include CIP/SIP capability, servo-driven mechanisms, and touchscreen controls with recipe storage.",
      features: ["Volumetric Filling", "Weight-Based Systems", "Multi-Head Options", "Clean Room Compatible"],
      specs: ["Capacity: 10ml-5L", "Speed: 20-120 bottles/min", "Accuracy: ±0.5%", "Material: SS316L"],
      images: [
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800",
        "https://images.unsplash.com/photo-1609205807490-238133508046?w=800",
        "https://images.unsplash.com/photo-1597423498219-2fd2f2640549?w=800"
      ]
    },
    {
      title: "Wrapping Machines",
      icon: Package,
      description: "Professional wrapping solutions for products of all sizes and shapes. Our wrapping machines provide secure, attractive packaging while maintaining high-speed operation.",
      detailedInfo: "We offer a complete range of wrapping technologies including flow wrap, shrink wrap, stretch wrap, and overwrapping machines. Each system can be customized with various feeding systems, film types, and sealing mechanisms to match your specific requirements.",
      features: ["Shrink Wrapping", "Flow Wrapping", "Stretch Wrapping", "Automated Systems"],
      specs: ["Speed: up to 150 packs/min", "Film width: 250-800mm", "Product size: customizable", "Seal type: rotary/box motion"],
      images: [
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
        "https://images.unsplash.com/photo-1565206077212-4eb48d41f54b?w=800",
        "https://images.unsplash.com/photo-1586528116494-f95b900cf5c9?w=800",
        "https://images.unsplash.com/photo-1553531889-3836a7ee6d3f?w=800"
      ]
    },
    {
      title: "Boxes",
      icon: Box,
      description: "Custom boxes in various materials, sizes, and designs for your products. From e-commerce shipping to luxury packaging, we provide complete box solutions.",
      detailedInfo: "Our box manufacturing capabilities include corrugated boxes, rigid boxes, folding cartons, and specialty boxes. We offer various finishing options including lamination, spot UV, foil stamping, embossing, and window patching. All boxes can be customized with your branding and design.",
      features: ["Corrugated Boxes", "Rigid Boxes", "Die-Cut Options", "Custom Printing"],
      specs: ["Sizes: fully customizable", "Material: E-flute to triple-wall", "MOQ: 100-1000 units", "Lead time: 7-14 days"],
      images: [
        "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?w=800",
        "https://images.unsplash.com/photo-1607166452427-7e4477079e5c?w=800",
        "https://images.unsplash.com/photo-1568252542512-9d67732e6d2e?w=800",
        "https://images.unsplash.com/photo-1573855619003-b9a675f04f19?w=800"
      ]
    },
    {
      title: "Bottles: Glass & Plastic",
      icon: Droplet,
      description: "Premium glass and plastic bottles for beverages, cosmetics, and chemicals. Wide range of shapes, sizes, and closure options available.",
      detailedInfo: "We supply both glass and plastic bottles suitable for various industries. Our glass bottles range from standard designs to custom molds, while our plastic bottles include PET, HDPE, and PP options. All bottles can be decorated with labeling, silk screening, or hot stamping.",
      features: ["Various Sizes", "Custom Shapes", "Color Options", "Tamper-Proof Caps"],
      specs: ["Capacity: 10ml-5L", "Materials: Glass/PET/HDPE/PP", "Neck finish: various standards", "Colors: clear/amber/custom"],
      images: [
        "https://images.unsplash.com/photo-1624390965170-9df7dc963e4f?w=800",
        "https://images.unsplash.com/photo-1625772299848-391b6a87d294?w=800",
        "https://images.unsplash.com/photo-1602143324010-b51e40b5f65b?w=800",
        "https://images.unsplash.com/photo-1594737626238-c4fa02cb1906?w=800"
      ]
    },
    {
      title: "Mylar Bags",
      icon: ShoppingBag,
      description: "High-barrier mylar bags for maximum product freshness and protection. Ideal for food storage, pharmaceuticals, and sensitive products.",
      detailedInfo: "Our mylar bags provide superior barrier properties against moisture, oxygen, and light. Available in various thicknesses and sizes with options for zip locks, tear notches, hang holes, and clear windows. Child-resistant and smell-proof options available for specialized applications.",
      features: ["Smell-Proof", "Child-Resistant", "Stand-Up Pouches", "Custom Sizing"],
      specs: ["Thickness: 3-7 mil", "Sizes: 1g to 5lb capacity", "Barrier: OTR <0.05", "Features: resealable/heat-sealable"],
      images: [
        "https://images.unsplash.com/photo-1607827448387-a67db1383b59?w=800",
        "https://images.unsplash.com/photo-1605627079912-a5ecd98a4e31?w=800",
        "https://images.unsplash.com/photo-1610340815771-8663e92ac167?w=800",
        "https://images.unsplash.com/photo-1589988505004-e6133eadd68e?w=800"
      ]
    },
    {
      title: "Labels & Stickers",
      icon: Tag,
      description: "Professional labels and stickers with custom designs and finishes. From product labels to security stickers, we provide complete labeling solutions.",
      detailedInfo: "We produce labels using various printing technologies including digital, flexographic, and screen printing. Materials range from paper to synthetic substrates with various adhesive options. Special features include holographic effects, sequential numbering, QR codes, and NFC tags.",
      features: ["Waterproof Options", "Thermal Labels", "Security Features", "QR Code Integration"],
      specs: ["Materials: Paper/Vinyl/Polyester", "Adhesive: Permanent/Removable", "Finish: Matte/Gloss/UV", "MOQ: 100-1000 units"],
      images: [
        "https://images.unsplash.com/photo-1628260412297-a3377e45006f?w=800",
        "https://images.unsplash.com/photo-1589988491289-2d62f12ed72d?w=800",
        "https://images.unsplash.com/photo-1549923082-3849b58f9284?w=800",
        "https://images.unsplash.com/photo-1596742578443-e0a14bb81a4c?w=800"
      ]
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
                {/* Full Section for Each Product */}
                <div style={{ gridColumn: '1 / -1' }}>
                  {/* Section Header */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '2rem'
                  }}>
                    <div style={{
                      width: '70px',
                      height: '70px',
                      backgroundColor: 'rgba(255, 215, 0, 0.1)',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid #FFD700'
                    }}>
                      <solution.icon size={35} color="#FFD700" />
                    </div>
                    <h2 style={{
                      fontSize: isMobile ? '2rem' : '3rem',
                      fontWeight: 'bold',
                      fontFamily: `'${selectedFont.heading}', serif`,
                      color: 'white'
                    }}>
                      {solution.title}
                    </h2>
                  </div>

                  {/* Description and Detailed Info */}
                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '20px',
                    padding: isMobile ? '1.5rem' : '2.5rem',
                    marginBottom: '2rem'
                  }}>
                    <p style={{
                      fontSize: isMobile ? '1rem' : '1.2rem',
                      lineHeight: 1.8,
                      color: 'rgba(255, 255, 255, 0.9)',
                      marginBottom: '1.5rem',
                      fontFamily: `'${selectedFont.body}', sans-serif`
                    }}>
                      {solution.description}
                    </p>
                    <p style={{
                      fontSize: isMobile ? '0.95rem' : '1.1rem',
                      lineHeight: 1.8,
                      color: 'rgba(255, 255, 255, 0.75)',
                      fontFamily: `'${selectedFont.body}', sans-serif`
                    }}>
                      {solution.detailedInfo}
                    </p>
                  </div>

                  {/* Features and Specs Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: '2rem',
                    marginBottom: '2rem'
                  }}>
                    {/* Key Features */}
                    <div style={{
                      backgroundColor: 'rgba(255, 215, 0, 0.05)',
                      borderRadius: '15px',
                      padding: isMobile ? '1.5rem' : '2rem',
                      border: '1px solid rgba(255, 215, 0, 0.2)'
                    }}>
                      <h3 style={{
                        fontSize: isMobile ? '1.2rem' : '1.5rem',
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                        color: '#FFD700',
                        fontFamily: `'${selectedFont.heading}', serif`
                      }}>
                        Key Features
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {solution.features.map((feature, i) => (
                          <div key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                          }}>
                            <CheckCircle size={20} color="#FFD700" />
                            <span style={{
                              color: 'rgba(255, 255, 255, 0.9)',
                              fontSize: isMobile ? '0.95rem' : '1.05rem',
                              fontFamily: `'${selectedFont.body}', sans-serif`
                            }}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Specifications */}
                    <div style={{
                      backgroundColor: 'rgba(255, 215, 0, 0.05)',
                      borderRadius: '15px',
                      padding: isMobile ? '1.5rem' : '2rem',
                      border: '1px solid rgba(255, 215, 0, 0.2)'
                    }}>
                      <h3 style={{
                        fontSize: isMobile ? '1.2rem' : '1.5rem',
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                        color: '#FFD700',
                        fontFamily: `'${selectedFont.heading}', serif`
                      }}>
                        Technical Specifications
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {solution.specs.map((spec, i) => (
                          <div key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                          }}>
                            <div style={{
                              width: '6px',
                              height: '6px',
                              backgroundColor: '#FFD700',
                              borderRadius: '50%'
                            }} />
                            <span style={{
                              color: 'rgba(255, 255, 255, 0.85)',
                              fontSize: isMobile ? '0.95rem' : '1.05rem',
                              fontFamily: `'${selectedFont.body}', sans-serif`
                            }}>
                              {spec}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image Gallery */}
                  <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{
                      fontSize: isMobile ? '1.3rem' : '1.8rem',
                      fontWeight: 'bold',
                      marginBottom: '1.5rem',
                      color: 'white',
                      fontFamily: `'${selectedFont.heading}', serif`
                    }}>
                      Gallery
                    </h3>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
                      gap: '1.5rem'
                    }}>
                      {solution.images.map((image, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05, zIndex: 10 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                          style={{
                            borderRadius: '15px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                            border: '1px solid rgba(255, 215, 0, 0.2)',
                            cursor: 'pointer'
                          }}
                        >
                          <img
                            src={image}
                            alt={`${solution.title} ${i + 1}`}
                            style={{
                              width: '100%',
                              height: isMobile ? '200px' : '250px',
                              objectFit: 'cover'
                            }}
                            onError={(e) => {
                              e.currentTarget.src = `https://via.placeholder.com/800x600/0a0f2e/FFD700?text=${solution.title.replace(' ', '+')}`;
                            }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingBottom: '3rem',
                    borderBottom: index < packagingSolutions.length - 1 ? '1px solid rgba(255, 215, 0, 0.1)' : 'none'
                  }}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        padding: isMobile ? '0.9rem 2.5rem' : '1.1rem 3rem',
                        backgroundColor: '#FFD700',
                        color: '#020617',
                        border: 'none',
                        borderRadius: '30px',
                        fontSize: isMobile ? '1rem' : '1.2rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        fontFamily: `'${selectedFont.body}', sans-serif`
                      }}
                    >
                      Get Quote for {solution.title}
                      <ArrowRight size={20} />
                    </motion.button>
                  </div>
                </div>
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