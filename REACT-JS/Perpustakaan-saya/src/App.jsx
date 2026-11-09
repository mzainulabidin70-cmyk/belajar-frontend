import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HalamanLogin from './pages/HalamanLogin';
import HalamanDashboard from './pages/HalamanDashboard';
import HalamanRegistrasi from './pages/HalamanRegistrasi';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HalamanLogin />,
  },
  {
    path: '/register',
    element: <HalamanRegistrasi />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/dashboard',
        element: <HalamanDashboard />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
