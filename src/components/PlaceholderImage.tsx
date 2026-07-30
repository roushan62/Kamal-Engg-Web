"use client";

import { useState } from "react";

interface PlaceholderImageProps {
  label: string;
  src?: string;
  aspectRatio?: "video" | "square" | "wide";
  className?: string;
}

export default function PlaceholderImage({
  label,
  src,
  aspectRatio = "video",
  className = "",
}: PlaceholderImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const ratioClass = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]",
  }[aspectRatio];

  // If we have a src and no image load error, render the actual image.
  if (src && !hasError) {
    return (
      <div className={`relative overflow-hidden ${ratioClass} ${className} bg-steel-900 flex items-center justify-center`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={label}
          onError={() => setHasError(true)}
          onLoad={() => setIsLoading(false)}
          className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
            isLoading ? "scale-105 blur-md grayscale" : "scale-100 blur-0 grayscale-0"
          }`}
        />
        {isLoading && (
          <div className="absolute inset-0 bg-steel-900/50 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-safety border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>
    );
  }

  // Fallback placeholder with technical dashed border
  return (
    <div
      className={`placeholder-image ${ratioClass} ${className} flex flex-col items-center justify-center p-4 border border-dashed border-steel-300 bg-steel-50/50 text-steel-500 rounded-lg text-center`}
    >
      <svg
        className="w-10 h-10 mb-3 text-steel-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span className="text-xs font-semibold uppercase tracking-wider max-w-[200px] text-steel-600">
        {label}
      </span>
      {hasError && src && (
        <span className="text-[10px] text-red-400 mt-1">Image load failed, showing placeholder</span>
      )}
    </div>
  );
}
