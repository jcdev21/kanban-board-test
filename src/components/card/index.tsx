import clsx from 'clsx';
import React from 'react';

type CardProps = {
	children: React.ReactNode;
	className?: string;
};

export default function Card({ children, className = 'mb-3 py-4' }: CardProps) {
	return (
		<div
			className={clsx(
				'bg-[#FAFAFA] border border-[#E0E0E)] rounded px-4',
				className
			)}
		>
			{children}
		</div>
	);
}
