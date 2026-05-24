// src/layouts/main/MainLayout.jsx
import { Outlet } from 'react-router-dom';

import './AuthLayout.css';

function AuthLayout() {
  return (
    <div className="layout">
        <main className="layout-auth">
            <Outlet />
        </main>
    </div>
  );
}

export default AuthLayout;