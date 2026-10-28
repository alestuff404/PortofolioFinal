"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string; // controls size, aspect ratio, and rounding
  position?: string; // object-position, e.g. "top" for screenshots
  label?: string; // placeholder text
};

/**
 * Shows the image at `src`. If the file does not exist yet,
 * a placeholder box tells you where to put it.
 */
export default function ImageSlot({ src, alt, className = "", position = "center", label = "Add photo" }: Props) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // Catch images that failed before React hydrated
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, [src]);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 overflow-hidden border border-dashed border-current/30 bg-current/5 p-4 text-center ${className}`}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="9" cy="10" r="1.5" />
          <path d="M21 16l-5-5-8 8" />
        </svg>
        <span className="tick opacity-60">{label}</span>
        <code className="max-w-full break-all font-mono text-[10px] opacity-50">public{src}</code>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}
