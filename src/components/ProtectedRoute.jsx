import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
    const isLogin = localStorage.getItem('status_login');

    if (isLogin !== 'true') {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}