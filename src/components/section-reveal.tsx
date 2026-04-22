"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type SectionRevealProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function SectionReveal({
  id,
  children,
  className = "",
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className={`${className} section-reveal ${isVisible ? "section-reveal-visible" : ""}`}
    >
      {children}
    </div>
  );
}
