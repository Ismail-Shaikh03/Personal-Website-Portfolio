import { useEffect, useState } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'portfolio', 'in-progress', 'resume', 'contact'];
    const navbarHeight = 70;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + navbarHeight + 50; // Add offset for better detection
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        
        if (element) {
          const elementTop = element.offsetTop;
          const elementHeight = element.offsetHeight;
          const elementBottom = elementTop + elementHeight;
          
          // Check if scroll position is within this section
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    // Set initial active section
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
}
