import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';

function UserLayout() {
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

export default UserLayout;
