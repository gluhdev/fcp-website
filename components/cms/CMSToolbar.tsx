'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Edit3, Save, LogOut, Check, Loader2 } from 'lucide-react';
import { useCMS } from './CMSProvider';

export function CMSToolbar() {
  const { isAdmin, isEditing, toggleEditing, logout, saveChanges, hasUnsavedChanges } = useCMS();
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    const success = await saveChanges();
    setIsSaving(false);

    if (success) {
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
    }
  };

  // Don't show toolbar if not admin
  if (!isAdmin) {
    return null;
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9997,
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'center',
        backgroundColor: 'rgba(10, 15, 46, 0.95)',
        padding: '0.75rem 1rem',
        borderRadius: '16px',
        border: '1px solid rgba(255, 215, 0, 0.3)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)'
      }}
    >
      {/* Settings Icon */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '0.5rem'
      }}>
        <Settings size={20} color="#FFD700" />
      </div>

      <AnimatePresence>
        {/* Unsaved changes indicator */}
        {hasUnsavedChanges && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              backgroundColor: 'rgba(239, 68, 68, 0.9)',
              color: 'white',
              padding: '0.4rem 0.75rem',
              borderRadius: '8px',
              fontSize: '0.8rem',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <span style={{ width: '6px', height: '6px', backgroundColor: 'white', borderRadius: '50%' }} />
            Unsaved
          </motion.div>
        )}

        {/* Save success indicator */}
        {saveSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              backgroundColor: 'rgba(34, 197, 94, 0.9)',
              color: 'white',
              padding: '0.4rem 0.75rem',
              borderRadius: '8px',
              fontSize: '0.8rem',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <Check size={14} />
            Saved!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Edit Text Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={toggleEditing}
        style={{
          padding: '0.5rem 1rem',
          borderRadius: '10px',
          backgroundColor: isEditing ? '#FFD700' : 'rgba(255, 215, 0, 0.15)',
          border: isEditing ? 'none' : '1px solid rgba(255, 215, 0, 0.4)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          transition: 'all 0.2s',
          color: isEditing ? '#020617' : '#FFD700',
          fontSize: '0.9rem',
          fontWeight: '600'
        }}
      >
        <Edit3 size={16} />
        {isEditing ? 'Stop Editing' : 'Edit Text'}
      </motion.button>

      {/* Save Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleSave}
        disabled={!hasUnsavedChanges || isSaving}
        style={{
          padding: '0.5rem 1rem',
          borderRadius: '10px',
          backgroundColor: hasUnsavedChanges ? '#22c55e' : 'rgba(34, 197, 94, 0.15)',
          border: hasUnsavedChanges ? 'none' : '1px solid rgba(34, 197, 94, 0.3)',
          cursor: hasUnsavedChanges && !isSaving ? 'pointer' : 'not-allowed',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          transition: 'all 0.2s',
          color: hasUnsavedChanges ? 'white' : 'rgba(34, 197, 94, 0.6)',
          fontSize: '0.9rem',
          fontWeight: '600',
          opacity: hasUnsavedChanges ? 1 : 0.7
        }}
      >
        {isSaving ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <Save size={16} />
        )}
        {isSaving ? 'Saving...' : 'Save'}
      </motion.button>

      {/* Logout Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={logout}
        style={{
          padding: '0.5rem 1rem',
          borderRadius: '10px',
          backgroundColor: 'rgba(239, 68, 68, 0.15)',
          border: '1px solid rgba(239, 68, 68, 0.4)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          transition: 'all 0.2s',
          color: '#ef4444',
          fontSize: '0.9rem',
          fontWeight: '600'
        }}
      >
        <LogOut size={16} />
        Log Out
      </motion.button>
    </motion.div>
  );
}
