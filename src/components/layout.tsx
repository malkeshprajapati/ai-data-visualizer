import React, { ReactNode } from 'react';
import '../styles/main.scss';

interface LayoutProps {
  children: ReactNode; 
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout-header">
        <h1>Dashboard</h1>
      </header>
      <main className="layout-main">
        <div className="chart-container">
          {children} 
        </div>
      </main>
    </div>
  );
};

export default Layout;
