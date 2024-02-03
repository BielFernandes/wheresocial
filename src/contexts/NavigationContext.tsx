import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NavigationState {
  screen: string;
}

interface NavigationContextType {
  navigationState: NavigationState;
  setNavigation: (newState: NavigationState) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

interface NavigationProviderProps {
  children: ReactNode;
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [navigationState, setNavigationState] = useState<NavigationState>({ screen: 'Home' });

  const setNavigation = (newState: NavigationState) => {
    setNavigationState(newState);
  };

  return (
    <NavigationContext.Provider value={{ navigationState, setNavigation }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigationContext() {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error('useNavigationContext must be used within a NavigationProvider');
  }

  return context;
}
