import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Minimize2, Maximize2, Square, GripVertical } from 'lucide-react';
import { useDesktop, Window } from '../contexts/DesktopContext';
import Experience from './sections/Experience';
import MLProjects from './sections/MLProjects';
import FullStackAI from './sections/FullStackAI';
import FullStack from './sections/FullStack';
import Speaking from './sections/Speaking';
import Education from './sections/Education';
import { FolderType } from '../types';

interface DesktopWindowProps {
  window: Window;
}

const DesktopWindow: React.FC<DesktopWindowProps> = ({ window }) => {
  const {
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    restoreWindow,
    updateWindowPosition,
    updateWindowSize,
    focusWindow,
  } = useDesktop();

  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isResizing, setIsResizing] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && !window.maximized) {
        const newX = e.clientX - dragOffset.x;
        const newY = e.clientY - dragOffset.y;
        
        // Keep window within viewport
        const maxX = globalThis.window.innerWidth - window.width;
        const maxY = globalThis.window.innerHeight - window.height;
        
        updateWindowPosition(
          window.id,
          Math.max(0, Math.min(newX, maxX)),
          Math.max(0, Math.min(newY, maxY))
        );
      }
      
      if (isResizing && !window.maximized) {
        const rect = windowRef.current?.getBoundingClientRect();
        if (rect) {
          const newWidth = Math.max(400, e.clientX - rect.left);
          const newHeight = Math.max(300, e.clientY - rect.top);
          updateWindowSize(window.id, newWidth, newHeight);
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      globalThis.window.addEventListener('mousemove', handleMouseMove);
      globalThis.window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      globalThis.window.removeEventListener('mousemove', handleMouseMove);
      globalThis.window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, dragOffset, window, updateWindowPosition, updateWindowSize]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (window.maximized) return;
    
    focusWindow(window.id);
    setIsDragging(true);
    const rect = windowRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleResizeMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResizing(true);
  };

  const handleDoubleClick = () => {
    if (window.maximized) {
      restoreWindow(window.id);
    } else {
      maximizeWindow(window.id);
    }
  };

  const renderContent = () => {
    switch (window.type) {
      case 'experience':
        return <Experience />;
      case 'ml-projects':
        return <MLProjects />;
      case 'full-stack-ai':
        return <FullStackAI />;
      case 'full-stack':
        return <FullStack />;
      case 'speaking':
        return <Speaking />;
      case 'education':
        return <Education />;
      default:
        return null;
    }
  };

  const getTitle = (type: FolderType): string => {
    const titles: Record<FolderType, string> = {
      'experience': 'Experience',
      'ml-projects': 'ML Projects',
      'full-stack-ai': 'Full Stack AI',
      'full-stack': 'Full Stack',
      'speaking': 'Speaking',
      'education': 'Education',
    };
    return titles[type];
  };

  if (window.minimized) {
    return null;
  }

  const windowStyle: React.CSSProperties = {
    position: 'fixed',
    left: window.maximized ? 0 : `${window.x}px`,
    top: window.maximized ? 0 : `${window.y}px`,
    width: window.maximized ? '100vw' : `${window.width}px`,
    height: window.maximized ? '100vh' : `${window.height}px`,
    zIndex: window.zIndex,
    borderRadius: window.maximized ? 0 : '16px',
  };

  return (
    <motion.div
      ref={windowRef}
      className="desktop-window"
      style={windowStyle}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      onClick={() => focusWindow(window.id)}
    >
      <div
        className="window-header"
        onMouseDown={handleMouseDown}
        onDoubleClick={handleDoubleClick}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div className="window-header-left">
          <GripVertical className="grip-icon" size={16} />
          <span className="window-title">{getTitle(window.type)}</span>
        </div>
        <div className="window-controls">
          <motion.button
            className="control minimize"
            onClick={(e) => {
              e.stopPropagation();
              minimizeWindow(window.id);
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="Minimize"
          >
            <Minimize2 size={12} />
          </motion.button>
          <motion.button
            className="control maximize"
            onClick={(e) => {
              e.stopPropagation();
              if (window.maximized) {
                restoreWindow(window.id);
              } else {
                maximizeWindow(window.id);
              }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={window.maximized ? 'Restore' : 'Maximize'}
          >
            {window.maximized ? <Square size={12} /> : <Maximize2 size={12} />}
          </motion.button>
          <motion.button
            className="control close"
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(window.id);
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="Close"
          >
            <X size={12} />
          </motion.button>
        </div>
      </div>
      <div className="window-body">
        {renderContent()}
      </div>
      {!window.maximized && (
        <div
          className="window-resize-handle"
          onMouseDown={handleResizeMouseDown}
        />
      )}
    </motion.div>
  );
};

export default DesktopWindow;
