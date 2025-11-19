'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Type } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
    onFontToggle: () => void;
    isMobile: boolean;
}

export function HeaderFCP({ onFontToggle, isMobile }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pathname = usePathname();

    const menuItems = [
        { name: 'Packaging', href: '/packaging' },
        { name: 'Apparel', href: '/apparel' },
        { name: 'Machinery', href: '/machinery' },
        { name: 'Signage', href: '/signage' }
    ];

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname?.startsWith(href);
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
                        alignItems: 'center'
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
                                    textAlign: 'center'
                                }}
                            >
                                <motion.span
                                    whileHover={{ y: -2 }}
                                >
                                    {item.name}
                                </motion.span>
                            </Link>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onFontToggle}
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
                    </nav>

                    {/* Mobile Menu Button */}
                    <div style={{
                        display: isMobile ? 'flex' : 'none',
                        gap: '1rem',
                        alignItems: 'center'
                    }}>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onFontToggle}
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