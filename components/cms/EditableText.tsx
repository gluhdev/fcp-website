'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useCMS } from './CMSProvider';

interface EditableTextProps {
  path: string;
  defaultValue: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  style?: React.CSSProperties;
  className?: string;
  multiline?: boolean;
}

// Helper to get nested value from object
function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

export function EditableText({
  path,
  defaultValue,
  as: Component = 'span',
  style,
  className,
  multiline = false
}: EditableTextProps) {
  const { isAdmin, isEditing, updateContent, content, pendingChanges } = useCMS();
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const initialValueRef = useRef<string>('');

  // Get current value from content or pendingChanges
  const getCurrentValue = useCallback(() => {
    if (pendingChanges[path] !== undefined) {
      return pendingChanges[path];
    }
    if (content) {
      const value = getNestedValue(content, path);
      return value !== undefined ? String(value) : defaultValue;
    }
    return defaultValue;
  }, [content, pendingChanges, path, defaultValue]);

  // Update DOM when content changes (but not during editing)
  useEffect(() => {
    if (ref.current && !isActive) {
      ref.current.textContent = getCurrentValue();
    }
  }, [getCurrentValue, isActive]);

  // Set initial content on mount
  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = getCurrentValue();
    }
  }, []);

  const handleClick = () => {
    if (isAdmin && isEditing && !isActive) {
      setIsActive(true);
      initialValueRef.current = ref.current?.textContent || '';
      // Focus and place cursor at end
      setTimeout(() => {
        if (ref.current) {
          ref.current.focus();
          // Place cursor at end
          const range = document.createRange();
          const selection = window.getSelection();
          range.selectNodeContents(ref.current);
          range.collapse(false);
          selection?.removeAllRanges();
          selection?.addRange(range);
        }
      }, 0);
    }
  };

  const handleBlur = () => {
    if (isActive && ref.current) {
      const newValue = ref.current.textContent || '';
      setIsActive(false);

      // Only update if value changed
      if (newValue !== initialValueRef.current) {
        updateContent(path, newValue);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      ref.current?.blur();
    }
    if (e.key === 'Escape') {
      // Restore original value
      if (ref.current) {
        ref.current.textContent = initialValueRef.current;
      }
      setIsActive(false);
      ref.current?.blur();
    }
  };

  const editingStyles: React.CSSProperties = isAdmin && isEditing ? {
    cursor: 'text',
    outline: isActive ? '2px solid #FFD700' : 'none',
    outlineOffset: '4px',
    borderRadius: '4px',
    transition: 'outline 0.2s, background-color 0.2s',
    backgroundColor: isActive ? 'rgba(255, 215, 0, 0.15)' : 'transparent',
    minWidth: '20px',
    display: 'inline-block',
    padding: isActive ? '2px 4px' : '0'
  } : {};

  return (
    <Component
      ref={ref as any}
      style={{ ...style, ...editingStyles }}
      className={className}
      contentEditable={isAdmin && isEditing}
      suppressContentEditableWarning
      onClick={handleClick}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      onFocus={() => {
        if (isAdmin && isEditing) {
          setIsActive(true);
          initialValueRef.current = ref.current?.textContent || '';
        }
      }}
      onMouseEnter={(e) => {
        if (isAdmin && isEditing && !isActive) {
          e.currentTarget.style.outline = '2px dashed rgba(255, 215, 0, 0.5)';
          e.currentTarget.style.outlineOffset = '4px';
        }
      }}
      onMouseLeave={(e) => {
        if (isAdmin && isEditing && !isActive) {
          e.currentTarget.style.outline = 'none';
        }
      }}
    />
  );
}
