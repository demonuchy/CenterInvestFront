import { Outlet } from 'react-router-dom';

function MainLayout() {
    return (
      <div className="layout">
         <Outlet/>
      </div>
    );
  }

export default MainLayout;