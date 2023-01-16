export type FormContextType = {
	dataForm: { [key: string]: string };
	setDataForm: (name: string, value: string) => void;
};

export type CustomFormPropsType = {
	children: React.ReactNode;
	onSubmit: (values: { [key: string]: string }) => void;
};

type CommonFieldType = {
	name: string;
	label?: string;
	labelBold?: boolean;
	placeholder?: string;
	className?: string;
	defaultValue?: string;
};

export type TextFieldPropsType = CommonFieldType & {
	type?: 'text' | 'number' | 'email' | 'password';
};

export type DescriptionPropsType = CommonFieldType;
