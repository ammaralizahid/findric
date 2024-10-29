'use client'
import { useEffect } from 'react';

function updateMeta(title: string, description: string) {
  document.title = title;

  const metaDescription = document.querySelector('meta[name="description"]');

  if (metaDescription) {
    metaDescription.setAttribute("content", description);
  } else {
    // Optionally, you can log an error or add the meta tag if it doesn't exist
    console.error('Meta description tag not found.');
  }
}

function useSectionMeta() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 500) {
        updateMeta("Features | FindNow", "Description for Home Section");
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

export default useSectionMeta;
