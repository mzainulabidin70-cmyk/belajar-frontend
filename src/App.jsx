import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Beranda from './pages/Berandaa';
import Tentang from './components/Tentang';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Beranda />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: 'tentang',
            element: <Tentang />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
