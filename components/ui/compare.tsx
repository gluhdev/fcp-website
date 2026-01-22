"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface CompareProps {
  firstImage?: string;
  secondImage?: string;
  className?: string;
  firstImageClassName?: string;
  secondImageClassname?: string;
  initialSliderPercentage?: number;
  slideMode?: "hover" | "drag";
  showHandlebar?: boolean;
  autoplay?: boolean;
  autoplayDuration?: number;
}
export const Compare = ({
  firstImage = "",
  secondImage = "",
  initialSliderPercentage = 50,
  slideMode = "hover",
  showHandlebar = true,
  autoplay = false,
  autoplayDuration = 5000,
}: CompareProps) => {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
  const [isDragging, setIsDragging] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);

  const autoplayRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  const startAutoplay = useCallback(() => {
    if (!autoplay) return;

    startTimeRef.current = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTimeRef.current;
      const progress = (elapsedTime % (autoplayDuration * 2)) / autoplayDuration;
      const percentage = progress <= 1 ? progress * 100 : (2 - progress) * 100;

      setSliderXPercent(percentage);
      autoplayRef.current = requestAnimationFrame(animate);
    };

    autoplayRef.current = requestAnimationFrame(animate);
  }, [autoplay, autoplayDuration]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      cancelAnimationFrame(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  function mouseLeaveHandler() {
    if (slideMode === "drag") {
      setIsDragging(false);
    }
  }

  const handleStart = useCallback(
    (clientX: number) => {
      if (slideMode === "drag") {
        setIsDragging(true);
      }
    },
    [slideMode]
  );

  const handleEnd = useCallback(() => {
    if (slideMode === "drag") {
      setIsDragging(false);
    }
  }, [slideMode]);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!sliderRef.current) return;
      // Don't allow manual control when autoplay is active
      if (autoplay) return;
      if (slideMode === "hover" || (slideMode === "drag" && isDragging)) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percent = (x / rect.width) * 100;
        requestAnimationFrame(() => {
          setSliderXPercent(Math.max(0, Math.min(100, percent)));
        });
      }
    },
    [slideMode, isDragging, autoplay]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => handleStart(e.clientX),
    [handleStart]
  );
  const handleMouseUp = useCallback(() => handleEnd(), [handleEnd]);
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => handleMove(e.clientX),
    [handleMove]
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      // When autoplay is on, don't interfere with scrolling at all
      if (autoplay) return;
      handleStart(e.touches[0].clientX);
    },
    [handleStart, autoplay]
  );

  const handleTouchEnd = useCallback(() => {
    if (autoplay) return;
    handleEnd();
  }, [handleEnd, autoplay]);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      // When autoplay is on, don't interfere with scrolling at all
      if (autoplay) return;
      handleMove(e.touches[0].clientX);
    },
    [handleMove, autoplay]
  );

  return (
    <div
      ref={sliderRef}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        cursor: autoplay ? "default" : slideMode === "drag" ? "grab" : "col-resize",
        touchAction: autoplay ? "pan-y" : "none",
        borderRadius: "0"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={mouseLeaveHandler}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <AnimatePresence initial={false}>
        <motion.div
          style={{
            height: "100%",
            width: "2px",
            position: "absolute",
            top: "0",
            margin: "auto",
            left: `${sliderXPercent}%`,
            zIndex: 40,
            background: "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0.8) 90%, transparent 100%)",
            boxShadow: "0 0 8px 2px rgba(255, 215, 0, 0.4), 0 0 20px 4px rgba(255, 215, 0, 0.2)"
          }}
          transition={{ duration: 0 }}
        >
          {/* Центральный индикатор */}
          {showHandlebar && (
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 215, 0, 0.9)",
              border: "2px solid rgba(255, 255, 255, 0.9)",
              boxShadow: "0 0 15px 3px rgba(255, 215, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 50
            }}>
              {/* Стрелки влево-вправо */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ opacity: 0.8 }}>
                <path d="M5 8L2 5M2 5L5 2M2 5H7" stroke="#020617" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 8L14 11M14 11L11 14M14 11H9" stroke="#020617" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <div style={{
        overflow: "hidden",
        width: "100%",
        height: "100%",
        position: "relative",
        zIndex: 20,
        pointerEvents: "none"
      }}>
        <AnimatePresence initial={false}>
          {firstImage ? (
            <motion.div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 20,
                borderRadius: "0",
                flexShrink: 0,
                width: "100%",
                height: "100%",
                userSelect: "none",
                overflow: "hidden",
                clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
              }}
              transition={{ duration: 0 }}
            >
              <img
                alt="first image"
                src={firstImage}
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 20,
                  borderRadius: "0",
                  flexShrink: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  userSelect: "none"
                }}
                draggable={false}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <AnimatePresence initial={false}>
        {secondImage ? (
          <motion.img
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 19,
              borderRadius: "0",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              userSelect: "none"
            }}
            alt="second image"
            src={secondImage}
            draggable={false}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
};