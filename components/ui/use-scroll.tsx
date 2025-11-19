'use client';
import React from 'react';

export function useScroll(threshold: number) {
    const [scrolled, setScrolled] = React.useState(false);

    const onScroll = React.useCallback(() => {
        if (typeof window !== 'undefined') {
            setScrolled(window.scrollY > threshold);
        }
    }, [threshold]);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', onScroll);
            return () => window.removeEventListener('scroll', onScroll);
        }
    }, [onScroll]);

    // also check on first load
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            onScroll();
        }
    }, [onScroll]);

    return scrolled;
}
