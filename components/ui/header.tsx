'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Type, Phone } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
    selectedFont?: any;
    onFontPanelToggle: () => void;
}

export function HeaderFCP({ onFontPanelToggle }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [showPhone, setShowPhone] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Different menu items based on current page
    const isHomePage = pathname === '/';

    const homeMenuItems = [
        { name: 'About', href: '#about' },
        { name: 'Packaging', href: '/packaging' },
        { name: 'Apparel', href: '/apparel' },
        { name: 'Machinery', href: '/machinery' },
        { name: 'Signage', href: '/signage' },
        { name: 'Get Quote', href: '#contact' }
    ];

    const categoryMenuItems = [
        { name: 'Home', href: '/' },
        { name: 'Packaging', href: '/packaging' },
        { name: 'Apparel', href: '/apparel' },
        { name: 'Machinery', href: '/machinery' },
        { name: 'Signage', href: '/signage' }
    ];

    const menuItems = isHomePage ? homeMenuItems : categoryMenuItems;

    const isActive = (href: string) => {
        if (href.startsWith('#')) {
            // For anchor links, check if we're on the home page
            return false; // Don't highlight anchor links
        }
        if (href === '/') return pathname === '/';
        return pathname === href;
    };

    return (
        <>
            <header style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                backgroundColor: 'rgba(2, 6, 23, 0.9)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(255, 215, 0, 0.1)'
            }}>
                <div style={{
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: '1rem 1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            style={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                color: '#FFD700',
                                cursor: 'pointer'
                            }}
                        >
                            FCP
                        </motion.div>
                    </Link>

                    {/* Desktop Menu */}
                    <nav style={{
                        display: isMobile ? 'none' : 'flex',
                        gap: '2rem',
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
                                    color: isActive(item.href) ? '#FFD700' : 'white',
                                    textDecoration: 'none',
                                    fontSize: '1rem',
                                    transition: 'all 0.3s',
                                    paddingBottom: '4px',
                                    borderBottom: isActive(item.href) ? '2px solid #FFD700' : '2px solid transparent',
                                    textAlign: 'center',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                <motion.span
                                    whileHover={{ y: -2 }}
                                    style={{ display: 'inline-block' }}
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
                        {/* Font Toggle Button */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onFontPanelToggle}
                            style={{
                                backgroundColor: 'transparent',
                                border: '2px solid #FFD700',
                                borderRadius: '8px',
                                padding: '0.5rem',
                                color: '#FFD700',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Type size={20} />
                        </motion.button>

                        {/* Contact Us Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowPhone(!showPhone)}
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
                            <Phone size={18} />
                            Contact Us
                        </motion.button>
                    </div>

                    {/* Phone Popup */}
                    <AnimatePresence>
                        {showPhone && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                style={{
                                    position: 'absolute',
                                    top: '60px',
                                    right: '1.5rem',
                                    backgroundColor: 'rgba(2, 6, 23, 0.95)',
                                    backdropFilter: 'blur(10px)',
                                    border: '2px solid #FFD700',
                                    borderRadius: '12px',
                                    padding: '1rem',
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                                    zIndex: 100
                                }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: '#FFD700',
                                    fontWeight: 'bold',
                                    fontSize: '1.1rem'
                                }}>
                                    <Phone size={20} />
                                    <a href="tel:+15551234567" style={{
                                        color: '#FFD700',
                                        textDecoration: 'none'
                                    }}>
                                        +1 (555) 123-4567
                                    </a>
                                </div>
                                <div style={{
                                    marginTop: '0.5rem',
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    fontSize: '0.85rem'
                                }}>
                                    Available 24/7
                                </div>
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
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onFontPanelToggle}
                            style={{
                                backgroundColor: 'transparent',
                                border: '2px solid #FFD700',
                                borderRadius: '8px',
                                padding: '0.5rem',
                                color: '#FFD700',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Type size={20} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowPhone(!showPhone)}
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
                            <Phone size={18} />
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
                                justifyContent: 'center'
                            }}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                            backgroundColor: 'rgba(2, 6, 23, 0.95)',
                            backdropFilter: 'blur(10px)',
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
                                    color: isActive(item.href) ? '#FFD700' : 'white',
                                    textDecoration: 'none',
                                    textAlign: 'center',
                                    transition: 'all 0.3s',
                                    borderLeft: isActive(item.href) ? '4px solid #FFD700' : '4px solid transparent'
                                }}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}