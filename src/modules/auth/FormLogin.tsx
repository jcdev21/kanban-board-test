import { Link } from 'react-router-dom';
import { Button, CustomForm, TextField } from '../../components';

type FormLoginType = {
	onSubmit: (values: { [key: string]: string }) => void;
};

export default function FormLogin({ onSubmit }: FormLoginType) {
	return (
		<CustomForm onSubmit={onSubmit}>
			<TextField
				name="email"
				type="email"
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
				<Button type="submit" label="Log In" />
				<p className="text-sm">
					Don't have account?{' '}
					<Link to="/register" className="text-indigo-400">
						Register
					</Link>
				</p>
			</div>
		</CustomForm>
	);
}
