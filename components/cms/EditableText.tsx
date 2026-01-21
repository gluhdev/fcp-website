'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useCMS, useContent } from './CMSProvider';

interface EditableTextProps {
  path: string;
  defaultValue: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  style?: React.CSSProperties;
  className?: string;
  multiline?: boolean;
}

export function EditableText({
  path,
  defaultValue,
  as: Component = 'span',
  style,
  className,
  multiline = false
}: EditableTextProps) {
  const { isAdmin, isEditing, updateContent } = useCMS();
  const content = useContent(path, defaultValue);
  const [isActive, setIsActive] = useState(false);
  const [localValue, setLocalValue] = useState(content);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setLocalValue(content);
  }, [content]);

  const handleClick = () => {
    if (isAdmin && isEditing) {
      setIsActive(true);
    }
  };

  const handleBlur = () => {
    setIsActive(false);
    if (localValue !== content) {
      updateContent(path, localValue);
    }
  };

  const handleInput = (e: React.FormEvent<HTMLElement>) => {
    setLocalValue(e.currentTarget.textContent || '');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      ref.current?.blur();
    }
    if (e.key === 'Escape') {
      setLocalValue(content);
      ref.current?.blur();
    }
  };

  const editingStyles: React.CSSProperties = isAdmin && isEditing ? {
    cursor: 'pointer',
    outline: isActive ? '2px solid #FFD700' : 'none',
    outlineOffset: '2px',
    borderRadius: '4px',
    transition: 'outline 0.2s, background-color 0.2s',
    backgroundColor: isActive ? 'rgba(255, 215, 0, 0.1)' : 'transparent',
    minWidth: '20px',
    display: 'inline-block'
  } : {};

  const hoverStyles = isAdmin && isEditing && !isActive ? {
    '&:hover': {
      outline: '2px dashed rgba(255, 215, 0, 0.5)'
    }
  } : {};

  return (
    <Component
      ref={ref as any}
      style={{ ...style, ...editingStyles }}
      className={className}
      contentEditable={isAdmin && isEditing && isActive}
      suppressContentEditableWarning
      onClick={handleClick}
      onBlur={handleBlur}
      onInput={handleInput}
      onKeyDown={handleKeyDown}
      onMouseEnter={(e) => {
        if (isAdmin && isEditing && !isActive) {
          e.currentTarget.style.outline = '2px dashed rgba(255, 215, 0, 0.5)';
        }
      }}
      onMouseLeave={(e) => {
        if (isAdmin && isEditing && !isActive) {
          e.currentTarget.style.outline = 'none';
        }
      }}
    >
      {localValue}
    </Component>
  );
}
