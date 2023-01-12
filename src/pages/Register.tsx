import { Navigate, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import FormRegister from '../modules/auth/FormRegister';
import { createUser } from '../services/auth.service';

export default function Register() {
	const navigate = useNavigate();
	const { accessToken, dispatch } = useAuth();

	const handleRegister = async (values: { [key: string]: string }) => {
		const payload = {
			name: values.name,
			email: values.email,
			password: values.password,
			password_confirmation: values.password,
		};

		const result = await createUser(payload);
		console.log(result);

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
				<h2 className="text-2xl font-bold mb-4">Sign Up</h2>
				<FormRegister onSubmit={handleRegister} />
			</div>
		</div>
	);
}
