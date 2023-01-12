import React from 'react';

type CardProps = {
	children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
	return (
		<div className="bg-[#FAFAFA] border border-[#E0E0E)] rounded px-2 py-4">
			{children}
		</div>
	);
}
