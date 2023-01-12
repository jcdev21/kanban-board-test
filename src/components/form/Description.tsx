import clsx from 'clsx';
import { useFormContext } from '.';
import type { DescriptionPropsType } from '../../types/form.type';

export default function Description({
	name,
	label,
	labelBold = false,
	placeholder,
	className = 'w-full',
}: DescriptionPropsType) {
	const { setDataForm } = useFormContext();
	const classNames = clsx(
		'min-h-[40px] px-4 py-2 bg-white border-2 rounded-lg text-sm text-[#404040] border-[#E0E0E0] active:border-transparent active:ring-2 active:ring-[#01959F] focus:outline-none focus:border-transparent focus:ring-[3px] focus:ring focus:ring-[#01959f] focus:ring-opacity-20',
		className
	);

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
			<textarea
				name={name}
				onChange={(e) => setDataForm(name, e.target.value)}
				placeholder={placeholder}
				className={classNames}
				rows={5}
			></textarea>
		</div>
	);
}
