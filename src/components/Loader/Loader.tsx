"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function ProductLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const productCards = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    // Entry animation
    tl.from(loaderRef.current, {
      duration: 0.4,
      opacity: 0,
      y: 20,
      ease: 'power2.out'
    });

    // Product cards stagger animation
    tl.from(productCards.current, {
      duration: 0.6,
      opacity: 0,
      y: 20,
      stagger: 0.1,
      ease: 'power2.out'
    }, 0.2);

    // Floating animation for product cards
    productCards.current.forEach((card, i) => {
      gsap.to(card, {
        duration: 1.2,
        y: i % 2 === 0 ? '-=10' : '+=10',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.1
      });
    });

    // Exit animation after 1.4 seconds
    tl.to(loaderRef.current, {
      duration: 0.5,
      opacity: 0,
      scale: 0.95,
      ease: 'power2.in',
      delay: 0.5 // Total delay (0.3 + 0.5 + 0.5 = 1.3s)
    });

    // Auto-remove from DOM
    tl.eventCallback('onComplete', () => {
      if (loaderRef.current) {
        loaderRef.current.style.display = 'none';
      }
    });

  }, []);

  return (
    <div ref={loaderRef} className="fixed inset-0 z-[9999] bg-white/95 backdrop-blur-sm flex items-center justify-center">
      {/* Product Grid Skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6 max-w-6xl w-full">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            ref={el => productCards.current[i] = el}
            className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-12 w-12 text-gray-300">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm">
              <div className="h-4 bg-gray-200 rounded-full w-3/4 mb-2 animate-pulse" />
              <div className="h-3 bg-gray-200 rounded-full w-1/2 animate-pulse" />
            </div>
          </div>
        ))}
      </div>

      {/* Animated Progress */}
      <div className="absolute bottom-8 flex items-center space-x-4">
        <div className="relative w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1/2 bg-[#20bead] rounded-full animate-progress" />
        </div>
        <div className="text-sm text-gray-600">Loading products...</div>
      </div>
    </div>
  );
}

export default ProductLoader;