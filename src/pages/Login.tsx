import FormLogin from '../modules/auth/FormLogin';

export default function Login() {
	const handleLogin = (values: { [key: string]: string }) => {
		console.log(values);
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
