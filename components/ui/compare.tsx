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

  const sliderRef = useRef<HTMLDivElement>(null);

  const [isMouseOver, setIsMouseOver] = useState(false);

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

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
    stopAutoplay();
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    if (slideMode === "hover") {
      setSliderXPercent(initialSliderPercentage);
    }
    if (slideMode === "drag") {
      setIsDragging(false);
    }
    startAutoplay();
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
      if (slideMode === "hover" || (slideMode === "drag" && isDragging)) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percent = (x / rect.width) * 100;
        requestAnimationFrame(() => {
          setSliderXPercent(Math.max(0, Math.min(100, percent)));
        });
      }
    },
    [slideMode, isDragging]
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
      if (!autoplay) {
        handleStart(e.touches[0].clientX);
      }
    },
    [handleStart, autoplay]
  );

  const handleTouchEnd = useCallback(() => {
    if (!autoplay) {
      handleEnd();
    }
  }, [handleEnd, autoplay]);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!autoplay) {
        handleMove(e.touches[0].clientX);
      }
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
        cursor: slideMode === "drag" ? "grab" : "col-resize",
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
            width: "1px",
            position: "absolute",
            top: "0",
            margin: "auto",
            left: `${sliderXPercent}%`,
            zIndex: 40,
            background: "linear-gradient(to bottom, transparent 5%, #FFD700 20%, #FFD700 80%, transparent 95%)"
          }}
          transition={{ duration: 0 }}
        >
          <div
            style={{
              width: "144px",
              height: "100%",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "0",
              zIndex: 20,
              opacity: 0.5,
              background: "linear-gradient(to right, #FFD700, transparent)",
              maskImage: "radial-gradient(100px at left, white, transparent)",
              WebkitMaskImage: "radial-gradient(100px at left, white, transparent)"
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
            width: "40px",
            height: "75%",
            top: "50%",
            transform: "translateY(-50%)",
            position: "absolute",
            right: "-40px",
            maskImage: "radial-gradient(100px at left, white, transparent)",
            WebkitMaskImage: "radial-gradient(100px at left, white, transparent)"
          }}>
            <MemoizedSparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className=""
              particleColor="#FFD700"
            />
          </div>
          {showHandlebar && (
            <div style={{
              height: "20px",
              width: "20px",
              borderRadius: "6px",
              top: "50%",
              transform: "translateY(-50%)",
              right: "-10px",
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0px -1px 0px 0px rgba(255, 255, 255, 0.25)",
              backgroundColor: "#FFD700",
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