"use client";

import Image from "next/image";
import { useState } from "react";

export default function SmartImage({
  src,
  alt,
}: {
  src?: string;
  alt: string;
}) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-accent/10 to-indigo-500/10">
        <svg
          className="w-10 h-10 text-accent/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
      className="object-cover"
      onError={() => setError(true)}
    />
  );
}