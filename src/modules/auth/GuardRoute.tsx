import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function GuardRoute() {
	const { accessToken } = useAuth();

	return accessToken ? <Outlet /> : <Navigate to="/login" />;
}
