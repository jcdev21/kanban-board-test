import clsx from 'clsx';
import React from 'react';
import { useFormContext } from '.';
import type { TextFieldPropsType } from '../../types/form.type';

export default function TextField({
	name,
	type = 'text',
	label,
	labelBold = false,
	placeholder,
	className = 'w-full',
	defaultValue = '',
}: TextFieldPropsType) {
	const { dataForm, setDataForm } = useFormContext();
	const classNames = clsx(
		'min-h-[40px] px-4 py-2 bg-white border-2 rounded-lg text-sm text-[#404040] border-[#E0E0E0] active:border-transparent active:ring-2 active:ring-[#01959F] focus:outline-none focus:border-transparent focus:ring-[3px] focus:ring focus:ring-[#01959f] focus:ring-opacity-20',
		className
	);

	React.useEffect(() => {
		if (defaultValue) {
			setDataForm(name, defaultValue);
		}
	}, [name, defaultValue]);

	return (
		<div className="flex flex-col gap-2 mb-2">
			{label ? (
				<label
					htmlFor=""
					className={clsx(
						'inline-block text-[12px] leading-5',
						labelBold && 'font-bold'
					)}
				>
					{label}
				</label>
			) : null}
			<input
				type={type}
				onChange={(e) => setDataForm(name, e.target.value)}
				placeholder={placeholder}
				className={classNames}
				defaultValue={dataForm[name]}
			/>
		</div>
	);
}
