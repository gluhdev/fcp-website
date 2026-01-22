'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
import { HeaderFCP } from '@/components/ui/header';
import { EditableText } from '@/components/cms';
import { useCMS } from '@/components/cms/CMSProvider';

// Fixed font: Corporate (Merriweather + Open Sans)
const selectedFont = {
  heading: "Merriweather",
  body: "Open Sans"
};

export default function SignagePage() {
  const [isMobile, setIsMobile] = useState(false);
  const { content } = useCMS();

  const contactEmail = content?.contact?.email || 'info@fullcustompackaging.com';

  const handleGetQuote = (product?: string) => {
    const subject = product ? `Quote Request: ${product}` : 'Quote Request: Neon Signs';
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`;
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const signageCategories = [
    {
      id: "neon",
      defaultTitle: "Neon Signs",
      icon: Lightbulb,
      defaultDescription: "Custom LED neon signs for businesses, events, and home decor",
      features: ["Acrylic", "Aluminum", "Gold Brushed", "Front Lit", "Back Lit", "Side Lit", "LED Neon", "& Many More"],
      image: "/signage-neon.png"
    },
    {
      id: "led-colors",
      defaultTitle: "LED Colors",
      icon: Lightbulb,
      defaultDescription: "Wide range of vibrant LED colors to match your brand and style",
      features: ["White", "Cold White", "Warm White", "Red", "Green", "Blue", "Yellow", "Pink"],
      image: "/signage-led-colors.png"
    }
  ];

  return (
    <>
      <HeaderFCP selectedFont={selectedFont} />

      <main style={{ paddingTop: '80px', backgroundColor: '#020617', minHeight: 'auto' }}>
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
            backgroundImage: 'url(/hero-neon.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
            opacity: 0.2
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
                <EditableText
                  path="pages.signage.hero.title"
                  defaultValue="Custom Neon Signs"
                  as="span"
                />
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
                <EditableText
                  path="pages.signage.hero.description"
                  defaultValue="Eye-catching custom neon display signs for your business. Make your brand stand out with our premium signage solutions."
                  as="span"
                  multiline
                />
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
                  onClick={() => handleGetQuote()}
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
                  onClick={() => {
                    const element = document.getElementById('products');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
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
                  Product List
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
              bottom: isMobile ? '5px' : '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              cursor: 'pointer'
            }}
          >
            <ChevronDown size={30} color="#FFD700" />
          </motion.div>
        </section>

        {/* Categories Grid */}
        <section id="products" style={{
          padding: isMobile ? '3rem 1rem' : '5rem 2rem',
          backgroundColor: '#020617'
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: isMobile ? '2rem' : '3rem'
            }}>
              {signageCategories.map((category, index) => (
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
                    height: isMobile ? '280px' : '250px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={category.image}
                      alt={category.defaultTitle}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center 30%',
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
                      <EditableText
                        path={`pages.signage.categories.${category.id}.title`}
                        defaultValue={category.defaultTitle}
                        as="span"
                      />
                    </h3>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.85)',
                      marginBottom: '1.5rem',
                      lineHeight: 1.6,
                      fontSize: isMobile ? '0.9rem' : '1rem',
                      fontFamily: `'${selectedFont.body}', sans-serif`
                    }}>
                      <EditableText
                        path={`pages.signage.categories.${category.id}.description`}
                        defaultValue={category.defaultDescription}
                        as="span"
                        multiline
                      />
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
                      onClick={() => handleGetQuote(category.defaultTitle)}
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
                      Get Quote
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
              <EditableText
                path="pages.signage.cta.title"
                defaultValue="Custom Neon Signage Solutions"
                as="span"
              />
            </h2>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.2rem',
              lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '2rem',
              fontFamily: `'${selectedFont.body}', sans-serif`
            }}>
              <EditableText
                path="pages.signage.cta.description"
                defaultValue="Work with our team to create stunning custom neon signs for your business"
                as="span"
                multiline
              />
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
                onClick={() => handleGetQuote()}
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
                Get Started
              </motion.button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer - вне main */}
      <footer style={{
        backgroundColor: '#0a0f2e',
        padding: isMobile ? '2rem 1rem 6rem' : '3rem 2rem',
        borderTop: '1px solid rgba(255, 215, 0, 0.2)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '1rem'
          }}>
            <div style={{
              backgroundColor: '#FFD700',
              borderRadius: '8px',
              padding: '0.4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Lightbulb size={16} color="#020617" />
            </div>
            <span style={{
              color: '#FFD700',
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}>FCP</span>
          </div>
          <p style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: isMobile ? '0.85rem' : '0.95rem',
            fontFamily: `'${selectedFont.body}', sans-serif`,
            marginBottom: '0.5rem'
          }}>
            © 2026 Full Custom Packaging. All rights reserved.
          </p>
          <p style={{
            color: 'rgba(255, 215, 0, 0.6)',
            fontSize: '0.8rem',
            fontFamily: `'${selectedFont.body}', sans-serif`
          }}>
            Custom Neon Signs
          </p>
        </div>
      </footer>
    </>
  );
}
