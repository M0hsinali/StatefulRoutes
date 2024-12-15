import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layouts from './Layouts/Layouts';
import Counter from './components/Counter/counter';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { AuthProvider } from './Auth/AuthContext';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layouts />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: 'counter',
          element: <Counter />,
        },
        {
          path: 'login',
          element: <Login />,
        },
      ],
    },
  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
