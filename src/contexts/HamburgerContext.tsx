// HamburgerContext.tsx
import React, { createContext, useContext, ReactNode, useState } from 'react';

interface HamburgerContextProps {
  hamburginho: boolean;
  setHamburginho: (value: boolean) => void;
}

const HamburgerContext = createContext<HamburgerContextProps | undefined>(undefined);

export const HamburgerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [hamburginho, setHamburginho] = useState<boolean>(false);

  return (
    <HamburgerContext.Provider value={{ hamburginho, setHamburginho }}>
      {children}
    </HamburgerContext.Provider>
  );
};

export const useHamburger = () => {
  const context = useContext(HamburgerContext);
  if (!context) {
    throw new Error('useHamburger must be used within a HamburgerProvider');
  }
  return context;
};
