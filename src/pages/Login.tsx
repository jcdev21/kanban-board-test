import FormLogin from '../modules/auth/FormLogin';
import { login } from '../services/auth.service';

export default function Login() {
	const handleLogin = async (values: { [key: string]: string }) => {
		const payload = {
			email: values.email,
			password: values.password,
		};

		const result = await login(payload);
		console.log(result);
	};

	return (
		<div className="container h-screen flex flex-col justify-center items-center">
			<div className="w-96 px-4 py-8 rounded-md">
				<h2 className="text-2xl font-bold mb-4">Sign In</h2>
				<FormLogin onSubmit={handleLogin} />
			</div>
		</div>
	);
}
