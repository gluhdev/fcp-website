'use client';
import React from 'react';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { Package, Type } from 'lucide-react';

export function HeaderFCP({
    selectedFont,
    onFontPanelToggle
}: {
    selectedFont: any,
    onFontPanelToggle: () => void
}) {
    const [open, setOpen] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState('');
    const scrolled = useScroll(10);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    React.useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'services', 'help-business', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        return;
                    }
                }
            }
            setActiveSection('');
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        {
            label: 'About',
            href: '#about',
        },
        {
            label: 'Services',
            href: '#services',
        },
        {
            label: 'Solutions',
            href: '#help-business',
        },
        {
            label: 'Contact',
            href: '#contact',
        },
    ];

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <>
            <header style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                backgroundColor: scrolled ? 'rgba(2, 6, 23, 0.95)' : 'rgba(2, 6, 23, 0.9)',
                backdropFilter: scrolled ? 'blur(12px)' : 'blur(8px)',
                borderBottom: scrolled ? '1px solid rgba(255, 215, 0, 0.2)' : '1px solid transparent',
                transition: 'all 0.3s ease-out',
                boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none'
            }}>
                <nav style={{
                    display: 'flex',
                    height: '64px',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: scrolled ? '0 2rem' : '0 3rem',
                    transition: 'padding 0.3s ease-out'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Package size={32} color="#FFD700" />
                        <div>
                            <h1 style={{
                                fontSize: '1.25rem',
                                fontWeight: 'bold',
                                color: 'white',
                                fontFamily: `'${selectedFont.heading}', serif`,
                                margin: 0
                            }}>
                                FCP
                            </h1>
                            <p style={{
                                fontSize: '0.75rem',
                                color: 'rgba(255, 255, 255, 0.7)',
                                fontFamily: `'${selectedFont.body}', sans-serif`,
                                margin: 0
                            }}>
                                Full Custom Packaging
                            </p>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    {!isMobile && (
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)'
                        }}>
                        {links.map((link, i) => {
                            const isActive = activeSection === link.href.replace('#', '');
                            return (
                                <a
                                    key={i}
                                    href={link.href}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        color: isActive ? '#FFD700' : 'white',
                                        textDecoration: 'none',
                                        borderRadius: '8px',
                                        transition: 'all 0.2s',
                                        fontFamily: `'${selectedFont.body}', sans-serif`,
                                        fontSize: '0.95rem',
                                        position: 'relative',
                                        borderBottom: isActive ? '2px solid #FFD700' : '2px solid transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                            e.currentTarget.style.color = '#FFD700';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                            e.currentTarget.style.color = 'white';
                                        }
                                    }}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </div>
                    )}

                    {/* Desktop Right Buttons */}
                    {!isMobile && (
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <button
                                onClick={onFontPanelToggle}
                                style={{
                                    padding: '0.5rem 1rem',
                                    border: '1px solid rgba(255, 215, 0, 0.5)',
                                    backgroundColor: 'transparent',
                                    color: '#FFD700',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    fontSize: '0.95rem',
                                    fontFamily: `'${selectedFont.body}', sans-serif`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }}
                            >
                                <Type size={16} />
                                Fonts
                            </button>
                            <button style={{
                                padding: '0.5rem 1.5rem',
                                backgroundColor: '#FFD700',
                                color: '#020617',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                fontSize: '0.95rem',
                                fontWeight: '600',
                                fontFamily: `'${selectedFont.body}', sans-serif`
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#FFC700';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#FFD700';
                            }}>
                                Get Quote
                            </button>
                        </div>
                    )}

                    {/* Mobile Menu Button */}
                    {isMobile && (
                        <button
                            onClick={() => setOpen(!open)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                border: '1px solid rgba(255, 215, 0, 0.5)',
                                backgroundColor: 'transparent',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            <MenuToggleIcon open={open} stroke="#FFD700" />
                        </button>
                    )}
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            {open && isMobile && (
                <div style={{
                    position: 'fixed',
                    top: '64px',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(2, 6, 23, 0.98)',
                    zIndex: 49,
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '2rem',
                    animation: 'slideDown 0.3s ease-out',
                    overflowY: 'auto',
                    maxHeight: 'calc(100vh - 64px)'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        flex: 1
                    }}>
                        {links.map((link) => {
                            const isActive = activeSection === link.href.replace('#', '');
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    style={{
                                        padding: '1rem',
                                        color: isActive ? '#FFD700' : 'white',
                                        textDecoration: 'none',
                                        borderRadius: '8px',
                                        transition: 'all 0.2s',
                                        fontFamily: `'${selectedFont.body}', sans-serif`,
                                        fontSize: '1.1rem',
                                        borderBottom: isActive ? '2px solid #FFD700' : '1px solid rgba(255, 255, 255, 0.1)',
                                        textAlign: 'center',
                                        display: 'block',
                                        backgroundColor: isActive ? 'rgba(255, 215, 0, 0.1)' : 'transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                            e.currentTarget.style.color = '#FFD700';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive) {
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                            e.currentTarget.style.color = 'white';
                                        }
                                    }}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        alignItems: 'center'
                    }}>
                        <button
                            onClick={() => {
                                setOpen(false);
                                onFontPanelToggle();
                            }}
                            style={{
                                width: '100%',
                                maxWidth: '250px',
                                padding: '1rem',
                                border: '1px solid rgba(255, 215, 0, 0.5)',
                                backgroundColor: 'transparent',
                                color: '#FFD700',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                fontFamily: `'${selectedFont.body}', sans-serif`,
                                textAlign: 'center'
                            }}
                        >
                            Change Font
                        </button>
                        <button style={{
                            width: '100%',
                            maxWidth: '250px',
                            padding: '1rem',
                            backgroundColor: '#FFD700',
                            color: '#020617',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            fontWeight: '600',
                            fontFamily: `'${selectedFont.body}', sans-serif`,
                            textAlign: 'center'
                        }}>
                            Get Quote
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
