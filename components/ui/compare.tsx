"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconDotsVertical } from "@tabler/icons-react";

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
  className,
  firstImageClassName,
  secondImageClassname,
  initialSliderPercentage = 50,
  slideMode = "hover",
  showHandlebar = true,
  autoplay = false,
  autoplayDuration = 5000,
}: CompareProps) => {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);

  const [isMouseOver, setIsMouseOver] = useState(false);

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Detect mobile for performance optimization
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const startAutoplay = useCallback(() => {
    if (!autoplay) return;

    const startTime = Date.now();
    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress =
        (elapsedTime % (autoplayDuration * 2)) / autoplayDuration;
      const percentage = progress <= 1 ? progress * 100 : (2 - progress) * 100;

      setSliderXPercent(percentage);
      autoplayRef.current = setTimeout(animate, 16); // ~60fps
    };

    animate();
  }, [autoplay, autoplayDuration]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  function mouseEnterHandler() {
    setIsMouseOver(true);
    // Don't stop autoplay on hover - let it keep running
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    if (slideMode === "drag") {
      setIsDragging(false);
    }
    // Autoplay keeps running, no need to restart
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
      onMouseEnter={mouseEnterHandler}
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
            width: "4px",
            position: "absolute",
            top: "0",
            margin: "auto",
            left: `${sliderXPercent}%`,
            zIndex: 40,
            background: "linear-gradient(to bottom, transparent 2%, #FFD700 15%, #FFF8DC 50%, #FFD700 85%, transparent 98%)",
            boxShadow: "0 0 20px 5px rgba(255, 215, 0, 1), 0 0 40px 10px rgba(255, 215, 0, 0.7), 0 0 60px 15px rgba(255, 215, 0, 0.5), 0 0 80px 20px rgba(255, 215, 0, 0.3)",
            filter: "brightness(1.2)"
          }}
          transition={{ duration: 0 }}
        >
          <div
            style={{
              width: "200px",
              height: "100%",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "-10px",
              zIndex: 20,
              opacity: 0.7,
              background: "linear-gradient(to right, rgba(255, 215, 0, 0.8), rgba(255, 248, 220, 0.3), transparent)",
              maskImage: "radial-gradient(150px at left, white, transparent)",
              WebkitMaskImage: "radial-gradient(150px at left, white, transparent)",
              filter: "blur(2px)"
            }}
          />
          <div
            style={{
              width: "40px",
              height: "50%",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "0",
              zIndex: 10,
              opacity: 1,
              background: "linear-gradient(to right, #020617, transparent)",
              maskImage: "radial-gradient(50px at left, white, transparent)",
              WebkitMaskImage: "radial-gradient(50px at left, white, transparent)"
            }}
          />
          <div style={{
            width: "60px",
            height: "90%",
            top: "50%",
            transform: "translateY(-50%)",
            position: "absolute",
            right: "-50px",
            maskImage: "radial-gradient(120px at left, white, transparent)",
            WebkitMaskImage: "radial-gradient(120px at left, white, transparent)"
          }}>
            <MemoizedSparklesCore
              background="transparent"
              minSize={0.6}
              maxSize={1.5}
              particleDensity={1800}
              className=""
              particleColor="#FFD700"
            />
          </div>
          {/* Extra glow on left side */}
          <div style={{
            width: "60px",
            height: "90%",
            top: "50%",
            transform: "translateY(-50%)",
            position: "absolute",
            left: "-50px",
            maskImage: "radial-gradient(120px at right, white, transparent)",
            WebkitMaskImage: "radial-gradient(120px at right, white, transparent)"
          }}>
            <MemoizedSparklesCore
              background="transparent"
              minSize={0.6}
              maxSize={1.5}
              particleDensity={1800}
              className=""
              particleColor="#FFD700"
            />
          </div>
          {showHandlebar && (
            <div style={{
              height: "28px",
              width: "28px",
              borderRadius: "50%",
              top: "50%",
              transform: "translateY(-50%)",
              right: "-14px",
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 15px 5px rgba(255, 215, 0, 0.8), 0 0 30px 10px rgba(255, 215, 0, 0.5)",
              backgroundColor: "#FFD700",
              border: "2px solid #FFF8DC",
              zIndex: 30
            }}>
              <IconDotsVertical style={{ height: "16px", width: "16px", color: "#020617" }} />
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

const MemoizedSparklesCore = React.memo(SparklesCore);