'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { ContentData, CMSContextType } from '@/types/cms';

const CMSContext = createContext<CMSContextType | undefined>(undefined);

// Helper to get nested value from object using dot notation
function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Helper to set nested value in object using dot notation
function setNestedValue(obj: any, path: string, value: any): any {
  const newObj = JSON.parse(JSON.stringify(obj));
  const keys = path.split('.');
  let current = newObj;

  for (let i = 0; i < keys.length - 1; i++) {
    if (current[keys[i]] === undefined) {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
  }

  current[keys[keys.length - 1]] = value;
  return newObj;
}

export function CMSProvider({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState<ContentData | null>(null);
  const [pendingChanges, setPendingChanges] = useState<Record<string, string>>({});
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load content and check auth on mount
  useEffect(() => {
    const savedToken = localStorage.getItem('cms_token');
    if (savedToken) {
      setToken(savedToken);
      setIsAdmin(true);
    }

    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const res = await fetch('/api/cms/content');
      const data = await res.json();
      if (data.success) {
        setContent(data.content);
      }
    } catch (error) {
      console.error('Failed to fetch content:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (password: string): Promise<boolean> => {
    try {
      const res = await fetch('/api/cms/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });

      const data = await res.json();

      if (data.success) {
        setToken(data.token);
        setIsAdmin(true);
        localStorage.setItem('cms_token', data.token);
        return true;
      }

      return false;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const logout = () => {
    setToken(null);
    setIsAdmin(false);
    setIsEditing(false);
    setPendingChanges({});
    localStorage.removeItem('cms_token');
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const updateContent = useCallback((path: string, value: string) => {
    setPendingChanges(prev => ({
      ...prev,
      [path]: value
    }));
  }, []);

  const saveChanges = async (): Promise<boolean> => {
    if (!content || !token) return false;

    try {
      // Apply all pending changes to content
      let updatedContent = content;
      for (const [path, value] of Object.entries(pendingChanges)) {
        updatedContent = setNestedValue(updatedContent, path, value);
      }

      const res = await fetch('/api/cms/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ content: updatedContent })
      });

      const data = await res.json();

      if (data.success) {
        setContent(updatedContent);
        setPendingChanges({});
        return true;
      }

      return false;
    } catch (error) {
      console.error('Failed to save:', error);
      return false;
    }
  };

  const hasUnsavedChanges = Object.keys(pendingChanges).length > 0;

  // Get content value with pending changes applied
  const getContentValue = useCallback((path: string, defaultValue: string): string => {
    if (pendingChanges[path] !== undefined) {
      return pendingChanges[path];
    }
    if (content) {
      const value = getNestedValue(content, path);
      return value !== undefined ? value : defaultValue;
    }
    return defaultValue;
  }, [content, pendingChanges]);

  return (
    <CMSContext.Provider value={{
      isAdmin,
      isEditing,
      content,
      pendingChanges,
      login,
      logout,
      toggleEditing,
      updateContent,
      saveChanges,
      hasUnsavedChanges,
      isLoading
    }}>
      {children}
    </CMSContext.Provider>
  );
}

export function useCMS() {
  const context = useContext(CMSContext);
  if (context === undefined) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
}

// Helper hook to get content value
export function useContent(path: string, defaultValue: string): string {
  const { content, pendingChanges } = useCMS();

  if (pendingChanges[path] !== undefined) {
    return pendingChanges[path];
  }

  if (content) {
    const value = getNestedValue(content, path);
    return value !== undefined ? value : defaultValue;
  }

  return defaultValue;
}
