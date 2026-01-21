'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Loader2, User } from 'lucide-react';
import { useCMS } from '@/components/cms/CMSProvider';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const { login, isAdmin } = useCMS();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isAdmin) {
      router.push('/');
    }
  }, [isAdmin, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const success = await login(username, password);

    setIsLoading(false);

    if (success) {
      router.push('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#020617',
      padding: '1rem'
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        style={{
          backgroundColor: '#0a0f2e',
          borderRadius: '20px',
          padding: '2.5rem',
          width: '100%',
          maxWidth: '420px',
          border: '1px solid rgba(255, 215, 0, 0.3)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '70px',
            height: '70px',
            backgroundColor: 'rgba(255, 215, 0, 0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem',
            border: '2px solid #FFD700'
          }}>
            <Lock size={32} color="#FFD700" />
          </div>
          <h1 style={{
            fontSize: '1.75rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '0.5rem'
          }}>
            Admin Panel
          </h1>
          <p style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.95rem'
          }}>
            Enter your credentials to access CMS
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{
              display: 'block',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.9rem',
              marginBottom: '0.5rem'
            }}>
              Username
            </label>
            <div style={{ position: 'relative' }}>
              <User
                size={18}
                color="rgba(255, 255, 255, 0.4)"
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                autoFocus
                style={{
                  width: '100%',
                  padding: '1rem 1rem 1rem 2.75rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#FFD700'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
              />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.9rem',
              marginBottom: '0.5rem'
            }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock
                size={18}
                color="rgba(255, 255, 255, 0.4)"
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                style={{
                  width: '100%',
                  padding: '1rem 1rem 1rem 2.75rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: error ? '2px solid #ef4444' : '2px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  if (!error) e.currentTarget.style.borderColor = '#FFD700';
                }}
                onBlur={(e) => {
                  if (!error) e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              />
            </div>
            {error && (
              <p style={{
                color: '#ef4444',
                fontSize: '0.85rem',
                marginTop: '0.5rem'
              }}>
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading || !username || !password}
            style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: isLoading || !username || !password ? 'rgba(255, 215, 0, 0.5)' : '#FFD700',
              color: '#020617',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: isLoading || !username || !password ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              transition: 'background-color 0.2s'
            }}
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Logging in...
              </>
            ) : (
              'Login'
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
