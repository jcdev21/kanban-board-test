export type FormContextType = {
	dataForm: { [key: string]: unknown };
	setDataForm: (name: string, value: string) => void;
};

export type CustomFormPropsType = {
	children: React.ReactNode;
	onSubmit: (values: { [key: string]: string }) => void;
};

type CommonFieldType = {
	name: string;
	label?: string;
	placeholder?: string;
	className?: string;
};

export type TextFieldPropsType = CommonFieldType & {
	type?: 'text' | 'number' | 'email' | 'password';
};

export type DescriptionPropsType = CommonFieldType;
