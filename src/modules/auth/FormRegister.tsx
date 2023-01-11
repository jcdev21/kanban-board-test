import { Link } from 'react-router-dom';
import { Button, CustomForm, TextField } from '../../components';

type FormRegisterType = {
	onSubmit: (values: { [key: string]: string }) => void;
};

export default function FormRegister({ onSubmit }: FormRegisterType) {
	return (
		<CustomForm onSubmit={onSubmit}>
			<TextField name="name" label="Name" placeholder="Name" />
			<TextField
				type="email"
				name="email"
				label="Email"
				placeholder="Email"
			/>
			<TextField
				name="password"
				type="password"
				label="Password"
				placeholder="Password"
			/>
			<div className="flex flex-col items-end gap-2 mt-4">
				<Button type="submit" label="Register" />
				<p className="text-sm">
					already have an account?{' '}
					<Link to="/login" className="text-indigo-400">
						Login
					</Link>
				</p>
			</div>
		</CustomForm>
	);
}
