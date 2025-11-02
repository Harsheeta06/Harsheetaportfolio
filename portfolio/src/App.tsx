import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import { DesktopProvider } from './contexts/DesktopContext';

function App() {
  const wallpaperUrl = `${process.env.PUBLIC_URL || ''}/wallpaper.jpeg`;

  return (
    <DesktopProvider>
      <div className="app desktop-app">
        <Header />
        <div 
          className="main-content desktop-main"
          style={{
            backgroundImage: `url(${wallpaperUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        >
          <Sidebar />
          <ContentArea />
        </div>
      </div>
    </DesktopProvider>
  );
}

export default App;