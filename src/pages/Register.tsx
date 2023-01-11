import FormRegister from '../modules/auth/FormRegister';

export default function Register() {
	const handleRegister = (values: { [key: string]: string }) => {
		console.log(values);
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
