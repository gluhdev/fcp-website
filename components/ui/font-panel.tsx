'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

interface FontPanelProps {
    isOpen: boolean;
    onClose: () => void;
    fontCombinations: Array<{
        id: number;
        name: string;
        heading: string;
        body: string;
        description: string;
    }>;
    selectedFont: any;
    onSelectFont: (font: any) => void;
    isMobile: boolean;
}

export function FontPanel({ isOpen, onClose, fontCombinations, selectedFont, onSelectFont, isMobile }: FontPanelProps) {
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: isMobile ? 0 : 400, y: isMobile ? 400 : 0 }}
                    animate={{ x: 0, y: 0 }}
                    exit={{ x: isMobile ? 0 : 400, y: isMobile ? 400 : 0 }}
                    transition={{ type: "spring", damping: 20 }}
                    style={{
                        position: 'fixed',
                        right: isMobile ? 0 : '20px',
                        top: isMobile ? 'auto' : '80px',
                        bottom: isMobile ? 0 : 'auto',
                        width: isMobile ? '100%' : '400px',
                        maxHeight: isMobile ? (isExpanded ? '80vh' : '60vh') : '80vh',
                        backgroundColor: 'rgba(2, 6, 23, 0.95)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 215, 0, 0.2)',
                        borderRadius: isMobile ? '20px 20px 0 0' : '20px',
                        padding: '1.5rem',
                        zIndex: 60,
                        overflowY: 'auto',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
                    }}
                >
                    {/* Header */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '1.5rem',
                        borderBottom: '1px solid rgba(255, 215, 0, 0.2)',
                        paddingBottom: '1rem'
                    }}>
                        <h3 style={{
                            fontSize: '1.25rem',
                            fontWeight: 'bold',
                            color: '#FFD700',
                            margin: 0
                        }}>
                            Choose Font Combination
                        </h3>
                        <button
                            onClick={onClose}
                            style={{
                                backgroundColor: 'transparent',
                                border: '1px solid rgba(255, 215, 0, 0.3)',
                                borderRadius: '8px',
                                padding: '0.5rem',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.1)';
                                e.currentTarget.style.borderColor = '#FFD700';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.3)';
                            }}
                        >
                            <X size={20} color="#FFD700" />
                        </button>
                    </div>

                    {/* Current Font Display */}
                    <div style={{
                        backgroundColor: 'rgba(255, 215, 0, 0.05)',
                        borderRadius: '12px',
                        padding: '1rem',
                        marginBottom: '1.5rem',
                        border: '1px solid rgba(255, 215, 0, 0.2)'
                    }}>
                        <p style={{
                            color: 'rgba(255, 255, 255, 0.6)',
                            fontSize: '0.85rem',
                            marginBottom: '0.5rem'
                        }}>
                            Current Selection
                        </p>
                        <p style={{
                            color: '#FFD700',
                            fontSize: '1rem',
                            fontWeight: '600',
                            margin: 0
                        }}>
                            {selectedFont.name} - {selectedFont.description}
                        </p>
                    </div>

                    {/* Mobile Expand Button */}
                    {isMobile && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                backgroundColor: 'rgba(255, 215, 0, 0.05)',
                                border: '1px solid rgba(255, 215, 0, 0.2)',
                                borderRadius: '10px',
                                color: '#FFD700',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                marginBottom: '1rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            {isExpanded ? 'Show Less' : 'Show All Fonts'}
                            {isExpanded ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
                        </button>
                    )}

                    {/* Font Options Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                        gap: '0.75rem',
                        maxHeight: isMobile && !isExpanded ? '300px' : 'none',
                        overflow: 'hidden'
                    }}>
                        {fontCombinations.map((font) => (
                            <motion.button
                                key={font.id}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => onSelectFont(font)}
                                style={{
                                    padding: '1rem',
                                    backgroundColor: selectedFont.id === font.id
                                        ? 'rgba(255, 215, 0, 0.15)'
                                        : 'rgba(255, 255, 255, 0.05)',
                                    border: selectedFont.id === font.id
                                        ? '2px solid #FFD700'
                                        : '1px solid rgba(255, 215, 0, 0.2)',
                                    borderRadius: '12px',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    textAlign: 'left',
                                    position: 'relative'
                                }}
                                onMouseEnter={(e) => {
                                    if (selectedFont.id !== font.id) {
                                        e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.08)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.5)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (selectedFont.id !== font.id) {
                                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.2)';
                                    }
                                }}
                            >
                                {selectedFont.id === font.id && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '8px',
                                        right: '8px',
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        backgroundColor: '#FFD700'
                                    }} />
                                )}
                                <div style={{
                                    fontFamily: `'${font.heading}', serif`,
                                    fontSize: isMobile ? '1rem' : '1.1rem',
                                    color: selectedFont.id === font.id ? '#FFD700' : 'white',
                                    marginBottom: '0.25rem',
                                    fontWeight: '600'
                                }}>
                                    {font.name}
                                </div>
                                <div style={{
                                    fontFamily: `'${font.body}', sans-serif`,
                                    fontSize: '0.75rem',
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    lineHeight: 1.2
                                }}>
                                    {font.description}
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Apply Button */}
                    <button
                        onClick={onClose}
                        style={{
                            width: '100%',
                            marginTop: '1.5rem',
                            padding: '1rem',
                            backgroundColor: '#FFD700',
                            color: '#020617',
                            border: 'none',
                            borderRadius: '12px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#FFC700';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#FFD700';
                        }}
                    >
                        Apply & Close
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}