import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useDesktop } from '../contexts/DesktopContext';
import DesktopWindow from './DesktopWindow';

const ContentArea: React.FC = () => {
  const { windows } = useDesktop();

  return (
    <main className="content-area desktop-content">
      <div className="desktop-background">
        <div className="desktop-windows-container">
          <AnimatePresence>
            {windows.map((window) => (
              <DesktopWindow key={window.id} window={window} />
            ))}
          </AnimatePresence>
        </div>
        {windows.length === 0 && (
          <div className="desktop-empty-state">
            <div className="empty-state-icon">🖥️</div>
            <h2>Welcome to Harsheeta's Desktop</h2>
            <p>Double-click any icon in the sidebar to open a window</p>
            <p className="hint">(You can open multiple windows and move them around!)</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default ContentArea;
