'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LoginModalContextType {
  isOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
}

const LoginModalContext = createContext<LoginModalContextType | undefined>(undefined);

export function LoginModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user is logged in and if they've seen the modal
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const hasSeenModal = sessionStorage.getItem('hasSeenLoginModal');
    
    if (!isLoggedIn && !hasSeenModal) {
      const handleScroll = () => {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        
        // Show modal when user scrolls 30% of the page
        if (scrollPercentage >= 30) {
          setIsOpen(true);
          window.removeEventListener('scroll', handleScroll);
        }
      };

      // Also show after 5 seconds if they haven't scrolled
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000); // 5 seconds

      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timer);
      };
    }
  }, []);

  const closeLogin = () => {
    setIsOpen(false);
    // Mark as seen for this session
    sessionStorage.setItem('hasSeenLoginModal', 'true');
  };

  const openLogin = () => {
    setIsOpen(true);
  };

  return (
    <LoginModalContext.Provider
      value={{
        isOpen,
        openLogin,
        closeLogin,
      }}
    >
      {children}
    </LoginModalContext.Provider>
  );
}

export function useLoginModal() {
  const context = useContext(LoginModalContext);
  if (!context) {
    throw new Error('useLoginModal must be used within LoginModalProvider');
  }
  return context;
}
