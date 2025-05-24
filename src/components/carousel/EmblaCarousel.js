"use client";

import React, { useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function EmblaCarousel({ images }) {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  useEffect(() => {
    if (emblaApi) {
      autoplay.current?.play();
    }
  }, [emblaApi]);

  return (
    <div className="overflow-hidden w-full h-[800px]" ref={emblaRef}>
      <div className="flex">
        {images.map(function (src, idx) {
          return (
            <div
              key={idx}
              className="flex-shrink-0 w-full h-[800px] relative"
            >
              {/* 🖼 Background image */}
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />

              {/* 🌑 Overlay */}
              <div className="absolute inset-0  bg-opacity-100 z-10" />

              {/* 📝 Sample text or logo */}
              <div className="absolute z-20 bottom-6 left-6 text-white text-2xl font-semibold">
                College {idx + 1}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
