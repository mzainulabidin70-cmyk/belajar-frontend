import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Beranda from './pages/Berandaa';
import Tentang from './components/Tentang';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Beranda />,
    children: [
      {
        path: 'tentang',
        element: <Tentang />,
      },
    ],
  },
  {
    path: '/tentang',
    element: <Tentang />,
    children: [
      {
        path: '/',
        element: <Beranda />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
