import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { FolderType } from '../types';

export interface Window {
  id: string;
  type: FolderType;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  minimized: boolean;
  maximized: boolean;
}

interface DesktopContextType {
  windows: Window[];
  openWindow: (type: FolderType) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  restoreWindow: (id: string) => void;
  updateWindowPosition: (id: string, x: number, y: number) => void;
  updateWindowSize: (id: string, width: number, height: number) => void;
  focusWindow: (id: string) => void;
  getNextZIndex: () => number;
}

const DesktopContext = createContext<DesktopContextType | undefined>(undefined);

let globalZIndex = 1000;

export const useDesktop = () => {
  const context = useContext(DesktopContext);
  if (!context) {
    throw new Error('useDesktop must be used within a DesktopProvider');
  }
  return context;
};

interface DesktopProviderProps {
  children: ReactNode;
}

const defaultWindowSize = { width: 800, height: 600 };
const defaultPosition = { x: 100, y: 100 };

export const DesktopProvider: React.FC<DesktopProviderProps> = ({ children }) => {
  const [windows, setWindows] = useState<Window[]>([]);

  const getNextZIndex = useCallback(() => {
    globalZIndex += 1;
    return globalZIndex;
  }, []);

  const focusWindow = useCallback((id: string) => {
    const targetZIndex = getNextZIndex();
    setWindows(prev => prev.map(w => 
      w.id === id 
        ? { ...w, zIndex: targetZIndex, minimized: false }
        : w
    ));
  }, [getNextZIndex]);

  const openWindow = useCallback((type: FolderType) => {
    // Check if window of this type already exists
    const existingWindow = windows.find(w => w.type === type && !w.minimized);
    if (existingWindow) {
      focusWindow(existingWindow.id);
      return;
    }

    const newWindow: Window = {
      id: `${type}-${Date.now()}`,
      type,
      x: defaultPosition.x + (windows.length * 50),
      y: defaultPosition.y + (windows.length * 50),
      width: defaultWindowSize.width,
      height: defaultWindowSize.height,
      zIndex: getNextZIndex(),
      minimized: false,
      maximized: false,
    };

    setWindows(prev => [...prev, newWindow]);
  }, [windows, getNextZIndex, focusWindow]);

  const closeWindow = useCallback((id: string) => {
    setWindows(prev => prev.filter(w => w.id !== id));
  }, []);

  const minimizeWindow = useCallback((id: string) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, minimized: true } : w
    ));
  }, []);

  const maximizeWindow = useCallback((id: string) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, maximized: true, minimized: false } : w
    ));
  }, []);

  const restoreWindow = useCallback((id: string) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, maximized: false, minimized: false } : w
    ));
  }, []);

  const updateWindowPosition = useCallback((id: string, x: number, y: number) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, x, y } : w
    ));
  }, []);

  const updateWindowSize = useCallback((id: string, width: number, height: number) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, width, height } : w
    ));
  }, []);

  const value: DesktopContextType = {
    windows,
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    restoreWindow,
    updateWindowPosition,
    updateWindowSize,
    focusWindow,
    getNextZIndex,
  };

  return (
    <DesktopContext.Provider value={value}>
      {children}
    </DesktopContext.Provider>
  );
};
