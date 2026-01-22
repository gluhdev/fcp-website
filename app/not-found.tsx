'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Package, Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#020617',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: "'Open Sans', sans-serif"
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '500px'
      }}>
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.8 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100px',
            height: '100px',
            backgroundColor: '#FFD700',
            borderRadius: '20px',
            marginBottom: '2rem'
          }}
        >
          <Package size={50} color="#020617" />
        </motion.div>

        {/* 404 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: '6rem',
            fontWeight: 'bold',
            color: '#FFD700',
            marginBottom: '0.5rem',
            lineHeight: 1,
            fontFamily: "'Merriweather', serif"
          }}
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: 'white',
            marginBottom: '1rem'
          }}
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            fontSize: '1rem',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '2rem',
            lineHeight: 1.6
          }}
        >
          Oops! The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          <Link href="/" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.5rem',
                backgroundColor: '#FFD700',
                color: '#020617',
                border: 'none',
                borderRadius: '30px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              <Home size={18} />
              Go Home
            </motion.button>
          </Link>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.8rem 1.5rem',
              backgroundColor: 'transparent',
              color: '#FFD700',
              border: '2px solid #FFD700',
              borderRadius: '30px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            <ArrowLeft size={18} />
            Go Back
          </motion.button>
        </motion.div>

        {/* Footer text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{
            marginTop: '3rem',
            fontSize: '0.85rem',
            color: 'rgba(255, 255, 255, 0.4)'
          }}
        >
          Full Custom Packaging - We Customize Everything
        </motion.p>
      </div>
    </div>
  );
}
