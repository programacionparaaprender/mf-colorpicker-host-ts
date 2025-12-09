// src/components/templates/MainLayout/MainLayout.tsx
import React, { ReactNode } from 'react';
import './MainLayout.css';

// Definición de tipos para las props
interface MainLayoutProps {
  header: ReactNode;
  mainContent: ReactNode;
  sidebar?: ReactNode; // Opcional
  footer?: ReactNode;  // Opcional
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  header, 
  mainContent, 
  sidebar, 
  footer 
}) => {
  return (
    <div className="main-layout">
      <header className="layout-header">{header}</header>
      <div className="layout-content">
        <main className="layout-main">{mainContent}</main>
        {sidebar && <aside className="layout-sidebar">{sidebar}</aside>}
      </div>
      {footer && <footer className="layout-footer">{footer}</footer>}
    </div>
  );
};

export default MainLayout;