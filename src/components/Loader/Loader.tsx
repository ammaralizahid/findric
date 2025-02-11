// "use client";

// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

function ProductLoader() {
  // const loaderRef = useRef<HTMLDivElement>(null);
  // const productCards = useRef<(HTMLDivElement | null)[]>([]);

  // useEffect(() => {
  //   const tl = gsap.timeline({ delay: 0.3 });

  //   // Entry animation
  //   tl.from(loaderRef.current, {
  //     duration: 0.4,
  //     opacity: 0,
  //     y: 20,
  //     ease: 'power2.out'
  //   });

  //   // Product cards stagger animation
  //   tl.from(productCards.current, {
  //     duration: 0.6,
  //     opacity: 0,
  //     y: 20,
  //     stagger: 0.1,
  //     ease: 'power2.out'
  //   }, 0.2);

  //   // Floating animation for product cards
  //   productCards.current.forEach((card, i) => {
  //     gsap.to(card, {
  //       duration: 1.2,
  //       y: i % 2 === 0 ? '-=10' : '+=10',
  //       repeat: -1,
  //       yoyo: true,
  //       ease: 'sine.inOut',
  //       delay: i * 0.1
  //     });
  //   });

  //   // Exit animation after 1.4 seconds
  //   tl.to(loaderRef.current, {
  //     duration: 0.5,
  //     opacity: 0,
  //     scale: 0.95,
  //     ease: 'power2.in',
  //     delay: 0.5 // Total delay (0.3 + 0.5 + 0.5 = 1.3s)
  //   });

  //   // Auto-remove from DOM
  //   tl.eventCallback('onComplete', () => {
  //     if (loaderRef.current) {
  //       loaderRef.current.style.display = 'none';
  //     }
  //   });

  // }, []);

  return (
    <>
    
    
    
    
    </>
  );
}

export default ProductLoader;