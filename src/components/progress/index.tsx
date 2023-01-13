import React from 'react';

type ProgressProps = {
	value: number;
};

export default function Progress({ value = 0 }: ProgressProps) {
	return (
		<div className="w-full flex flex-row-reverse items-center gap-3">
			{value < 100 ? (
				<label className="text-[12px] leading-4 text-[#757575]">
					{value}%
				</label>
			) : (
				<img src="/icons/checklist.svg" alt="icon checklist" />
			)}

			<progress
				value={value.toString()}
				max="100"
				className="w-full h-4"
				data-nocomplete={value < 100 ? '1' : '0'}
			>
				{value}%
			</progress>
		</div>
	);
}
