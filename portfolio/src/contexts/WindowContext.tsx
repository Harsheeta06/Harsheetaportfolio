import React, { createContext, useContext, useState, ReactNode } from 'react';

export type WindowState = 'normal' | 'minimized' | 'maximized' | 'closed';

interface WindowContextType {
  windowState: WindowState;
  setWindowState: (state: WindowState) => void;
  minimizeWindow: () => void;
  maximizeWindow: () => void;
  restoreWindow: () => void;
  closeWindow: () => void;
}

const WindowContext = createContext<WindowContextType | undefined>(undefined);

export const useWindow = () => {
  const context = useContext(WindowContext);
  if (!context) {
    throw new Error('useWindow must be used within a WindowProvider');
  }
  return context;
};

interface WindowProviderProps {
  children: ReactNode;
}

export const WindowProvider: React.FC<WindowProviderProps> = ({ children }) => {
  const [windowState, setWindowState] = useState<WindowState>('normal');

  const minimizeWindow = () => {
    console.log('Setting window state to minimized');
    setWindowState('minimized');
  };

  const maximizeWindow = () => {
    console.log('Setting window state to maximized');
    setWindowState('maximized');
  };

  const restoreWindow = () => {
    console.log('Setting window state to normal');
    setWindowState('normal');
  };

  const closeWindow = () => {
    console.log('Close window requested');
    if (window.confirm('Are you sure you want to close this window?')) {
      console.log('Window closed confirmed');
      setWindowState('closed');
    }
  };

  const value: WindowContextType = {
    windowState,
    setWindowState,
    minimizeWindow,
    maximizeWindow,
    restoreWindow,
    closeWindow,
  };

  return (
    <WindowContext.Provider value={value}>
      {children}
    </WindowContext.Provider>
  );
};
