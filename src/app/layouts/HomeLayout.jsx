import React from 'react';
import { Outlet } from 'react-router-dom';
import  Header  from '../components/header.jsx';
function HomeLayout() {
  return (
    <div>
      <Header />
      <main>
        {/* Render nested routes */}
        <Outlet />
      </main>
    </div>
  );
}

export default HomeLayout;
