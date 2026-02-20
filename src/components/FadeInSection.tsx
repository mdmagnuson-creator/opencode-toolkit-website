"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export interface FadeInSectionProps {
  children: ReactNode;
  /** Additional CSS classes to apply to the wrapper */
  className?: string;
  /** Delay before animation starts in milliseconds (default: 0) */
  delay?: number;
}

/**
 * FadeInSection component that fades in its children when they enter the viewport.
 * Uses Intersection Observer for efficient scroll detection.
 * Respects prefers-reduced-motion for accessibility.
 */
export function FadeInSection({
  children,
  className = "",
  delay = 0,
}: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add delay if specified
            if (delay > 0) {
              timeoutId = setTimeout(() => setIsVisible(true), delay);
            } else {
              setIsVisible(true);
            }
            // Once visible, stop observing
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before element enters viewport
      }
    );

    observer.observe(element);

    return () => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-500 ease-out
        motion-reduce:transition-none motion-reduce:transform-none
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        ${className}
      `.trim()}
    >
      {children}
    </div>
  );
}
