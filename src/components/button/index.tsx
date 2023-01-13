import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
	type?: 'button' | 'submit';
	label: string;
	size?: 'default' | 'small' | 'large';
	variant?: 'primary' | 'secondary' | 'danger';
	isDisabled?: boolean;
	onClick?: () => void;
};

const buttonStyles = 'px-4 py-1 font-bold leading-6 rounded-lg shadow-sm';

export default function Button({
	type = 'button',
	label,
	size = 'default',
	variant = 'primary',
	isDisabled = false,
	onClick = () => {},
}: ButtonProps) {
	const className = clsx(
		buttonStyles,
		{
			['text-[12px]']: size === 'small',
			['text-sm']: size === 'default',
			['text-lg']: size === 'large',
		},
		{
			['bg-[#01959f] text-white']: variant === 'primary',
			['bg-white text-[#1D1F20] border border-solid border-[#E0E0E0]']:
				variant === 'secondary',
			['bg-[#E11428] text-white']: variant === 'danger',
		}
	);

	return (
		<button
			type={type}
			className={className}
			disabled={isDisabled}
			onClick={() => onClick()}
		>
			{label}
		</button>
	);
}
