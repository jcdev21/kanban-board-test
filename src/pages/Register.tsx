import FormRegister from '../modules/auth/FormRegister';
import { createUser } from '../services/auth.service';

export default function Register() {
	const handleRegister = async (values: { [key: string]: string }) => {
		const payload = {
			name: values.name,
			email: values.email,
			password: values.password,
			password_confirmation: values.password,
		};

		const result = await createUser(payload);
		console.log(result);
	};

	return (
		<div className="container h-screen flex flex-col justify-center items-center">
			<div className="w-96 px-4 py-8 rounded-md">
				<h2 className="text-2xl font-bold mb-4">Sign Up</h2>
				<FormRegister onSubmit={handleRegister} />
			</div>
		</div>
	);
}
