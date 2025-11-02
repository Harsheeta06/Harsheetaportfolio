import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Bot, Rocket, Zap } from 'lucide-react';
import { Folder } from '../types';
import { useDesktop } from '../contexts/DesktopContext';

const folders: Folder[] = [
  { id: 'experience', title: 'Experience', icon: '💼', color: '#E8DCF0', lucideIcon: Briefcase },
  { id: 'ml-projects', title: 'ML Projects', icon: '🤖', color: '#EBE0F5', lucideIcon: Bot },
  { id: 'full-stack-ai', title: 'Full Stack AI', icon: '🚀', color: '#E0D0EA', lucideIcon: Rocket },
  { id: 'full-stack', title: 'Full Stack', icon: '⚡', color: '#E8DCF0', lucideIcon: Zap },
  { id: 'speaking', title: 'Speaking', icon: '🎤', color: '#EBE0F5' },
  { id: 'education', title: 'Education', icon: '🎓', color: '#E0D0EA' },
];

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const { openWindow, windows } = useDesktop();
  const [clickTimers, setClickTimers] = useState<{ [key: string]: NodeJS.Timeout | null }>({});

  const handleIconClick = (folderId: string) => {
    const timer = clickTimers[folderId];
    
    if (timer) {
      // Double click detected
      clearTimeout(timer);
      setClickTimers(prev => ({ ...prev, [folderId]: null }));
      openWindow(folderId as any);
    } else {
      // First click - set timer
      const newTimer = setTimeout(() => {
        setClickTimers(prev => ({ ...prev, [folderId]: null }));
      }, 300);
      setClickTimers(prev => ({ ...prev, [folderId]: newTimer }));
    }
  };

  const isWindowOpen = (folderId: string) => {
    return windows.some(w => w.type === folderId && !w.minimized);
  };

  return (
    <aside className="sidebar desktop-sidebar">
      <div className="folders desktop-folders">
        {folders.map((folder) => {
          const hasOpenWindow = isWindowOpen(folder.id);
          return (
            <motion.div
              key={folder.id}
              className={`desktop-icon ${hasOpenWindow ? 'has-window' : ''}`}
              onClick={() => handleIconClick(folder.id)}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{ '--folder-color': folder.color } as React.CSSProperties}
              title={`Double-click to open ${folder.title}`}
            >
              <div className="desktop-icon-bg">
                {folder.id === 'experience' ? (
                  <img 
                    src={`${process.env.PUBLIC_URL || ''}/quad.png`}
                    alt="Experience"
                    className="folder-icon-img"
                  />
                ) : folder.id === 'ml-projects' ? (
                  <img 
                    src={`${process.env.PUBLIC_URL || ''}/ml.png`}
                    alt="ML Projects"
                    className="folder-icon-img"
                  />
                ) : folder.id === 'full-stack-ai' ? (
                  <img 
                    src={`${process.env.PUBLIC_URL || ''}/openai.png`}
                    alt="Full Stack AI"
                    className="folder-icon-img"
                  />
                ) : folder.id === 'speaking' ? (
                  <img 
                    src={`${process.env.PUBLIC_URL || ''}/speaking.png`}
                    alt="Speaking"
                    className="folder-icon-img"
                  />
                ) : folder.id === 'education' ? (
                  <img 
                    src={`${process.env.PUBLIC_URL || ''}/educat.png`}
                    alt="Education"
                    className="folder-icon-img"
                  />
                ) : folder.id === 'full-stack' ? (
                  <img 
                    src={`${process.env.PUBLIC_URL || ''}/react.png`}
                    alt="Full Stack"
                    className="folder-icon-img"
                  />
                ) : folder.lucideIcon ? (
                  <folder.lucideIcon size={32} className="folder-lucide-icon" />
                ) : (
                  <span className="folder-emoji">{folder.icon}</span>
                )}
              </div>
              <span className="folder-title">{folder.title}</span>
              {hasOpenWindow && <div className="window-indicator" />}
            </motion.div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
