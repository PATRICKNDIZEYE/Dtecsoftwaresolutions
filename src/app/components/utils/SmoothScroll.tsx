'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (!link) return;
      
      const href = link.getAttribute('href');
      
      // Only handle internal anchor links
      if (href?.startsWith('#')) {
        e.preventDefault();
        
        const targetId = href.slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Calculate the offset based on the header height
          const headerHeight = document.querySelector('header')?.offsetHeight || 0;
          const offset = 20; // Additional offset
          const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          
          window.scrollTo({
            top: elementPosition - headerHeight - offset,
            behavior: 'smooth',
          });
          
          // Update the URL without page reload
          window.history.pushState({}, '', href);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [pathname]);

  return <>{children}</>;
}
