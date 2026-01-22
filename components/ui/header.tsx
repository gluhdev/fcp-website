'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Package, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCMS } from '@/components/cms/CMSProvider';
import { EditableText } from '@/components/cms';

interface HeaderProps {
    selectedFont?: any;
}

export function HeaderFCP({ selectedFont }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [showContact, setShowContact] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);
    const pathname = usePathname();
    const { content, isAdmin, isEditing } = useCMS();

    // Get contact info from CMS
    const contactEmail = content?.contact?.email || 'info@fullcustompackaging.com';
    const contactPhone = content?.contact?.phone || '+1 (555) 123-4567';

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const menuItems = [
        { name: 'HOME', href: '/' },
        { name: 'PACKAGING', href: '/packaging' },
        { name: 'SPORTS APPAREL', href: '/apparel' },
        { name: 'SPORTS EQUIPMENT', href: '/sports-equipment' },
        { name: 'NEON SIGNS', href: '/signage' },
        { name: 'PPE', href: '/ppe' }
    ];

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname === href;
    };

    const handleContactClick = () => {
        if (isAdmin && isEditing) {
            setShowContact(!showContact);
        } else {
            window.location.href = `mailto:${contactEmail}`;
        }
    };

    return (
        <>
            <header style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                backgroundColor: 'rgba(2, 6, 23, 0.97)',
                backdropFilter: isMobile ? 'none' : 'blur(10px)',
                borderBottom: '1px solid rgba(255, 215, 0, 0.1)'
            }}>
                <div style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: '0.85rem 1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{
                                backgroundColor: '#FFD700',
                                borderRadius: '8px',
                                padding: '0.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Package size={20} color="#020617" />
                            </div>
                            <div>
                                <div style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 'bold',
                                    color: '#FFD700',
                                    lineHeight: 1
                                }}>
                                    FCP
                                </div>
                                <div style={{
                                    fontSize: '0.6rem',
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    letterSpacing: '0.05em'
                                }}>
                                    Full Custom Packaging
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Desktop Menu */}
                    <nav style={{
                        display: isMobile ? 'none' : 'flex',
                        gap: '1.5rem',
                        alignItems: 'center',
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)'
                    }}>
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                style={{
                                    textDecoration: 'none',
                                    transition: 'all 0.3s',
                                    textAlign: 'center'
                                }}
                            >
                                <motion.span
                                    whileHover={{ y: -2 }}
                                    style={{
                                        display: 'inline-block',
                                        color: isActive(item.href) ? '#FFD700' : 'white',
                                        fontSize: '0.85rem',
                                        fontWeight: 'bold',
                                        letterSpacing: '0.05em',
                                        borderBottom: isActive(item.href) ? '2px solid #FFD700' : 'none',
                                        paddingBottom: '2px',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    {item.name}
                                </motion.span>
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Buttons */}
                    <div style={{
                        display: isMobile ? 'none' : 'flex',
                        gap: '1rem',
                        alignItems: 'center'
                    }}>
                        {/* Contact Us Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleContactClick}
                            style={{
                                backgroundColor: '#FFD700',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '0.5rem 1rem',
                                color: '#020617',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontWeight: 'bold',
                                fontSize: '0.9rem',
                                position: 'relative'
                            }}
                        >
                            <Mail size={18} />
                            Contact Us
                        </motion.button>
                    </div>

                    {/* Contact Popup (only for admin editing) */}
                    <AnimatePresence>
                        {showContact && isAdmin && isEditing && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                style={{
                                    position: 'absolute',
                                    top: '70px',
                                    right: '1.5rem',
                                    backgroundColor: 'rgba(2, 6, 23, 0.98)',
                                    backdropFilter: 'blur(10px)',
                                    border: '2px solid #FFD700',
                                    borderRadius: '12px',
                                    padding: '1.5rem',
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                                    zIndex: 100,
                                    minWidth: '280px'
                                }}
                            >
                                <h4 style={{
                                    color: '#FFD700',
                                    marginBottom: '1rem',
                                    fontSize: '1rem',
                                    fontWeight: 'bold'
                                }}>
                                    Edit Contact Info
                                </h4>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem'
                                }}>
                                    <div>
                                        <label style={{
                                            color: 'rgba(255, 255, 255, 0.7)',
                                            fontSize: '0.8rem',
                                            marginBottom: '0.25rem',
                                            display: 'block'
                                        }}>
                                            Email:
                                        </label>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: 'white'
                                        }}>
                                            <Mail size={16} color="#FFD700" />
                                            <EditableText
                                                path="contact.email"
                                                defaultValue="info@fullcustompackaging.com"
                                                as="span"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label style={{
                                            color: 'rgba(255, 255, 255, 0.7)',
                                            fontSize: '0.8rem',
                                            marginBottom: '0.25rem',
                                            display: 'block'
                                        }}>
                                            Phone:
                                        </label>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: 'white'
                                        }}>
                                            <Phone size={16} color="#FFD700" />
                                            <EditableText
                                                path="contact.phone"
                                                defaultValue="+1 (555) 123-4567"
                                                as="span"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowContact(false)}
                                    style={{
                                        marginTop: '1rem',
                                        padding: '0.5rem 1rem',
                                        backgroundColor: 'rgba(255, 215, 0, 0.2)',
                                        border: '1px solid #FFD700',
                                        borderRadius: '6px',
                                        color: '#FFD700',
                                        cursor: 'pointer',
                                        width: '100%',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    Close
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Mobile Buttons */}
                    <div style={{
                        display: isMobile ? 'flex' : 'none',
                        gap: '0.75rem',
                        alignItems: 'center'
                    }}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleContactClick}
                            style={{
                                backgroundColor: '#FFD700',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '0.4rem 0.8rem',
                                color: '#020617',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Mail size={18} />
                        </motion.button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            style={{
                                backgroundColor: 'transparent',
                                border: 'none',
                                color: '#FFD700',
                                cursor: 'pointer',
                                padding: '0.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px'
                            }}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#FFD700"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    d={isMenuOpen ? "M18 6L6 18" : "M4 6h16"}
                                    style={{ transition: 'all 0.3s ease' }}
                                />
                                <path
                                    d={isMenuOpen ? "" : "M4 12h16"}
                                    style={{
                                        opacity: isMenuOpen ? 0 : 1,
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                                <path
                                    d={isMenuOpen ? "M6 6l12 12" : "M4 18h16"}
                                    style={{ transition: 'all 0.3s ease' }}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && isMobile && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'fixed',
                            top: '72px',
                            left: 0,
                            right: 0,
                            backgroundColor: 'rgba(2, 6, 23, 0.98)',
                            borderBottom: '1px solid rgba(255, 215, 0, 0.1)',
                            zIndex: 40,
                            padding: '1rem 0'
                        }}
                    >
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                style={{
                                    display: 'block',
                                    padding: '1rem 1.5rem',
                                    textDecoration: 'none',
                                    textAlign: 'center',
                                    transition: 'all 0.3s',
                                    color: isActive(item.href) ? '#FFD700' : 'white',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    letterSpacing: '0.05em',
                                    borderLeft: isActive(item.href) ? '4px solid #FFD700' : '4px solid transparent'
                                }}
                            >
                                {item.name}
                            </Link>
                        ))}
                        {/* Contact info in mobile menu */}
                        <div style={{
                            borderTop: '1px solid rgba(255, 215, 0, 0.2)',
                            marginTop: '1rem',
                            paddingTop: '1rem'
                        }}>
                            <a
                                href={`mailto:${contactEmail}`}
                                onClick={() => setIsMenuOpen(false)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    padding: '0.75rem 1.5rem',
                                    color: '#FFD700',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem'
                                }}
                            >
                                <Mail size={16} />
                                {contactEmail}
                            </a>
                            <a
                                href={`tel:${contactPhone.replace(/\D/g, '')}`}
                                onClick={() => setIsMenuOpen(false)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    padding: '0.75rem 1.5rem',
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem'
                                }}
                            >
                                <Phone size={16} />
                                {contactPhone}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
