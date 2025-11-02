import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="avatar">
          <img 
            src={`${process.env.PUBLIC_URL || ''}/pic.jpg`} 
            alt="Harsheeta V" 
            className="avatar-img"
          />
        </div>
        <div className="header-info">
          <h1 className="name">Harsheeta V</h1>
          <p className="title">ML Engineer • Full Stack Developer</p>
        </div>
      </div>
      <div className="header-right">
        
        <a href="https://linkedin.com/in/harsheetav" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
          <Linkedin size={16} />
          LinkedIn
        </a>
      </div>
    </header>
  );
};

export default Header;
