// src/layouts/main/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import ThemeToggle from '../../components/common/ThemeToggle/ThemeToggle';
import './MainLayout.css';

function MainLayout() {
  return (
      <div className="layout">
        <header className="layout-header">
          <div className="header-content">
            <h1 className="header-logo">
              Interview <span className="gradient-text">Flow</span>
            </h1>
            <ThemeToggle />
          </div>
        </header>
        <main className="layout-main">
          <Outlet />
        </main>
      </div>
  );
}

export default MainLayout;