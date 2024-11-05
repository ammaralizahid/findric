// 'use client' directive is needed for hooks in Next.js
'use client';
import { useEffect } from 'react';

function updateMeta(title: string, description: string) {
  document.title = title;

  const metaDescription = document.querySelector('meta[name="description"]');

  if (metaDescription) {
    metaDescription.setAttribute("content", description);
  } else {
    console.error('Meta description tag not found.');
  }
}

// Correctly export the hook
export default function useSectionMeta() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 500) {
        updateMeta("Features | FindNowwww", "Description for Home Section");
      } else if (scrollY < 1500) {
        updateMeta("About | YourSite", "Description for About Section");
      } else {
        updateMeta("Services | YourSite", "Description for Services Section");
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
