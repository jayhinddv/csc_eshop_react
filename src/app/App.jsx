import React, { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout.jsx';

// Lazy-loaded components
const Home = lazy(() => import('./pages/home.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));
const UserLayout = lazy(() => import('./layouts/userLayout.jsx'));

// Define the routes array using createBrowserRouter
const routes = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "", element: <Home /> }, // Default home route
    ]
  },
  {
    path: "user",
    element: <UserLayout />,
    children: [
      { path: "", element: <Home /> }, // User home route
    ]
  },
  {
    path: "*",
    element: <NotFound /> // Not found route
  }
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
