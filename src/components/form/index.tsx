import React from 'react';
import type {
	FormContextType,
	CustomFormPropsType,
} from '../../types/form.type';

const FormContext = React.createContext<FormContextType | {}>({});
export const useFormContext = () =>
	React.useContext(FormContext) as FormContextType;

export default function CustomForm(props: CustomFormPropsType) {
	const [data, setData] = React.useState<{ [key: string]: string }>({});

	const handleUpdateData = (name: string, value: string) => {
		setData({ ...data, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		props.onSubmit(data);
	};

	return (
		<FormContext.Provider
			value={{ dataForm: data, setDataForm: handleUpdateData }}
		>
			<form onSubmit={handleSubmit}>{props.children}</form>
		</FormContext.Provider>
	);
}
