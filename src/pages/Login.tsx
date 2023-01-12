import { Navigate, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import FormLogin from '../modules/auth/FormLogin';
import { login } from '../services/auth.service';

export default function Login() {
	const navigate = useNavigate();
	const { accessToken, dispatch } = useAuth();

	const handleLogin = async (values: { [key: string]: string }) => {
		const payload = {
			email: values.email,
			password: values.password,
		};

		const result = await login(payload);

		if (result.error) {
			alert(result.message);
			return;
		}

		localStorage.setItem('access-token', JSON.stringify(result.auth_token));
		dispatch({
			type: 'LOGIN',
			payload: {
				accessToken: result.auth_token,
			},
		});

		navigate('/');
	};

	if (accessToken) return <Navigate to="/" />;

	return (
		<div className="container h-screen flex flex-col justify-center items-center">
			<div className="w-96 px-4 py-8 rounded-md">
				<h2 className="text-2xl font-bold mb-4">Sign In</h2>
				<FormLogin onSubmit={handleLogin} />
			</div>
		</div>
	);
}
