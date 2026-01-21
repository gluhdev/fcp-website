'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Edit3, Save, LogOut, X, Check, Loader2 } from 'lucide-react';
import { useCMS } from './CMSProvider';
import { LoginModal } from './LoginModal';

export function CMSToolbar() {
  const { isAdmin, isEditing, toggleEditing, logout, saveChanges, hasUnsavedChanges } = useCMS();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
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

  return (
    <>
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      {/* Floating Toolbar */}
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
          alignItems: 'center'
        }}
      >
        <AnimatePresence>
          {isAdmin && (
            <>
              {/* Unsaved changes indicator */}
              {hasUnsavedChanges && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.9)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span style={{ width: '8px', height: '8px', backgroundColor: 'white', borderRadius: '50%' }} />
                  Unsaved changes
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
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Check size={16} />
                  Saved!
                </motion.div>
              )}

              {/* Save Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSave}
                disabled={!hasUnsavedChanges || isSaving}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: hasUnsavedChanges ? '#22c55e' : 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  cursor: hasUnsavedChanges && !isSaving ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: hasUnsavedChanges ? '0 4px 20px rgba(34, 197, 94, 0.4)' : 'none',
                  transition: 'background-color 0.2s'
                }}
              >
                {isSaving ? (
                  <Loader2 size={22} color="white" className="animate-spin" />
                ) : (
                  <Save size={22} color="white" />
                )}
              </motion.button>

              {/* Edit Mode Toggle */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleEditing}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: isEditing ? '#FFD700' : 'rgba(255, 255, 255, 0.1)',
                  border: isEditing ? 'none' : '2px solid rgba(255, 215, 0, 0.3)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: isEditing ? '0 4px 20px rgba(255, 215, 0, 0.4)' : 'none',
                  transition: 'all 0.2s'
                }}
              >
                {isEditing ? (
                  <X size={22} color="#020617" />
                ) : (
                  <Edit3 size={22} color="#FFD700" />
                )}
              </motion.button>

              {/* Logout Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={logout}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(239, 68, 68, 0.2)',
                  border: '2px solid rgba(239, 68, 68, 0.5)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
                }}
              >
                <LogOut size={22} color="#ef4444" />
              </motion.button>
            </>
          )}
        </AnimatePresence>

        {/* Admin/Login Button - Always visible */}
        {!isAdmin && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsLoginOpen(true)}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 215, 0, 0.3)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#FFD700';
              e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 215, 0, 0.3)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <Settings size={22} color="#FFD700" />
          </motion.button>
        )}
      </motion.div>
    </>
  );
}
